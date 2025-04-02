
import React from 'react';
import { Shield, Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cyber-dark text-white">
      <div className="section-container pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Shield className="h-8 w-8 text-cyber-accent" />
              <span className="text-xl font-bold">
                安全視界<span className="text-cyber-accent">科技</span>
              </span>
            </div>
            <p className="text-slate-400 mb-6">
              全方位的網絡安全解決方案提供商，致力於保護您的數字資產和業務安全。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-cyber-accent">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyber-accent">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyber-accent">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyber-accent">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">快速鏈接</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-slate-400 hover:text-cyber-accent">公司簡介</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-cyber-accent">服務與解決方案</a></li>
              <li><a href="#case-studies" className="text-slate-400 hover:text-cyber-accent">成功案例</a></li>
              <li><a href="#certifications" className="text-slate-400 hover:text-cyber-accent">專業認證</a></li>
              <li><a href="#knowledge" className="text-slate-400 hover:text-cyber-accent">知識中心</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-cyber-accent">聯繫我們</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">服務</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-cyber-accent">網絡威脅檢測與防禦</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyber-accent">漏洞評估與滲透測試</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyber-accent">應急響應與事件管理</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyber-accent">安全諮詢服務</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyber-accent">安全培訓與意識提升</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">聯繫信息</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-cyber-accent mt-1 mr-2 flex-shrink-0" />
                <span className="text-slate-400">info@secure-horizon.com</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-cyber-accent mt-1 mr-2 flex-shrink-0" />
                <span className="text-slate-400">+852 2123 4567</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-cyber-accent mt-1 mr-2 flex-shrink-0" />
                <span className="text-slate-400">香港中環金融街88號<br />環球金融中心28樓</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} 安全視界科技 版權所有
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-slate-500 hover:text-cyber-accent">隱私政策</a>
            <a href="#" className="text-sm text-slate-500 hover:text-cyber-accent">使用條款</a>
            <a href="#" className="text-sm text-slate-500 hover:text-cyber-accent">法律聲明</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
