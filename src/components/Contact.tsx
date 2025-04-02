
import React from 'react';
import { Mail, Phone, MessageSquare, Clock } from 'lucide-react';
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
        <div>
          <h3 className="text-2xl mb-6">{t('contact.direct')}</h3>
          <div className="space-y-8 mb-10">
            <ContactInfoItem icon={<Mail size={24} />} title={t('contact.email')}>
              <p className="text-slate-600">{t('footer.email')}</p>
              <p className="text-slate-600">{t('footer.support-email')}</p>
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
            <Button variant="secondary">{t('contact.apply-now')}</Button>
          </div>
        </div>
        
        <div>
          <div className="cyber-card p-6 h-full">
            <h3 className="text-2xl mb-6">{t('contact.message')}</h3>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">{t('contact.name')}</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-accent"
                    placeholder={t('contact.your-name')} 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">{t('contact.email-address')}</label>
                  <input 
                    type="email" 
                    id="email" 
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
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-accent"
                  placeholder={t('contact.your-company')} 
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">{t('contact.subject')}</label>
                <select 
                  id="subject" 
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
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-accent"
                  placeholder={t('contact.describe')} 
                ></textarea>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="privacy" 
                    className="h-4 w-4 text-cyber-accent border-slate-300 rounded"
                  />
                  <label htmlFor="privacy" className="ml-2 text-sm text-slate-600">
                    {t('contact.privacy-agreement')}
                  </label>
                </div>
                <Button className="bg-cyber-accent hover:bg-cyber-blue-light">
                  {t('contact.send-message')}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <div className="mt-20">
        <h3 className="text-2xl text-center mb-12">{t('contact.emergency-support')}</h3>
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
            <Button size="lg" variant="secondary" className="whitespace-nowrap">
              {t('contact.online-chat')}
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 whitespace-nowrap">
              {t('contact.emergency-hotline')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
