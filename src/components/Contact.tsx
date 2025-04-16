
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactInfo from './contact/ContactInfo';
import ContactForm from './contact/ContactForm';
import EmergencySupport from './contact/EmergencySupport';

const Contact = () => {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className="section-container">
      <div className="text-center mb-16">
        <h2 className="mb-4">{t('contact.title')}</h2>
        <p className="max-w-3xl mx-auto text-slate-600">
          {t('contact.subtitle')}
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ContactInfo />
        <ContactForm />
      </div>
      
      <EmergencySupport />
    </section>
  );
};

export default Contact;
