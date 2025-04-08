
import React, { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import SIEMDashboardGallery from '@/components/SIEMDashboardGallery';
import { siemSolutionsContent, siemDashboardImages, siemIcons, getIconByName } from '@/data/siemSolutionsContent';

const SIEMSolutions = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const currentContent = language === 'zh' ? siemSolutionsContent.zh : 
                         language === 'ja' ? siemSolutionsContent.ja : 
                         siemSolutionsContent.en;

  return (
    <div className="min-h-screen flex flex-col">
      {/* ServicePageTemplate provides the main structure */}
      <ServicePageTemplate 
        content={siemSolutionsContent}
        language={language}
        icons={siemIcons.map(name => getIconByName(name))}
      />
      
      {/* SIEM Dashboard Gallery */}
      <SIEMDashboardGallery
        dashboardImages={siemDashboardImages}
        dashboardTitle={currentContent.dashboardTitle}
        dashboardDescription={currentContent.dashboardDescription}
        viewFullscreen={currentContent.viewFullscreen}
        cta={currentContent.cta}
        imageDescriptions={currentContent.imageDescriptions}
      />
    </div>
  );
};

export default SIEMSolutions;
