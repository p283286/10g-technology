
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from '@/components/ui/button';

// SMTP configuration
const smtpConfig = {
  server: "mail.10gtechnology.com",
  port: 465,
  encryption: "ssl",
  username: "web_contact_form@10gtechnology.com",
  password: "qc8--676gW",
};

const ContactForm = () => {
  const { language, t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
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
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.privacyAgreed) {
      toast({
        title: language === 'zh' ? "請同意隱私政策" : "Please agree to the privacy policy",
        description: language === 'zh' ? "提交表單前請先同意隱私政策" : "You must agree to the privacy policy before submitting the form",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: language === 'zh' ? "請填寫必填字段" : "Please fill in all required fields",
        description: language === 'zh' ? "姓名、電子郵件和訊息是必填字段" : "Name, email and message are required fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Prepare email data
      const emailSubject = formData.subject || 'General Inquiry';
      const messageBody = `
        Name: ${formData.name}
        Email: ${formData.email}
        ${formData.company ? `Company: ${formData.company}` : ''}
        Subject: ${emailSubject}
        
        Message:
        ${formData.message}
      `;
      
      // Updated email data for sending
      const emailData = {
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
  
  return (
    <div className="cyber-card p-6 h-full" id="contact-form">
      <h3 className="text-2xl mb-6">{t('contact.message')}</h3>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <Label htmlFor="name" className="mb-1">{t('contact.name')}</Label>
            <Input 
              type="text" 
              id="name" 
              value={formData.name}
              onChange={handleInputChange}
              className="focus:ring-cyber-accent"
              placeholder={t('contact.your-name')} 
            />
          </div>
          <div>
            <Label htmlFor="email" className="mb-1">{t('contact.email-address')}</Label>
            <Input 
              type="email" 
              id="email" 
              value={formData.email}
              onChange={handleInputChange}
              className="focus:ring-cyber-accent"
              placeholder={t('contact.your-email')} 
            />
          </div>
        </div>
        
        <div className="mb-4">
          <Label htmlFor="company" className="mb-1">{t('contact.company')}</Label>
          <Input 
            type="text" 
            id="company" 
            value={formData.company}
            onChange={handleInputChange}
            className="focus:ring-cyber-accent"
            placeholder={t('contact.your-company')} 
          />
        </div>
        
        <div className="mb-4">
          <Label htmlFor="subject" className="mb-1">{t('contact.subject')}</Label>
          <select 
            id="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-accent"
          >
            <option value="">{t('contact.select')}</option>
            <option value="security-assessment">{t('contact.security-assessment')}</option>
            <option value="technical-support">{t('contact.technical-support')}</option>
            <option value="partnership">{t('contact.partnership')}</option>
            <option value="general-inquiry">{t('contact.general-inquiry')}</option>
          </select>
        </div>
        
        <div className="mb-6">
          <Label htmlFor="message" className="mb-1">{t('contact.message-content')}</Label>
          <Textarea 
            id="message" 
            rows={5} 
            value={formData.message}
            onChange={handleInputChange}
            className="focus:ring-cyber-accent"
            placeholder={t('contact.describe')} 
          />
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <input 
              type="checkbox" 
              id="privacy" 
              checked={formData.privacyAgreed}
              onChange={handleCheckboxChange}
              className="h-4 w-4 text-cyber-accent border-slate-300 rounded"
            />
            <label htmlFor="privacy" className="ml-2 text-sm text-slate-600">
              {t('contact.privacy-agreement')}
            </label>
          </div>
          <Button 
            type="submit"
            className="bg-cyber-accent hover:bg-cyber-blue-light text-white"
            disabled={isSubmitting}
          >
            {isSubmitting 
              ? (language === 'zh' ? "發送中..." : "Sending...") 
              : t('contact.send-message')
            }
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
