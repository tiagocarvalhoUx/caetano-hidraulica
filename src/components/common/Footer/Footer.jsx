import React from 'react';
import { Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sobre */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Sobre</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-green-200 transition-colors duration-200">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-200 transition-colors duration-200">
                  Missão
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-200 transition-colors duration-200">
                  Valores
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-200 transition-colors duration-200">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-200 transition-colors duration-200">
                  Área do Franqueado
                </a>
              </li>
            </ul>
          </div>
          
          {/* Serviços */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Serviços</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-green-200 transition-colors duration-200">
                  Elétrica
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-200 transition-colors duration-200">
                  Hidráulica
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-200 transition-colors duration-200">
                  Pintura
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-200 transition-colors duration-200">
                  Pedreiro
                </a>
              </li>
            </ul>
          </div>
          
          {/* Franquias */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Franquias</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-green-200 transition-colors duration-200">
                  Como se tornar franqueado
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-200 transition-colors duration-200">
                  Investimento
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-200 transition-colors duration-200">
                  Suporte
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contato */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Contato</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0" /> 
                <span>(11) 1234-5678</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 flex-shrink-0" /> 
                <span>contato@doutorresolve.com.br</span>
              </div>
              
              {/* Redes Sociais */}
              <div className="pt-2">
                <h4 className="font-semibold mb-2">Siga-nos</h4>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="hover:text-blue-300 transition-colors duration-200"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a 
                    href="#" 
                    className="hover:text-pink-300 transition-colors duration-200"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a 
                    href="#" 
                    className="hover:text-red-300 transition-colors duration-200"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Rodapé Inferior */}
        <div className="border-t border-green-500 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-center md:text-left">
              &copy; 2024 Doutor Resolve. Todos os direitos reservados.
            </p>
            
            {/* Formas de Pagamento */}
            <div className="flex items-center space-x-4">
              <span className="text-sm">Formas de Pagamento:</span>
              <div className="flex space-x-2">
                <div 
                  className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center text-xs font-bold shadow-sm"
                  title="Cartão de Crédito"
                >
                  💳
                </div>
                <div 
                  className="w-10 h-6 bg-red-600 rounded flex items-center justify-center text-xs font-bold shadow-sm"
                  title="Cartão de Débito"
                >
                  💳
                </div>
                <div 
                  className="w-10 h-6 bg-yellow-600 rounded flex items-center justify-center text-xs font-bold shadow-sm"
                  title="PIX"
                >
                  💳
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;