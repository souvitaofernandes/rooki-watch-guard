
import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Recebi uma mensagem estranha e o Rooki me ajudou a identificar que era um golpe. Muito útil!",
    author: "Ana P."
  },
  {
    text: "Fantástico! Me salvou de cair em uma fraude no WhatsApp. Super recomendo!",
    author: "Carlos M."
  },
  {
    text: "Prático e rápido. Me sinto mais seguro sabendo que posso verificar mensagens suspeitas.",
    author: "Roberto S."
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 px-4 bg-rookiBlack">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-rookiWhite">
          O que dizem sobre o <span className="text-rookiGreen">Rooki</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-rookiWhite/5 p-6 rounded-xl border border-rookiGreen/20">
              <Quote className="h-8 w-8 text-rookiGreen mb-4" />
              <p className="text-rookiWhite mb-4 italic">
                "{testimonial.text}"
              </p>
              <p className="text-rookiGreen font-semibold">
                – {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
