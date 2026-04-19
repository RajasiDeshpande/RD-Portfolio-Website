import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        type: 'spring',
        mass: 0.1,
        stiffness: 1000,
        damping: 30
      }
    }
  };

  return (
    <>
      {/* Outer Glow */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-pink-400 pointer-events-none z-50 flex items-center justify-center mix-blend-difference"
        variants={variants}
        animate="default"
      >
        {/* Inner Dot */}
        <div className="w-2 h-2 bg-pink-500 rounded-full shadow-[0_0_10px_#f53181]" />
      </motion.div>
    </>
  );
};

export default CustomCursor;
