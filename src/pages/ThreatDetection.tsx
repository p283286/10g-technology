
import React, { useEffect } from 'react';
import { AlertTriangle, Database, Eye, Activity } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import SecurityDashboardGallery from '@/components/SecurityDashboardGallery';

const ThreatDetection = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const dashboardImages = [
    '/images/threat-dashboard-1.png',
    '/images/threat-dashboard-2.png',
    '/images/threat-dashboard-3.png',
  ];
  
  const content = {
    zh: {
      title: '威脅檢測與監控',
      subtitle: '全天候監控您的網絡和系統，及時發現和應對安全威脅。',
      description: '我們的威脅檢測與監控服務提供24/7全天候的安全監控，利用先進的安全技術和專業團隊，及時發現可疑活動和安全威脅，幫助您在威脅造成損害前進行防範和控制。',
      benefits: [
        {
          title: '全天候安全監控',
          description: '我們的安全專家和先進系統全天候監控您的網絡環境，確保及時發現並應對安全事件。',
          icon: <Eye className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '威脅情報整合',
          description: '整合全球威脅情報，快速識別新型威脅和攻擊模式，提升安全檢測能力。',
          icon: <AlertTriangle className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '異常行為檢測',
          description: '基於行為分析和機器學習技術，識別並警報可疑的網絡活動和用戶行為。',
          icon: <Database className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '快速事件響應',
          description: '安全事件發生時，我們的團隊迅速分析並提供應對建議，最大限度減少威脅影響。',
          icon: <Activity className="h-10 w-10 text-cyber-accent" />
        }
      ],
      features: [
        'SIEM系統部署與管理',
        '網絡流量分析',
        '端點異常監控',
        '日誌收集與關聯分析',
        '威脅情報訂閱與整合',
        '定期安全報告與建議'
      ],
      dashboardTitle: '威脅監控儀表板',
      dashboardDescription: '我們的威脅檢測平台提供直觀的安全儀表板，讓您實時了解網絡安全狀態和潛在威脅。',
      viewFullscreen: '查看全屏',
      cta: '聯繫我們獲取定制解決方案',
      backToServices: '返回服務列表',
      imageDescriptions: [
        '全網安全概覽儀表板',
        '威脅檢測與分析界面',
        '安全事件分析與處理流程'
      ]
    },
    en: {
      title: 'Threat Detection and Monitoring',
      subtitle: 'Round-the-clock monitoring of your networks and systems to promptly identify and respond to security threats.',
      description: 'Our Threat Detection and Monitoring services provide 24/7 security monitoring, leveraging advanced security technologies and professional teams to promptly identify suspicious activities and security threats, helping you prevent and control threats before they cause damage.',
      benefits: [
        {
          title: 'Round-the-Clock Security Monitoring',
          description: 'Our security experts and advanced systems monitor your network environment around the clock to ensure timely detection and response to security incidents.',
          icon: <Eye className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Threat Intelligence Integration',
          description: 'Integrate global threat intelligence to quickly identify new threats and attack patterns, enhancing security detection capabilities.',
          icon: <AlertTriangle className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Abnormal Behavior Detection',
          description: 'Based on behavioral analysis and machine learning technologies, identify and alert on suspicious network activities and user behaviors.',
          icon: <Database className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Rapid Incident Response',
          description: 'When security incidents occur, our team quickly analyzes and provides response recommendations to minimize threat impact.',
          icon: <Activity className="h-10 w-10 text-cyber-accent" />
        }
      ],
      features: [
        'SIEM system deployment and management',
        'Network traffic analysis',
        'Endpoint anomaly monitoring',
        'Log collection and correlation analysis',
        'Threat intelligence subscription and integration',
        'Regular security reports and recommendations'
      ],
      dashboardTitle: 'Threat Monitoring Dashboard',
      dashboardDescription: 'Our threat detection platform provides intuitive security dashboards that give you real-time insights into your network security status and potential threats.',
      viewFullscreen: 'View Fullscreen',
      cta: 'Contact us for customized solutions',
      backToServices: 'Back to services',
      imageDescriptions: [
        'Network-wide security overview dashboard',
        'Threat detection and analysis interface',
        'Security incident analysis and handling process'
      ]
    },
    ja: {
      title: '脅威検出と監視',
      subtitle: 'ネットワークとシステムを24時間体制で監視し、セキュリティ脅威を迅速に特定し対応します。',
      description: '当社の脅威検出と監視サービスは、24時間365日のセキュリティ監視を提供し、高度なセキュリティ技術と専門チームを活用して不審なアクティビティとセキュリティ脅威を迅速に特定し、脅威が被害をもたらす前に防止およびコントロールを支援します。',
      benefits: [
        {
          title: '24時間体制のセキュリティ監視',
          description: '当社のセキュリティ専門家と高度なシステムがネットワーク環境を常時監視し、セキュリティインシデントの適時検出と対応を確保します。',
          icon: <Eye className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '脅威インテリジェンスの統合',
          description: 'グローバルな脅威インテリジェンスを統合して、新しい脅威と攻撃パターンを迅速に特定し、セキュリティ検出能力を強化します。',
          icon: <AlertTriangle className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '異常行動検出',
          description: '行動分析と機械学習技術に基づいて、疑わしいネットワークアクティビティとユーザー行動を特定しアラートを発します。',
          icon: <Database className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '迅速なインシデント対応',
          description: 'セキュリティインシデントが発生した場合、当社のチームは迅速に分析し、脅威の影響を最小限に抑えるための対応推奨事項を提供します。',
          icon: <Activity className="h-10 w-10 text-cyber-accent" />
        }
      ],
      features: [
        'SIEMシステムの展開と管理',
        'ネットワークトラフィック分析',
        'エンドポイント異常監視',
        'ログ収集と相関分析',
        '脅威インテリジェンスのサブスクリプションと統合',
        '定期的なセキュリティレポートと推奨事項'
      ],
      dashboardTitle: '脅威監視ダッシュボード',
      dashboardDescription: '当社の脅威検出プラットフォームは、直感的なセキュリティダッシュボードを提供し、ネットワークセキュリティの状態と潜在的な脅威をリアルタイムで把握できます。',
      viewFullscreen: '全画面表示',
      cta: 'カスタマイズされたソリューションについてお問い合わせください',
      backToServices: 'サービス一覧に戻る',
      imageDescriptions: [
        'ネットワーク全体のセキュリティ概要ダッシュボード',
        '脅威検出と分析インターフェース',
        'セキュリティインシデント分析と処理プロセス'
      ]
    }
  };
  
  const icons = [
    <Eye className="h-10 w-10 text-cyber-accent" />,
    <AlertTriangle className="h-10 w-10 text-cyber-accent" />,
    <Database className="h-10 w-10 text-cyber-accent" />,
    <Activity className="h-10 w-10 text-cyber-accent" />
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <ServicePageTemplate 
        content={content}
        language={language}
        icons={icons}
      />
      
      <SecurityDashboardGallery
        dashboardImages={dashboardImages}
        dashboardTitle={content[language].dashboardTitle}
        dashboardDescription={content[language].dashboardDescription}
        viewFullscreen={content[language].viewFullscreen}
        imageDescriptions={content[language].imageDescriptions}
      />
    </div>
  );
};

export default ThreatDetection;
