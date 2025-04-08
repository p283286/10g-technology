
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
      iconName: string;
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
      iconName: string;
    }>;
    features: string[];
    dashboardTitle: string;
    dashboardDescription: string;
    viewFullscreen: string;
    cta: string;
    backToServices: string;
    imageDescriptions: string[];
  };
  ja: {
    title: string;
    subtitle: string;
    description: string;
    benefits: Array<{
      title: string;
      description: string;
      iconName: string;
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
        iconName: 'database'
      },
      {
        title: '事件響應',
        description: 'SIEM提供事件響應的集中平台，使安全團隊能夠高效地調查和應對安全事件。它幫助簡化事件管理流程並縮短響應時間。',
        iconName: 'activity'
      },
      {
        title: '日誌管理',
        description: 'SIEM從網絡設備、服務器和應用等各種來源收集、聚合和分析日誌數據。這種集中式日誌管理提高了系統活動的可視性，並有助於取證分析和合規報告。',
        iconName: 'search'
      },
      {
        title: '合規和審計',
        description: 'SIEM通過提供日誌監控、事件關聯和報告所需的工具和功能，幫助組織滿足監管合規要求。它有助於證明對安全政策和標準的遵守。',
        iconName: 'shield'
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
      '安全漏洞檢測儀表板，展示不同嚴重級別的安全問題',
      '威脅檢測儀表板，展示身份驗證和安全事件分析',
      '配置審計儀表板，顯示安全基準符合性狀態',
      'MITRE ATT&CK框架分析，追蹤高級持續威脅'
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
        iconName: 'database'
      },
      {
        title: 'Incident Response',
        description: 'SIEM provides a centralized platform for incident response, allowing security teams to investigate and respond to security events efficiently. It helps streamline incident management processes and reduces response time.',
        iconName: 'activity'
      },
      {
        title: 'Log Management',
        description: 'SIEM collects, aggregates, and analyzes log data from various sources, such as network devices, servers, and applications. This centralized log management improves visibility into system activities and aids in forensic analysis and compliance reporting.',
        iconName: 'search'
      },
      {
        title: 'Compliance and Auditing',
        description: 'SIEM helps organizations meet regulatory compliance requirements by providing the necessary tools and capabilities for log monitoring, event correlation, and reporting. It assists in demonstrating adherence to security policies and standards.',
        iconName: 'shield'
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
      'Vulnerability detection dashboard showing security issues of different severity levels',
      'Threat hunting dashboard displaying authentication and security event analysis',
      'Configuration audit dashboard showing security baseline compliance status',
      'MITRE ATT&CK framework analysis for tracking advanced persistent threats'
    ]
  },
  ja: {
    title: 'SIEM ソリューション',
    subtitle: 'ネットワーク環境からセキュリティデータを一元的に収集・分析し、包括的な脅威可視性を提供するセキュリティ情報・イベント管理システム。',
    description: '当社のSIEMソリューションは、企業が様々なシステム、デバイス、アプリケーションからセキュリティログとイベントデータを一元的に収集、関連付け、分析するのを支援します。高度な分析と自動化により、潜在的な脅威を迅速に特定し、セキュリティチームの効率性を向上させます。',
    benefits: [
      {
        title: '脅威検出',
        description: 'SIEM（セキュリティ情報・イベント管理）はセキュリティイベントのリアルタイム監視と相関分析を可能にし、潜在的な脅威やセキュリティインシデントを迅速に検出し対応するのに役立ちます。',
        iconName: 'database'
      },
      {
        title: 'インシデント対応',
        description: 'SIEMはインシデント対応の一元的なプラットフォームを提供し、セキュリティチームがセキュリティイベントを効率的に調査し対応できるようにします。インシデント管理プロセスの合理化と応答時間の短縮に役立ちます。',
        iconName: 'activity'
      },
      {
        title: 'ログ管理',
        description: 'SIEMはネットワークデバイス、サーバー、アプリケーションなど様々なソースからログデータを収集、集約、分析します。この一元化されたログ管理により、システム活動の可視性が向上し、フォレンジック分析とコンプライアンス報告に役立ちます。',
        iconName: 'search'
      },
      {
        title: 'コンプライアンスと監査',
        description: 'SIEMはログモニタリング、イベント相関、レポート作成に必要なツールと機能を提供することで、組織が規制コンプライアンス要件を満たすのを支援します。セキュリティポリシーと標準への準拠を証明するのに役立ちます。',
        iconName: 'shield'
      }
    ],
    features: [
      'ログとイベントデータの一元管理',
      'リアルタイム脅威監視とアラート',
      'セキュリティイベント相関分析',
      'カスタムダッシュボードとレポート',
      'セキュリティコンプライアンス監査サポート',
      '脅威インテリジェンス統合'
    ],
    dashboardTitle: 'SIEMダッシュボード例',
    dashboardDescription: '当社のSIEMソリューションは包括的な可視性を提供し、ネットワークセキュリティ状態を常に監視します。以下は、セキュリティイベントがリアルタイムで追跡、分析、管理される様子を示すSIEMダッシュボードの例です。',
    viewFullscreen: '全画面表示',
    cta: 'カスタマイズされたソリューションについてお問い合わせください',
    backToServices: 'サービス一覧に戻る',
    imageDescriptions: [
      '異なる重大度レベルのセキュリティ問題を示す脆弱性検出ダッシュボード',
      '認証とセキュリティイベント分析を表示する脅威ハンティングダッシュボード',
      'セキュリティベースライン遵守状況を示す構成監査ダッシュボード',
      '高度な持続的脅威を追跡するためのMITRE ATT&CK フレームワーク分析'
    ]
  }
};

export const siemDashboardImages = [
  "/lovable-uploads/e3889462-6974-4333-a6e4-a15b6fc5b6ef.png",
  "/lovable-uploads/931c7b7b-49db-42f3-9324-083384ac9f3c.png",
  "/lovable-uploads/92e5020e-5779-4e46-a7af-dd6d2a7dabd9.png",
  "/lovable-uploads/36ef94ce-8937-4664-86a9-e4d422854e90.png"
];

// Helper function to get icons based on name
export const getIconByName = (name: string) => {
  switch (name) {
    case 'database':
      return <Database className="h-10 w-10 text-cyber-accent" />;
    case 'activity':
      return <Activity className="h-10 w-10 text-cyber-accent" />;
    case 'search':
      return <Search className="h-10 w-10 text-cyber-accent" />;
    case 'shield':
      return <Shield className="h-10 w-10 text-cyber-accent" />;
    default:
      return <Database className="h-10 w-10 text-cyber-accent" />;
  }
};

export const siemIcons = [
  'database',
  'activity',
  'search',
  'shield'
];
