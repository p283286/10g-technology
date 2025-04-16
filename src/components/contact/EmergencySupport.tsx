
import React, { useState } from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const EmergencySupport = () => {
  const { language, t } = useLanguage();
  const [isEmergencyDialogOpen, setIsEmergencyDialogOpen] = useState(false);
  
  return (
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
            {language === 'zh' ? 'Whatsapp諮詢' : 'Whatsapp Consultation'}
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
    </div>
  );
};

export default EmergencySupport;
