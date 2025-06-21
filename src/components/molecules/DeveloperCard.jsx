import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const DeveloperCard = ({ 
  name, 
  role, 
  image, 
  socialLinks 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-dark-lighter rounded-xl shadow-lg overflow-hidden hover:shadow-primary/20 transition-shadow border border-primary/10"
    >
      <div className="aspect-w-1 aspect-h-1">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-primary">{name}</h3>
        <p className="mt-2 text-gray-300">{role}</p>
        
        <div className="mt-4 flex space-x-4">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

DeveloperCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      platform: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default DeveloperCard; 