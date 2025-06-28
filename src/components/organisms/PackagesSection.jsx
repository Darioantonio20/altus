import { motion } from 'framer-motion';

const packages = [
  {
    name: 'Básico',
    price: '6000',
    color: 'emerald',

    description: 'Ideal para consultorios pequeños o individuales que quieren empezar con digitalización.',
    features: [
      'Gestión de agenda y citas (básico)',
      'Registro de pacientes y datos personales',
      'Generador de recetas médicas descargable en PDF por el DR',
      'Soporte básico de 8 am a 4 pm',
    ],
  },
  {
    name: 'Estándar',
    price: '8000',
    color: 'blue',

    description: 'Para clínicas con flujo constante de pacientes, que necesitan una administración más ordenada.',
    features: [
      'Todo lo del paquete Básico',
      'Historial clínico completo por paciente',
      'Firma digital en recetas',
      'Enlace web de receta directo para WhatsApp (automático)',
      'Panel de control con citas del día y estadísticas',
      'Recordatorio de citas de ese día',
      'Gestión de roles: doctor, secretario',
      'Soporte básico de 8 am a 8 pm',
    ],
  },
  {
    name: 'Avanzado',
    price: '12000',
    color: 'yellow',

    description: 'Para consultorios con varios especialistas y necesidades de control administrativo más robusto.',
    features: [
      'Todo lo anterior',
      'Múltiples usuarios (hasta 5 doctores y 3 secretarios)',
      'Facturación y gestión de pagos por consulta',
      'Recordatorios automáticos por WhatsApp a pacientes',
      'Reportes mensuales (PDF, Excel)',
      'Subida de archivos (exámenes, imágenes clínicas)',
    ],
  },
  {
    name: 'Premium',
    price: '15000',
    color: 'red',

    description: 'Consultorios que quieren automatizar al máximo, con experiencia moderna para pacientes.',
    features: [
      'Todo lo anterior',
      'App móvil personalizada con el logo del consultorio',
      'Acceso web para pacientes: ver historial, recetas, citas',
      'Personalización del sistema (colores, logo)',
      'Soporte prioritario (24 horas)',
    ],
  },
];

const PackageCard = ({ pack, isPopular }) => {
  return (
    <motion.div
      className="relative h-full"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-full text-sm font-semibold z-10">
          Más Popular
        </div>
      )}
      <div className="h-full bg-dark-lighter rounded-xl p-6 border border-gray-700 hover:border-primary/50 transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden group flex flex-col">
        <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 from-white/10 to-transparent" />
        
        <motion.div 
          className="text-4xl mb-4"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
        </motion.div>
        
        <div className="relative mb-8 pb-8 border-b border-gray-700">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-6 relative" style={{fontFamily: 'Arial, sans-serif'}}>
              {pack.name}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-primary to-primary-dark rounded-full"></div>
            </h3>
            
            <div className="flex items-center justify-center space-x-1">
              <span className="text-2xl font-bold text-primary">$</span>
              <motion.span 
                className="text-5xl font-bold text-white"
                style={{fontFamily: 'Arial, sans-serif'}}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 400,
                  delay: 0.2
                }}
              >
                {pack.price}
              </motion.span>
              <span className="text-gray-400 text-xl ml-2">MXN</span>
            </div>
          </motion.div>
        </div>
        
        <p className="text-gray-400 mb-6 text-center">
          {pack.description}
        </p>
        
        <ul className="space-y-3 mb-6 flex-grow">
          {pack.features.map((feature, index) => (
            <motion.li 
              key={index} 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-300">{feature}</span>
            </motion.li>
          ))}
        </ul>
        
        <motion.button 
          className="w-full py-4 px-6 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg font-semibold relative overflow-hidden group mt-auto"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"
            initial={false}
            animate={{ scale: [1, 2], x: [-100, 100] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.span
            className="relative z-10 inline-flex items-center"
            style={{fontFamily: 'Arial, sans-serif'}}
            whileHover={{ letterSpacing: "0.1em" }}
            transition={{ duration: 0.1 }}
          >
            Seleccionar Plan
            <motion.svg 
              className="w-5 h-5 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              initial={{ x: 0 }}
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </motion.svg>
          </motion.span>
        </motion.button>
      </div>
    </motion.div>
  );
};

const PackagesSection = () => {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4" style={{fontFamily: 'Arial, sans-serif'}}>
            Paquetes de Sistemas para Consultorios Médicos
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto" style={{fontFamily: 'Arial, sans-serif'}}>
            Soluciones adaptadas a las necesidades de tu consultorio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pack, index) => (
            <motion.div
              key={pack.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PackageCard 
                pack={pack} 
                isPopular={pack.name === 'Estándar'} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection; 