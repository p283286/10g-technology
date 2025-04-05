
import React, { useEffect } from 'react';
import { Users, Shield, Search, Monitor } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const PhysicalSecurity = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const content = {
    zh: {
      title: '物理安全評估',
      subtitle: '評估物理設施的安全性，識別可能的入侵風險，提供改進建議。',
      description: '我們的物理安全評估服務全面評估您組織的物理安全措施，識別可能被利用的弱點。通過檢查訪問控制、監控系統和物理屏障，我們幫助您加強對關鍵資產和敏感區域的保護。',
      benefits: [
        {
          title: '全面物理風險評估',
          description: '系統評估設施的物理安全風險，包括人員、工藝和技術層面，識別潛在安全漏洞。',
          icon: <Users className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '分層防禦策略規劃',
          description: '設計並實施多層物理防禦策略，確保關鍵資產得到充分保護，降低未授權訪問風險。',
          icon: <Shield className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '訪問控制系統評估',
          description: '評估現有訪問控制系統的有效性，識別可能被繞過或破解的漏洞，並提供加強建議。',
          icon: <Search className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '監控與響應能力提升',
          description: '評估和改進物理安全監控系統和事件響應能力，確保及時發現和應對安全事件。',
          icon: <Monitor className="h-10 w-10 text-cyber-accent" />
        }
      ],
      features: [
        '設施訪問控制評估',
        '監控系統有效性檢查',
        '物理安全政策審查',
        '安保人員培訓評估',
        '緊急響應計劃測試',
        '敏感區域保護評估'
      ],
      cta: '聯繫我們獲取定制解決方案',
      backToServices: '返回服務列表'
    },
    en: {
      title: 'Physical Security Assessment',
      subtitle: 'Assess the security of physical facilities, identify potential intrusion risks, and provide recommendations for improvement.',
      description: 'Our Physical Security Assessment services comprehensively evaluate your organization\'s physical security measures, identifying vulnerabilities that could be exploited. By examining access controls, monitoring systems, and physical barriers, we help you strengthen protection of critical assets and sensitive areas.',
      benefits: [
        {
          title: 'Comprehensive Physical Risk Assessment',
          description: 'Systematically assess facility physical security risks, including personnel, process, and technology aspects, to identify potential security vulnerabilities.',
          icon: <Users className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Layered Defense Strategy Planning',
          description: 'Design and implement multi-layered physical defense strategies to ensure critical assets are adequately protected, reducing the risk of unauthorized access.',
          icon: <Shield className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Access Control System Evaluation',
          description: 'Evaluate the effectiveness of existing access control systems, identify vulnerabilities that could be bypassed or compromised, and provide strengthening recommendations.',
          icon: <Search className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Monitoring and Response Capability Enhancement',
          description: 'Assess and improve physical security monitoring systems and incident response capabilities to ensure timely detection and response to security incidents.',
          icon: <Monitor className="h-10 w-10 text-cyber-accent" />
        }
      ],
      features: [
        'Facility access control assessment',
        'Monitoring system effectiveness check',
        'Physical security policy review',
        'Security personnel training assessment',
        'Emergency response plan testing',
        'Sensitive area protection assessment'
      ],
      cta: 'Contact us for customized solutions',
      backToServices: 'Back to services'
    }
  };
  
  const icons = [
    <Users className="h-10 w-10 text-cyber-accent" />,
    <Shield className="h-10 w-10 text-cyber-accent" />,
    <Search className="h-10 w-10 text-cyber-accent" />,
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

export default PhysicalSecurity;
