
import React from 'react';
import { Button } from "@/components/ui/button";
import { ExternalLink } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-rookiGray/20 to-rookiWhite">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-rookiBlack">
            Pronto para testar o <span className="text-rookiGreen">Rooki</span>?
          </h2>
          
          <p className="text-lg md:text-xl text-rookiBlack/80 mb-10 max-w-xl mx-auto">
            É grátis, rápido e pode salvar você de cair em golpes online.
          </p>
          
          <Button 
            size="lg"
            className="bg-rookiGreen text-rookiBlack hover:bg-rookiGreen/90 font-semibold text-xl px-10 py-7 rounded-full shadow-lg hover:shadow-xl transition-all"
            onClick={() => window.open('https://wa.me/1234567890', '_blank')}
          >
            Quero testar o Rooki grátis
            <ExternalLink className="ml-3 h-5 w-5" />
          </Button>
          
          <p className="mt-6 text-sm text-rookiBlack/60">
            Apenas envie sua mensagem suspeita via WhatsApp e receba nossa análise.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
