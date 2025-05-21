
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
      smtp: {
        host: smtpConfig.server,
        port: smtpConfig.port,
        secure: true, // use SSL
        auth: {
          user: smtpConfig.username,
          pass: smtpConfig.password,
        },
      },
    };
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Prepare email data
      const emailData = prepareEmailData();
      
      // In a real implementation, you would send this data to your backend API
      console.log("Sending email with configuration:", emailData);
      
      // Simulating a successful email send
      setTimeout(() => {
        // Show success toast
        toast({
          title: language === 'zh' ? "訊息已發送" : "Message sent",
          description: language === 'zh' ? "謝謝您的訊息！我們會盡快回覆您。" : "Thank you for your message! We will get back to you as soon as possible.",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          subject: '',
          message: '',
          privacyAgreed: false
        });
        
        setIsSubmitting(false);
      }, 1500);
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: language === 'zh' ? "發送失敗" : "Failed to send",
        description: language === 'zh' ? "發送您的訊息時出錯，請稍後再試。" : "There was an error sending your message. Please try again later.",
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
