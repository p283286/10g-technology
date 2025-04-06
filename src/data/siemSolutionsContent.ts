
import { Database, Activity, Search, Shield } from 'lucide-react';
import React from 'react';

interface ContentType {
  zh: {
    title: string;
    subtitle: string;
    description: string;
    benefits: Array<{
      title: string;
      description: string;
      icon: React.ReactNode;
    }>;
    features: string[];
    dashboardTitle: string;
    dashboardDescription: string;
    viewFullscreen: string;
    cta: string;
    backToServices: string;
    imageDescriptions: string[];
  };
  en: {
    title: string;
    subtitle: string;
    description: string;
    benefits: Array<{
      title: string;
      description: string;
      icon: React.ReactNode;
    }>;
    features: string[];
    dashboardTitle: string;
    dashboardDescription: string;
    viewFullscreen: string;
    cta: string;
    backToServices: string;
    imageDescriptions: string[];
  };
}

export const siemSolutionsContent: ContentType = {
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

export const siemDashboardImages = [
  "/lovable-uploads/2e19bccd-a0b8-42d9-b265-3110591f559e.png",
  "/lovable-uploads/2a29fc36-02ba-4064-b2c4-7d6304d0013f.png",
  "/lovable-uploads/eca7515e-215f-47b2-a4c6-8c64fa72b72c.png",
  "/lovable-uploads/72106a41-6297-405c-95fe-c8db0453e634.png"
];

export const siemIcons = [
  <Database className="h-10 w-10 text-cyber-accent" />,
  <Activity className="h-10 w-10 text-cyber-accent" />,
  <Search className="h-10 w-10 text-cyber-accent" />,
  <Shield className="h-10 w-10 text-cyber-accent" />
];
