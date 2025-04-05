
import React, { useEffect } from 'react';
import { UserCheck, Shield, AlertTriangle, Monitor } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const InternalPenetrationTesting = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const content = {
    zh: {
      title: '內部滲透測試',
      subtitle: '模擬內部威脅，評估組織內部安全控制的有效性，發現內部安全漏洞。',
      description: '我們的內部滲透測試服務模擬企業內部惡意行為者的活動，評估內部安全控制措施的有效性。通過這種方式，我們幫助您識別和修復可能被內部人員或已入侵系統利用的安全漏洞。',
      benefits: [
        {
          title: '了解未知風險',
          description: '內部滲透測試發現內部網絡、系統和應用程序中的弱點，幫助識別潛在的安全漏洞。',
          icon: <UserCheck className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '風險緩解',
          description: '內部滲透測試使組織能夠主動解決風險，實施安全措施，並加強控制以防止未授權訪問和數據洩露。',
          icon: <Shield className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '合規要求',
          description: '內部滲透測試幫助組織滿足GDPR、PCI DSS、HIPAA、ISO 27001等監管標準的要求，確保安全標準的遵守。',
          icon: <AlertTriangle className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '高效能密碼破解',
          description: '利用強大的GPU進行實時密碼破解測試，評估密碼策略的安全強度。',
          icon: <Monitor className="h-10 w-10 text-cyber-accent" />
        }
      ],
      features: [
        '內部網絡安全評估',
        '權限升級測試',
        '內部系統漏洞評估',
        '數據存取控制測試',
        '內部社會工程評估',
        '敏感資訊保護評估'
      ],
      cta: '聯繫我們獲取定制解決方案',
      backToServices: '返回服務列表'
    },
    en: {
      title: 'Internal Penetration Testing',
      subtitle: 'Simulate internal threats, assess the effectiveness of internal security controls, and discover internal security vulnerabilities.',
      description: 'Our Internal Penetration Testing services simulate the activities of malicious actors within the enterprise to evaluate the effectiveness of internal security controls. Through this approach, we help you identify and fix security vulnerabilities that could be exploited by insiders or compromised systems.',
      benefits: [
        {
          title: 'Know the Unknown',
          description: 'Internal penetration testing uncovers weaknesses in internal networks, systems, and applications, helping to identify potential security vulnerabilities.',
          icon: <UserCheck className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Risk Mitigation',
          description: 'Internal penetration testing allows organizations to proactively address risks, implement security measures, and strengthen controls to prevent unauthorized access and data breaches.',
          icon: <Shield className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Compliance',
          description: 'Internal penetration testing helps organizations meet regulatory requirements by ensuring adherence to security standards like GDPR, PCI DSS, HIPAA, ISO 27001 and more.',
          icon: <AlertTriangle className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Real-time Password Cracking',
          description: 'Leverage powerful GPU capabilities for real-time password cracking tests to evaluate the security strength of password policies.',
          icon: <Monitor className="h-10 w-10 text-cyber-accent" />
        }
      ],
      features: [
        'Internal network security assessment',
        'Privilege escalation testing',
        'Internal system vulnerability assessment',
        'Data access control testing',
        'Internal social engineering assessment',
        'Sensitive information protection assessment'
      ],
      cta: 'Contact us for customized solutions',
      backToServices: 'Back to services'
    }
  };
  
  const icons = [
    <UserCheck className="h-10 w-10 text-cyber-accent" />,
    <Shield className="h-10 w-10 text-cyber-accent" />,
    <AlertTriangle className="h-10 w-10 text-cyber-accent" />,
    <Monitor className="h-10 w-10 text-cyber-accent" />
  ];

  return (
    <ServicePageTemplate 
      content={content}
      language={language}
      icons={icons}
    />
  );
};

export default InternalPenetrationTesting;
