// components/Testimonials/Testimonials.jsx
import React from 'react';
import { User } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Fernanda Silva Santos",
      text: "Excelente trabalho! A equipe foi muito profissional e cumpriu todos os prazos estabelecidos. Recomendo para todos que precisam de serviços de qualidade. O atendimento foi excepcional e o resultado superou minhas expectativas."
    },
    {
      name: "João Carlos Oliveira Santos", 
      text: "Serviço impecável! Fizeram a reforma da minha casa com muito cuidado e atenção aos detalhes. Superou minhas expectativas. Equipe pontual, organizada e muito profissional em todos os aspectos do trabalho."
    },
    {
      name: "Ana Paula Santos Machado",
      text: "Equipe muito competente e pontual. O orçamento foi justo e o resultado final ficou perfeito. Já indiquei para vários amigos e todos ficaram muito satisfeitos com os serviços prestados pela empresa."
    }
  ];

  return (
    <section className="py-12 bg-green-500">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-12">O que nossos clientes estão dizendo</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
                <div className="w-20 h-20 bg-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <User className="w-10 h-10 text-white" />
                </div>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <p className="font-bold text-gray-800">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;