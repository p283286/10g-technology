
import React, { useEffect } from 'react';
import { File, ArrowRight, Calendar, BookOpen, Download, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

const BlogPost = ({ title, excerpt, date, category }: BlogPostProps) => (
  <div className="cyber-card h-full flex flex-col">
    <div className="p-6">
      <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
        <Calendar className="h-4 w-4" />
        <span>{date}</span>
        <span className="bg-cyber-blue-light/10 text-cyber-blue-light px-2 py-0.5 rounded text-xs">
          {category}
        </span>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-600 mb-4 flex-grow">{excerpt}</p>
      <Button variant="ghost" className="text-cyber-accent group">
        閱讀全文 
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  </div>
);

interface ResourceProps {
  title: string;
  type: string;
  description: string;
}

const Resource = ({ title, type, description }: ResourceProps) => (
  <Card className="cyber-card h-full">
    <CardContent className="p-6 flex flex-col h-full">
      <div className="mb-4 flex items-center gap-2">
        <File className="h-5 w-5 text-cyber-accent" />
        <span className="bg-cyber-blue-light/10 text-cyber-blue-light px-2 py-0.5 rounded text-xs">
          {type}
        </span>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-600 mb-4 flex-grow">{description}</p>
      <Button variant="outline" className="text-cyber-accent group">
        下載資源
        <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
      </Button>
    </CardContent>
  </Card>
);

const KnowledgeCenter = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts: BlogPostProps[] = [
    {
      title: '如何有效防範勒索軟件攻擊',
      excerpt: '勒索軟件攻擊日益猖獗，本文提供了全面的防範策略，包括數據備份、安全更新和員工培訓等關鍵措施。',
      date: '2023-10-15',
      category: '威脅防禦'
    },
    {
      title: '零信任安全架構：原則與實踐',
      excerpt: '探討零信任安全模型的核心概念、實施步驟和最佳實踐，幫助組織建立更強大的安全防線。',
      date: '2023-09-22',
      category: '安全架構'
    },
    {
      title: '雲環境安全最佳實踐指南',
      excerpt: '隨著企業加速採用雲服務，雲安全成為關注焦點。本文分享雲環境保護的最佳實踐和常見陷阱。',
      date: '2023-08-18',
      category: '雲安全'
    },
    {
      title: '2023年網絡安全趨勢展望',
      excerpt: '分析未來一年網絡安全領域的主要趨勢和新興威脅，幫助組織提前做好準備。',
      date: '2023-07-05',
      category: '趨勢分析'
    },
    {
      title: '供應鏈攻擊：識別與防禦',
      excerpt: '供應鏈攻擊成為黑客的首選途徑之一。本文分析其工作原理，並提供有效的防禦策略。',
      date: '2023-06-12',
      category: '威脅情報'
    },
    {
      title: '合規不等於安全：全面安全策略指南',
      excerpt: '合規是必要但不充分的條件。本文探討如何超越合規要求，建立真正有效的安全計劃。',
      date: '2023-05-20',
      category: '合規與治理'
    }
  ];

  const resources: ResourceProps[] = [
    { 
      title: '網絡安全最佳實踐指南', 
      type: '白皮書',
      description: '全面的網絡安全最佳實踐指南，涵蓋網絡、系統和應用程序安全，適用於各類組織。' 
    },
    { 
      title: '勒索軟件防禦策略', 
      type: '電子書',
      description: '詳細的勒索軟件防禦策略，包括預防、檢測、響應和恢復的全面方法。' 
    },
    { 
      title: '安全風險評估流程', 
      type: '模板',
      description: '實用的安全風險評估模板，幫助組織識別、分析和優先處理安全風險。' 
    },
    { 
      title: '網絡安全意識培訓材料', 
      type: '培訓資料',
      description: '網絡安全意識培訓資料，包括PPT、手冊、測試和互動練習。' 
    },
    { 
      title: '事件響應計劃模板', 
      type: '模板',
      description: '全面的事件響應計劃模板，幫助組織做好準備，有效應對安全事件。' 
    },
    { 
      title: '數據泄露處理指南', 
      type: '白皮書',
      description: '數據泄露處理步驟、合規要求和最佳實踐指南。' 
    }
  ];
  
  const webinars = [
    {
      title: '如何構建有效的安全運營中心',
      date: '2023-11-10',
      speaker: '張偉 | 資深安全運營專家',
      description: '本網絡研討會將探討如何構建和運營有效的安全運營中心，包括人員、流程和技術要素。'
    },
    {
      title: '零信任架構實施實踐',
      date: '2023-10-20',
      speaker: '李明 | 網絡安全架構師',
      description: '了解零信任安全模型的實施路徑、常見挑戰和成功案例。'
    },
    {
      title: '雲安全挑戰與解決方案',
      date: '2023-09-15',
      speaker: '王芳 | 雲安全專家',
      description: '探討企業雲遷移面臨的主要安全挑戰和實用解決方案。'
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
                知識中心
              </h1>
              <p className="text-slate-200 mb-8 text-lg md:text-xl max-w-3xl mx-auto">
                探索我們的安全資源庫，了解最新的網絡安全趨勢、威脅情報和最佳實踐。
              </p>
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="搜索文章、資源或網絡研討會" 
                  className="w-full pl-10 py-3 pr-4 rounded-lg border-0 focus:ring-2 focus:ring-cyber-accent"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <section className="py-16 bg-slate-50">
          <div className="container px-4 mx-auto">
            <Tabs defaultValue="articles" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="articles">文章與博客</TabsTrigger>
                  <TabsTrigger value="resources">安全資源</TabsTrigger>
                  <TabsTrigger value="webinars">網絡研討會</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="articles">
                <div className="max-w-6xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogPosts.map((post, index) => (
                      <BlogPost 
                        key={index}
                        title={post.title}
                        excerpt={post.excerpt}
                        date={post.date}
                        category={post.category}
                      />
                    ))}
                  </div>
                  
                  <div className="mt-12 flex justify-center">
                    <Button variant="outline" size="lg" className="group">
                      查看更多文章
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="resources">
                <div className="max-w-6xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {resources.map((resource, index) => (
                      <Resource
                        key={index}
                        title={resource.title}
                        type={resource.type}
                        description={resource.description}
                      />
                    ))}
                  </div>
                  
                  <div className="mt-12 flex justify-center">
                    <Button variant="outline" size="lg" className="group">
                      瀏覽全部資源
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="webinars">
                <div className="max-w-4xl mx-auto">
                  <div className="space-y-6">
                    {webinars.map((webinar, index) => (
                      <Card key={index} className="cyber-card">
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div>
                              <div className="flex items-center gap-2 text-sm text-cyber-accent mb-2">
                                <Calendar className="h-4 w-4" />
                                <span>{webinar.date}</span>
                              </div>
                              <h3 className="text-xl font-bold mb-2">{webinar.title}</h3>
                              <p className="text-slate-500 mb-4">{webinar.speaker}</p>
                              <p className="text-slate-600">{webinar.description}</p>
                            </div>
                            <div className="flex-shrink-0">
                              <Button>
                                報名參加
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="mt-12 flex justify-center">
                    <Button variant="outline" size="lg" className="group">
                      查看更多網絡研討會
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="container px-4 mx-auto mt-16">
            <div className="cyber-card p-8 bg-cyber-gradient-light">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">訂閱安全通訊</h3>
                  <p className="max-w-xl">
                    定期獲取最新的安全資訊、威脅警報和防禦建議，保持安全意識。
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="flex gap-2">
                    <input 
                      type="email" 
                      placeholder="您的電子郵件" 
                      className="px-4 py-2 border-0 rounded-l-md focus:outline-none focus:ring-2 focus:ring-cyber-accent min-w-[250px]"
                    />
                    <Button className="rounded-l-none bg-white text-cyber-accent hover:bg-slate-100">
                      訂閱
                    </Button>
                  </div>
                </div>
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

export default KnowledgeCenter;
