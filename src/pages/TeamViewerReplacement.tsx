
import React, { useEffect } from 'react';
import { Monitor, Shield, Users, Video, Clock, Database, Key, Eye } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Card, CardContent } from '@/components/ui/card';

const TeamViewerReplacement = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const content = {
    zh: {
      title: 'TeamViewer替代方案',
      subtitle: '超低成本的企業遠程桌面解決方案，固定月費支援無限用戶，專屬伺服器保護企業隱私。',
      description: '我們的TeamViewer替代方案提供企業級遠程桌面服務，採用固定月費制度支援無限用戶接入，配備專屬中國頻寬伺服器，支援多重認證、H.265視頻壓縮技術，並提供完整的會話錄製功能，確保企業數據安全與隱私保護。',
      benefits: [
        {
          title: '超低成本無限用戶',
          description: '固定月費制度，無論多少用戶同時使用都不會產生額外費用，大幅降低企業運營成本。',
          icon: <Users className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '多重認證安全保障',
          description: '支援Google Authenticator、Microsoft Authenticator和Telegram 2FA通知，確保遠程連接的安全性。',
          icon: <Shield className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'H.265高效壓縮',
          description: '採用最新H.265視頻壓縮技術，提供高畫質同時節省頻寬，確保流暢的遠程操作體驗。',
          icon: <Video className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '專屬伺服器隱私保護',
          description: '客戶擁有專屬伺服器配備中國頻寬，所有數據完全隔離，確保企業機密資料不外洩。',
          icon: <Database className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '快速響應連接',
          description: '優化的網路架構提供毫秒級響應時間，遠程操作如同本地使用般流暢。',
          icon: <Clock className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '完整會話錄製',
          description: '自動錄製所有進出會話，防止數據丟失，提供完整的操作記錄和審計追蹤。',
          icon: <Eye className="h-10 w-10 text-cyber-accent" />
        }
      ],
      features: [
        '固定月費無限用戶方案',
        '多重身份驗證支援（Google/Microsoft/Telegram）',
        'H.265視頻壓縮技術',
        '專屬中國頻寬伺服器',
        '會話錄製與回放功能',
        '企業級隱私保護',
        '跨平台支援（Windows/Mac/Linux）',
        '檔案傳輸與剪貼板同步',
        '遠程打印支援',
        '音訊傳輸功能'
      ],
      cta: '聯繫我們獲取專屬報價',
      backToServices: '返回服務列表'
    },
    en: {
      title: 'TeamViewer Replacement',
      subtitle: 'Ultra-low cost enterprise remote desktop solution with fixed monthly pricing for unlimited users and dedicated server privacy protection.',
      description: 'Our TeamViewer replacement provides enterprise-grade remote desktop services with a fixed monthly fee system supporting unlimited user access, equipped with dedicated China bandwidth servers, multi-factor authentication, H.265 video compression technology, and complete session recording functionality to ensure enterprise data security and privacy protection.',
      benefits: [
        {
          title: 'Ultra-Low Cost Unlimited Users',
          description: 'Fixed monthly fee system with no additional charges regardless of simultaneous users, significantly reducing enterprise operational costs.',
          icon: <Users className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Multi-Factor Authentication Security',
          description: 'Support for Google Authenticator, Microsoft Authenticator, and Telegram 2FA notifications to ensure remote connection security.',
          icon: <Shield className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'H.265 Efficient Compression',
          description: 'Latest H.265 video compression technology providing high quality while saving bandwidth, ensuring smooth remote operation experience.',
          icon: <Video className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Dedicated Server Privacy Protection',
          description: 'Clients own dedicated servers with China bandwidth, all data completely isolated to ensure enterprise confidential information security.',
          icon: <Database className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Fast Response Connection',
          description: 'Optimized network architecture provides millisecond-level response times, making remote operations as smooth as local use.',
          icon: <Clock className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Complete Session Recording',
          description: 'Automatically record all incoming and outgoing sessions to prevent data loss, providing complete operation records and audit trails.',
          icon: <Eye className="h-10 w-10 text-cyber-accent" />
        }
      ],
      features: [
        'Fixed monthly unlimited user plan',
        'Multi-factor authentication support (Google/Microsoft/Telegram)',
        'H.265 video compression technology',
        'Dedicated China bandwidth server',
        'Session recording and playback functionality',
        'Enterprise-grade privacy protection',
        'Cross-platform support (Windows/Mac/Linux)',
        'File transfer and clipboard synchronization',
        'Remote printing support',
        'Audio transmission functionality'
      ],
      cta: 'Contact us for exclusive pricing',
      backToServices: 'Back to services'
    },
    ja: {
      title: 'TeamViewer代替ソリューション',
      subtitle: '無制限ユーザー対応の固定月額制による超低コストの企業向けリモートデスクトップソリューション、専用サーバーによるプライバシー保護。',
      description: '当社のTeamViewer代替ソリューションは、無制限ユーザーアクセスに対応する固定月額制システムによる企業グレードのリモートデスクトップサービスを提供し、中国帯域幅専用サーバー、多要素認証、H.265ビデオ圧縮技術、完全なセッション記録機能を搭載して、企業データのセキュリティとプライバシー保護を確保します。',
      benefits: [
        {
          title: '超低コスト無制限ユーザー',
          description: '同時ユーザー数に関係なく追加料金なしの固定月額制システムで、企業の運営コストを大幅に削減します。',
          icon: <Users className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '多要素認証セキュリティ保証',
          description: 'Google Authenticator、Microsoft Authenticator、Telegram 2FA通知をサポートし、リモート接続のセキュリティを確保します。',
          icon: <Shield className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'H.265高効率圧縮',
          description: '最新のH.265ビデオ圧縮技術を採用し、帯域幅を節約しながら高画質を提供し、スムーズなリモート操作体験を確保します。',
          icon: <Video className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '専用サーバープライバシー保護',
          description: 'クライアントは中国帯域幅を備えた専用サーバーを所有し、すべてのデータが完全に分離され、企業機密情報のセキュリティを確保します。',
          icon: <Database className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '高速レスポンス接続',
          description: '最適化されたネットワークアーキテクチャがミリ秒レベルの応答時間を提供し、リモート操作をローカル使用のようにスムーズにします。',
          icon: <Clock className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '完全なセッション記録',
          description: 'すべての受信および送信セッションを自動記録してデータ損失を防止し、完全な操作記録と監査証跡を提供します。',
          icon: <Eye className="h-10 w-10 text-cyber-accent" />
        }
      ],
      features: [
        '固定月額無制限ユーザープラン',
        '多要素認証サポート（Google/Microsoft/Telegram）',
        'H.265ビデオ圧縮技術',
        '専用中国帯域幅サーバー',
        'セッション記録および再生機能',
        'エンタープライズグレードのプライバシー保護',
        'クロスプラットフォームサポート（Windows/Mac/Linux）',
        'ファイル転送とクリップボード同期',
        'リモート印刷サポート',
        'オーディオ転送機能'
      ],
      cta: '専用価格についてお問い合わせください',
      backToServices: 'サービス一覧に戻る'
    }
  };
  
  const icons = [
    <Users className="h-10 w-10 text-cyber-accent" />,
    <Shield className="h-10 w-10 text-cyber-accent" />,
    <Video className="h-10 w-10 text-cyber-accent" />,
    <Database className="h-10 w-10 text-cyber-accent" />,
    <Clock className="h-10 w-10 text-cyber-accent" />,
    <Eye className="h-10 w-10 text-cyber-accent" />
  ];

  const interfaceImages = [
    {
      src: "/lovable-uploads/510b6215-0659-46a1-ba71-a9c3b33e301c.png",
      title: language === 'zh' ? '安全設定與雙重認證' : 
             language === 'ja' ? 'セキュリティ設定と二要素認証' : 
             'Security Settings & Two-Factor Authentication',
      description: language === 'zh' ? '完整的權限控制和2FA設定，支援Google、Microsoft、Telegram驗證器' : 
                   language === 'ja' ? '包括的な権限制御と2FA設定、Google、Microsoft、Telegram認証器をサポート' : 
                   'Comprehensive permission controls and 2FA setup with Google, Microsoft, Telegram authenticator support'
    },
    {
      src: "/lovable-uploads/9151652c-81d0-46ea-b35a-5624d15b8ed9.png",
      title: language === 'zh' ? 'H.265視頻壓縮技術' : 
             language === 'ja' ? 'H.265ビデオ圧縮技術' : 
             'H.265 Video Compression Technology',
      description: language === 'zh' ? '先進的H.265編解碼器設定，提供最佳畫質與頻寬效率' : 
                   language === 'ja' ? '先進的なH.265コーデック設定、最高の画質と帯域幅効率を提供' : 
                   'Advanced H.265 codec settings providing optimal video quality and bandwidth efficiency'
    },
    {
      src: "/lovable-uploads/8ccb3019-5c40-4fbc-a90b-8cf75d119404.png",
      title: language === 'zh' ? '自動會話錄製功能' : 
             language === 'ja' ? '自動セッション記録機能' : 
             'Automatic Session Recording',
      description: language === 'zh' ? '自動錄製所有進出會話，防止數據丟失，提供完整審計追蹤' : 
                   language === 'ja' ? 'すべての受信および送信セッションを自動記録、データ損失を防止し、完全な監査証跡を提供' : 
                   'Automatically record all incoming and outgoing sessions to prevent data loss and provide complete audit trails'
    },
    {
      src: "/lovable-uploads/d6512691-66e6-4c52-afee-c798cc07b092.png",
      title: language === 'zh' ? '直觀的設備管理介面' : 
             language === 'ja' ? '直感的なデバイス管理インターフェース' : 
             'Intuitive Device Management Interface',
      description: language === 'zh' ? '簡潔易用的遠程桌面管理介面，支援多設備同時連接與監控' : 
                   language === 'ja' ? 'シンプルで使いやすいリモートデスクトップ管理インターフェース、マルチデバイスの同時接続と監視をサポート' : 
                   'Clean and user-friendly remote desktop management interface supporting multi-device simultaneous connections and monitoring'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <ServicePageTemplate 
        content={content}
        language={language}
        icons={icons}
      />
      
      {/* Interface Gallery Section */}
      <section className="py-16 bg-slate-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">
                {language === 'zh' ? '軟體介面展示' : 
                 language === 'ja' ? 'ソフトウェアインターフェースの展示' : 
                 'Software Interface Showcase'}
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                {language === 'zh' ? '體驗我們直觀、功能豐富的遠程桌面解決方案介面，展示完整的安全設定、壓縮技術、錄製功能和設備管理功能。' : 
                 language === 'ja' ? '直感的で機能豊富なリモートデスクトップソリューションのインターフェースを体験し、完全なセキュリティ設定、圧縮技術、記録機能、デバイス管理機能を展示します。' : 
                 'Experience our intuitive, feature-rich remote desktop solution interface showcasing comprehensive security settings, compression technology, recording capabilities, and device management features.'}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {interfaceImages.map((image, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-slate-800">
                      {image.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {image.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional section showcasing the interface */}
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              {language === 'zh' ? '為什麼選擇我們的解決方案？' : 
               language === 'ja' ? 'なぜ私たちのソリューションを選ぶのか？' : 
               'Why Choose Our Solution?'}
            </h2>
            <p className="text-lg mb-10">
              {language === 'zh' ? '與TeamViewer相比，我們提供更經濟實惠的企業級遠程桌面解決方案，無用戶數量限制。' : 
               language === 'ja' ? 'TeamViewerと比較して、ユーザー数制限なしでより経済的な企業グレードのリモートデスクトップソリューションを提供します。' : 
               'Compared to TeamViewer, we offer a more cost-effective enterprise-grade remote desktop solution with no user limitations.'}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold mb-4">
                  {language === 'zh' ? '成本優勢' : 
                   language === 'ja' ? 'コスト優位性' : 
                   'Cost Advantage'}
                </h3>
                <p className="text-slate-600">
                  {language === 'zh' ? '固定月費支援無限用戶，比傳統按用戶付費模式節省高達80%成本。' : 
                   language === 'ja' ? '固定月額で無制限ユーザーをサポートし、従来のユーザー課金モデルよりも最大80%のコスト削減。' : 
                   'Fixed monthly fee supporting unlimited users, saving up to 80% compared to traditional per-user pricing models.'}
                </p>
              </div>
              
              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold mb-4">
                  {language === 'zh' ? '企業級安全' : 
                   language === 'ja' ? 'エンタープライズグレードのセキュリティ' : 
                   'Enterprise-Grade Security'}
                </h3>
                <p className="text-slate-600">
                  {language === 'zh' ? '專屬伺服器部署，完整數據隔離，多重認證保護，符合企業安全合規要求。' : 
                   language === 'ja' ? '専用サーバー展開、完全なデータ分離、多要素認証保護、企業セキュリティコンプライアンス要件に適合。' : 
                   'Dedicated server deployment, complete data isolation, multi-factor authentication protection, meeting enterprise security compliance requirements.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamViewerReplacement;
