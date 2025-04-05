
import React, { useEffect } from 'react';
import { Monitor, Shield, Database, Activity } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const ConfigurationAssessment = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const content = {
    zh: {
      title: '配置評估',
      subtitle: '審查系統和網絡配置，確保符合最佳安全實踐和合規要求。',
      description: '我們的配置評估服務全面審查您的系統、網絡和應用程序配置，識別不符合安全最佳實踐或可能導致安全風險的配置。我們提供詳細的評估報告和改進建議，幫助您增強系統安全性。',
      benefits: [
        {
          title: '安全配置基準確立',
          description: '根據行業標準和最佳實踐，為不同系統和設備建立安全配置基準，確保一致的安全水平。',
          icon: <Monitor className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '錯誤配置識別',
          description: '全面識別可能導致安全風險的錯誤配置和不安全設置，減少潛在的攻擊途徑。',
          icon: <Shield className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '合規性檢查',
          description: '確保系統和網絡配置符合相關的安全標準和合規要求，如CIS benchmarks、NIST或ISO 27001等。',
          icon: <Database className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '持續改進流程',
          description: '建立配置管理的持續改進流程，確保安全配置隨著環境變化和新威脅的出現而不斷更新。',
          icon: <Activity className="h-10 w-10 text-cyber-accent" />
        }
      ],
      features: [
        '操作系統安全配置評估',
        '網絡設備配置審查',
        '雲服務安全配置檢查',
        '數據庫安全設置評估',
        '應用程序安全配置檢查',
        '配置基線合規性驗證'
      ],
      cta: '聯繫我們獲取定制解決方案',
      backToServices: '返回服務列表'
    },
    en: {
      title: 'Configuration Assessment',
      subtitle: 'Review system and network configurations to ensure compliance with best security practices and compliance requirements.',
      description: 'Our Configuration Assessment services comprehensively review your systems, networks, and application configurations to identify those that do not comply with security best practices or may lead to security risks. We provide detailed assessment reports and improvement recommendations to help you enhance system security.',
      benefits: [
        {
          title: 'Security Configuration Baseline Establishment',
          description: 'Establish security configuration baselines for different systems and devices based on industry standards and best practices to ensure a consistent security level.',
          icon: <Monitor className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Misconfiguration Identification',
          description: 'Comprehensively identify misconfigurations and insecure settings that may lead to security risks, reducing potential attack vectors.',
          icon: <Shield className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Compliance Check',
          description: 'Ensure system and network configurations comply with relevant security standards and compliance requirements, such as CIS benchmarks, NIST, or ISO 27001.',
          icon: <Database className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Continuous Improvement Process',
          description: 'Establish a continuous improvement process for configuration management to ensure security configurations are constantly updated as the environment changes and new threats emerge.',
          icon: <Activity className="h-10 w-10 text-cyber-accent" />
        }
      ],
      features: [
        'Operating system security configuration assessment',
        'Network device configuration review',
        'Cloud service security configuration check',
        'Database security settings assessment',
        'Application security configuration check',
        'Configuration baseline compliance verification'
      ],
      cta: 'Contact us for customized solutions',
      backToServices: 'Back to services'
    }
  };
  
  const icons = [
    <Monitor className="h-10 w-10 text-cyber-accent" />,
    <Shield className="h-10 w-10 text-cyber-accent" />,
    <Database className="h-10 w-10 text-cyber-accent" />,
    <Activity className="h-10 w-10 text-cyber-accent" />
  ];

  return (
    <ServicePageTemplate 
      content={content}
      language={language}
      icons={icons}
    />
  );
};

export default ConfigurationAssessment;
