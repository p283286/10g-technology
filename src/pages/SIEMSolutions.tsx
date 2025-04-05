
import React, { useEffect } from 'react';
import { Database, Activity, Search, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const SIEMSolutions = () => {
  const { language } = useLanguage();
  
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
      cta: '聯繫我們獲取定制解決方案',
      backToServices: '返回服務列表'
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
      cta: 'Contact us for customized solutions',
      backToServices: 'Back to services'
    }
  };
  
  const icons = [
    <Database className="h-10 w-10 text-cyber-accent" />,
    <Activity className="h-10 w-10 text-cyber-accent" />,
    <Search className="h-10 w-10 text-cyber-accent" />,
    <Shield className="h-10 w-10 text-cyber-accent" />
  ];

  return (
    <ServicePageTemplate 
      content={content}
      language={language}
      icons={icons}
    />
  );
};

export default SIEMSolutions;
