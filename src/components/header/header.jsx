import React, { useState } from 'react';
import { Search, Star, MapPin, Phone, Mail, Facebook, Instagram, User, Wrench, Zap, Droplets, Wind, Hammer, Home, CheckCircle, Clock, Shield, Award, Youtube, X } from 'lucide-react';
import Logo from "../../assets/caetano-hidraulica 1.png";
import Whatsapp from "../../assets/icon-whats.png";
import Banner from "../../assets/Banner.png";
import Foto1 from "../../assets/fotos/ferramentas-diversas.png";


export default function DoutorResolveLanding() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      title: "Casa de receitas",
      subtitle: "Receita caseira",
      rating: 4,
      image: "/api/placeholder/250/200",
      category: "Culinária"
    },
    {
      title: "Receita para uma semana",
      subtitle: "Alimentação saudável", 
      rating: 5,
      image: "/api/placeholder/250/200",
      category: "Alimentação"
    },
    {
      title: "Aplicação de Complementos",
      subtitle: "Suplementos nutricionais",
      rating: 4,
      image: "/api/placeholder/250/200",
      category: "Saúde"
    },
    {
      title: "Equipamento para Pé no Ginásio",
      subtitle: "Equipamentos fitness",
      rating: 5,
      image: "/api/placeholder/250/200",
      category: "Fitness"
    }
  ];

  const serviceCategories = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "PEDREIRO",
      subtitle: "ORÇAMENTO GRATUITO",
      description: "Reformas estruturais de construção civil e reparos diversos em alvenaria",
      color: "bg-amber-600",
      buttonColor: "bg-amber-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "ELÉTRICA",
      subtitle: "ORÇAMENTO GRATUITO",
      description: "Instalação e manutenção de sistemas elétricos residenciais e comerciais",
      color: "bg-red-600",
      buttonColor: "bg-red-500"
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "HIDRÁULICA",
      subtitle: "ORÇAMENTO GRATUITO",
      description: "Serviços de encanamento, instalação e manutenção de sistemas hidráulicos",
      color: "bg-blue-600",
      buttonColor: "bg-blue-500"
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: "AR CONDICIONADO",
      subtitle: "ORÇAMENTO GRATUITO",
      description: "Instalação, manutenção, limpeza e conserto de aparelhos de ar condicionado",
      color: "bg-cyan-700",
      buttonColor: "bg-cyan-600"
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "PINTURA",
      subtitle: "ORÇAMENTO GRATUITO",
      description: "Pintura residencial e comercial com acabamento profissional e garantia",
      color: "bg-yellow-500",
      buttonColor: "bg-yellow-400"
    }
  ];

  const companyServices = [
    {
      icon: <CheckCircle className="w-12 h-12 text-green-600" />,
      title: "Alvenaria",
      description: "Construção e reforma de estruturas em alvenaria com qualidade garantida e acabamento perfeito",
      rating: "Ver mais >"
    },
    {
      icon: <Droplets className="w-12 h-12 text-green-600" />,
      title: "Hidráulica", 
      description: "Instalação e manutenção de sistemas hidráulicos residenciais e comerciais com garantia",
      rating: "Ver mais >"
    },
    {
      icon: <Zap className="w-12 h-12 text-green-600" />,
      title: "Elétrica",
      description: "Serviços elétricos seguros e certificados para sua casa ou empresa com profissionais qualificados",
      rating: "Ver mais >"
    },
    {
      icon: <Wrench className="w-12 h-12 text-green-600" />,
      title: "Pintura",
      description: "Serviços de pintura residencial e comercial com acabamento impecável e materiais de qualidade",
      rating: "Ver mais >"
    },
    {
      icon: <Hammer className="w-12 h-12 text-green-600" />,
      title: "Reparos",
      description: "Reparos diversos e manutenção preventiva para manter sua casa sempre em perfeito estado",
      rating: "Ver mais >"
    },
    {
      icon: <Home className="w-12 h-12 text-green-600" />,
      title: "Visita Técnica",
      description: "Avaliação profissional gratuita com orçamento detalhado e sem compromisso para seu projeto",
      rating: "Ver mais >"
    }
  ];

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
    <div className="min-h-screen bg-white">
      {/* Header */}
     <header className="bg-white shadow-sm">
               
        {/* Blue Header Section */}
        <div className="self-stretch w-full max-w-[1920px] mx-auto h-auto min-h-[80px] md:h-[153px] md:min-h-5 p-px bg-gradient-to-b from-[#0d3350] to-[#1d74b6] rounded outline outline-1 outline-offset-[-1px] outline-[#f3fcf9] inline-flex flex-col justify-start items-center relative">
          <div className="container mx-auto px-2 md:px-4">
            <div className="flex items-center justify-between py-2 md:py-4 md:justify-between relative">
              
              {/* Mobile Hamburger Menu - Left Side */}
              <div className="md:hidden flex items-center">
                <button 
                  className="text-white hover:text-blue-200 focus:outline-none z-50"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Logo - Centered on Mobile, Left on Desktop */}
              <div className="flex items-center space-x-4 md:space-x-8 md:flex-1 absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none">
                <div className="text-xl font-bold">
                  <img 
                    src={Logo} 
                    alt="logo-caetano" 
                    className='mt-7 md:mt-[-18px] ml-[80px] md:ml-[-18px] w-[36%] md:w-full' 
                  />
                </div>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8 text-sm font-semibold">
                  <a href="#" className="hover:text-blue-200 text-white">Home</a>
                  <a href="#" className="hover:text-blue-200 text-white">Contato</a>
                  <a href="#" className="hover:text-blue-200 text-white">Diferenciais</a>
                  <a href="#" className="hover:text-blue-200 text-white">Como Contratar?</a>
                </nav>
              </div>
              
              {/* Desktop Social Icons */}
              <div className="hidden md:flex items-center space-x-4 ml-[15px]">
                <Youtube className="w-5 h-5 cursor-pointer hover:text-blue-200 text-white" />
                <Instagram className="w-5 h-5 cursor-pointer hover:text-blue-200 text-white" />
                <img src={Whatsapp} alt="whatsapp" className='w-15 h-8 cursor-pointer hover:text-blue-200 ' />
              </div>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-[#0d3350] to-[#1d74b6] z-40 shadow-lg">
              <nav className="flex flex-col p-4 space-y-4">
                <a href="#" className="text-white hover:text-blue-200 py-2 border-b border-blue-400/30" onClick={() => setMobileMenuOpen(false)}>Home</a>
                <a href="#" className="text-white hover:text-blue-200 py-2 border-b border-blue-400/30" onClick={() => setMobileMenuOpen(false)}>Contato</a>
                <a href="#" className="text-white hover:text-blue-200 py-2 border-b border-blue-400/30" onClick={() => setMobileMenuOpen(false)}>Diferenciais</a>
                <a href="#" className="text-white hover:text-blue-200 py-2 border-b border-blue-400/30" onClick={() => setMobileMenuOpen(false)}>Como Contratar?</a>
                
                {/* Mobile Social Icons */}
                <div className="flex items-center justify-center space-x-6 pt-4">
                  <Youtube className="w-6 h-6 cursor-pointer hover:text-blue-200 text-white" />
                  <Instagram className="w-6 h-6 cursor-pointer hover:text-blue-200 text-white" />
                  <img src={Whatsapp} alt="whatsapp" className='w-15 h-8 cursor-pointer' />
                </div>
              </nav>
            </div>
          )}
        </div>
        
        {/* Resolve Header */}
        <img className="self-stretch h-[345px] shadow-[inset_0px_0px_3px_0px_rgba(50,50,50,0.10)] mt-[-5px]" src={Banner} />
      </header>

      {/* Overlay para fechar o menu quando clicar fora */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" 
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}

      {/* Hero Section */}
      <section className="relative bg-gray-50">
        <div class="w-[1210px] h-[900.33px] relative">
    <img class="w-[100px] h-[834px] left-[3918.54px] top-0 absolute" src={Foto1} />
    <img className="w-[1920px] h-[834px] left-0 top-0 absolute" src={Foto1} />
    <img class="w-[1920px] h-[834px] left-[1959.55px] top-[33.17px] absolute" src={Foto1} />
    <img class="w-[1920px] h-[834px] left-[5878.38px] top-[13.88px] absolute" src={Foto1} />
    <img class="w-[1920px] h-[834px] left-[7838.22px] top-[66.33px] absolute" src={Foto1} />
