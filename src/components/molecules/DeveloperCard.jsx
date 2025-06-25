import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Atropos from 'atropos/react';
import 'atropos/css';

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
    >
      <Atropos
        className="my-atropos"
        activeOffset={40}
        shadowScale={1.05}
        onEnter={() => console.log('Enter')}
        onLeave={() => console.log('Leave')}
        highlight={true}
      >
        <div className="bg-dark-lighter rounded-xl shadow-lg overflow-hidden hover:shadow-primary/20 transition-shadow border border-primary/10">
          <div className="aspect-w-1 aspect-h-1">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
              loading="lazy"
              data-atropos-offset="5"
            />
          </div>
          <div className="p-6" data-atropos-offset="3">
            <h3 className="text-xl font-semibold text-primary font-squaregame" data-atropos-offset="5">{name}</h3>
            <p className="mt-2 text-gray-300 font-squaregame" data-atropos-offset="3">{role}</p>
            
            {socialLinks.length > 0 && (
              <div className="mt-4 flex space-x-4" data-atropos-offset="2">
                {socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors"
                    data-atropos-offset="4"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </Atropos>
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