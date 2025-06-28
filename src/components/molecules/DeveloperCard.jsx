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
      whileHover={{ scale: 1.05 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        duration: 0.5 
      }}
      className="relative group"
    >
      <Atropos
        className="my-atropos"
        activeOffset={40}
        shadowScale={1.05}
        onEnter={() => console.log('Enter')}
        onLeave={() => console.log('Leave')}
        highlight={true}
      >
        <div className="bg-dark-lighter rounded-xl shadow-lg overflow-hidden hover:shadow-primary/20 transition-shadow border border-primary/10 h-80 sm:h-72 lg:h-96 flex flex-col">
          <div className="relative w-36 h-32 mx-auto mt-4 mb-2 overflow-hidden rounded-lg flex-shrink-0">
            <img
              src={image}
              alt={name}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="p-6 text-center flex-1 flex flex-col justify-between" data-atropos-offset="3">
            <div>
              <h3 className="text-xl font-semibold text-primary" style={{fontFamily: 'Arial, sans-serif'}} data-atropos-offset="5">{name}</h3>
              <p className="mt-2 text-gray-300" style={{fontFamily: 'Arial, sans-serif'}} data-atropos-offset="3">{role}</p>
            </div>
            
            {socialLinks.length > 0 && (
              <div className="mt-4 flex justify-center space-x-4" data-atropos-offset="2">
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