
import React, { useEffect } from 'react';
import { Activity, Clock, Shield, AlertTriangle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const EmergencyResponse = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const content = {
    zh: {
      title: '應急響應與事件管理',
      subtitle: '提供快速有效的安全事件響應服務，最大限度地減少安全事件的影響和損失。',
      description: '我們的應急響應與事件管理團隊為您提供24/7全天候支援，在安全事件發生時快速響應，控制事態發展，並幫助您恢復正常業務運營。我們的方法旨在最大限度地減少安全事件對您組織的影響。',
      benefits: [
        {
          title: '快速事件響應',
          description: '24/7全天候監控與快速響應能力，在事件發生的黃金時間內採取有效行動。',
          icon: <Clock className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '專家分析與調查',
          description: '由經驗豐富的安全專家進行深入的事件分析與調查，準確識別攻擊來源與方法。',
          icon: <Activity className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '損失控制與恢復',
          description: '實施有效的損失控制與系統恢復策略，快速恢復業務運營能力。',
          icon: <Shield className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '事件後分析與加固',
          description: '提供全面的事件後分析，幫助識別安全弱點並加強防禦能力，防止類似事件再次發生。',
          icon: <AlertTriangle className="h-10 w-10 text-cyber-accent" />
        }
      ],
      features: [
        '事件響應計劃制定',
        '安全事件調查與分析',
        '數字取證',
        '惡意軟件分析',
        '應急通信管理',
        '業務連續性規劃'
      ],
      cta: '聯繫我們獲取定制解決方案',
      backToServices: '返回服務列表'
    },
    en: {
      title: 'Emergency Response and Incident Management',
      subtitle: 'Provide rapid and effective security incident response services to minimize the impact and loss of security incidents.',
      description: 'Our Emergency Response and Incident Management team provides 24/7 support to respond quickly to security incidents, control the situation, and help you restore normal business operations. Our approach is designed to minimize the impact of security incidents on your organization.',
      benefits: [
        {
          title: 'Rapid Incident Response',
          description: '24/7 monitoring and quick response capabilities, taking effective action within the golden hours of an incident.',
          icon: <Clock className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Expert Analysis and Investigation',
          description: 'In-depth incident analysis and investigation by experienced security experts to accurately identify attack sources and methods.',
          icon: <Activity className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Loss Control and Recovery',
          description: 'Implement effective loss control and system recovery strategies to quickly restore business operations.',
          icon: <Shield className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Post-Incident Analysis and Hardening',
          description: 'Provide comprehensive post-incident analysis to help identify security weaknesses and strengthen defense capabilities to prevent similar incidents from occurring again.',
          icon: <AlertTriangle className="h-10 w-10 text-cyber-accent" />
        }
      ],
      features: [
        'Incident response planning',
        'Security incident investigation and analysis',
        'Digital forensics',
        'Malware analysis',
        'Emergency communication management',
        'Business continuity planning'
      ],
      cta: 'Contact us for customized solutions',
      backToServices: 'Back to services'
    },
    ja: {
      title: '緊急対応とインシデント管理',
      subtitle: '迅速かつ効果的なセキュリティインシデント対応サービスを提供し、セキュリティインシデントの影響と損失を最小限に抑えます。',
      description: '当社の緊急対応とインシデント管理チームは、24時間365日のサポートを提供し、セキュリティインシデントに迅速に対応し、状況をコントロールし、通常の業務運営を復旧するのを支援します。当社のアプローチは、組織へのセキュリティインシデントの影響を最小限に抑えるように設計されています。',
      benefits: [
        {
          title: '迅速なインシデント対応',
          description: '24時間365日のモニタリングと迅速な対応能力により、インシデント発生のゴールデンタイム内に効果的な行動を取ります。',
          icon: <Clock className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '専門家による分析と調査',
          description: '経験豊富なセキュリティ専門家による詳細なインシデント分析と調査により、攻撃元とメソッドを正確に特定します。',
          icon: <Activity className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '損失制御と回復',
          description: '効果的な損失制御とシステム回復戦略を実施し、業務運営を迅速に復旧します。',
          icon: <Shield className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'インシデント後の分析と強化',
          description: '総合的なインシデント後分析を提供し、セキュリティの弱点を特定し、同様のインシデントが再発しないように防御能力を強化します。',
          icon: <AlertTriangle className="h-10 w-10 text-cyber-accent" />
        }
      ],
      features: [
        'インシデント対応計画の策定',
        'セキュリティインシデントの調査と分析',
        'デジタルフォレンジック',
        'マルウェア分析',
        '緊急コミュニケーション管理',
        '事業継続計画'
      ],
      cta: 'カスタマイズされたソリューションについてお問い合わせください',
      backToServices: 'サービス一覧に戻る'
    }
  };
  
  const icons = [
    <Clock className="h-10 w-10 text-cyber-accent" />,
    <Activity className="h-10 w-10 text-cyber-accent" />,
    <Shield className="h-10 w-10 text-cyber-accent" />,
    <AlertTriangle className="h-10 w-10 text-cyber-accent" />
  ];

  return (
    <ServicePageTemplate 
      content={content}
      language={language}
      icons={icons}
    />
  );
};

export default EmergencyResponse;
