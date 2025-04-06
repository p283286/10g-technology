
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useNavigate } from 'react-router-dom';

interface SIEMDashboardGalleryProps {
  dashboardImages: string[];
  dashboardTitle: string;
  dashboardDescription: string;
  viewFullscreen: string;
  cta: string;
  imageDescriptions: string[];
}

const SIEMDashboardGallery: React.FC<SIEMDashboardGalleryProps> = ({
  dashboardImages,
  dashboardTitle,
  dashboardDescription,
  viewFullscreen,
  cta,
  imageDescriptions
}) => {
  const navigate = useNavigate();

  return (
    <section className="py-12 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">{dashboardTitle}</h2>
          <p className="text-lg mb-10 text-center max-w-3xl mx-auto">
            {dashboardDescription}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dashboardImages.map((img, index) => (
              <div key={index} className="flex flex-col">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="relative overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-all duration-300 group">
                      <img 
                        src={img} 
                        alt={`SIEM Dashboard ${index + 1}`} 
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                          <Button variant="secondary" size="sm" className="flex items-center gap-1">
                            {viewFullscreen} <ArrowRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl w-full p-1">
                    <img 
                      src={img} 
                      alt={`SIEM Dashboard ${index + 1} (Full Size)`} 
                      className="w-full h-auto"
                    />
                  </DialogContent>
                </Dialog>
                <p className="mt-2 text-sm text-gray-600">{imageDescriptions[index]}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                  navigate('/#contact');
                }
              }}
              className="bg-cyber-warning hover:bg-cyber-accent text-cyber-dark font-semibold"
            >
              {cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SIEMDashboardGallery;
