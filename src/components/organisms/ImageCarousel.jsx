import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

// Importar las imágenes
import FlyerBranding from '../../assets/images/FLYERbranding.png';
import FlyerDesarrollo from '../../assets/images/FLYERDESARROLLO.png';
import FlyerWeb from '../../assets/images/FLYERweb.png';

const ImageCarousel = () => {
  const images = [
    {
      src: FlyerBranding,
      alt: 'Servicios de Branding',
      title: 'Branding Profesional'
    },
    {
      src: FlyerDesarrollo,
      alt: 'Servicios de Desarrollo', 
      title: 'Desarrollo de Software'
    },
    {
      src: FlyerWeb,
      alt: 'Servicios Web',
      title: 'Desarrollo Web'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, images.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 bg-dark w-full">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 
            className="text-4xl font-bold mb-4 text-primary"
            style={{fontFamily: 'Arial, sans-serif'}}
          >
            Nuestros Proyectos
          </h2>
          <p 
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            style={{fontFamily: 'Arial, sans-serif'}}
          >
            Descubre nuestras soluciones innovadoras
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main image container */}
          <div 
            className="relative bg-dark-lighter rounded-2xl overflow-hidden shadow-xl border border-gray-700"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Image display */}
            <div className="relative h-[500px] flex items-center justify-center p-8">
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="max-w-full max-h-full object-contain rounded-xl transition-opacity duration-500"
                style={{ 
                  opacity: 1,
                  transition: 'opacity 0.5s ease-in-out'
                }}
              />
              
              {/* Title overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 
                  className="text-2xl font-bold text-white text-center"
                  style={{fontFamily: 'Arial, sans-serif'}}
                >
                  {images[currentIndex].title}
                </h3>
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 hover:scale-105"
              aria-label="Imagen anterior"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 hover:scale-105"
              aria-label="Siguiente imagen"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>

            {/* Auto-play indicator */}
            <div className="absolute top-4 right-4">
              <div className={`w-3 h-3 rounded-full ${isAutoPlaying ? 'bg-green-500' : 'bg-gray-500'} transition-colors duration-200`}></div>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex justify-center gap-4 mt-8">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative rounded-lg overflow-hidden transition-all duration-200 ${
                  index === currentIndex 
                    ? 'ring-2 ring-primary scale-105' 
                    : 'opacity-60 hover:opacity-80 hover:scale-105'
                }`}
              >
                <div className="w-20 h-12 sm:w-24 sm:h-16">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Simple dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress bar */}
          {isAutoPlaying && (
            <div className="w-full max-w-md mx-auto mt-6 bg-gray-700 rounded-full h-1 overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all ease-linear"
                style={{
                  width: '0%',
                  animation: `progress 4s linear infinite`,
                }}
              />
            </div>
          )}

          {/* Counter */}
          <div className="text-center mt-4">
            <span 
              className="text-gray-400"
              style={{fontFamily: 'Arial, sans-serif'}}
            >
              {currentIndex + 1} de {images.length}
            </span>
          </div>
        </div>
      </div>

      {/* Simple CSS animation for progress bar */}
      <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default ImageCarousel; 