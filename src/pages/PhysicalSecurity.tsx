
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
      description: `保護關鍵基礎設施（電腦系統）條例已於2025年3月19日獲香港立法會通過，預計將於2026年1月1日生效。

該條例專注於保護關鍵基礎設施，將使香港與全球趨勢保持一致，即對網絡安全和營運韌性的監管審查和要求日益嚴格，正如澳洲、歐盟和英國等其他司法管轄區所見。

該條例將規管指定的關鍵基礎設施營運商及其被指定為關鍵電腦系統的電腦系統。它還將設立專員辦公室來監督和執行新制度（預計在2026年第一季度內）。

關鍵定義：
關鍵基礎設施（CI）– 對社會和經濟運作至關重要的系統、設施和資產，分為兩個類別：

第一類：在香港提供基本服務的基礎設施，涵蓋以下指定行業：能源、資訊科技、銀行和金融服務、航空運輸、陸路運輸、海事運輸、醫療服務，以及電訊和廣播服務。

第二類：任何其他基礎設施，其損壞、功能喪失或數據洩露可能阻礙或以其他方式重大影響香港關鍵社會或經濟活動的維持。政府已表示主要體育和表演場地、研發園區為此類別基礎設施的例子。

排除項目：該條例不適用於政府營運的某些基本基礎設施/服務，例如供水、排水和緊急救援。

我們提供完整的合規服務套件，包括滲透測試、漏洞掃描、SIEM監控、日誌存儲和安全意識培訓等服務，幫助企業全面符合該條例的要求，確保關鍵基礎設施的網絡安全。`,
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
      description: `The Protection of Critical Infrastructure (Computer System) Ordinance was passed by the Hong Kong Legislative Council on 19 March 2025. It is expected to take effect on 1 January 2026.

The Ordinance focuses on protecting critical infrastructure, and will bring Hong Kong in line with the global trend of increasing regulatory scrutiny of and requirements for cybersecurity and operational resilience, as seen in other jurisdictions such as Australia, the EU, and the UK.

The Ordinance will regulate designated Critical Infrastructure Operators and their computer systems that have been designated as Critical Computer Systems. It will also establish a Commissioner's Office to oversee and enforce the new regime (expected within the first quarter of 2026).

**Key defined terms for the Ordinance:**

Critical Infrastructure ("CI") – systems, facilities, and assets that are vital for the functioning of society and the economy, in the following two categories:

**Category 1:** Infrastructure for delivering essential services in Hong Kong in the following specified sectors: energy, information technology, banking and financial services, air transport, land transport, maritime transport, health services, and telecommunications and broadcasting services.

**Category 2:** Any other infrastructure, the damage, loss of functionality or data leakage of which may hinder or otherwise substantially affect the maintenance of critical societal or economic activities in Hong Kong. The Government has stated major sports and performance venues, research and development parks as being examples of infrastructure in this category.

**Excluded:** The Ordinance does not apply to certain essential infrastructure/services that are operated by the government – e.g. water supply, drainage and emergency relief.

We provide a complete compliance service suite including penetration testing, vulnerability scanning, SIEM monitoring, log storage, and security awareness training to help enterprises fully comply with the Ordinance requirements, ensuring cybersecurity of critical infrastructures.`,
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
      description: `重要インフラ（コンピュータシステム）保護条例は、2025年3月19日に香港立法会で可決されました。2026年1月1日に施行される予定です。

この条例は重要インフラの保護に焦点を当て、オーストラリア、EU、英国などの他の法域で見られるように、サイバーセキュリティと運用レジリエンスに対する規制監視と要件の増加という世界的傾向に香港を合わせるものです。

この条例は、指定された重要インフラ事業者とその重要コンピュータシステムとして指定されたコンピュータシステムを規制します。また、新体制を監督・執行するための専門委員会事務所を設立します（2026年第1四半期内に予定）。

**条例の主要な定義用語：**

重要インフラ（CI）– 社会と経済の機能にとって重要なシステム、施設、資産で、以下の2つのカテゴリーに分類されます：

**カテゴリー1：** 香港で必須サービスを提供するインフラで、以下の指定分野をカバーします：エネルギー、情報技術、銀行・金融サービス、航空輸送、陸上輸送、海上輸送、医療サービス、通信・放送サービス。

**カテゴリー2：** その他のインフラで、損傷、機能喪失、またはデータ漏洩が香港の重要な社会的または経済的活動の維持を妨げるか、その他大幅に影響を与える可能性があるもの。政府は、主要なスポーツ・パフォーマンス会場、研究開発パークをこのカテゴリーのインフラの例として挙げています。

**除外項目：** この条例は、政府が運営する特定の必須インフラ/サービス（例：給水、排水、緊急救援）には適用されません。

私たちは、侵入テスト、脆弱性スキャン、SIEM監視、ログストレージ、セキュリティ意識トレーニングを含む完全なコンプライアンスサービススイートを提供し、企業がこの条例の要件を完全に満たし、重要インフラのサイバーセキュリティを確保することを支援します。`,
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
