
import React from 'react';
import { MessageSquare, Send, ShieldCheck } from 'lucide-react';

const steps = [
  {
    icon: <MessageSquare className="h-8 w-8 text-rookiGreen" />,
    title: "Receba uma mensagem suspeita",
    description: "Identifique conteúdo que gera dúvida sobre sua autenticidade"
  },
  {
    icon: <Send className="h-8 w-8 text-rookiGreen" />,
    title: "Encaminhe para o Rooki",
    description: "Compartilhe a mensagem suspeita via WhatsApp"
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-rookiGreen" />,
    title: "Receba a análise",
    description: "Obtenha orientações claras e práticas instantaneamente"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 px-4 bg-rookiWhite">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-rookiBlack">
          Como o <span className="text-rookiGreen">Rooki</span> funciona?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="bg-rookiWhite p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="mb-4 bg-rookiBlack/5 p-4 rounded-full inline-block">
                {step.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-rookiBlack">
                {step.title}
              </h3>
              
              <p className="text-rookiBlack/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
