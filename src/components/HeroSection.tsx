
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 px-4 bg-rookiBlack min-h-[90vh] flex items-center">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-4 flex justify-center">
            <div className="inline-block p-2 bg-rookiGreen rounded-full animate-pulse">
              <span className="text-3xl">👁️‍🗨️</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-rookiWhite leading-tight">
            Descubra se é golpe em <span className="text-rookiGreen">segundos.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-rookiGray mb-8 max-w-xl mx-auto">
            Rooki analisa mensagens suspeitas e te protege na hora.
          </p>
          
          <div className="mb-12">
            <Button 
              size="lg"
              className="bg-rookiGreen text-rookiBlack hover:bg-rookiGreen/90 font-semibold text-lg px-8 py-6 rounded-full"
              onClick={() => window.open('https://wa.me/1234567890', '_blank')}
            >
              Testar agora via WhatsApp
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <p className="text-rookiGray mt-4 opacity-80 text-sm">
              Gratuito, rápido e sem complicação.
            </p>
          </div>
          
          <div className="px-4 py-2 bg-rookiGray/10 rounded-lg inline-block">
            <p className="text-rookiGray text-sm">
              <span className="font-semibold text-white">Você suspeita, a gente detecta.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
