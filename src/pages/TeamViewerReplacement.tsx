
import React, { useEffect } from 'react';
import { Monitor, Shield, Users, Video, Clock, Database, Key, Eye } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ServicePageTemplate from '@/components/ServicePageTemplate';

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

  return (
    <div className="min-h-screen flex flex-col">
      <ServicePageTemplate 
        content={content}
        language={language}
        icons={icons}
      />
      
      {/* Additional section showcasing the interface */}
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              {language === 'zh' ? '直觀的遠程桌面介面' : 
               language === 'ja' ? '直感的なリモートデスクトップインターフェース' : 
               'Intuitive Remote Desktop Interface'}
            </h2>
            <p className="text-lg mb-10">
              {language === 'zh' ? '簡潔易用的介面設計，支援多設備管理和安全連接配置。' : 
               language === 'ja' ? 'シンプルで使いやすいインターフェースデザイン、マルチデバイス管理と安全な接続設定をサポート。' : 
               'Clean and user-friendly interface design supporting multi-device management and secure connection configuration.'}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold mb-4">
                  {language === 'zh' ? '安全設定' : 
                   language === 'ja' ? 'セキュリティ設定' : 
                   'Security Settings'}
                </h3>
                <p className="text-slate-600">
                  {language === 'zh' ? '完整的權限控制、雙重認證配置和密碼管理功能。' : 
                   language === 'ja' ? '包括的な権限制御、二要素認証設定、パスワード管理機能。' : 
                   'Comprehensive permission controls, 2FA configuration, and password management features.'}
                </p>
              </div>
              
              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold mb-4">
                  {language === 'zh' ? '設備管理' : 
                   language === 'ja' ? 'デバイス管理' : 
                   'Device Management'}
                </h3>
                <p className="text-slate-600">
                  {language === 'zh' ? '統一管理所有遠程設備，支援快速連接和狀態監控。' : 
                   language === 'ja' ? 'すべてのリモートデバイスを統一管理、迅速な接続と状態監視をサポート。' : 
                   'Unified management of all remote devices with quick connection and status monitoring support.'}
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
