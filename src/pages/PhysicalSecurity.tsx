
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
    },
    ja: {
      title: '物理的セキュリティ評価',
      subtitle: '物理的施設のセキュリティを評価し、侵入リスクを特定し、改善のための推奨事項を提供します。',
      description: '当社の物理的セキュリティ評価サービスは、組織の物理的セキュリティ対策を包括的に評価し、悪用される可能性のある脆弱性を特定します。アクセス制御、監視システム、物理的バリアを調査することにより、重要な資産と機密エリアの保護を強化します。',
      benefits: [
        {
          title: '包括的な物理リスク評価',
          description: '人員、プロセス、技術の側面を含む施設の物理的セキュリティリスクを体系的に評価し、潜在的なセキュリティ脆弱性を特定します。',
          icon: <Users className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '階層型防御戦略計画',
          description: '重要な資産を適切に保護し、不正アクセスのリスクを軽減するために、多層物理防御戦略を設計および実施します。',
          icon: <Shield className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'アクセス制御システム評価',
          description: '既存のアクセス制御システムの有効性を評価し、回避または侵害される可能性のある脆弱性を特定し、強化のための推奨事項を提供します。',
          icon: <Search className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '監視および対応能力の強化',
          description: '物理的セキュリティ監視システムとインシデント対応能力を評価および改善して、セキュリティインシデントの適時検出および対応を確保します。',
          icon: <Monitor className="h-10 w-10 text-cyber-accent" />
        }
      ],
      features: [
        '施設アクセス制御評価',
        '監視システムの有効性チェック',
        '物理的セキュリティポリシーレビュー',
        'セキュリティ人員トレーニング評価',
        '緊急対応計画テスト',
        '機密エリア保護評価'
      ],
      cta: 'カスタマイズされたソリューションについてお問い合わせください',
      backToServices: 'サービス一覧に戻る'
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
