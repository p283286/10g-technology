
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from '@/components/ui/button';
import { ContactFormData } from './hooks/useContactForm';

interface ContactFormFieldsProps {
  formData: ContactFormData;
  isSubmitting: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  t: (key: string) => string;
  language: string;
}

const ContactFormFields: React.FC<ContactFormFieldsProps> = ({
  formData,
  isSubmitting,
  handleInputChange,
  handleCheckboxChange,
  t,
  language
}) => {
  return (
    <>
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
    </>
  );
};

export default ContactFormFields;
