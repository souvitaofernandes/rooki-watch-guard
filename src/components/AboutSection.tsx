
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-16 px-4 bg-rookiWhite">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-rookiBlack">
            O que é o <span className="text-rookiGreen bg-rookiBlack px-2 rounded">Rooki</span>?
          </h2>
          
          <div className="bg-rookiGray/30 p-6 md:p-10 rounded-xl shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/4 flex justify-center">
                <div className="text-6xl">🔍</div>
              </div>
              
              <div className="md:w-3/4">
                <p className="text-lg md:text-xl text-rookiBlack/90 leading-relaxed">
                  Você envia uma mensagem, link ou print suspeito via WhatsApp e o 
                  <span className="font-bold"> Rooki responde dizendo se é golpe ou não</span> — 
                  simples assim.
                </p>
                
                <div className="mt-6 p-4 bg-rookiBlack rounded-lg text-rookiWhite">
                  <p className="text-sm">
                    Nossa inteligência artificial analisa padrões de fraude e te ajuda a 
                    tomar decisões mais seguras no mundo digital.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
