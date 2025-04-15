
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import BenefitsSection from '@/components/BenefitsSection';
import WhoCanUseSection from '@/components/WhoCanUseSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <BenefitsSection />
        <WhoCanUseSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
