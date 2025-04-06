
import React, { useEffect } from 'react';
import { UserCheck, Shield, AlertTriangle, Monitor } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import PenetrationTestingDashboards from '@/components/PenetrationTestingDashboards';

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
      backToServices: '返回服務列表',
      dashboardTitle: '內部滲透測試報告範例',
      dashboardDescription: '我們的內部滲透測試提供詳細的安全評估報告，幫助您了解組織內部的安全風險和漏洞情況。以下是報告範例，展示了我們如何識別和分析安全風險。',
      viewFullscreen: '查看大圖',
      imageDescriptions: [
        '密碼破解分析：展示45%的密碼在30分鐘內被破解，總計6個帳戶在1小時內被成功入侵',
        '漏洞詳細報告：識別出53個安全漏洞，包括22個高危漏洞',
        'SMB簽名禁用和身分驗證漏洞：允許攻擊者進行中間人攻擊',
        '憑證記憶體洩露和密碼散列破解：利用GPU計算能力破解用戶雜湊值'
      ]
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
      backToServices: 'Back to services',
      dashboardTitle: 'Internal Penetration Testing Report Examples',
      dashboardDescription: 'Our Internal Penetration Testing provides detailed security assessment reports to help you understand the security risks and vulnerabilities within your organization. Below are report examples that demonstrate how we identify and analyze security risks.',
      viewFullscreen: 'View Full Size',
      imageDescriptions: [
        'Password Cracking Analysis: Shows 45% of passwords cracked in under 30 minutes, with a total of 6 accounts compromised in 1 hour',
        'Vulnerability Detailed Report: Identified 53 security vulnerabilities, including 22 critical vulnerabilities',
        'SMB Signing Disabled and Authentication Vulnerabilities: Allowing attackers to perform man-in-the-middle attacks',
        'Credential Memory Leakage and Password Hash Cracking: Using GPU computing power to crack user hashes'
      ]
    }
  };
  
  const icons = [
    <UserCheck className="h-10 w-10 text-cyber-accent" />,
    <Shield className="h-10 w-10 text-cyber-accent" />,
    <AlertTriangle className="h-10 w-10 text-cyber-accent" />,
    <Monitor className="h-10 w-10 text-cyber-accent" />
  ];

  const currentContent = language === 'zh' ? content.zh : content.en;

  return (
    <div className="min-h-screen flex flex-col">
      <ServicePageTemplate 
        content={content}
        language={language}
        icons={icons}
      />
      
      <PenetrationTestingDashboards
        dashboardTitle={currentContent.dashboardTitle}
        dashboardDescription={currentContent.dashboardDescription}
        viewFullscreen={currentContent.viewFullscreen}
        imageDescriptions={currentContent.imageDescriptions}
      />
    </div>
  );
};

export default InternalPenetrationTesting;
