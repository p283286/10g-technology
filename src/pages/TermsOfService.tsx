
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { FileText } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const TermsOfService = () => {
  const { language } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <FileText className="h-12 w-12 text-cyber-accent mr-3" />
              <h1 className="text-3xl md:text-4xl">
                {language === 'zh' ? '使用條款' : 'Terms of Service'}
              </h1>
            </div>
            
            <div className="cyber-card p-8">
              <p className="mb-6">
                {language === 'zh' 
                  ? '歡迎使用10G Technology的服務。請仔細閱讀以下使用條款，這些條款構成了您與我們之間關於使用本網站和我們服務的協議。'
                  : 'Welcome to 10G Technology. Please read the following Terms of Service carefully, as they constitute an agreement between you and us regarding the use of this website and our services.'}
              </p>
              
              <h2 className="text-xl font-bold mb-3">
                {language === 'zh' ? '接受條款' : 'Acceptance of Terms'}
              </h2>
              <p className="mb-6">
                {language === 'zh'
                  ? '通過訪問或使用我們的服務，您確認您已閱讀、理解並同意受這些條款的約束。如果您不同意這些條款的任何部分，請勿使用我們的服務。'
                  : 'By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by these terms. If you do not agree to any part of these terms, please do not use our services.'}
              </p>
              
              <h2 className="text-xl font-bold mb-3">
                {language === 'zh' ? '服務描述' : 'Service Description'}
              </h2>
              <p className="mb-6">
                {language === 'zh'
                  ? '我們提供各種網絡安全服務，包括但不限於威脅檢測、事件響應、漏洞評估等。我們保留修改、暫停或終止任何服務的權利，恕不另行通知。'
                  : 'We offer various cybersecurity services, including but not limited to threat detection, incident response, vulnerability assessment, etc. We reserve the right to modify, suspend, or terminate any service without notice.'}
              </p>
              
              <h2 className="text-xl font-bold mb-3">
                {language === 'zh' ? '用戶責任' : 'User Responsibilities'}
              </h2>
              <p className="mb-6">
                {language === 'zh'
                  ? '您同意使用我們的服務時應遵守所有適用的法律法規。您有責任確保提供給我們的任何信息是準確和完整的。'
                  : 'You agree to use our services in compliance with all applicable laws and regulations. You are responsible for ensuring that any information you provide to us is accurate and complete.'}
              </p>
              
              <h2 className="text-xl font-bold mb-3">
                {language === 'zh' ? '知識產權' : 'Intellectual Property'}
              </h2>
              <p className="mb-6">
                {language === 'zh'
                  ? '我們服務中的所有內容，包括但不限於文本、圖像、標誌、商標等，均為我們或我們的授權方擁有。未經我們明確許可，不得使用、複製、修改或分發這些內容。'
                  : 'All content in our services, including but not limited to text, images, logos, trademarks, etc., is owned by us or our licensors. You may not use, copy, modify, or distribute this content without our explicit permission.'}
              </p>
              
              <h2 className="text-xl font-bold mb-3">
                {language === 'zh' ? '免責聲明' : 'Disclaimer'}
              </h2>
              <p className="mb-6">
                {language === 'zh'
                  ? '我們的服務按"原樣"提供，不提供任何明示或暗示的保證。我們不保證服務將不間斷、無錯誤或安全。'
                  : 'Our services are provided "as is" without any express or implied warranties. We do not guarantee that the services will be uninterrupted, error-free, or secure.'}
              </p>
              
              <h2 className="text-xl font-bold mb-3">
                {language === 'zh' ? '責任限制' : 'Limitation of Liability'}
              </h2>
              <p className="mb-6">
                {language === 'zh'
                  ? '在任何情況下，我們對因使用或不能使用我們的服務而導致的直接、間接、附帶、特殊或後果性損害不承擔責任。'
                  : 'In no event shall we be liable for any direct, indirect, incidental, special, or consequential damages arising out of or related to your use or inability to use our services.'}
              </p>
              
              <h2 className="text-xl font-bold mb-3">
                {language === 'zh' ? '條款修改' : 'Modifications to Terms'}
              </h2>
              <p className="mb-6">
                {language === 'zh'
                  ? '我們保留隨時修改這些條款的權利。修改後的條款將在本網站上公佈，並在發佈時生效。繼續使用我們的服務將視為您接受修改後的條款。'
                  : 'We reserve the right to modify these terms at any time. Modified terms will be posted on this website and will be effective upon posting. Continued use of our services will be deemed acceptance of the modified terms.'}
              </p>
              
              <h2 className="text-xl font-bold mb-3">
                {language === 'zh' ? '聯繫我們' : 'Contact Us'}
              </h2>
              <p>
                {language === 'zh'
                  ? '如果您對這些條款有任何疑問，請聯繫我們：'
                  : 'If you have any questions about these terms, please contact us:'}
              </p>
              <p className="mt-2">
                <a href="mailto:info@10gtechnology.com" className="text-cyber-accent hover:underline">info@10gtechnology.com</a>
              </p>
            </div>
            
            <div className="mt-8 text-center text-sm text-slate-600">
              {language === 'zh'
                ? '最後更新：2025年4月1日'
                : 'Last updated: April 1, 2025'}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <LanguageSwitcher />
    </div>
  );
};

export default TermsOfService;
