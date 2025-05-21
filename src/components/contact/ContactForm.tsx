
import React from 'react';
import { useContactForm } from './hooks/useContactForm';
import ContactFormFields from './ContactFormFields';

const ContactForm = () => {
  const {
    formData,
    isSubmitting,
    handleInputChange,
    handleCheckboxChange,
    handleSubmit,
    language,
    t
  } = useContactForm();
  
  return (
    <div className="cyber-card p-6 h-full" id="contact-form">
      <h3 className="text-2xl mb-6">{t('contact.message')}</h3>
      <form onSubmit={handleSubmit}>
        <ContactFormFields
          formData={formData}
          isSubmitting={isSubmitting}
          handleInputChange={handleInputChange}
          handleCheckboxChange={handleCheckboxChange}
          t={t}
          language={language}
        />
      </form>
    </div>
  );
};

export default ContactForm;
