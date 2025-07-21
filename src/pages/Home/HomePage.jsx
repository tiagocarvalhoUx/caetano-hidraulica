// src/pages/Home/HomePage.jsx (ou onde está seu componente principal)
import React from 'react';

// Componentes
import Header from '../../components/common/Header';
import ServicesSection from '../../components/sections/Services';

// Dados
import { TESTIMONIALS } from '../../data/testimonials';

// Hooks
import { useTestimonials } from '../../hooks/useTestimonials';

// Assets  
import { User } from 'lucide-react';

export default function HomePage() {
  const { testimonials } = useTestimonials();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section mantém como está */}
      
      {/* Media Logos Section - mantém como está */}
      <section className="py-6 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-8 opacity-60">
            <span className="text-2xl font-bold text-gray-500">G1</span>
            <span className="text-2xl font-bold text-gray-500">Forbes</span>
            <span className="text-2xl font-bold text-gray-500">Época</span>
            <span className="text-2xl font-bold text-gray-500">UOL</span>
            <span className="text-2xl font-bold text-gray-500">ESTADÃO</span>
            <span className="text-2xl font-bold text-gray-500">ÉPOCA</span>
          </div>
        </div>
      </section>

      {/* How it Works Section - mantém como está */}
      
      {/* Our Services Section - AGORA USANDO O NOVO COMPONENTE */}
      <ServicesSection />

      {/* Testimonials Section - mantém como está mas usando dados importados */}
      <section className="py-12 bg-green-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-12">O que nossos clientes estão dizendo</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white rounded-lg p-8 shadow-lg">
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

      {/* Restante das seções mantém como está */}
      
    </div>
  );
}