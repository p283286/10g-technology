
import React, { useEffect } from 'react';
import { Database, Activity, Search, Shield, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const SIEMSolutions = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const content = {
    zh: {
      title: 'SIEM解決方案',
      subtitle: '安全信息和事件管理系統，集中收集和分析來自網絡環境的安全數據，提供全面的威脅可視性。',
      description: '我們的SIEM解決方案幫助企業集中收集、關聯和分析來自各個系統、設備和應用的安全日誌和事件數據。通過先進的分析和自動化，幫助您快速識別潛在威脅，提高安全團隊的工作效率。',
      benefits: [
        {
          title: '威脅檢測',
          description: 'SIEM（安全信息和事件管理）實現對安全事件的實時監控和關聯分析，幫助及時檢測和應對潛在威脅和安全事件。',
          icon: <Database className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '事件響應',
          description: 'SIEM提供事件響應的集中平台，使安全團隊能夠高效地調查和應對安全事件。它幫助簡化事件管理流程並縮短響應時間。',
          icon: <Activity className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '日誌管理',
          description: 'SIEM從網絡設備、服務器和應用等各種來源收集、聚合和分析日誌數據。這種集中式日誌管理提高了系統活動的可視性，並有助於取證分析和合規報告。',
          icon: <Search className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '合規和審計',
          description: 'SIEM通過提供日誌監控、事件關聯和報告所需的工具和功能，幫助組織滿足監管合規要求。它有助於證明對安全政策和標準的遵守。',
          icon: <Shield className="h-10 w-10 text-cyber-accent" />
        }
      ],
      features: [
        '日誌和事件數據集中管理',
        '實時威脅監控與告警',
        '安全事件關聯分析',
        '自定義儀表板與報告',
        '安全合規審計支持',
        '威脅情報整合'
      ],
      dashboardTitle: 'SIEM 儀表板示例',
      dashboardDescription: '我們的SIEM解決方案提供全面的可視性，全程監控您的網絡安全狀態。下面是SIEM儀表板的示例，展示了如何實時跟踪、分析和管理安全事件。',
      viewFullscreen: '查看大圖',
      cta: '聯繫我們獲取定制解決方案',
      backToServices: '返回服務列表',
      imageDescriptions: [
        '安全事件概覽儀表板，顯示關鍵安全指標和事件分佈',
        '安全日誌分析視圖，展示詳細的日誌記錄和威脅檢測',
        '安全事件詳情頁面，顯示特定安全事件的詳細信息',
        '系統安全審計報告，提供合規性檢查和漏洞評估'
      ]
    },
    en: {
      title: 'SIEM Solutions',
      subtitle: 'Security Information and Event Management system that centrally collects and analyzes security data from the network environment, providing comprehensive threat visibility.',
      description: 'Our SIEM solutions help enterprises centrally collect, correlate, and analyze security logs and event data from various systems, devices, and applications. Through advanced analytics and automation, we help you quickly identify potential threats and improve the efficiency of your security team.',
      benefits: [
        {
          title: 'Threat Detection',
          description: 'SIEM (Security Information and Event Management) enables real-time monitoring and correlation of security events, helping to detect and respond to potential threats and security incidents promptly.',
          icon: <Database className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Incident Response',
          description: 'SIEM provides a centralized platform for incident response, allowing security teams to investigate and respond to security events efficiently. It helps streamline incident management processes and reduces response time.',
          icon: <Activity className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Log Management',
          description: 'SIEM collects, aggregates, and analyzes log data from various sources, such as network devices, servers, and applications. This centralized log management improves visibility into system activities and aids in forensic analysis and compliance reporting.',
          icon: <Search className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Compliance and Auditing',
          description: 'SIEM helps organizations meet regulatory compliance requirements by providing the necessary tools and capabilities for log monitoring, event correlation, and reporting. It assists in demonstrating adherence to security policies and standards.',
          icon: <Shield className="h-10 w-10 text-cyber-accent" />
        }
      ],
      features: [
        'Centralized management of logs and event data',
        'Real-time threat monitoring and alerts',
        'Security event correlation analysis',
        'Custom dashboards and reports',
        'Security compliance audit support',
        'Threat intelligence integration'
      ],
      dashboardTitle: 'SIEM Dashboard Examples',
      dashboardDescription: 'Our SIEM solution provides comprehensive visibility, constantly monitoring your network security status. Below are examples of SIEM dashboards that demonstrate how security events are tracked, analyzed, and managed in real-time.',
      viewFullscreen: 'View Full Size',
      cta: 'Contact us for customized solutions',
      backToServices: 'Back to services',
      imageDescriptions: [
        'Security event overview dashboard showing key security metrics and event distribution',
        'Security log analysis view displaying detailed log records and threat detection',
        'Security event details page showing specific security event information',
        'System security audit report providing compliance checks and vulnerability assessment'
      ]
    }
  };
  
  const icons = [
    <Database className="h-10 w-10 text-cyber-accent" />,
    <Activity className="h-10 w-10 text-cyber-accent" />,
    <Search className="h-10 w-10 text-cyber-accent" />,
    <Shield className="h-10 w-10 text-cyber-accent" />
  ];

  const dashboardImages = [
    "/lovable-uploads/2e19bccd-a0b8-42d9-b265-3110591f559e.png",
    "/lovable-uploads/2a29fc36-02ba-4064-b2c4-7d6304d0013f.png",
    "/lovable-uploads/eca7515e-215f-47b2-a4c6-8c64fa72b72c.png",
    "/lovable-uploads/72106a41-6297-405c-95fe-c8db0453e634.png"
  ];

  const currentContent = language === 'zh' ? content.zh : content.en;

  return (
    <div className="min-h-screen flex flex-col">
      {/* ServicePageTemplate provides the main structure */}
      <ServicePageTemplate 
        content={content}
        language={language}
        icons={icons}
      />
      
      {/* SIEM Dashboard Examples Section */}
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">{currentContent.dashboardTitle}</h2>
            <p className="text-lg mb-10 text-center max-w-3xl mx-auto">
              {currentContent.dashboardDescription}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dashboardImages.map((img, index) => (
                <div key={index} className="flex flex-col">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="relative overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-all duration-300 group">
                        <img 
                          src={img} 
                          alt={`SIEM Dashboard ${index + 1}`} 
                          className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                            <Button variant="secondary" size="sm" className="flex items-center gap-1">
                              {currentContent.viewFullscreen} <ArrowRight className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-5xl w-full p-1">
                      <img 
                        src={img} 
                        alt={`SIEM Dashboard ${index + 1} (Full Size)`} 
                        className="w-full h-auto"
                      />
                    </DialogContent>
                  </Dialog>
                  <p className="mt-2 text-sm text-gray-600">{currentContent.imageDescriptions[index]}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    navigate('/#contact');
                  }
                }}
                className="bg-cyber-warning hover:bg-cyber-accent text-cyber-dark font-semibold"
              >
                {currentContent.cta}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SIEMSolutions;
