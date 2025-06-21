import { motion } from 'framer-motion';
import DeveloperCard from '../molecules/DeveloperCard';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const developers = [
  {
    name: 'Darío Antonio Gutiérrez',
    role: 'Frontend Developer',
    image: '/team/dario.jpg',
    socialLinks: [
      {
        platform: 'github',
        url: 'https://github.com/darioguti05',
        icon: <FaGithub className="w-6 h-6" />,
      },
      {
        platform: 'linkedin',
        url: 'https://linkedin.com/in/darioguti05',
        icon: <FaLinkedin className="w-6 h-6" />,
      },
    ],
  },
  {
    name: 'Nombre del Desarrollador 2',
    role: 'Backend Developer',
    image: '/team/dev2.jpg',
    socialLinks: [
      {
        platform: 'github',
        url: 'https://github.com/dev2',
        icon: <FaGithub className="w-6 h-6" />,
      },
      {
        platform: 'linkedin',
        url: 'https://linkedin.com/in/dev2',
        icon: <FaLinkedin className="w-6 h-6" />,
      },
    ],
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
          <h2 className="text-4xl font-bold text-primary mb-4">
            Nuestro Equipo de Desarrollo
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Conoce a los expertos detrás de Fix HS, comprometidos con la excelencia
            y la innovación en cada proyecto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {developers.map((developer) => (
            <DeveloperCard
              key={developer.name}
              {...developer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentTeam; 