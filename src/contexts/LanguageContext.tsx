
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
