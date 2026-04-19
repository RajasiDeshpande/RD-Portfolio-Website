import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const BackgroundElements = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden transition-colors duration-500">
      {/* Animated Gradients Blobs */}
      <div 
        className={`absolute top-[-10%] left-[-10%] w-96 h-96 rounded-full filter blur-[100px] animate-float transition-all duration-700
          ${isDark ? 'bg-pink-900 opacity-20 mix-blend-screen' : 'bg-pink-300 opacity-60 mix-blend-multiply'}`} 
      />
      <div 
        className={`absolute top-[20%] right-[-5%] w-80 h-80 rounded-full filter blur-[120px] animate-float transition-all duration-700
          ${isDark ? 'bg-purple-900 opacity-20 mix-blend-screen' : 'bg-purple-300 opacity-50 mix-blend-multiply'}`} 
        style={{ animationDelay: '2s' }} 
      />
      <div 
        className={`absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] rounded-full filter blur-[150px] animate-float transition-all duration-700
          ${isDark ? 'bg-rose-900 opacity-15 mix-blend-screen' : 'bg-rose-200 opacity-40 mix-blend-multiply'}`} 
        style={{ animationDelay: '4s' }} 
      />
      
      {/* Floating Sparkles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full flex items-center justify-center"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            boxShadow: isDark ? '0 0 10px 2px rgba(255,105,180,0.8)' : '0 0 8px 2px rgba(255,105,180,0.5)'
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        >
          <div className={`w-full h-full rounded-full opacity-50 blur-[1px] ${isDark ? 'bg-pink-400' : 'bg-pink-200'}`} />
        </motion.div>
      ))}
    </div>
  );
};

export default BackgroundElements;

