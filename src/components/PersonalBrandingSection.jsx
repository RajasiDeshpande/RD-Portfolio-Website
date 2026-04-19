import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const DimensionCard = ({ dim, idx }) => {
  const cardRef = useRef(null);
  
  // Motion values for mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for rotation
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  // Map mouse position to rotation (-15 to 15 degrees)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  // For Spotlight effect
  const spotlightX = useMotionValue(0);
  const spotlightY = useMotionValue(0);
  const spotlightOpacity = useMotionValue(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Relative mouse position from card center (-0.5 to 0.5)
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;
    
    x.set(mouseX);
    y.set(mouseY);

    // Spotlight position (pixels)
    spotlightX.set(e.clientX - rect.left);
    spotlightY.set(e.clientY - rect.top);
    spotlightOpacity.set(1);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    spotlightOpacity.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: dim.delay, ease: "easeOut" }}
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d",
      }}
      className={`group relative rounded-[2.5rem] transition-all duration-500 ${idx % 2 !== 0 ? 'md:mt-16' : ''}`}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.02 }}
        className="relative h-full w-full rounded-[2.5rem] p-[2px] bg-gradient-to-br from-white/60 to-white/10 dark:from-gray-800/60 dark:to-gray-900/10 shadow-lg hover:shadow-[0_30px_60px_rgba(245,49,129,0.25)] transition-shadow duration-500"
      >
        {/* Glowing Gradient Border on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${dim.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[2.5rem]`}></div>
        
        {/* Inner Card Content */}
        <div 
          style={{ 
            transform: "translateZ(30px)",
            transformStyle: "preserve-3d"
          }}
          className="relative h-full bg-white/70 dark:bg-gray-900/80 backdrop-blur-xl rounded-[2.4rem] p-8 md:p-12 flex flex-col z-10 border border-white/50 dark:border-pink-500/10 group-hover:bg-white/90 dark:group-hover:bg-gray-800 transition-all duration-500 overflow-hidden shadow-inner"
        >
          {/* Spotlight Glow Effect */}
          <motion.div 
            className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50"
            style={{
              background: useTransform(
                [spotlightX, spotlightY, spotlightOpacity],
                ([latestX, latestY, latestOpacity]) => 
                  `radial-gradient(400px circle at ${latestX}px ${latestY}px, rgba(245, 49, 129, 0.2), transparent 80%)`
              ),
              opacity: spotlightOpacity,
              transform: "translateZ(80px)"
            }}
          />

          <div className="relative z-10 flex flex-col h-full" style={{ transformStyle: "preserve-3d" }}>
            <motion.h3 
              style={{ transform: "translateZ(60px)" }}
              className={`text-3xl md:text-3xl lg:text-4xl font-bold font-heading text-gray-800 dark:text-white mb-4 transition-colors duration-300 ${dim.textColor}`}
            >
              {dim.title}
            </motion.h3>
            
            <motion.div 
              style={{ transform: "translateZ(40px)" }}
              className="w-12 h-1 bg-gray-200 dark:bg-gray-700 group-hover:bg-pink-300 rounded-full mb-6 transition-colors duration-500"
            ></motion.div>
            
            <motion.p 
              style={{ transform: "translateZ(50px)" }}
              className="text-gray-600 dark:text-gray-400 font-light leading-relaxed text-lg md:text-xl group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-300"
            >
              {dim.description}
            </motion.p>
          </div>
          
          {/* Decorative Background Icon/Glow Element */}
          <div 
            style={{ transform: "translateZ(20px)" }}
            className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${dim.gradient} rounded-full blur-3xl opacity-10 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none`}
          ></div>
        </div>
      </motion.div>
    </motion.div>
  );
};


const PersonalBrandingSection = () => {
  const dimensions = [
    {
      title: "The Leader 👑",
      description: "Leading communities, managing teams, and driving initiatives with confidence, vision, and the ability to inspire those around me.",
      gradient: "from-amber-200 via-orange-300 to-amber-500",
      textColor: "group-hover:text-amber-600 dark:group-hover:text-amber-400",
      delay: 0.1
    },
    {
      title: "The Builder 💻",
      description: "Crafting impactful digital solutions through technology, problem-solving, and a passion for building meaningful experiences.",
      gradient: "from-pink-300 via-rose-400 to-pink-600",
      textColor: "group-hover:text-pink-600 dark:group-hover:text-pink-400",
      delay: 0.2
    },
    {
      title: "The Creator ✨",
      description: "Blending creativity with innovation to design elegant ideas, think differently, and approach challenges with originality.",
      gradient: "from-purple-300 via-fuchsia-400 to-purple-600",
      textColor: "group-hover:text-purple-600 dark:group-hover:text-purple-400",
      delay: 0.3
    },
    {
      title: "The Multitasker 🚀",
      description: "Balancing a double degree, leadership roles, academics, and projects with discipline, adaptability, and purpose-driven ambition.",
      gradient: "from-cyan-300 via-blue-400 to-cyan-600",
      textColor: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
      delay: 0.4
    }
  ];

  return (
    <section id="dimensions" className="py-24 px-4 relative z-10 container mx-auto max-w-6xl transition-colors duration-500">
      <div className="text-center mb-20">
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block py-1.5 px-6 rounded-full bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/40 dark:to-purple-900/40 text-pink-500 dark:text-pink-400 font-bold text-xs tracking-widest uppercase mb-6 shadow-sm border border-pink-100 dark:border-pink-500/30"
        >
          Signature Identity
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-rose-400 mb-8 pb-2"
        >
          Rajasi in 4 Dimensions ✨
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 dark:text-gray-400 font-light max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
        >
          More than just a developer — I am a blend of leadership, creativity, technical excellence, and ambition, bringing passion and purpose into every space I step into.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-10 relative">
        {/* Subtle decorative background blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-pink-300/20 dark:bg-pink-900/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
        
        {dimensions.map((dim, idx) => (
          <DimensionCard key={idx} dim={dim} idx={idx} />
        ))}
      </div>
    </section>
  );
};

export default PersonalBrandingSection;


