
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { Scale } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const LegalNotice = () => {
  const { language } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <Scale className="h-12 w-12 text-cyber-accent mr-3" />
              <h1 className="text-3xl md:text-4xl">
                {language === 'zh' ? '法律聲明' : 'Legal Notice'}
              </h1>
            </div>
            
            <div className="cyber-card p-8">
              <h2 className="text-xl font-bold mb-3">
                {language === 'zh' ? '公司信息' : 'Company Information'}
              </h2>
              <p className="mb-6">
                {language === 'zh'
                  ? '10G Technology是一家依據香港法律成立的公司。公司註冊地址位於香港。'
                  : '10G Technology is a company established under the laws of Hong Kong. The company is registered at an address in Hong Kong.'}
              </p>
              
              <h2 className="text-xl font-bold mb-3">
                {language === 'zh' ? '版權聲明' : 'Copyright Notice'}
              </h2>
              <p className="mb-6">
                {language === 'zh'
                  ? '本網站的全部內容，包括但不限於文本、圖像、徽標、按鈕圖標、圖像、音頻剪輯、數字下載、數據編譯等，均為10G Technology或其內容提供者的財產，受香港和國際版權法保護。'
                  : 'All content on this website, including but not limited to text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, etc., is the property of 10G Technology or its content providers and is protected by Hong Kong and international copyright laws.'}
              </p>
              
              <h2 className="text-xl font-bold mb-3">
                {language === 'zh' ? '商標' : 'Trademarks'}
              </h2>
              <p className="mb-6">
                {language === 'zh'
                  ? '本網站上顯示的所有商標、服務標誌和商號均為10G Technology的註冊和未註冊商標，或第三方的商標。未經明確許可，您不得使用任何商標、服務標誌或商號。'
                  : 'All trademarks, service marks, and trade names displayed on this website are registered and unregistered trademarks of 10G Technology, or of third parties. You may not use any trademarks, service marks, or trade names without explicit permission.'}
              </p>
              
              <h2 className="text-xl font-bold mb-3">
                {language === 'zh' ? '免責聲明' : 'Disclaimer'}
              </h2>
              <p className="mb-6">
                {language === 'zh'
                  ? '本網站上的信息僅供一般參考之用，不構成法律、財務、專業或任何其他類型的建議。10G Technology不對本網站上提供的信息的準確性、完整性或及時性作任何保證。'
                  : 'The information on this website is provided for general reference only and does not constitute legal, financial, professional, or any other type of advice. 10G Technology makes no warranty regarding the accuracy, completeness, or timeliness of the information provided on this website.'}
              </p>
              
              <h2 className="text-xl font-bold mb-3">
                {language === 'zh' ? '責任限制' : 'Limitation of Liability'}
              </h2>
              <p className="mb-6">
                {language === 'zh'
                  ? '在法律允許的最大範圍內，10G Technology及其董事、員工、代理人或合作夥伴對因使用或無法使用本網站或本網站上的任何內容而直接或間接產生的任何損失或損害不承擔任何責任。'
                  : 'To the fullest extent permitted by law, 10G Technology and its directors, employees, agents, or partners shall not be liable for any loss or damage arising directly or indirectly from the use of, or inability to use, this website or any content on this website.'}
              </p>
              
              <h2 className="text-xl font-bold mb-3">
                {language === 'zh' ? '適用法律' : 'Governing Law'}
              </h2>
              <p className="mb-6">
                {language === 'zh'
                  ? '本網站的使用以及因此產生的任何爭議均受香港特別行政區法律管轄，並按其解釋。'
                  : 'The use of this website and any disputes arising therefrom are governed by and construed in accordance with the laws of the Hong Kong Special Administrative Region.'}
              </p>
              
              <h2 className="text-xl font-bold mb-3">
                {language === 'zh' ? '聯繫我們' : 'Contact Us'}
              </h2>
              <p>
                {language === 'zh'
                  ? '如有任何關於法律聲明的疑問，請聯繫我們：'
                  : 'For any questions regarding this legal notice, please contact us:'}
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

export default LegalNotice;
