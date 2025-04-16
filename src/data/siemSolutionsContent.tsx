import React from 'react';
import { Activity, AlertTriangle, BarChart, Clock, Database, Eye, FileSearch, Monitor, Search, Shield } from 'lucide-react';

export interface SIEMSolutionsContentType {
  title: string;
  subtitle: string;
  description: string;
  benefits: {
    title: string;
    description: string;
    iconName: string;
  }[];
  features: string[];
  dashboardTitle: string;
  dashboardDescription: string;
  viewFullscreen: string;
  cta: string;
  backToServices: string;
  imageDescriptions: string[];
}

interface ContentType {
  zh: SIEMSolutionsContentType;
  en: SIEMSolutionsContentType;
  ja: SIEMSolutionsContentType;
}

export const siemSolutionsContent: ContentType = {
  zh: {
    title: 'SIEM解決方案',
    subtitle: '全面的安全信息與事件管理解決方案，幫助企業快速識別、分析和應對安全威脅。',
    description: '我們的SIEM（安全信息與事件管理）解決方案為企業提供集中的日誌收集、實時監控、安全分析和事件響應能力，助您全面提升安全態勢感知，確保業務連續性。',
    benefits: [
      {
        title: '全面可視化',
        description: '整合各種安全日誌和事件數據，提供網絡環境的完整可視性，快速發現潛在威脅。',
        iconName: 'eye'
      },
      {
        title: '實時威脅檢測',
        description: '利用先進的關聯分析和行為分析技術，實時識別可疑活動和潛在安全事件。',
        iconName: 'alertTriangle'
      },
      {
        title: '自動化響應',
        description: '預設響應工作流程，自動執行初步應對措施，大大縮短安全事件的處理時間。',
        iconName: 'clock'
      },
      {
        title: '合規性支持',
        description: '豐富的內置報告和審計功能，幫助企業輕鬆滿足各種安全合規性要求。',
        iconName: 'fileSearch'
      }
    ],
    features: [
      '集中日誌管理',
      '高級威脅檢測',
      '安全事件關聯分析',
      '用戶行為分析',
      '自動化安全響應',
      '安全合規報告'
    ],
    dashboardTitle: 'SIEM儀表板',
    dashboardDescription: '我們的SIEM平台提供直觀的儀表板和視覺化工具，讓安全團隊能夠快速了解企業的安全狀態，有效識別和處理潛在威脅。',
    viewFullscreen: '查看全屏',
    cta: '聯繫我們獲取定制解決方案',
    backToServices: '返回服務列表',
    imageDescriptions: [
      '安全事件監控總覽',
      '威脅檢測與分析界面',
      '網絡流量異常分析',
      '合規性報告儀表板'
    ]
  },
  en: {
    title: 'SIEM Solutions',
    subtitle: 'Comprehensive security information and event management solutions to help enterprises quickly identify, analyze, and respond to security threats.',
    description: 'Our SIEM (Security Information and Event Management) solutions provide enterprises with centralized log collection, real-time monitoring, security analysis, and incident response capabilities, helping you comprehensively enhance security situational awareness and ensure business continuity.',
    benefits: [
      {
        title: 'Comprehensive Visibility',
        description: 'Integrate various security logs and event data to provide complete visibility of the network environment, quickly discovering potential threats.',
        iconName: 'eye'
      },
      {
        title: 'Real-time Threat Detection',
        description: 'Utilize advanced correlation analysis and behavioral analysis technologies to identify suspicious activities and potential security incidents in real-time.',
        iconName: 'alertTriangle'
      },
      {
        title: 'Automated Response',
        description: 'Preset response workflows to automatically execute initial countermeasures, significantly reducing the processing time of security incidents.',
        iconName: 'clock'
      },
      {
        title: 'Compliance Support',
        description: 'Rich built-in reporting and auditing capabilities help enterprises easily meet various security compliance requirements.',
        iconName: 'fileSearch'
      }
    ],
    features: [
      'Centralized log management',
      'Advanced threat detection',
      'Security event correlation analysis',
      'User behavior analysis',
      'Automated security response',
      'Security compliance reporting'
    ],
    dashboardTitle: 'SIEM Dashboard',
    dashboardDescription: 'Our SIEM platform provides intuitive dashboards and visualization tools, allowing security teams to quickly understand the enterprise\'s security status and effectively identify and handle potential threats.',
    viewFullscreen: 'View Fullscreen',
    cta: 'Contact us for customized solutions',
    backToServices: 'Back to services',
    imageDescriptions: [
      'Security event monitoring overview',
      'Threat detection and analysis interface',
      'Network traffic anomaly analysis',
      'Compliance reporting dashboard'
    ]
  },
  ja: {
    title: 'SIEMソリューション',
    subtitle: '企業がセキュリティ脅威を迅速に特定、分析、対応するための包括的なセキュリティ情報およびイベント管理ソリューション。',
    description: '当社のSIEM（セキュリティ情報およびイベント管理）ソリューションは、集中型ログ収集、リアルタイム監視、セキュリティ分析、インシデント対応機能を企業に提供し、セキュリティ状況の認識を包括的に強化し、ビジネスの継続性を確保するのを支援します。',
    benefits: [
      {
        title: '包括的な可視化',
        description: 'さまざまなセキュリティログとイベントデータを統合して、ネットワーク環境の完全な可視性を提供し、潜在的な脅威を素早く発見します。',
        iconName: 'eye'
      },
      {
        title: 'リアルタイム脅威検出',
        description: '高度な相関分析と行動分析技術を活用して、不審なアクティビティと潜在的なセキュリティインシデントをリアルタイムで識別します。',
        iconName: 'alertTriangle'
      },
      {
        title: '自動化された対応',
        description: '事前設定された対応ワークフローで初期対策を自動的に実行し、セキュリティインシデントの処理時間を大幅に短縮します。',
        iconName: 'clock'
      },
      {
        title: 'コンプライアンスサポート',
        description: '豊富な組み込みレポートおよび監査機能により、企業はさまざまなセキュリティコンプライアンス要件を簡単に満たすことができます。',
        iconName: 'fileSearch'
      }
    ],
    features: [
      '集中型ログ管理',
      '高度な脅威検出',
      'セキュリティイベント相関分析',
      'ユーザー行動分析',
      '自動化されたセキュリティ対応',
      'セキュリティコンプライアンスレポーティング'
    ],
    dashboardTitle: 'SIEMダッシュボード',
    dashboardDescription: '当社のSIEMプラットフォームは直感的なダッシュボードと視覚化ツールを提供し、セキュリティチームが企業のセキュリティ状況を迅速に理解し、潜在的な脅威を効果的に特定および処理できるようにします。',
    viewFullscreen: '全画面表示',
    cta: 'カスタマイズされたソリューションについてお問い合わせください',
    backToServices: 'サービス一覧に戻る',
    imageDescriptions: [
      'セキュリティイベント監視概要',
      '脅威検出と分析インターフェース',
      'ネットワークトラフィック異常分析',
      'コンプライアンスレポートダッシュボード'
    ]
  }
};

