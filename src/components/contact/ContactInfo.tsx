
import React from 'react';
import { Mail, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactInfoItem = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
  <div className="flex items-start">
    <div className="text-cyber-accent mr-4 mt-1">{icon}</div>
    <div>
      <h4 className="font-semibold text-lg mb-1">{title}</h4>
      {children}
    </div>
  </div>
);

const ContactInfo = () => {
  const { language, t } = useLanguage();
  
  return (
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
  );
};

export default ContactInfo;
