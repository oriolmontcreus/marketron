import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTitleProps {
  title: string;
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ title }) => {
  return (
    <motion.h1
      className="text-5xl font-bold"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {title}
    </motion.h1>
  );
};

export default AnimatedTitle;