export const siemDashboardImages = [
  '/lovable-uploads/931c7b7b-49db-42f3-9324-083384ac9f3c.png',
  '/lovable-uploads/92e5020e-5779-4e46-a7af-dd6d2a7dabd9.png',
  '/lovable-uploads/e3889462-6974-4333-a6e4-a15b6fc5b6ef.png',
  '/lovable-uploads/eca7515e-215f-47b2-a4c6-8c64fa72b72c.png',
];

export const siemIcons = ['eye', 'alertTriangle', 'clock', 'fileSearch', 'barChart', 'database', 'shield', 'monitor', 'activity', 'search'];

export const getIconByName = (iconName: string) => {
  const iconProps = { className: "h-10 w-10 text-cyber-accent" };
  
  switch(iconName) {
    case 'eye':
      return <Eye {...iconProps} />;
    case 'alertTriangle':
      return <AlertTriangle {...iconProps} />;
    case 'clock':
      return <Clock {...iconProps} />;
    case 'fileSearch':
      return <FileSearch {...iconProps} />;
    case 'barChart':
      return <BarChart {...iconProps} />;
    case 'database':
      return <Database {...iconProps} />;
    case 'shield':
      return <Shield {...iconProps} />;
    case 'monitor':
      return <Monitor {...iconProps} />;
    case 'activity':
      return <Activity {...iconProps} />;
    case 'search':
      return <Search {...iconProps} />;
    default:
      return <Shield {...iconProps} />;
  }
};
