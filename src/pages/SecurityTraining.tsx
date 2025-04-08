
import React, { useEffect } from 'react';
import { Users, Shield, Book, Medal } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const SecurityTraining = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const content = {
    zh: {
      title: '安全意識培訓',
      subtitle: '提升員工安全意識，培養良好的安全習慣，有效預防人為安全事件。',
      description: '我們的安全意識培訓服務針對各級員工提供定制化的安全教育，幫助他們理解網絡安全的重要性並掌握基本的安全技能。通過互動式學習和情景模擬，讓員工成為企業安全防線的重要一環。',
      benefits: [
        {
          title: '提高安全意識',
          description: '幫助員工理解網絡安全的基本概念和最佳實踐，提高整體安全意識和警覺性。',
          icon: <Users className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '降低安全風險',
          description: '減少人為錯誤和不安全行為導致的安全事件，如點擊釣魚郵件、使用弱密碼等。',
          icon: <Shield className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '符合合規要求',
          description: '滿足各種安全合規框架對員工安全培訓的要求，如ISO 27001、PCI DSS等。',
          icon: <Book className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '培養安全文化',
          description: '在組織內建立積極的安全文化，鼓勵員工主動參與安全實踐和報告潛在威脅。',
          icon: <Medal className="h-10 w-10 text-cyber-accent" />,
          videoUrl: '/videos/security-culture-training.mp4'
        }
      ],
      features: [
        '釣魚郵件識別培訓',
        '密碼安全管理',
        '社會工程學防範',
        '安全事件報告流程',
        '移動設備安全使用',
        '辦公環境安全實踐'
      ],
      cta: '聯繫我們獲取定制解決方案',
      backToServices: '返回服務列表'
    },
    en: {
      title: 'Security Awareness Training',
      subtitle: 'Enhance employee security awareness, cultivate good security habits, and effectively prevent human-caused security incidents.',
      description: 'Our Security Awareness Training services provide customized security education for employees at all levels, helping them understand the importance of cybersecurity and master basic security skills. Through interactive learning and scenario simulations, employees become an important part of the enterprise security defense line.',
      benefits: [
        {
          title: 'Improve Security Awareness',
          description: 'Help employees understand the basic concepts and best practices of cybersecurity, enhancing overall security awareness and vigilance.',
          icon: <Users className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Reduce Security Risks',
          description: 'Reduce security incidents caused by human error and unsafe behavior, such as clicking on phishing emails, using weak passwords, etc.',
          icon: <Shield className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Meet Compliance Requirements',
          description: 'Satisfy employee security training requirements of various security compliance frameworks, such as ISO 27001, PCI DSS, etc.',
          icon: <Book className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Cultivate Security Culture',
          description: 'Establish a positive security culture within the organization, encouraging employees to actively participate in security practices and report potential threats.',
          icon: <Medal className="h-10 w-10 text-cyber-accent" />,
          videoUrl: '/videos/security-culture-training.mp4'
        }
      ],
      features: [
        'Phishing email identification training',
        'Password security management',
        'Social engineering prevention',
        'Security incident reporting process',
        'Mobile device security usage',
        'Office environment security practices'
      ],
      cta: 'Contact us for customized solutions',
      backToServices: 'Back to services'
    },
    ja: {
      title: 'セキュリティ意識トレーニング',
      subtitle: '従業員のセキュリティ意識を高め、良好なセキュリティ習慣を育み、人的要因によるセキュリティインシデントを効果的に防止します。',
      description: '当社のセキュリティ意識トレーニングサービスは、あらゆるレベルの従業員にカスタマイズされたセキュリティ教育を提供し、サイバーセキュリティの重要性を理解し、基本的なセキュリティスキルを習得するのを支援します。インタラクティブな学習とシナリオシミュレーションを通じて、従業員は企業のセキュリティ防御ラインの重要な部分になります。',
      benefits: [
        {
          title: 'セキュリティ意識の向上',
          description: '従業員がサイバーセキュリティの基本概念とベストプラクティスを理解し、全体的なセキュリティ意識と警戒心を高めるのを支援します。',
          icon: <Users className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'セキュリティリスクの低減',
          description: 'フィッシングメールのクリックや弱いパスワードの使用など、ヒューマンエラーや安全でない行動によって引き起こされるセキュリティインシデントを減らします。',
          icon: <Shield className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'コンプライアンス要件の充足',
          description: 'ISO 27001、PCI DSSなどの各種セキュリティコンプライアンスフレームワークの従業員セキュリティトレーニング要件を満たします。',
          icon: <Book className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'セキュリティ文化の育成',
          description: '組織内に積極的なセキュリティ文化を確立し、従業員がセキュリティプラクティスに積極的に参加し、潜在的な脅威を報告するよう奨励します。',
          icon: <Medal className="h-10 w-10 text-cyber-accent" />,
          videoUrl: '/videos/security-culture-training.mp4'
        }
      ],
      features: [
        'フィッシングメール識別トレーニング',
        'パスワードセキュリティ管理',
        'ソーシャルエンジニアリング防止',
        'セキュリティインシデント報告プロセス',
        'モバイルデバイスセキュリティ使用',
        'オフィス環境セキュリティプラクティス'
      ],
      cta: 'カスタマイズされたソリューションについてお問い合わせください',
      backToServices: 'サービス一覧に戻る'
    }
  };
  
  const icons = [
    <Users className="h-10 w-10 text-cyber-accent" />,
    <Shield className="h-10 w-10 text-cyber-accent" />,
    <Book className="h-10 w-10 text-cyber-accent" />,
    <Medal className="h-10 w-10 text-cyber-accent" />
  ];

  return (
    <ServicePageTemplate 
      content={content}
      language={language}
      icons={icons}
    />
  );
};

export default SecurityTraining;
