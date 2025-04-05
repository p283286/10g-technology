
import React, { useEffect } from 'react';
import { File, Download, BookOpen, FileText, Play, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

interface ResourceProps {
  title: string;
  description: string;
  type: string;
  downloadLink: string;
}

const ResourceCard = ({ title, description, type, downloadLink }: ResourceProps) => (
  <Card className="cyber-card h-full">
    <CardContent className="p-6 flex flex-col h-full">
      <div className="mb-4 flex items-center gap-2">
        {type === '白皮書' && <FileText className="h-5 w-5 text-cyber-accent" />}
        {type === '電子書' && <BookOpen className="h-5 w-5 text-cyber-accent" />}
        {type === '模板' && <File className="h-5 w-5 text-cyber-accent" />}
        {type === '檢查清單' && <CheckCircle className="h-5 w-5 text-cyber-accent" />}
        {type === '視頻' && <Play className="h-5 w-5 text-cyber-accent" />}
        <span className="bg-cyber-blue-light/10 text-cyber-blue-light px-2 py-0.5 rounded text-xs">
          {type}
        </span>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-600 mb-4 flex-grow">{description}</p>
      <Button variant="outline" className="text-cyber-accent group w-full sm:w-auto">
        免費下載
        <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
      </Button>
    </CardContent>
  </Card>
);

const SecurityResources = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whitepapers: ResourceProps[] = [
    {
      title: '網絡安全最佳實踐指南',
      description: '全面的網絡安全最佳實踐指南，涵蓋網絡、系統和應用程序安全，適用於各類組織。',
      type: '白皮書',
      downloadLink: '#'
    },
    {
      title: '數據泄露處理指南',
      description: '數據泄露處理步驟、合規要求和最佳實踐指南。',
      type: '白皮書',
      downloadLink: '#'
    },
    {
      title: '零信任安全架構白皮書',
      description: '深入探討零信任安全架構的理論基礎、實施策略和實際案例。',
      type: '白皮書',
      downloadLink: '#'
    },
    {
      title: '雲安全框架',
      description: '全面的雲安全框架，包括安全架構、控制措施和最佳實踐。',
      type: '白皮書',
      downloadLink: '#'
    }
  ];

  const ebooks: ResourceProps[] = [
    {
      title: '勒索軟件防禦策略',
      description: '詳細的勒索軟件防禦策略，包括預防、檢測、響應和恢復的全面方法。',
      type: '電子書',
      downloadLink: '#'
    },
    {
      title: 'SIEM實施與優化指南',
      description: 'SIEM解決方案的實施步驟、運營最佳實踐和優化技巧。',
      type: '電子書',
      downloadLink: '#'
    },
    {
      title: '網絡威脅狩獵實戰',
      description: '網絡威脅狩獵的方法論、技術和工具，包括真實案例分析。',
      type: '電子書',
      downloadLink: '#'
    }
  ];

  const templates: ResourceProps[] = [
    {
      title: '安全風險評估模板',
      description: '實用的安全風險評估模板，幫助組織識別、分析和優先處理安全風險。',
      type: '模板',
      downloadLink: '#'
    },
    {
      title: '事件響應計劃模板',
      description: '全面的事件響應計劃模板，幫助組織做好準備，有效應對安全事件。',
      type: '模板',
      downloadLink: '#'
    },
    {
      title: '資產清單與風險評級模板',
      description: '用於記錄和分類IT資產，並評估它們的風險水平。',
      type: '模板',
      downloadLink: '#'
    },
    {
      title: '供應商安全評估表',
      description: '評估第三方供應商和合作夥伴的安全狀況和合規性。',
      type: '模板',
      downloadLink: '#'
    }
  ];

  const checklists: ResourceProps[] = [
    {
      title: '安全配置檢查清單',
      description: '系統、網絡和應用的安全配置檢查清單，幫助提高安全性並減少配置錯誤。',
      type: '檢查清單',
      downloadLink: '#'
    },
    {
      title: '安全更新程序檢查清單',
      description: '幫助組織制定有效的安全更新和補丁管理程序。',
      type: '檢查清單',
      downloadLink: '#'
    },
    {
      title: 'GDPR合規檢查清單',
      description: '評估組織的GDPR合規狀況，識別需要改進的領域。',
      type: '檢查清單',
      downloadLink: '#'
    }
  ];

  const videos: ResourceProps[] = [
    {
      title: '釣魚攻擊演示',
      description: '這段視頻展示了常見的釣魚攻擊技巧，以及如何識別和避免這些攻擊。',
      type: '視頻',
      downloadLink: '#'
    },
    {
      title: 'Office 365釣魚攻擊示範',
      description: '此視頻展示黑客如何繞過2FA竊取Office 365帳戶。',
      type: '視頻',
      downloadLink: 'https://10gtechnology.com/videos/phishing_office_365.mp4'
    },
    {
      title: '勒索軟件攻擊分析',
      description: '分析真實的勒索軟件攻擊案例，了解攻擊路徑和防禦方法。',
      type: '視頻',
      downloadLink: '#'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative py-20 md:py-32 overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-cyber-gradient opacity-95 z-0"></div>
          
          {/* Circuit Board Pattern Overlay */}
          <div className="absolute inset-0 bg-circuit-pattern opacity-10 z-0"></div>
          
          <div className="container px-4 mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-white mb-6">
                免費安全資源
              </h1>
              <p className="text-slate-200 mb-8 text-lg md:text-xl max-w-3xl mx-auto">
                下載我們的免費安全資源，包括白皮書、電子書、模板和培訓材料，提升您的安全知識和能力。
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <section className="py-16 bg-slate-50">
          <div className="container px-4 mx-auto">
            <Tabs defaultValue="whitepapers" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="whitepapers">白皮書</TabsTrigger>
                  <TabsTrigger value="ebooks">電子書</TabsTrigger>
                  <TabsTrigger value="templates">模板</TabsTrigger>
                  <TabsTrigger value="checklists">檢查清單</TabsTrigger>
                  <TabsTrigger value="videos">視頻</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="whitepapers">
                <div className="max-w-6xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {whitepapers.map((resource, index) => (
                      <ResourceCard 
                        key={index}
                        title={resource.title}
                        description={resource.description}
                        type={resource.type}
                        downloadLink={resource.downloadLink}
                      />
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="ebooks">
                <div className="max-w-6xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ebooks.map((resource, index) => (
                      <ResourceCard 
                        key={index}
                        title={resource.title}
                        description={resource.description}
                        type={resource.type}
                        downloadLink={resource.downloadLink}
                      />
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="templates">
                <div className="max-w-6xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {templates.map((resource, index) => (
                      <ResourceCard 
                        key={index}
                        title={resource.title}
                        description={resource.description}
                        type={resource.type}
                        downloadLink={resource.downloadLink}
                      />
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="checklists">
                <div className="max-w-6xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {checklists.map((resource, index) => (
                      <ResourceCard 
                        key={index}
                        title={resource.title}
                        description={resource.description}
                        type={resource.type}
                        downloadLink={resource.downloadLink}
                      />
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="videos">
                <div className="max-w-6xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {videos.map((resource, index) => (
                      <div key={index} className="cyber-card h-full">
                        <div className="p-6 flex flex-col h-full">
                          <div className="mb-4 flex items-center gap-2">
                            <Play className="h-5 w-5 text-cyber-accent" />
                            <span className="bg-cyber-blue-light/10 text-cyber-blue-light px-2 py-0.5 rounded text-xs">
                              {resource.type}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold mb-3">{resource.title}</h3>
                          <p className="text-slate-600 mb-4">{resource.description}</p>
                          <div className="mt-auto">
                            <video 
                              src={resource.downloadLink} 
                              controls 
                              className="w-full rounded-md shadow"
                              poster="/placeholder.svg"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="container px-4 mx-auto mt-16">
            <div className="cyber-card p-8 bg-cyber-gradient-light">
              <div className="text-white text-center">
                <h3 className="text-2xl font-bold mb-4">需要定制的安全資源？</h3>
                <p className="max-w-2xl mx-auto mb-6">
                  我們的安全專家可以根據您的特定需求和行業提供定制的安全資源和指導。聯繫我們了解更多！
                </p>
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.location.href = '/#contact';
                    }
                  }}
                >
                  聯繫專家顧問
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <LanguageSwitcher />
    </div>
  );
};

export default SecurityResources;
