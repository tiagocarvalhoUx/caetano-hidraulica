import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Foto1 from '../../../assets/images/Fotos/foto1.png';
import Foto2 from '../../../assets/images/Fotos/foto2.png';
import Foto3 from '../../../assets/images/Fotos/foto3.png';
import Foto4 from '../../../assets/images/Fotos/foto4.png';
import Foto5 from '../../../assets/images/Fotos/foto5.png';
import Foto6 from '../../../assets/images/Fotos/foto6.png';
import Foto7 from '../../../assets/images/Fotos/foto7.png';
import Foto8 from '../../../assets/images/Fotos/foto8.png';
import Foto9 from '../../../assets/images/Fotos/foto9.png';

export default function ResponsiveCarousel({ foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9 }) {
  // Array com as imagens do carrossel
   const carouselImages = [
    Foto1, Foto2, Foto3, Foto4, Foto5, Foto6, Foto7, Foto8, Foto9
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-play do carrossel
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, carouselImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative bg-gray-50 overflow-hidden">
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[834px] mt-[-3px]">
        {/* Container das imagens */}
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {carouselImages.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
              <img 
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>

        {/* Overlay com gradiente */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>

        {/* Botões de navegação */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-200 group"
          aria-label="Slide anterior"
        >
          <ChevronLeft size={20} className="text-white group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-200 group"
          aria-label="Próximo slide"
        >
          <ChevronRight size={20} className="text-white group-hover:scale-110 transition-transform" />
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Botão Play/Pause */}
        <button
          onClick={togglePlayPause}
          className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200"
          aria-label={isPlaying ? "Pausar carrossel" : "Reproduzir carrossel"}
        >
          {isPlaying ? (
            <div className="w-4 h-4 flex items-center justify-center">
              <div className="flex space-x-1">
                <div className="w-1 h-3 bg-white"></div>
                <div className="w-1 h-3 bg-white"></div>
              </div>
            </div>
          ) : (
            <div className="w-4 h-4 flex items-center justify-center">
              <div className="w-0 h-0 border-l-[6px] border-l-white border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent ml-1"></div>
            </div>
          )}
        </button>

        {/* Contador de slides */}
        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1 text-white text-sm">
          {currentSlide + 1} / {carouselImages.length}
        </div>
      </div>
    </section>
  );
}