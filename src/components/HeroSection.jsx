import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Left Text Content */}
        <div className="flex flex-col gap-6 text-center lg:text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 font-medium text-sm mb-4 border border-pink-200 dark:border-pink-800/50">
              Innovator. Leader. Developer. ✨
            </span>
            <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tight text-gray-900 dark:text-white mb-2">
              Hi, I'm <br />
              <span className="text-gradient">Rajasi Deshpande</span> <span className="inline-block animate-bounce space-x-2"><span>💻</span></span>
            </h1>
            <p className="font-accent text-3xl md:text-4xl text-pink-500 dark:text-pink-400 mt-4 leading-relaxed">
              Building with Code, <br className="hidden md:block" />Leading with Vision.
            </p>
          </motion.div>

          {/* Tech World Sparkle Zone */}
          <motion.div
            className="mt-8 w-full max-w-xs mx-auto lg:mx-0 relative h-40"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Central Glowing Banner — absolutely centered so icons orbit freely */}
            <motion.div
              className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex items-center justify-center gap-2 px-6 py-3 rounded-2xl overflow-hidden cursor-default z-10"
              style={{
                background: 'linear-gradient(135deg, #a855f7, #ec4899, #6366f1)',
                boxShadow: '0 0 30px rgba(168,85,247,0.6), 0 0 60px rgba(236,72,153,0.3)',
              }}
              animate={{ boxShadow: [
                '0 0 20px rgba(168,85,247,0.4), 0 0 50px rgba(236,72,153,0.2)',
                '0 0 45px rgba(168,85,247,0.9), 0 0 90px rgba(236,72,153,0.5)',
                '0 0 20px rgba(168,85,247,0.4), 0 0 50px rgba(236,72,153,0.2)',
              ]}}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Shimmer sweep */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[-20deg]"
                animate={{ x: ['-200%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.8, ease: 'easeInOut' }}
              />
              <span className="text-xl relative z-10">🤖</span>
              <span className="text-white font-bold text-sm tracking-[0.15em] uppercase drop-shadow relative z-10">
                It's a Tech World
              </span>
              <span className="text-xl relative z-10">⚡</span>
            </motion.div>

            {/* Floating AI / Tech Icons — y offsets ≥ ±50 to clear the banner (±24px tall) */}
            {[
              { emoji: '🧠', x: -70, y: -52, delay: 0,   dur: 3.2 },
              { emoji: '💡', x:  72, y: -50, delay: 0.5, dur: 2.8 },
              { emoji: '🔮', x: -72, y:  52, delay: 1.0, dur: 3.6 },
              { emoji: '🚀', x:  70, y:  50, delay: 0.3, dur: 2.5 },
              { emoji: '💻', x: -20, y: -62, delay: 0.7, dur: 4.0 },
              { emoji: '🌐', x:  20, y:  62, delay: 1.2, dur: 3.0 },
            ].map(({ emoji, x, y, delay, dur }) => (
              <motion.span
                key={emoji}
                className="absolute text-xl select-none pointer-events-none z-0"
                style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, transform: 'translate(-50%,-50%)' }}
                animate={{ y: [0, -8, 0], scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                transition={{ duration: dur, repeat: Infinity, delay, ease: 'easeInOut' }}
              >
                {emoji}
              </motion.span>
            ))}

            {/* Sparkle Dots */}
            {[
              { size: 6, left: '5%',  top: '18%', delay: 0   },
              { size: 4, left: '90%', top: '12%', delay: 0.6 },
              { size: 5, left: '82%', top: '82%', delay: 1.1 },
              { size: 4, left: '8%',  top: '80%', delay: 0.3 },
            ].map(({ size, left, top, delay }, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-purple-400 dark:bg-purple-300 z-0"
                style={{ width: size, height: size, left, top }}
                animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.5, 0.8] }}
                transition={{ duration: 1.8, repeat: Infinity, delay, ease: 'easeInOut' }}
              />
            ))}
          </motion.div>
        </div>

        {/* Right Image/Graphic Area */}
        <motion.div
          className="relative flex justify-center items-center h-full w-full max-w-md mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Decorative rotating border */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-pink-300 dark:border-pink-600 opacity-60 animate-[spin_10s_linear_infinite]" />
          <div className="absolute inset-4 rounded-full border border-purple-200 dark:border-purple-900 animate-[spin_15s_linear_infinite_reverse]" />

          {/* Main User Image with Floating & Hover Animations */}
          <motion.div
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-pink-500 shadow-[0_0_40px_rgba(245,49,129,0.3)] dark:shadow-[0_0_50px_rgba(245,49,129,0.15)] glass cursor-crosshair z-10"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <img src="/profile.jpeg" alt="Rajasi Deshpande" className="w-full h-full object-cover group-hover:scale-110 hover:scale-110 transition-transform duration-700" />
          </motion.div>

          {/* Repositioned Floating Terminal Badge to avoid overlapping "face" on mobile */}
          <motion.div
            className="absolute -top-6 -right-4 md:top-8 md:-right-10 bg-gray-900/95 backdrop-blur-md border border-pink-400/50 px-3 py-2 md:px-4 md:py-3 rounded-xl md:rounded-2xl flex flex-col shadow-xl z-30 scale-75 md:scale-100"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex gap-1 mb-1.5 md:mb-2 text-center justify-start">
              <div className="w-2 h-2 rounded-full bg-rose-400"></div>
              <div className="w-2 h-2 rounded-full bg-amber-400"></div>
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
            </div>
            <div className="font-mono text-[10px] md:text-xs text-left leading-tight">
              <span className="text-pink-400">const</span> <span className="text-white">rajasi</span> <span className="text-pink-400">=</span> <span className="text-purple-300">new TechLeader</span><span className="text-white">();</span>
              <br />
              <span className="text-pink-500 animate-pulse font-bold">_</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

