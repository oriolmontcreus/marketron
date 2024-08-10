import React from 'react';
import { motion } from 'framer-motion';

const FeaturesCards = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {[
            {
              title: 'Real-time market trend analysis',
              icon: '📊',
            },
            {
              title: 'Predictive analytics for future market behavior',
              icon: '🔮',
            },
            {
              title: 'Customizable dashboards and reports',
              icon: '📈',
            },
            {
              title: 'Integration with major data sources and APIs',
              icon: '🔗',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="p-6 bg-white border-black border-2 rounded-lg shadow-lg"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 text-3xl bg-amber-200 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesCards;
