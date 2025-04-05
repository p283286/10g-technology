
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
          title: '全面威脅可視性',
          description: '集中收集和分析來自所有IT資產的安全數據，提供企業安全狀態的全面視圖。',
          icon: <Database className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '即時威脅檢測',
          description: '實時監控和分析安全事件，快速識別異常活動和潛在威脅。',
          icon: <Activity className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '智能威脅分析',
          description: '運用高級分析和機器學習技術，提高威脅檢測的準確性，減少誤報。',
          icon: <Search className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '合規要求支持',
          description: '幫助企業滿足各種安全合規要求，提供必要的日誌保存和審計能力。',
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
          title: 'Comprehensive Threat Visibility',
          description: 'Centrally collect and analyze security data from all IT assets, providing a comprehensive view of the enterprise security posture.',
          icon: <Database className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Real-time Threat Detection',
          description: 'Monitor and analyze security events in real-time, quickly identifying abnormal activities and potential threats.',
          icon: <Activity className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Intelligent Threat Analysis',
          description: 'Utilize advanced analytics and machine learning techniques to improve the accuracy of threat detection and reduce false positives.',
          icon: <Search className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Compliance Requirement Support',
          description: 'Help enterprises meet various security compliance requirements, providing necessary log retention and audit capabilities.',
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
