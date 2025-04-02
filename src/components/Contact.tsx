
import React from 'react';
import { Mail, Phone, MapPin, MessageSquare, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactInfoItem = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
  <div className="flex items-start">
    <div className="text-cyber-accent mr-4 mt-1">{icon}</div>
    <div>
      <h4 className="font-semibold text-lg mb-1">{title}</h4>
      {children}
    </div>
  </div>
);

const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <div className="text-center mb-16">
        <h2 className="mb-4">聯繫我們</h2>
        <p className="max-w-3xl mx-auto text-slate-600">
          無論您有任何安全問題或需要專業顧問，我們的團隊隨時為您提供協助。
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl mb-6">直接聯繫</h3>
          <div className="space-y-8 mb-10">
            <ContactInfoItem icon={<Mail size={24} />} title="電子郵件">
              <p className="text-slate-600">info@secure-horizon.com</p>
              <p className="text-slate-600">support@secure-horizon.com</p>
            </ContactInfoItem>
            
            <ContactInfoItem icon={<Phone size={24} />} title="電話">
              <p className="text-slate-600">+852 2123 4567</p>
              <p className="text-slate-600">+852 2765 4321（緊急支援）</p>
            </ContactInfoItem>
            
            <ContactInfoItem icon={<MapPin size={24} />} title="辦公地址">
              <p className="text-slate-600">香港中環金融街88號</p>
              <p className="text-slate-600">環球金融中心28樓</p>
            </ContactInfoItem>
            
            <ContactInfoItem icon={<Clock size={24} />} title="營業時間">
              <p className="text-slate-600">週一至週五: 09:00 - 18:00</p>
              <p className="text-slate-600">緊急支援: 24/7全天候</p>
            </ContactInfoItem>
          </div>
          
          <div className="cyber-card p-6 bg-cyber-gradient-light">
            <h3 className="text-white text-xl mb-4">免費安全評估</h3>
            <p className="text-white/90 mb-4">
              申請我們的免費安全評估，了解您的組織面臨的安全風險和改進機會。
            </p>
            <Button variant="secondary">立即申請</Button>
          </div>
        </div>
        
        <div>
          <div className="cyber-card p-6 h-full">
            <h3 className="text-2xl mb-6">發送訊息</h3>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">姓名</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-accent"
                    placeholder="您的姓名" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">電子郵件</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-accent"
                    placeholder="您的電子郵件" 
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">公司</label>
                <input 
                  type="text" 
                  id="company" 
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-accent"
                  placeholder="您的公司名稱" 
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">主題</label>
                <select 
                  id="subject" 
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-accent"
                >
                  <option value="">請選擇...</option>
                  <option value="security-assessment">安全評估諮詢</option>
                  <option value="technical-support">技術支援</option>
                  <option value="partnership">合作機會</option>
                  <option value="general-inquiry">一般諮詢</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">訊息內容</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-accent"
                  placeholder="請描述您的需求或問題..." 
                ></textarea>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="privacy" 
                    className="h-4 w-4 text-cyber-accent border-slate-300 rounded"
                  />
                  <label htmlFor="privacy" className="ml-2 text-sm text-slate-600">
                    我同意隱私政策條款
                  </label>
                </div>
                <Button className="bg-cyber-accent hover:bg-cyber-blue-light">
                  發送訊息
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <div className="mt-20">
        <h3 className="text-2xl text-center mb-12">即時支援</h3>
        <div className="cyber-card p-8 flex flex-col md:flex-row items-center justify-between gap-8 bg-cyber-gradient-light">
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <MessageSquare className="h-12 w-12 text-white mb-4" />
            </div>
            <h4 className="text-white text-2xl font-bold mb-2">需要緊急協助？</h4>
            <p className="text-white/90 max-w-xl">
              面臨安全事件或需要即時專業建議？我們的安全專家隨時為您提供支援。
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="secondary" className="whitespace-nowrap">
              在線諮詢
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 whitespace-nowrap">
              緊急熱線
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
