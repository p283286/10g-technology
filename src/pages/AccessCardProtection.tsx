
import React, { useEffect } from 'react';
import { Key, Shield, AlertTriangle, Search } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const AccessCardProtection = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const content = {
    zh: {
      title: '門禁卡克隆防護',
      subtitle: '評估和加強門禁系統安全性，防止未授權的門禁卡複製和使用。',
      description: '我們的門禁卡克隆防護服務專注於評估您的門禁系統安全性，識別可能被利用於複製門禁卡的漏洞。我們提供全面的解決方案，保護您的設施免受未授權訪問，確保只有授權人員才能進入受限區域。',
      benefits: [
        {
          title: '門禁系統安全評估',
          description: '全面評估現有門禁系統的安全性，識別可能被用於克隆或繞過門禁卡的漏洞。',
          icon: <Key className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '高安全性訪問控制',
          description: '實施高安全性的訪問控制解決方案，如多因素認證和加密門禁卡技術，防止未授權訪問。',
          icon: <Shield className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '異常訪問檢測',
          description: '部署異常訪問檢測系統，及時識別可能的門禁卡克隆或濫用行為，並自動發出警報。',
          icon: <AlertTriangle className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '訪問審計與分析',
          description: '建立完善的訪問日誌和審計系統，分析訪問模式，識別潛在的安全風險和未授權使用。',
          icon: <Search className="h-10 w-10 text-cyber-accent" />
        }
      ],
      features: [
        'RFID門禁卡安全測試',
        '門禁系統漏洞評估',
        '智能卡技術升級',
        '訪問控制策略審查',
        '安全意識培訓',
        '緊急訪問控制流程設計'
      ],
      cta: '聯繫我們獲取定制解決方案',
      backToServices: '返回服務列表'
    },
    en: {
      title: 'Access Card Cloning Protection',
      subtitle: 'Assess and enhance the security of access control systems to prevent unauthorized copying and use of access cards.',
      description: 'Our Access Card Cloning Protection services focus on assessing the security of your access control systems, identifying vulnerabilities that could be exploited to clone access cards. We provide comprehensive solutions to protect your facilities from unauthorized access, ensuring only authorized personnel can enter restricted areas.',
      benefits: [
        {
          title: 'Access System Security Assessment',
          description: 'Comprehensively assess the security of existing access control systems, identifying vulnerabilities that could be used to clone or bypass access cards.',
          icon: <Key className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'High-Security Access Control',
          description: 'Implement high-security access control solutions, such as multi-factor authentication and encrypted access card technologies, to prevent unauthorized access.',
          icon: <Shield className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Abnormal Access Detection',
          description: 'Deploy abnormal access detection systems to promptly identify potential access card cloning or misuse behaviors, with automatic alerts.',
          icon: <AlertTriangle className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Access Audit and Analysis',
          description: 'Establish comprehensive access logging and audit systems to analyze access patterns and identify potential security risks and unauthorized use.',
          icon: <Search className="h-10 w-10 text-cyber-accent" />
        }
      ],
      features: [
        'RFID access card security testing',
        'Access control system vulnerability assessment',
        'Smart card technology upgrade',
        'Access control policy review',
        'Security awareness training',
        'Emergency access control process design'
      ],
      cta: 'Contact us for customized solutions',
      backToServices: 'Back to services'
    },
    ja: {
      title: 'アクセスカードクローニング保護',
      subtitle: 'アクセス制御システムのセキュリティを評価および強化し、アクセスカードの不正コピーおよび使用を防止します。',
      description: '当社のアクセスカードクローニング保護サービスは、アクセス制御システムのセキュリティを評価し、アクセスカードを複製するために悪用される可能性のある脆弱性を特定することに焦点を当てています。当社は、不正アクセスから施設を保護し、許可された担当者のみが制限区域に入れるようにするための包括的なソリューションを提供します。',
      benefits: [
        {
          title: 'アクセスシステムセキュリティ評価',
          description: '既存のアクセス制御システムのセキュリティを総合的に評価し、アクセスカードの複製またはバイパスに使用される可能性のある脆弱性を特定します。',
          icon: <Key className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '高セキュリティアクセス制御',
          description: '多要素認証や暗号化されたアクセスカード技術などの高セキュリティアクセス制御ソリューションを実装し、不正アクセスを防止します。',
          icon: <Shield className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '異常アクセス検出',
          description: '異常アクセス検出システムを導入して、アクセスカードの複製や誤用の可能性を迅速に識別し、自動アラートを発します。',
          icon: <AlertTriangle className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'アクセス監査と分析',
          description: '包括的なアクセスログと監査システムを確立し、アクセスパターンを分析して、潜在的なセキュリティリスクと不正使用を特定します。',
          icon: <Search className="h-10 w-10 text-cyber-accent" />
        }
      ],
      features: [
        'RFIDアクセスカードセキュリティテスト',
        'アクセス制御システム脆弱性評価',
        'スマートカード技術アップグレード',
        'アクセス制御ポリシーレビュー',
        'セキュリティ意識トレーニング',
        '緊急アクセス制御プロセス設計'
      ],
      cta: 'カスタマイズされたソリューションについてお問い合わせください',
      backToServices: 'サービス一覧に戻る'
    }
  };
  
  const icons = [
    <Key className="h-10 w-10 text-cyber-accent" />,
    <Shield className="h-10 w-10 text-cyber-accent" />,
    <AlertTriangle className="h-10 w-10 text-cyber-accent" />,
    <Search className="h-10 w-10 text-cyber-accent" />
  ];

  return (
    <ServicePageTemplate 
      content={content}
      language={language}
      icons={icons}
    />
  );
};

export default AccessCardProtection;
