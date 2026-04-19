import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const SplashScreen = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const taglines = [
    "Dream Big.",
    "Code Bold.",
    "Build Beautifully."
  ];

  useEffect(() => {
    if (currentIndex < taglines.length) {
      const timer = setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
      }, 1200);

      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        onComplete();
      }, 800);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, taglines.length, onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-colors duration-500 overflow-hidden
          ${isDark ? 'bg-gradient-to-br from-barbie-dark via-dark-surface to-barbie-deep' : 'bg-gradient-to-br from-pink-50 via-white to-purple-50'}`}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {/* Sparkles Background */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 rounded-full ${isDark ? 'bg-pink-500 shadow-[0_0_15px_#f53181]' : 'bg-pink-400 shadow-[0_0_15px_#f53181]'}`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1.5, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Fixed Text Container */}
        <div className="relative min-h-[170px] pb-6 flex items-center justify-center overflow-visible">
          <AnimatePresence mode="wait">
            {currentIndex < taglines.length && (
              <motion.h1
                key={currentIndex}
                className="text-5xl md:text-7xl font-bold font-parisienne text-gradient text-center px-4 leading-[1.5]"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 1.1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {taglines[currentIndex]}
              </motion.h1>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;