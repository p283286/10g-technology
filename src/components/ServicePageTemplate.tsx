
import React from 'react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
  videoUrl?: string;
}

interface ServicePageContent {
  title: string;
  subtitle: string;
  description: string;
  benefits: Benefit[];
  features: string[];
  cta: string;
  backToServices: string;
}

interface ServicePageTemplateProps {
  content: {
    zh: ServicePageContent;
    en: ServicePageContent;
  };
  language: string;
  icons: React.ReactNode[];
}

const ServicePageTemplate = ({ content, language, icons }: ServicePageTemplateProps) => {
  const navigate = useNavigate();
  const currentContent = language === 'zh' ? content.zh : content.en;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative py-20 md:py-32 overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-cyber-gradient opacity-95 z-0"></div>
          
          {/* Circuit Board Pattern Overlay */}
          <div className="absolute inset-0 bg-circuit-pattern opacity-10 z-0"></div>
          
          <div className="container px-4 mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-white mb-6">
                {currentContent.title}
              </h1>
              <p className="text-slate-200 mb-8 text-lg md:text-xl max-w-3xl mx-auto">
                {currentContent.subtitle}
              </p>
              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  className="bg-cyber-accent hover:bg-cyber-blue-light text-white"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      navigate('/#contact');
                    }
                  }}
                >
                  {currentContent.cta}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <section className="py-16 bg-slate-50">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg mb-12">
                {currentContent.description}
              </p>
              
              <h2 className="mb-8">{language === 'zh' ? '核心優勢' : 'Core Benefits'}</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {currentContent.benefits.map((benefit, index) => (
                  <Card key={index} className="cyber-card h-full">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        {icons[index % icons.length]}
                      </div>
                      <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                      <p className="text-slate-600">{benefit.description}</p>
                      {benefit.videoUrl && (
                        <div className="mt-4">
                          <video 
                            src={benefit.videoUrl} 
                            controls 
                            className="w-full rounded-md shadow"
                            poster="/placeholder.svg"
                          />
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <h2 className="mb-8">{language === 'zh' ? '主要功能' : 'Key Features'}</h2>
              <div className="mb-12">
                <ul className="space-y-4">
                  {currentContent.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="h-5 w-5 text-cyber-accent mt-1 mr-3 flex-shrink-0">
                        {/* Using the first icon for bullet points */}
                        {React.cloneElement(icons[0] as React.ReactElement, { className: "h-5 w-5 text-cyber-accent" })}
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-cyber-gradient-light cyber-card p-8 text-white text-center">
                <h3 className="text-xl mb-4">{language === 'zh' ? '需要專業建議？' : 'Need Professional Advice?'}</h3>
                <p className="mb-6">{language === 'zh' ? '我們的安全專家可以幫助您設計適合您業務需求的安全方案。' : 'Our security experts can help you design a security solution tailored to your business needs.'}</p>
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      navigate('/#contact');
                    }
                  }}
                >
                  {language === 'zh' ? '聯繫專家顧問' : 'Contact Expert Advisors'}
                </Button>
              </div>
              
              <div className="mt-12 text-center">
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/')}
                >
                  {currentContent.backToServices}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <LanguageSwitcher />
    </div>
  );
};

export default ServicePageTemplate;
