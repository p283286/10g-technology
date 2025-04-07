
import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PenetrationTestingDashboardsProps {
  dashboardTitle: string;
  dashboardDescription: string;
  viewFullscreen: string;
  imageDescriptions: string[];
  dashboardImages?: string[];
}

const PenetrationTestingDashboards: React.FC<PenetrationTestingDashboardsProps> = ({
  dashboardTitle,
  dashboardDescription,
  viewFullscreen,
  imageDescriptions,
  dashboardImages
}) => {
  const defaultImages = [
    "/lovable-uploads/66b651a2-37bf-41a1-8749-2654fe1a9701.png",
    "/lovable-uploads/3b68fee0-88ba-4849-96ff-bf88f05227b8.png",
    "/lovable-uploads/80a64615-7c0a-4b88-9789-d85c6adfca51.png", 
    "/lovable-uploads/666523c7-5e7c-44b3-baf6-b5e93fd1bd07.png"
  ];
  
  const imagesToDisplay = dashboardImages || defaultImages;

  return (
    <section className="py-12 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">{dashboardTitle}</h2>
          <p className="text-lg mb-10 text-center max-w-3xl mx-auto">
            {dashboardDescription}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {imagesToDisplay.map((img, index) => (
              <div key={index} className="flex flex-col">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="relative overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-all duration-300 group">
                      <img 
                        src={img} 
                        alt={`Penetration Testing Dashboard ${index + 1}`} 
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
                      alt={`Penetration Testing Dashboard ${index + 1} (Full Size)`} 
                      className="w-full h-auto"
                    />
                  </DialogContent>
                </Dialog>
                {imageDescriptions[index] && (
                  <p className="mt-2 text-sm text-gray-600">{imageDescriptions[index]}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PenetrationTestingDashboards;
