import { motion, useScroll, useTransform } from 'framer-motion';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { useRef } from 'react';
import Button from '../../components/atoms/Button';
import DevelopmentTeam from '../../components/organisms/DevelopmentTeam';
import PackagesSection from '../../components/organisms/PackagesSection';
import ImageCarousel from '../../components/organisms/ImageCarousel';
import LogoAltus from '../../assets/images/LogoAltus.png';

const LandingPage = () => {
  const containerRef = useRef(null);
  const contactRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Función para hacer scroll suave hasta el formulario de contacto
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  // Función para abrir Facebook
  const openFacebook = () => {
    window.open('https://www.facebook.com/altusmd', '_blank');
  };

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // Animación del scroll indicator
  const scrollIndicatorVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const thumbVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div ref={containerRef} className="w-screen min-h-screen bg-dark text-gray-100 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center w-full bg-gradient-dark">
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 bg-gradient-radial from-primary bg-opacity-5 via-transparent to-transparent"
        />
        <div className="container mx-auto px-4 py-12 sm:py-24 relative z-10 w-full">
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <img 
                src={LogoAltus} 
                alt="Altus Logo" 
                className="mx-auto w-64 md:w-80 lg:w-96"
              />
            </motion.div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#b3cee9] to-[#ffffff] leading-tight" style={{fontFamily: 'Arial, sans-serif'}}>
              Soluciones Tecnológicas para tu Negocio
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-gray-300 max-w-2xl mx-auto" style={{fontFamily: 'Arial, sans-serif'}}>
              En Altus, transformamos tus desafíos en soluciones innovadoras.
              Expertos en desarrollo de software y soporte técnico.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-dark w-full sm:w-auto"
                onClick={scrollToContact}
              >
                Contáctanos
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-primary hover:text-primary w-full sm:w-auto"
                onClick={openFacebook}
              >
                Conoce más
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial="initial"
          animate="animate"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-primary cursor-pointer"
        >
          <motion.span 
            variants={thumbVariants}
            className="text-sm font-medium"
          >
            Scroll para descubrir más
          </motion.span>
          <motion.div 
            variants={scrollIndicatorVariants}
            className="w-6 h-10 border-2 border-primary rounded-full p-2 flex justify-center"
          >
            <motion.div
              className="w-2 h-2 bg-primary rounded-full"
              animate={{
                y: [0, 12, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Image Carousel Section */}
      <ImageCarousel />

      {/* Services Section */}
      <section className="py-24 bg-dark-secondary w-full">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-primary" style={{fontFamily: 'Arial, sans-serif'}}>
              Nuestros Servicios
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto" style={{fontFamily: 'Arial, sans-serif'}}>
              Soluciones completas para todas tus necesidades tecnológicas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto px-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-lighter rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-primary hover:shadow-opacity-20 transition-all duration-300 border border-primary border-opacity-10 transform hover:-translate-y-1"
              >
                <div className="text-primary mb-4 transform hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-primary" style={{fontFamily: 'Arial, sans-serif'}}>{service.title}</h3>
                <p className="text-gray-300" style={{fontFamily: 'Arial, sans-serif'}}>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <PackagesSection />

      {/* Development Team Section */}
      <DevelopmentTeam />

      {/* Contact Section */}
      <section ref={contactRef} className="py-24 bg-dark-secondary w-full">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-primary" style={{fontFamily: 'Arial, sans-serif'}}>
                Contáctanos
              </h2>
              <p className="text-lg sm:text-xl text-gray-300" style={{fontFamily: 'Arial, sans-serif'}}>
                Estamos aquí para ayudarte con tus proyectos
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center space-x-4">
                  <PhoneIcon className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-medium text-gray-200">Teléfonos</p>
                    <a href="tel:+529651000634" className="text-gray-300 hover:text-primary transition-colors block">
                      (965) 100 0634
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <EnvelopeIcon className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-medium text-gray-200">Email</p>
                    <a href="mailto:soporte@fix-hs.com.mx" className="text-gray-300 hover:text-primary transition-colors">
                      soporte@fix-hs.com.mx
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <div>
                    <p className="font-medium text-gray-200">Facebook</p>
                    <a 
                      href="https://www.facebook.com/altusmd" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-primary transition-colors"
                    >
                      @altusmd
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.form 
                className="space-y-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-200">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md bg-dark-lighter border-gray-600 text-gray-100 focus:border-primary focus:ring-primary transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md bg-dark-lighter border-gray-600 text-gray-100 focus:border-primary focus:ring-primary transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-200">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md bg-dark-lighter border-gray-600 text-gray-100 focus:border-primary focus:ring-primary transition-colors"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary-dark transform hover:scale-105 transition-transform">
                  Enviar Mensaje
                </Button>
              </motion.form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    title: 'Marketing Digital',
    description: 'Estrategias digitales efectivas para aumentar tu presencia online.',
    icon: <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">📱</div>,
  },
  {
    title: 'Branding',
    description: 'Creación y desarrollo de identidad de marca única y memorable.',
    icon: <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">🎨</div>,
  },
  {
    title: 'Community Manager',
    description: 'Gestión profesional de tus redes sociales para conectar con tu audiencia.',
    icon: <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">💬</div>,
  },
  {
    title: 'Desarrollo de páginas Web',
    description: 'Sitios web modernos y responsivos que destacan tu presencia digital.',
    icon: <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">🌐</div>,
  },
  {
    title: 'Desarrollo de Software',
    description: 'Soluciones personalizadas que impulsan tu negocio al siguiente nivel.',
    icon: <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">💻</div>,
  },
  {
    title: 'Consultoría IT',
    description: 'Asesoramiento estratégico para optimizar tus procesos tecnológicos.',
    icon: <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">📊</div>,
  },
];

export default LandingPage; 