
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import HowItWorks from '@/components/HowItWorks';
import BenefitsSection from '@/components/BenefitsSection';
import Testimonials from '@/components/Testimonials';
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
        <HowItWorks />
        <BenefitsSection />
        <Testimonials />
        <WhoCanUseSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
