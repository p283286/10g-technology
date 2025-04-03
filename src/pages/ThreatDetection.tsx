
import React from 'react';
import { Shield, Search, Database, Activity, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

const ThreatDetection = () => {
  const { language, t } = useLanguage();

  const content = {
    zh: {
      title: '網絡威脅檢測與防禦',
      subtitle: '利用先進的AI技術，實時監控並識別潛在的網絡威脅，提供主動防禦策略。',
      description: '我們的網絡威脅檢測與防禦解決方案採用最先進的AI技術，全天候監控您的網絡環境，識別和阻止潛在威脅，確保您的業務持續運營。',
      benefits: [
        {
          title: '實時監控',
          description: '24/7全天候監控網絡流量，及時發現異常活動和潛在威脅。',
          icon: <Activity className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'AI威脅分析',
          description: '利用人工智能和機器學習技術，識別複雜的攻擊模式和異常行為。',
          icon: <Database className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '自動化響應',
          description: '設定自動化響應策略，在威脅出現時立即採取行動，減少潛在損失。',
          icon: <Shield className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '威脅情報整合',
          description: '整合全球威脅情報，提前應對新型安全威脅和漏洞風險。',
          icon: <Search className="h-10 w-10 text-cyber-accent" />
        }
      ],
      features: [
        '高級入侵檢測系統（IDS）和入侵防禦系統（IPS）',
        '網絡異常行為分析與識別',
        '惡意軟件與病毒檢測',
        'DDoS攻擊預防與緩解',
        '安全信息和事件管理（SIEM）',
        '威脅情報訂閱與整合'
      ],
      cta: '聯繫我們獲取定制解決方案',
      backToServices: '返回服務列表'
    },
    en: {
      title: 'Network Threat Detection and Defense',
      subtitle: 'Real-time monitoring and identification of potential cyber threats using advanced AI technology, providing proactive defense strategies.',
      description: 'Our Network Threat Detection and Defense solution employs cutting-edge AI technology to monitor your network environment around the clock, identifying and blocking potential threats to ensure your business continuity.',
      benefits: [
        {
          title: 'Real-time Monitoring',
          description: '24/7 monitoring of network traffic to promptly detect abnormal activities and potential threats.',
          icon: <Activity className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'AI Threat Analysis',
          description: 'Utilizing artificial intelligence and machine learning technologies to identify complex attack patterns and abnormal behaviors.',
          icon: <Database className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Automated Response',
          description: 'Set up automated response strategies to take immediate action when threats emerge, reducing potential losses.',
          icon: <Shield className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Threat Intelligence Integration',
          description: 'Integrate global threat intelligence to proactively address new security threats and vulnerability risks.',
          icon: <Search className="h-10 w-10 text-cyber-accent" />
        }
      ],
      features: [
        'Advanced Intrusion Detection System (IDS) and Intrusion Prevention System (IPS)',
        'Network abnormal behavior analysis and identification',
        'Malware and virus detection',
        'DDoS attack prevention and mitigation',
        'Security Information and Event Management (SIEM)',
        'Threat intelligence subscription and integration'
      ],
      cta: 'Contact us for customized solutions',
      backToServices: 'Back to services'
    }
  };

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
                        {benefit.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                      <p className="text-slate-600">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <h2 className="mb-8">{language === 'zh' ? '主要功能' : 'Key Features'}</h2>
              <div className="mb-12">
                <ul className="space-y-4">
                  {currentContent.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyber-accent mt-1 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-cyber-gradient-light cyber-card p-8 text-white text-center">
                <h3 className="text-xl mb-4">{language === 'zh' ? '需要專業建議？' : 'Need Professional Advice?'}</h3>
                <p className="mb-6">{language === 'zh' ? '我們的安全專家可以幫助您設計適合您業務需求的威脅防禦方案。' : 'Our security experts can help you design a threat defense solution tailored to your business needs.'}</p>
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {language === 'zh' ? '聯繫專家顧問' : 'Contact Expert Advisors'}
                </Button>
              </div>
              
              <div className="mt-12 text-center">
                <Button 
                  variant="outline" 
                  onClick={() => window.history.back()}
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

export default ThreatDetection;
