import { motion } from 'framer-motion';
import DeveloperCard from '../molecules/DeveloperCard';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ImgDario from '../../assets/team/ImgPerfilDario.png';

const developers = [
  {
    name: 'Fidel Torres Arroyo',
    role: 'CEO - Lic. en Informática',
    image: '/team/fidel.jpg',
    socialLinks: [],
  },
  {
    name: 'Darío Antonio Gutiérrez Álvarez',
    role: 'Fullstack Developer - Ing. en Software',
    image: ImgDario,
    socialLinks: [
      {
        platform: 'linkedin',
        url: 'https://www.linkedin.com/in/dario-antonio/',
        icon: <FaLinkedin className="w-6 h-6" />,
      },
      {
        platform: 'github',
        url: 'https://github.com/Darioantonio20',
        icon: <FaGithub className="w-6 h-6" />,
      },
    ],
  },
  {
    name: 'Samuel Alberto Hernandez',
    role: 'Product Owner - Ing. en Software',
    image: '/team/samuel.jpg',
    socialLinks: [],
  },
];

const DevelopmentTeam = () => {
  return (
    <section className="py-24 bg-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4" style={{fontFamily: 'Arial, sans-serif'}}>
            Nuestro Equipo
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto" style={{fontFamily: 'Arial, sans-serif'}}>
            Conoce a los expertos detrás de Altus, comprometidos con la excelencia
            y la innovación en cada proyecto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Primera fila: 3 cards */}
          <DeveloperCard {...developers[0]} />
          <DeveloperCard {...developers[1]} />
          <DeveloperCard {...developers[2]} />
        </div>
      </div>
    </section>
  );
};

export default DevelopmentTeam; 