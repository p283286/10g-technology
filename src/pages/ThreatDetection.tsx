
import React, { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import SIEMDashboardGallery from '@/components/SIEMDashboardGallery';
import { Shield, Search, Activity, AlertTriangle } from 'lucide-react';
import { siemDashboardImages } from '@/data/siemSolutionsContent';

const ThreatDetection = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    zh: {
      title: 'A.I. SIEM + XDR',
      subtitle: '利用先進的AI技術，實時監控並識別潛在的網絡威脅，提供主動防禦策略。',
      description: '我們的A.I. SIEM + XDR解決方案結合了安全信息和事件管理（SIEM）與擴展檢測和響應（XDR）的強大功能，並融入人工智能技術，為您的組織提供全面的網絡安全保護。通過深度學習和行為分析，我們的系統能夠識別複雜的威脅模式，大大減少誤報，並實現更快的威脅檢測和響應。',
      benefits: [
        {
          title: '先進威脅檢測',
          description: '運用AI技術識別複雜的威脅模式，檢測傳統系統難以發現的攻擊。',
          icon: <Shield className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '智能事件分類',
          description: 'AI自動分析並優先處理安全事件，讓安全團隊專注於最重要的威脅。',
          icon: <Search className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '行為分析和異常檢測',
          description: '通過學習正常行為模式，識別可疑的用戶和系統活動。',
          icon: <Activity className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '自動化響應',
          description: '提供自動響應機制，在威脅發生時立即採取行動，減少人工干預需求。',
          icon: <AlertTriangle className="h-10 w-10 text-cyber-accent" />
        }
      ],
      features: [
        'AI驅動的威脅檢測和分析',
        '跨平台數據收集和統一管理',
        '實時安全事件監控和告警',
        '智能異常行為識別',
        '自動化響應和修復建議',
        '高級威脅獵捕功能'
      ],
      dashboardTitle: 'A.I. SIEM + XDR 儀表板示例',
      dashboardDescription: '我們的A.I. SIEM + XDR解決方案提供強大的安全監控和分析能力。以下儀表板展示了系統如何幫助您識別、追踪和應對各種網絡安全威脅。',
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
      title: 'A.I. SIEM + XDR',
      subtitle: 'Utilize advanced AI technology to monitor and identify potential cyber threats in real-time, providing proactive defense strategies.',
      description: 'Our A.I. SIEM + XDR solution combines the powerful capabilities of Security Information and Event Management (SIEM) with Extended Detection and Response (XDR), enhanced by artificial intelligence to provide comprehensive cybersecurity protection for your organization. Through deep learning and behavioral analysis, our system can identify complex threat patterns, significantly reduce false positives, and achieve faster threat detection and response.',
      benefits: [
        {
          title: 'Advanced Threat Detection',
          description: 'Use AI technology to identify complex threat patterns and detect attacks that traditional systems might miss.',
          icon: <Shield className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Intelligent Event Triage',
          description: 'AI automatically analyzes and prioritizes security events, allowing security teams to focus on the most critical threats.',
          icon: <Search className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Behavioral Analysis & Anomaly Detection',
          description: 'Identify suspicious user and system activities by learning normal behavior patterns.',
          icon: <Activity className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Automated Response',
          description: 'Provide automated response mechanisms that take immediate action when threats occur, reducing the need for manual intervention.',
          icon: <AlertTriangle className="h-10 w-10 text-cyber-accent" />
        }
      ],
      features: [
        'AI-driven threat detection and analysis',
        'Cross-platform data collection and unified management',
        'Real-time security event monitoring and alerts',
        'Intelligent anomaly detection',
        'Automated response and remediation recommendations',
        'Advanced threat hunting capabilities'
      ],
      dashboardTitle: 'A.I. SIEM + XDR Dashboard Examples',
      dashboardDescription: 'Our A.I. SIEM + XDR solution provides powerful security monitoring and analytics capabilities. The dashboards below demonstrate how the system helps you identify, track, and respond to various cybersecurity threats.',
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
      title: 'A.I. SIEM + XDR',
      subtitle: '高度なAI技術を活用して潜在的なサイバー脅威をリアルタイムで監視し識別し、積極的な防御戦略を提供します。',
      description: '当社のA.I. SIEM + XDRソリューションは、セキュリティ情報・イベント管理（SIEM）と拡張検出・応答（XDR）の強力な機能を組み合わせ、人工知能によって強化され、組織に包括的なサイバーセキュリティ保護を提供します。ディープラーニングと行動分析を通じて、当社のシステムは複雑な脅威パターンを識別し、誤検出を大幅に減少させ、より迅速な脅威検出と対応を実現します。',
      benefits: [
        {
          title: '高度な脅威検出',
          description: 'AI技術を使用して複雑な脅威パターンを識別し、従来のシステムでは見逃される可能性のある攻撃を検出します。',
          icon: <Shield className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'インテリジェントイベント分類',
          description: 'AIが自動的にセキュリティイベントを分析し優先順位を付け、セキュリティチームが最も重要な脅威に集中できるようにします。',
          icon: <Search className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '行動分析と異常検出',
          description: '通常の行動パターンを学習することで、不審なユーザーとシステム活動を識別します。',
          icon: <Activity className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '自動化された対応',
          description: '脅威が発生した際に即座に行動を起こす自動応答メカニズムを提供し、手動介入の必要性を減らします。',
          icon: <AlertTriangle className="h-10 w-10 text-cyber-accent" />
        }
      ],
      features: [
        'AI駆動の脅威検出と分析',
        'クロスプラットフォームデータ収集と統合管理',
        'リアルタイムのセキュリティイベント監視とアラート',
        'インテリジェントな異常検出',
        '自動化された対応と修復推奨',
        '高度な脅威ハンティング機能'
      ],
      dashboardTitle: 'A.I. SIEM + XDRダッシュボード例',
      dashboardDescription: '当社のA.I. SIEM + XDRソリューションは、強力なセキュリティ監視と分析機能を提供します。以下のダッシュボードは、システムが様々なサイバーセキュリティ脅威を特定し、追跡し、対応する方法を示しています。',
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

  const icons = [
    <Shield className="h-10 w-10 text-cyber-accent" />,
    <Search className="h-10 w-10 text-cyber-accent" />,
    <Activity className="h-10 w-10 text-cyber-accent" />,
    <AlertTriangle className="h-10 w-10 text-cyber-accent" />
  ];

  const currentContent = language === 'zh' ? content.zh : (language === 'ja' ? content.ja : content.en);

  return (
    <div className="min-h-screen flex flex-col">
      {/* ServicePageTemplate provides the main structure */}
      <ServicePageTemplate 
        content={content}
        language={language}
        icons={icons}
      />
      
      {/* SIEM Dashboard Gallery */}
      <SIEMDashboardGallery
        dashboardImages={siemDashboardImages}
        dashboardTitle={currentContent.dashboardTitle}
        dashboardDescription={currentContent.dashboardDescription}
        viewFullscreen={currentContent.viewFullscreen}
        cta={currentContent.cta}
        imageDescriptions={currentContent.imageDescriptions}
      />
    </div>
  );
};

export default ThreatDetection;
