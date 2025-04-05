
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
          title: '內部風險評估',
          description: '全面評估組織內部網絡和系統的安全風險，識別可能被惡意內部人員利用的漏洞。',
          icon: <UserCheck className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '內部防禦強化',
          description: '基於測試結果提出具體的安全加固建議，提升內部安全控制的有效性。',
          icon: <Shield className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '橫向移動風險識別',
          description: '評估攻擊者在初始訪問後橫向移動至關鍵系統的能力，揭示潛在的攻擊路徑。',
          icon: <AlertTriangle className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '權限升級評估',
          description: '測試從普通用戶權限提升至系統管理員或其他特權帳戶的可能性，發現權限控制缺陷。',
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
          title: 'Internal Risk Assessment',
          description: 'Comprehensively assess the security risks of internal networks and systems, identifying vulnerabilities that could be exploited by malicious insiders.',
          icon: <UserCheck className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Internal Defense Enhancement',
          description: 'Provide specific security hardening recommendations based on test results to improve the effectiveness of internal security controls.',
          icon: <Shield className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Lateral Movement Risk Identification',
          description: 'Assess an attacker\'s ability to move laterally to critical systems after initial access, revealing potential attack paths.',
          icon: <AlertTriangle className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Privilege Escalation Assessment',
          description: 'Test the possibility of escalating from regular user privileges to system administrator or other privileged accounts, discovering privilege control defects.',
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