</div>
      </section>

      {/* Service Categories Section */}
      <section className="py-12 bg-green-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Precisa de um técnico para detectar o serviço necessário?</h2>
          <p className="text-white mb-8 text-lg">Solicite uma visita do Doutor Resolve!</p>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {serviceCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-lg">
                <div className={`${category.color} w-16 h-16 rounded-lg mx-auto mb-4 flex items-center justify-center text-white shadow-md`}>
                  {category.icon}
                </div>
                <h3 className="font-bold text-gray-800 mb-1 text-sm">{category.title}</h3>
                <p className="text-xs text-green-600 font-semibold mb-3">{category.subtitle}</p>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">{category.description}</p>
                <button className={`${category.buttonColor} text-white px-4 py-2 rounded-lg text-xs font-medium hover:opacity-90 transition-opacity w-full`}>
                  Solicitar Orçamento
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Logos Section */}
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

      {/* How it Works Section */}
      <section className="py-12 bg-green-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-12">É fácil como contar 1-2-3</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-green-800 mx-auto mb-6">
                1
              </div>
              <p className="text-white text-lg leading-relaxed">Escolha o serviço e agenda para a execução através do nosso site</p>
              <div className="mt-6">
                <div className="flex items-center justify-center">
                  <img src="/api/placeholder/120/120" alt="Mascote 1" className="rounded-full" />
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-green-800 mx-auto mb-6">
                2
              </div>
              <p className="text-white text-lg leading-relaxed mb-6">Aguarde a ligação do técnico especialista que executará o serviço em sua casa</p>
              <div className="bg-green-600 p-4 rounded-lg inline-block">
                <h3 className="text-yellow-400 font-bold text-xl">Felicidade Garantida</h3>
                <p className="text-white text-sm">Satisfação garantida ou seu dinheiro de volta</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-green-800 mx-auto mb-6">
                3
              </div>
              <p className="text-white text-lg leading-relaxed">Tenha a garantia de 3 meses para o serviço executado com nossa equipe especializada</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nossos serviços</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {companyServices.map((service, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex-shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-3 text-lg">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                  <button className="text-green-600 text-sm font-medium hover:text-green-700 transition-colors">
                    {service.rating}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Encontre a franquia mais próxima de você</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-100 rounded-lg overflow-hidden shadow-lg" style={{height: '400px'}}>
              <img src="/api/placeholder/800/400" alt="Mapa do Brasil com franquias" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Investimos em segurança e confiança</h2>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto text-lg">A Doutor Resolve se preocupa com você e por isso todos nossos franqueados possuem Selo Reclame Aqui, são totalmente treinados e certificados.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-800 mb-2">Identidade Checada</h3>
            </div>
            
            <div className="text-center">
              <Clock className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-800 mb-2">Histórico Verificado</h3>
            </div>
            
            <div className="text-center">
              <User className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-800 mb-2">Entrevistas Presenciais</h3>
            </div>
            
            <div className="text-center">
              <Shield className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-800 mb-2">Treinamento</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4 text-lg">Sobre</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-200 transition-colors">Quem Somos</a></li>
                <li><a href="#" className="hover:text-green-200 transition-colors">Missão</a></li>
                <li><a href="#" className="hover:text-green-200 transition-colors">Valores</a></li>
                <li><a href="#" className="hover:text-green-200 transition-colors">Termo de Uso</a></li>
                <li><a href="#" className="hover:text-green-200 transition-colors">Área do Franqueado</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-lg">Serviços</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-200 transition-colors">Elétrica</a></li>
                <li><a href="#" className="hover:text-green-200 transition-colors">Hidráulica</a></li>
                <li><a href="#" className="hover:text-green-200 transition-colors">Pintura</a></li>
                <li><a href="#" className="hover:text-green-200 transition-colors">Pedreiro</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-lg">Franquias</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-200 transition-colors">Como se tornar franqueado</a></li>
                <li><a href="#" className="hover:text-green-200 transition-colors">Investimento</a></li>
                <li><a href="#" className="hover:text-green-200 transition-colors">Suporte</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-lg">Contato</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" /> 
                  <span>(11) 1234-5678</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" /> 
                  <span>contato@doutorresolve.com.br</span>
                </div>
                <div className="flex space-x-4 mt-4">
                  <Facebook className="w-6 h-6 cursor-pointer hover:text-blue-300 transition-colors" />
                  <Instagram className="w-6 h-6 cursor-pointer hover:text-pink-300 transition-colors" />
                  <Youtube className="w-6 h-6 cursor-pointer hover:text-red-300 transition-colors" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-green-500 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm">&copy; 2024 Doutor Resolve. Todos os direitos reservados.</p>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <span className="text-sm">Formas de Pagamento:</span>
                <div className="flex space-x-2">
                  <div className="w-8 h-5 bg-blue-600 rounded text-xs flex items-center justify-center">💳</div>
                  <div className="w-8 h-5 bg-red-600 rounded text-xs flex items-center justify-center">💳</div>
                  <div className="w-8 h-5 bg-yellow-600 rounded text-xs flex items-center justify-center">💳</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}