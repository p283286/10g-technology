
import React, { useEffect } from 'react';
import { Shield, Search, AlertTriangle, Monitor } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import PenetrationTestingDashboards from '@/components/PenetrationTestingDashboards';

const ExternalPenetrationTesting = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const content = {
    zh: {
      title: '外部滲透測試',
      subtitle: '從外部攻擊者的角度評估組織的安全邊界，識別可能被利用的入侵點。',
      description: '我們的外部滲透測試服務從外部攻擊者的視角評估您組織的安全狀態。通過模擬真實的黑客攻擊技術，我們幫助您識別外部安全邊界的弱點，並提供有效的修復建議。',
      benefits: [
        {
          title: '外部威脅模擬',
          description: '模擬真實的外部攻擊者行為，評估組織的外部安全防禦能力，發現潛在入侵點。',
          icon: <Shield className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '攻擊面評估',
          description: '全面評估組織的外部攻擊面，識別向互聯網公開的可能被攻擊者利用的服務和系統。',
          icon: <Search className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '邊界防禦測試',
          description: '測試組織的網絡邊界防禦系統，包括防火牆、入侵檢測系統和負載均衡器等的有效性。',
          icon: <AlertTriangle className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '多層次安全評估',
          description: '評估多層次防禦策略的有效性，識別可能被用於深入滲透網絡的安全漏洞和配置錯誤。',
          icon: <Monitor className="h-10 w-10 text-cyber-accent" />
        }
      ],
      features: [
        '網絡服務安全測試',
        '公開應用程序評估',
        'VPN和遠程訪問安全評估',
        '邊界防禦系統測試',
        '云服務安全評估',
        '社會工程測試'
      ],
      dashboardTitle: '外部滲透測試儀表板',
      dashboardDescription: '我們的外部滲透測試儀表板提供清晰的視覺化報告，幫助您了解組織的外部安全狀況。',
      viewFullscreen: '查看大圖',
      cta: '聯繫我們獲取定制解決方案',
      backToServices: '返回服務列表',
      imageDescriptions: [
        '網絡服務漏洞掃描結果，顯示潛在風險點',
        '外部攻擊面映射，識別可被攻擊的系統和服務',
        '防火牆和邊界防禦測試報告',
        '社會工程和釣魚測試成功率分析'
      ]
    },
    en: {
      title: 'External Penetration Testing',
      subtitle: 'Assess the organization\'s security perimeter from the perspective of an external attacker, identifying potential points of entry that could be exploited.',
      description: 'Our External Penetration Testing services evaluate your organization\'s security posture from the perspective of an external attacker. By simulating real hacker attack techniques, we help you identify weaknesses in your external security perimeter and provide effective remediation recommendations.',
      benefits: [
        {
          title: 'External Threat Simulation',
          description: 'Simulate real external attacker behavior to assess the organization\'s external security defense capabilities and discover potential entry points.',
          icon: <Shield className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Attack Surface Assessment',
          description: 'Comprehensively assess the organization\'s external attack surface, identifying internet-facing services and systems that could be exploited by attackers.',
          icon: <Search className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Perimeter Defense Testing',
          description: 'Test the effectiveness of the organization\'s network perimeter defense systems, including firewalls, intrusion detection systems, and load balancers.',
          icon: <AlertTriangle className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Multi-layer Security Assessment',
          description: 'Evaluate the effectiveness of multi-layered defense strategies, identifying security vulnerabilities and misconfigurations that could be used to penetrate the network deeply.',
          icon: <Monitor className="h-10 w-10 text-cyber-accent" />
        }
      ],
      features: [
        'Network service security testing',
        'Public-facing application assessment',
        'VPN and remote access security assessment',
        'Perimeter defense system testing',
        'Cloud service security assessment',
        'Social engineering testing'
      ],
      dashboardTitle: 'External Penetration Testing Dashboards',
      dashboardDescription: 'Our external penetration testing dashboards provide clear visual reports to help you understand your organization\'s external security posture.',
      viewFullscreen: 'View Full Size',
      cta: 'Contact us for customized solutions',
      backToServices: 'Back to services',
      imageDescriptions: [
        'Network service vulnerability scan results showing potential risk points',
        'External attack surface mapping identifying exploitable systems and services',
        'Firewall and perimeter defense testing report',
        'Social engineering and phishing test success rate analysis'
      ]
    }
  };
  
  const icons = [
    <Shield className="h-10 w-10 text-cyber-accent" />,
    <Search className="h-10 w-10 text-cyber-accent" />,
    <AlertTriangle className="h-10 w-10 text-cyber-accent" />,
    <Monitor className="h-10 w-10 text-cyber-accent" />
  ];

  // New images to use for the dashboards
  const newDashboardImages = [
    "/lovable-uploads/d61f9dcc-857a-48d2-b682-f8856e4aaae4.png",
    "/lovable-uploads/a23de1e8-36da-4579-8d68-7e3327b001d5.png",
    "/lovable-uploads/067ce665-5b7b-45b6-ae9d-69e0a41c246f.png",
    "/lovable-uploads/bf5e7f85-ef03-492b-b91c-bce882420398.png"
  ];

  const currentContent = language === 'zh' ? content.zh : content.en;

  return (
    <>
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
        dashboardImages={newDashboardImages}
      />
    </>
  );
};

export default ExternalPenetrationTesting;
