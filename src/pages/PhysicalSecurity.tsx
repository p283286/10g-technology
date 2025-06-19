
import React, { useEffect } from 'react';
import { FileText, Shield, Search, Monitor, Database, AlertTriangle, BookOpen, Activity } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const PhysicalSecurity = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const content = {
    zh: {
      title: '保護關鍵基礎設施（電腦系統）條例',
      subtitle: '全面合規服務套件，幫助企業符合政府法規要求，保護關鍵基礎設施安全。',
      description: '我們提供完整的合規服務套件，包括滲透測試、漏洞掃描、SIEM監控、日誌存儲和安全意識培訓等服務，幫助企業全面符合《保護關鍵基礎設施（電腦系統）條例》的要求，確保關鍵基礎設施的網絡安全。',
      benefits: [
        {
          title: '全面合規評估',
          description: '通過專業的滲透測試和漏洞評估，識別系統安全弱點，確保符合法規要求的安全標準。',
          icon: <Shield className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '持續監控與檢測',
          description: '部署SIEM解決方案進行24/7安全監控，實時檢測威脅並生成合規報告。',
          icon: <Monitor className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '完整日誌管理',
          description: '建立符合法規要求的日誌存儲和管理系統，確保審計追蹤的完整性和可用性。',
          icon: <Database className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '人員安全培訓',
          description: '提供全面的安全意識培訓，建立符合合規要求的安全文化和操作程序。',
          icon: <BookOpen className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '事件響應能力',
          description: '建立完善的安全事件響應機制，確保快速有效地處理安全事件並符合報告要求。',
          icon: <Activity className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '風險管理框架',
          description: '建立全面的風險評估和管理框架，持續改進安全態勢以滿足不斷變化的法規要求。',
          icon: <AlertTriangle className="h-10 w-10 text-cyber-accent" />
        }
      ],
      features: [
        '滲透測試與安全評估',
        '漏洞掃描與管理',
        'SIEM部署與監控',
        '安全日誌存儲與分析',
        '安全意識培訓計劃',
        '合規報告與文檔',
        '風險評估與管理',
        '安全事件響應',
        '安全政策制定',
        '持續合規監測'
      ],
      cta: '聯繫我們獲取合規解決方案',
      backToServices: '返回服務列表'
    },
    en: {
      title: 'Protection of Critical Infrastructures (Computer Systems) Bill',
      subtitle: 'Comprehensive compliance service suite to help enterprises meet government regulatory requirements and protect critical infrastructure security.',
      description: 'We provide a complete compliance service suite including penetration testing, vulnerability scanning, SIEM monitoring, log storage, and security awareness training to help enterprises fully comply with the Protection of Critical Infrastructures (Computer Systems) Bill requirements, ensuring cybersecurity of critical infrastructures.',
      benefits: [
        {
          title: 'Comprehensive Compliance Assessment',
          description: 'Identify system security weaknesses through professional penetration testing and vulnerability assessment to ensure compliance with regulatory security standards.',
          icon: <Shield className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Continuous Monitoring & Detection',
          description: 'Deploy SIEM solutions for 24/7 security monitoring, real-time threat detection, and compliance reporting generation.',
          icon: <Monitor className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Complete Log Management',
          description: 'Establish regulatory-compliant log storage and management systems to ensure audit trail integrity and availability.',
          icon: <Database className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Personnel Security Training',
          description: 'Provide comprehensive security awareness training to establish compliant security culture and operational procedures.',
          icon: <BookOpen className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Incident Response Capabilities',
          description: 'Establish comprehensive security incident response mechanisms to ensure rapid, effective incident handling and meet reporting requirements.',
          icon: <Activity className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Risk Management Framework',
          description: 'Establish comprehensive risk assessment and management frameworks for continuous security posture improvement to meet evolving regulatory requirements.',
          icon: <AlertTriangle className="h-10 w-10 text-cyber-accent" />
        }
      ],
      features: [
        'Penetration testing & security assessment',
        'Vulnerability scanning & management',
        'SIEM deployment & monitoring',
        'Security log storage & analysis',
        'Security awareness training programs',
        'Compliance reporting & documentation',
        'Risk assessment & management',
        'Security incident response',
        'Security policy development',
        'Continuous compliance monitoring'
      ],
      cta: 'Contact us for compliance solutions',
      backToServices: 'Back to services'
    },
    ja: {
      title: '重要インフラ（コンピュータシステム）保護法',
      subtitle: '政府規制要件を満たし、重要インフラのセキュリティを保護するための包括的なコンプライアンスサービススイート。',
      description: '侵入テスト、脆弱性スキャン、SIEM監視、ログストレージ、セキュリティ意識トレーニングを含む完全なコンプライアンスサービススイートを提供し、企業が重要インフラ（コンピュータシステム）保護法の要件を完全に満たし、重要インフラのサイバーセキュリティを確保します。',
      benefits: [
        {
          title: '包括的なコンプライアンス評価',
          description: '専門的な侵入テストと脆弱性評価を通じてシステムのセキュリティ弱点を特定し、規制セキュリティ基準への準拠を確保します。',
          icon: <Shield className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '継続的な監視と検出',
          description: '24/7セキュリティ監視、リアルタイム脅威検出、コンプライアンスレポート生成のためのSIEMソリューションを展開します。',
          icon: <Monitor className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '完全なログ管理',
          description: '監査証跡の完全性と可用性を確保するための規制準拠ログストレージおよび管理システムを確立します。',
          icon: <Database className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '人員セキュリティトレーニング',
          description: '準拠したセキュリティ文化と運用手順を確立するための包括的なセキュリティ意識トレーニングを提供します。',
          icon: <BookOpen className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'インシデント対応能力',
          description: '迅速で効果的なインシデント処理を確保し、報告要件を満たすための包括的なセキュリティインシデント対応メカニズムを確立します。',
          icon: <Activity className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'リスク管理フレームワーク',
          description: '進化する規制要件を満たすために継続的なセキュリティ態勢改善のための包括的なリスク評価および管理フレームワークを確立します。',
          icon: <AlertTriangle className="h-10 w-10 text-cyber-accent" />
        }
      ],
      features: [
        '侵入テストとセキュリティ評価',
        '脆弱性スキャンと管理',
        'SIEM展開と監視',
        'セキュリティログストレージと分析',
        'セキュリティ意識トレーニングプログラム',
        'コンプライアンスレポートと文書化',
        'リスク評価と管理',
        'セキュリティインシデント対応',
        'セキュリティポリシー開発',
        '継続的なコンプライアンス監視'
      ],
      cta: 'コンプライアンスソリューションについてお問い合わせください',
      backToServices: 'サービス一覧に戻る'
    }
  };
  
  const icons = [
    <Shield className="h-10 w-10 text-cyber-accent" />,
    <Monitor className="h-10 w-10 text-cyber-accent" />,
    <Database className="h-10 w-10 text-cyber-accent" />,
    <BookOpen className="h-10 w-10 text-cyber-accent" />,
    <Activity className="h-10 w-10 text-cyber-accent" />,
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

export default PhysicalSecurity;
