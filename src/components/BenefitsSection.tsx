
import React from 'react';
import { Clock, Shield, Zap, User } from 'lucide-react';

const benefits = [
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Fácil de usar",
    description: "Basta enviar o conteúdo suspeito pelo WhatsApp"
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Resposta na hora",
    description: "Análise rápida para você tomar decisões seguras"
  },
  {
    icon: <User className="h-8 w-8" />,
    title: "Sem complicação",
    description: "Interface simples e direta, sem cadastros"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Proteção real",
    description: "IA treinada para identificar golpes atuais"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-16 px-4 bg-rookiGray/20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-rookiBlack">
          Benefícios do <span className="text-rookiGreen">Rooki</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-rookiWhite p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4 bg-rookiGreen/20 p-4 rounded-full inline-block">
                <div className="text-rookiBlack">
                  {benefit.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-rookiBlack">
                {benefit.title}
              </h3>
              
              <p className="text-rookiBlack/70">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
