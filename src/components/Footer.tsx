
import React from 'react';
import { Shield, Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cyber-dark text-white">
      <div className="section-container pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Shield className="h-8 w-8 text-cyber-accent" />
              <span className="text-xl font-bold">
                {t('company.name')}
              </span>
            </div>
            <p className="text-slate-400 mb-6">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-cyber-accent">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyber-accent">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyber-accent">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyber-accent">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer.quick-links')}</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-slate-400 hover:text-cyber-accent">{t('nav.about')}</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-cyber-accent">{t('nav.services')}</a></li>
              <li><a href="#case-studies" className="text-slate-400 hover:text-cyber-accent">{t('nav.case-studies')}</a></li>
              <li><a href="#certifications" className="text-slate-400 hover:text-cyber-accent">{t('nav.certifications')}</a></li>
              <li><a href="#knowledge" className="text-slate-400 hover:text-cyber-accent">{t('nav.knowledge')}</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-cyber-accent">{t('nav.contact')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer.contact-info')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-cyber-accent mt-1 mr-2 flex-shrink-0" />
                <span className="text-slate-400">{t('footer.email')}</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-cyber-accent mt-1 mr-2 flex-shrink-0" />
                <span className="text-slate-400">{t('footer.support-email')}</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-cyber-accent mt-1 mr-2 flex-shrink-0" />
                <span className="text-slate-400">{t('footer.tel')}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} {t('company.name')} {t('footer.copyright')}
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-slate-500 hover:text-cyber-accent">{t('footer.privacy-policy')}</a>
            <a href="#" className="text-sm text-slate-500 hover:text-cyber-accent">{t('footer.terms')}</a>
            <a href="#" className="text-sm text-slate-500 hover:text-cyber-accent">{t('footer.legal')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
