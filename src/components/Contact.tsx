
import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from "@/components/ui/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const ContactInfoItem = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
  <div className="flex items-start">
    <div className="text-cyber-accent mr-4 mt-1">{icon}</div>
    <div>
      <h4 className="font-semibold text-lg mb-1">{title}</h4>
      {children}
    </div>
  </div>
);

const Contact = () => {
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
  const [isEmergencyDialogOpen, setIsEmergencyDialogOpen] = useState(false);
  
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
      // Prepare email data for server
      const emailData = {
        to: "info@10gtechnology.com",
        subject: `Contact Form: ${formData.subject || 'General Inquiry'}`,
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message,
        smtpServer: "smtp.10gtechnology.com",
        port: 25
      };
      
      // For demonstration, we'll just log the data that would be sent
      console.log("Email would be sent with:", emailData);
      
      // In a real implementation, you would make an API call to your backend
      // const response = await fetch('/api/send-email', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(emailData),
      // });
      
      // Show success toast - in production this would be after successful API response
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
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: language === 'zh' ? "發送失敗" : "Failed to send",
        description: language === 'zh' ? "發送您的訊息時出錯，請稍後再試。" : "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="section-container">
      <div className="text-center mb-16">
        <h2 className="mb-4">{t('contact.title')}</h2>
        <p className="max-w-3xl mx-auto text-slate-600">
          {t('contact.subtitle')}
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl mb-6">{t('contact.direct')}</h3>
          <div className="space-y-8 mb-10">
            <ContactInfoItem icon={<Mail size={24} />} title={t('contact.email')}>
              <p className="text-slate-600">
                <a href="mailto:info@10gtechnology.com" className="text-cyber-accent hover:underline">
                  info@10gtechnology.com
                </a>
              </p>
              <p className="text-slate-600">
                <a href="mailto:support@10gtechnology.com" className="text-cyber-accent hover:underline">
                  support@10gtechnology.com
                </a>
              </p>
            </ContactInfoItem>
            
            <ContactInfoItem icon={<Phone size={24} />} title={t('contact.phone')}>
              <p className="text-slate-600">{t('footer.tel')}</p>
            </ContactInfoItem>
            
            <ContactInfoItem icon={<Clock size={24} />} title={t('contact.hours')}>
              <p className="text-slate-600">{t('contact.hours.weekdays')}</p>
              <p className="text-slate-600">{t('contact.hours.emergency')}</p>
            </ContactInfoItem>
          </div>
          
          <div className="cyber-card p-6 bg-cyber-gradient-light">
            <h3 className="text-white text-xl mb-4">{t('contact.free-assessment')}</h3>
            <p className="text-white/90 mb-4">
              {t('contact.free-assessment.desc')}
            </p>
            <Button 
              variant="secondary"
              onClick={() => {
                const contactForm = document.getElementById('contact-form');
                if (contactForm) {
                  contactForm.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {t('contact.apply-now')}
            </Button>
          </div>
        </div>
        
        <div>
          <div className="cyber-card p-6 h-full" id="contact-form">
            <h3 className="text-2xl mb-6">{t('contact.message')}</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">{t('contact.name')}</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-accent"
                    placeholder={t('contact.your-name')} 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">{t('contact.email-address')}</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-accent"
                    placeholder={t('contact.your-email')} 
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">{t('contact.company')}</label>
                <input 
                  type="text" 
                  id="company" 
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-accent"
                  placeholder={t('contact.your-company')} 
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">{t('contact.subject')}</label>
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
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">{t('contact.message-content')}</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-accent"
                  placeholder={t('contact.describe')} 
                ></textarea>
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
        </div>
      </div>
      
      <div className="mt-20">
        <h3 className="text-2xl text-center mb-12">
          {language === 'zh' ? '緊急即時支援' : 'Emergency Immediate Support'}
        </h3>
        <div className="cyber-card p-8 flex flex-col md:flex-row items-center justify-between gap-8 bg-cyber-gradient-light">
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <MessageSquare className="h-12 w-12 text-white mb-4" />
            </div>
            <h4 className="text-white text-2xl font-bold mb-2">{t('contact.emergency-help')}</h4>
            <p className="text-white/90 max-w-xl">
              {t('contact.emergency-desc')}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              variant="secondary" 
              className="whitespace-nowrap"
              onClick={() => window.open('https://wa.me/85297930974', '_blank')}
            >
              {t('contact.online-chat')}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-cyber-blue-light whitespace-nowrap"
              onClick={() => setIsEmergencyDialogOpen(true)}
            >
              {t('contact.emergency-hotline')}
            </Button>
          </div>
        </div>
      </div>

      {/* Emergency Hotline Dialog */}
      <Dialog open={isEmergencyDialogOpen} onOpenChange={setIsEmergencyDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              {language === 'zh' ? '緊急熱線' : 'Emergency Hotline'}
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center py-6">
            <Phone className="h-12 w-12 text-cyber-accent mb-4" />
            <p className="text-2xl font-bold text-cyber-dark">+852 97930974</p>
            <p className="mt-4 text-center text-slate-600">
              {language === 'zh' 
                ? '我們的緊急支援團隊全天候待命，隨時為您提供協助。'
                : 'Our emergency support team is available 24/7 to assist you.'}
            </p>
            <Button 
              className="mt-6 bg-cyber-accent text-white"
              onClick={() => window.location.href = 'tel:+85297930974'}
            >
              {language === 'zh' ? '立即撥打' : 'Call Now'}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Contact;
