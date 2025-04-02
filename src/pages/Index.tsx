
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import CaseStudies from '@/components/CaseStudies';
import Certifications from '@/components/Certifications';
import Knowledge from '@/components/Knowledge';
import Contact from '@/components/Contact';
import News from '@/components/News';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <CaseStudies />
        <Certifications />
        <News />
        <Knowledge />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <LanguageSwitcher />
    </div>
  );
};

export default Index;
