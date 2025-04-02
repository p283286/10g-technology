
import React from 'react';
import { Globe } from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger className="bg-cyber-accent hover:bg-cyber-blue-light text-white p-2 rounded-full shadow-lg flex items-center justify-center">
          <Globe className="h-5 w-5" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="mr-2 mb-2">
          <DropdownMenuItem 
            className={language === 'en' ? 'bg-muted' : ''}
            onClick={() => setLanguage('en')}
          >
            {t('language.en')}
          </DropdownMenuItem>
          <DropdownMenuItem 
            className={language === 'zh' ? 'bg-muted' : ''}
            onClick={() => setLanguage('zh')}
          >
            {t('language.zh')}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageSwitcher;
