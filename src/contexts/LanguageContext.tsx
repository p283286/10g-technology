import React, { createContext, useContext, useState, useEffect } from 'react';

// Define available languages
export type Language = 'zh' | 'en' | 'ja';

// Define the context type
type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

// Create context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'zh',
  setLanguage: () => {},
  t: (key: string) => key,
});

// Create translations object
const translations: Record<Language, Record<string, string>> = {
  zh: {
    // Common
    'company.name': '天機科技',
    'nav.about': '公司簡介',
    'nav.services': '服務與解決方案',
    'nav.case-studies': '成功案例',
    'nav.certifications': '專業認證',
    'nav.knowledge': '知識中心',
    'nav.contact': '聯繫我們',
    'cta.free-assessment': '免費安全評估',
    
    // Footer
    'footer.description': '全方位的網絡安全解決方案提供商，致力於保護您的數字資產和業務安全。',
    'footer.quick-links': '快速鏈接',
    'footer.services': '服務',
    'footer.contact-info': '聯繫信息',
    'footer.email': 'info@10gtechnology.com',
    'footer.support-email': 'support@10gtechnology.com',
    'footer.tel': '852-97930974',
    'footer.privacy-policy': '隱私政策',
    'footer.terms': '使用條款',
    'footer.legal': '法律聲明',
    'footer.copyright': '版權所有',
    
    // News
    'news.title': '最新消息',
    'news.subtitle': '了解天機科技的最新動態、產品更新和行業活動。',
    'news.read-more': '閱讀更多',
    'news.view-all': '查看所有新聞',
    'news.company': '公司新聞',
    'news.business': '業務拓展',
    'news.event': '活動預告',
    
    // Contact
    'contact.title': '聯繫我們',
    'contact.subtitle': '無論您有任何安全問題或需要專業顧問，我們的團隊隨時為您提供協助。',
    'contact.direct': '直接聯繫',
    'contact.email': '電子郵件',
    'contact.phone': '電話',
    'contact.hours': '營業時間',
    'contact.hours.weekdays': '週一至週五: 09:00 - 18:00',
    'contact.hours.emergency': '緊急支援: 24/7全天候',
    'contact.free-assessment': '免費安全評估',
    'contact.free-assessment.desc': '申請我們的免費安全評估，了解您的組織面臨的安全風險和改進機會。',
    'contact.apply-now': '立即申請',
    'contact.message': '發送訊息',
    'contact.name': '姓名',
    'contact.your-name': '您的姓名',
    'contact.email-address': '電子郵件',
    'contact.your-email': '您的電子郵件',
    'contact.company': '公司',
    'contact.your-company': '您的公司名稱',
    'contact.subject': '主題',
    'contact.select': '請選擇...',
    'contact.security-assessment': '安全評估諮詢',
    'contact.technical-support': '技術支援',
    'contact.partnership': '合作機會',
    'contact.general-inquiry': '一般諮詢',
    'contact.message-content': '訊息內容',
    'contact.describe': '請描述您的需求或問題...',
    'contact.privacy-agreement': '我同意隱私政策條款',
    'contact.send-message': '發送訊息',
    'contact.emergency-support': '緊急即時支援',
    'contact.emergency-help': '需要緊急協助？',
    'contact.emergency-desc': '面臨安全事件或需要即時專業建議？我們的安全專家隨時為您提供支援。',
    'contact.online-chat': '在線諮詢',
    'contact.emergency-hotline': '緊急熱線',
    
    // Language
    'language': '語言',
    'language.en': 'English',
    'language.zh': '中文',
    'language.ja': '日本語',
    
    // FAQ
    'faq.title': '常見問題解答',
    'faq.description': '查看我們最常被詢問的網絡安全問題和解答。如果您還有其他疑問，歡迎直接與我們聯繫。',

    // CVE Videos
    'cve.title': '最新 CVE 漏洞演示',
    'cve.subtitle': '觀看真實的漏洞利用演示，了解攻擊原理並掌握防禦策略。',
    'cve.tag': '視頻',
    'cve.mitigation': '緩解措施',
    'cve.reference': '參考資料',
    'cve.copyfail.title': 'Copy Fail - CVE-2026-31431',
    'cve.copyfail.desc': '此視頻演示 CVE-2026-31431 漏洞 (Copy Fail)，展示複製操作中的安全缺陷如何被攻擊者利用以洩露敏感資料或執行未授權操作。',
    'cve.copyfail.mitigation': '及時安裝官方安全更新；對剪貼簿與複製操作實施存取控制與內容過濾；停用不必要的剪貼簿共享；啟用端點偵測與回應 (EDR) 監控異常的剪貼簿存取行為；對敏感資料的複製操作進行審計記錄。',
    'cve.dirtyfrag.title': 'Dirtyfrag - CVE-2026-43284 / CVE-2026-43500',
    'cve.dirtyfrag.desc': '此視頻演示 Dirtyfrag 系列漏洞 (CVE-2026-43284 與 CVE-2026-43500)，展示記憶體碎片操控如何導致權限提升或系統破壞。',
    'cve.dirtyfrag.mitigation': '立即套用核心 (kernel) 與系統的最新安全補丁；啟用 KASLR 與記憶體保護機制；限制本機使用者權限並落實最小權限原則；部署 EDR 偵測異常的記憶體分配與釋放模式；定期審查並更新弱點掃描基線。',
  },
  en: {
    // Common
    'company.name': '10G Technology',
    'nav.about': 'About Us',
    'nav.services': 'Services & Solutions',
    'nav.case-studies': 'Case Studies',
    'nav.certifications': 'Certifications',
    'nav.knowledge': 'Knowledge Center',
    'nav.contact': 'Contact Us',
    'cta.free-assessment': 'Free Security Assessment',
    
    // Footer
    'footer.description': 'Comprehensive cybersecurity solution provider dedicated to protecting your digital assets and business security.',
    'footer.quick-links': 'Quick Links',
    'footer.services': 'Services',
    'footer.contact-info': 'Contact Information',
    'footer.email': 'info@10gtechnology.com',
    'footer.support-email': 'support@10gtechnology.com',
    'footer.tel': '852-97930974',
    'footer.privacy-policy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
    'footer.legal': 'Legal Notice',
    'footer.copyright': 'All Rights Reserved',
    
    // News
    'news.title': 'Latest News',
    'news.subtitle': "Stay updated with 10G Technology's latest developments, product updates, and industry events.",
    'news.read-more': 'Read More',
    'news.view-all': 'View All News',
    'news.company': 'Company News',
    'news.business': 'Business Development',
    'news.event': 'Upcoming Event',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'For any security concerns or professional consultation needs, our team is ready to assist you.',
    'contact.direct': 'Direct Contact',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.hours': 'Business Hours',
    'contact.hours.weekdays': 'Monday to Friday: 09:00 - 18:00',
    'contact.hours.emergency': 'Emergency Support: 24/7',
    'contact.free-assessment': 'Free Security Assessment',
    'contact.free-assessment.desc': 'Apply for our free security assessment to understand the security risks and improvement opportunities for your organization.',
    'contact.apply-now': 'Apply Now',
    'contact.message': 'Send a Message',
    'contact.name': 'Name',
    'contact.your-name': 'Your Name',
    'contact.email-address': 'Email',
    'contact.your-email': 'Your Email',
    'contact.company': 'Company',
    'contact.your-company': 'Your Company Name',
    'contact.subject': 'Subject',
    'contact.select': 'Please select...',
    'contact.security-assessment': 'Security Assessment Consultation',
    'contact.technical-support': 'Technical Support',
    'contact.partnership': 'Partnership Opportunities',
    'contact.general-inquiry': 'General Inquiry',
    'contact.message-content': 'Message Content',
    'contact.describe': 'Please describe your requirements or questions...',
    'contact.privacy-agreement': 'I agree to the privacy policy terms',
    'contact.send-message': 'Send Message',
    'contact.emergency-support': 'Emergency Immediate Support',
    'contact.emergency-help': 'Need Emergency Assistance?',
    'contact.emergency-desc': 'Facing a security incident or need immediate professional advice? Our security experts are available to support you.',
    'contact.online-chat': 'Online Consultation',
    'contact.emergency-hotline': 'Emergency Hotline',
    
    // Language
    'language': 'Language',
    'language.en': 'English',
    'language.zh': '中文',
    'language.ja': '日本語',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.description': 'Browse through our most commonly asked cybersecurity questions and answers. If you have any additional inquiries, please feel free to contact us directly.',

    // CVE Videos
    'cve.title': 'Latest CVE Vulnerability Demonstrations',
    'cve.subtitle': 'Watch real-world exploit demonstrations to understand attack mechanics and defense strategies.',
    'cve.tag': 'Video',
    'cve.mitigation': 'Mitigation',
    'cve.reference': 'Reference',
    'cve.copyfail.title': 'Copy Fail - CVE-2026-31431',
    'cve.copyfail.desc': 'This video demonstrates the CVE-2026-31431 (Copy Fail) vulnerability, showing how flaws in copy operations can be exploited to leak sensitive data or perform unauthorized actions.',
    'cve.copyfail.mitigation': 'Apply official security updates promptly; enforce access control and content filtering on clipboard and copy operations; disable unnecessary clipboard sharing; deploy EDR to monitor abnormal clipboard access; audit copy operations involving sensitive data.',
    'cve.dirtyfrag.title': 'Dirtyfrag - CVE-2026-43284 / CVE-2026-43500',
    'cve.dirtyfrag.desc': 'This video demonstrates the Dirtyfrag vulnerabilities (CVE-2026-43284 and CVE-2026-43500), showing how memory fragmentation manipulation can lead to privilege escalation or system compromise.',
    'cve.dirtyfrag.mitigation': 'Immediately apply the latest kernel and OS security patches; enable KASLR and memory protection features; restrict local user privileges and enforce least privilege; deploy EDR to detect abnormal memory allocation/free patterns; regularly review and update vulnerability scanning baselines.',
  },
  ja: {
    // Common
    'company.name': '10Gテクノロジー',
    'nav.about': '会社概要',
    'nav.services': 'サービスとソリューション',
    'nav.case-studies': '導入事例',
    'nav.certifications': '専門認定',
    'nav.knowledge': 'ナレッジセンター',
    'nav.contact': 'お問い合わせ',
    'cta.free-assessment': '無料セキュリティ評価',
    
    // Footer
    'footer.description': 'デジタル資産とビジネスセキュリティを保護するための包括的なサイバーセキュリティソリューションプロバイダー。',
    'footer.quick-links': 'クイックリンク',
    'footer.services': 'サービス',
    'footer.contact-info': '連絡先',
    'footer.email': 'info@10gtechnology.com',
    'footer.support-email': 'support@10gtechnology.com',
    'footer.tel': '852-97930974',
    'footer.privacy-policy': 'プライバシーポリシー',
    'footer.terms': '利用規約',
    'footer.legal': '免責事項',
    'footer.copyright': '著作権所有',
    
    // News
    'news.title': '最新ニュース',
    'news.subtitle': '10Gテクノロジーの最新の開発、製品アップデート、業界イベントについて。',
    'news.read-more': '続きを読む',
    'news.view-all': 'すべてのニュースを見る',
    'news.company': '企業ニュース',
    'news.business': 'ビジネス展開',
    'news.event': '今後のイベント',
    
    // Contact
    'contact.title': 'お問い合わせ',
    'contact.subtitle': 'セキュリティの懸念や専門的な相談が必要な場合は、私たちのチームがサポートいたします。',
    'contact.direct': '直接連絡',
    'contact.email': 'メール',
    'contact.phone': '電話',
    'contact.hours': '営業時間',
    'contact.hours.weekdays': '月曜～金曜: 09:00 - 18:00',
    'contact.hours.emergency': '緊急サポート: 24時間年中無休',
    'contact.free-assessment': '無料セキュリティ評価',
    'contact.free-assessment.desc': '無料のセキュリティ評価を申し込んで、組織のセキュリティリスクと改善の機会を理解しましょう。',
    'contact.apply-now': '今すぐ申し込む',
    'contact.message': 'メッセージを送信',
    'contact.name': '名前',
    'contact.your-name': 'お名前',
    'contact.email-address': 'メールアドレス',
    'contact.your-email': 'あなたのメールアドレス',
    'contact.company': '会社名',
    'contact.your-company': '会社名',
    'contact.subject': '件名',
    'contact.select': '選択してください...',
    'contact.security-assessment': 'セキュリティ評価相談',
    'contact.technical-support': '技術サポート',
    'contact.partnership': 'パートナーシップの機会',
    'contact.general-inquiry': '一般的なお問い合わせ',
    'contact.message-content': 'メッセージ内容',
    'contact.describe': 'ご要望や質問を記入してください...',
    'contact.privacy-agreement': 'プライバシーポリシーに同意します',
    'contact.send-message': 'メッセージを送信',
    'contact.emergency-support': '緊急サポート',
    'contact.emergency-help': '緊急サポートが必要ですか？',
    'contact.emergency-desc': 'セキュリティインシデントに直面していますか？即時の専門的なアドバイスが必要ですか？私たちのセキュリティ専門家がサポートいたします。',
    'contact.online-chat': 'オンライン相談',
    'contact.emergency-hotline': '緊急ホットライン',
    
    // Language
    'language': '言語',
    'language.en': 'English',
    'language.zh': '中文',
    'language.ja': '日本語',
    
    // FAQ
    'faq.title': 'よくある質問',
    'faq.description': 'サイバーセキュリティに関する最もよくある質問と回答をご覧ください。さらに質問がある場合は、お気軽にお問い合わせください。',

    // CVE Videos
    'cve.title': '最新 CVE 脆弱性デモ',
    'cve.subtitle': '実際の脆弱性悪用デモを視聴し、攻撃の仕組みと防御戦略を理解しましょう。',
    'cve.tag': '動画',
    'cve.mitigation': '緩和策',
    'cve.reference': '参考資料',
    'cve.copyfail.title': 'Copy Fail - CVE-2026-31431',
    'cve.copyfail.desc': 'この動画では CVE-2026-31431 (Copy Fail) 脆弱性を実演し、コピー操作の不備が攻撃者によって機密情報の漏洩や不正操作の実行に悪用される仕組みを示します。',
    'cve.copyfail.mitigation': '公式のセキュリティ更新を速やかに適用する。クリップボードおよびコピー操作にアクセス制御とコンテンツフィルタリングを実施する。不要なクリップボード共有を無効化する。EDR を導入し異常なクリップボードアクセスを監視する。機密データのコピー操作を監査する。',
    'cve.dirtyfrag.title': 'Dirtyfrag - CVE-2026-43284 / CVE-2026-43500',
    'cve.dirtyfrag.desc': 'この動画では Dirtyfrag 脆弱性 (CVE-2026-43284 および CVE-2026-43500) を実演し、メモリフラグメンテーションの操作が権限昇格やシステム侵害につながる仕組みを示します。',
    'cve.dirtyfrag.mitigation': 'カーネルおよび OS の最新セキュリティパッチを直ちに適用する。KASLR とメモリ保護機能を有効化する。ローカルユーザー権限を制限し最小権限の原則を徹底する。EDR で異常なメモリ確保・解放パターンを検知する。脆弱性スキャンのベースラインを定期的に見直す。',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Check if browser language is available, otherwise default to zh
  const getBrowserLanguage = (): Language => {
    const browserLang = navigator.language.split('-')[0];
    return (browserLang === 'en' || browserLang === 'zh' || browserLang === 'ja') ? browserLang as Language : 'zh';
  };

  // Initialize with browser language or stored preference
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem('language') as Language;
    return stored || getBrowserLanguage();
  });

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);
