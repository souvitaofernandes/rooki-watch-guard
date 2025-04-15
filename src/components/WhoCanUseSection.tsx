
import React from 'react';
import { Users } from 'lucide-react';

const personaList = [
  "Pessoas de todas as idades",
  "Sem necessidade de conhecimento técnico",
  "Ideal para quem recebe mensagens ou ofertas suspeitas",
  "Perfeito para quem quer proteger amigos e familiares"
];

const WhoCanUseSection = () => {
  return (
    <section className="py-16 px-4 bg-rookiBlack text-rookiWhite">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-rookiGreen/20 p-3 rounded-full">
              <Users className="h-8 w-8 text-rookiGreen" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            Quem pode usar o <span className="text-rookiGreen">Rooki</span>?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {personaList.map((item, index) => (
              <div key={index} className="bg-rookiWhite/5 p-5 rounded-lg flex items-start">
                <div className="mr-3 mt-1 text-rookiGreen font-bold">✓</div>
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-rookiGray mb-6 max-w-md mx-auto">
              O Rooki foi desenvolvido para ser acessível a qualquer pessoa que queira se proteger de golpes online.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoCanUseSection;
