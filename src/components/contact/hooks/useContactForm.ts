
import { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { useLanguage } from '@/contexts/LanguageContext';
import { smtpConfig } from '../config/smtp';

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
  privacyAgreed: boolean;
}

export const useContactForm = () => {
  const { language, t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    privacyAgreed: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, privacyAgreed: e.target.checked });
  };
  
  const validateForm = (): boolean => {
    if (!formData.privacyAgreed) {
      toast({
        title: language === 'zh' ? "請同意隱私政策" : "Please agree to the privacy policy",
        description: language === 'zh' ? "提交表單前請先同意隱私政策" : "You must agree to the privacy policy before submitting the form",
        variant: "destructive",
      });
      return false;
    }
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: language === 'zh' ? "請填寫必填字段" : "Please fill in all required fields",
        description: language === 'zh' ? "姓名、電子郵件和訊息是必填字段" : "Name, email and message are required fields",
        variant: "destructive",
      });
      return false;
    }
    
    return true;
  };
  
  const sendEmail = async (emailData: any) => {
    try {
      // For actual implementation, you would use a service like EmailJS, Sendgrid, or a custom backend API
      // This is a placeholder for the actual email sending logic
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...emailData,
          smtpConfig
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to send email');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  };
  
  const prepareEmailData = () => {
    const emailSubject = formData.subject || 'General Inquiry';
    const messageBody = `
      Name: ${formData.name}
      Email: ${formData.email}
      ${formData.company ? `Company: ${formData.company}` : ''}
      Subject: ${emailSubject}
      
      Message:
      ${formData.message}
    `;
    
    return {
      to: "tin@10gtechnology.com",
      from: smtpConfig.username,
      subject: `Contact Form: ${emailSubject}`,
      text: messageBody,
      html: messageBody.replace(/\n/g, '<br>'),
    };
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Create mailto link
      const emailSubject = formData.subject || 'General Inquiry';
      const messageBody = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A${formData.company ? `Company: ${formData.company}%0D%0A` : ''}Subject: ${emailSubject}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
      
      const mailtoLink = `mailto:tin@10gtechnology.com?subject=Contact Form: ${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(messageBody.replace(/%0D%0A/g, '\n'))}`;
      
      // Open user's email client
      window.location.href = mailtoLink;
      
      toast({
        title: language === 'zh' ? "郵件客戶端已開啟" : "Email client opened",
        description: language === 'zh' ? "請在您的郵件客戶端中發送郵件。" : "Please send the email from your email client.",
      });
      
      // Reset form after a brief delay
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          company: '',
          subject: '',
          message: '',
          privacyAgreed: false
        });
      }, 1000);
      
      setIsSubmitting(false);
    } catch (error) {
      console.error("Error opening email client:", error);
      toast({
        title: language === 'zh' ? "無法開啟郵件客戶端" : "Cannot open email client",
        description: language === 'zh' ? "請確保您已安裝並配置了郵件客戶端。" : "Please ensure you have an email client installed and configured.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };
  
  return {
    formData,
    isSubmitting,
    handleInputChange,
    handleCheckboxChange,
    handleSubmit,
    language,
    t
  };
};
