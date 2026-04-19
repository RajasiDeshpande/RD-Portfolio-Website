import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const terminalLines = [
    "Hi, I'm Rajasi Deshpande 👋",
    "",
    "A passionate Computer Science Engineer pursuing a double degree — B.Tech in Computer Science Engineering and BS in Data Science from IIT Madras.",
    "",
    "I am a developer, problem solver, and multitasker who thrives in dynamic environments where creativity meets logic.",
    "",
    "Beyond coding, I actively lead communities, manage events, and contribute to impactful initiatives, combining technical expertise with leadership and communication skills.",
    "",
    "I believe in balancing elegance with efficiency—building meaningful digital solutions while continuously learning, innovating, and growing.",
    "",
    "Whether it’s managing multiple responsibilities, leading teams, or creating technology-driven solutions, I bring dedication, confidence, and purpose to everything I do."
  ];

  return (
    <section id="about" className="py-20 px-4 relative z-10 container mx-auto max-w-4xl">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold font-heading text-gray-800 dark:text-white mb-2">My Story ✨</h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(245,49,129,0.25)] border border-pink-400/30 bg-[#120e15] flex flex-col relative z-20 group"
      >
        {/* Decorative Glow */}
        <div className="absolute -inset-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

        {/* Mac Terminal Header */}
        <div className="bg-[#241c29] px-4 py-3 flex items-center border-b border-pink-500/20 relative z-10">
          <div className="flex gap-2 relative z-10">
            <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] shadow-sm hover:bg-[#ff5f56]/80 transition-colors"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] shadow-sm hover:bg-[#ffbd2e]/80 transition-colors"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f] shadow-sm hover:bg-[#27c93f]/80 transition-colors"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-pink-200/80 font-mono text-xs md:text-sm font-semibold tracking-wider">about_me.exe</span>
          </div>
        </div>

        {/* Terminal Output Area */}
        <div className="p-6 md:p-8 font-mono text-sm md:text-base text-pink-50 overflow-x-auto min-h-[350px] relative z-10">
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.7,
                }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col gap-1.5"
          >
            {terminalLines.map((line, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.4 } }
                }}
                className={`flex gap-3 leading-relaxed ${line === "" ? "h-4" : ""}`}
              >
                {line !== "" && <span className="text-pink-500 shrink-0 font-bold">{">"}</span>}
                <span className="text-gray-200">{line}</span>
              </motion.div>
            ))}

            {/* Blinking Cursor (appears after stagger finishes) */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { delay: 1 } }
              }}
              className="flex gap-3 mt-4 items-center"
            >
              <span className="text-pink-500 shrink-0 font-bold">{">"}</span>
              <span className="w-2.5 h-5 bg-pink-500 inline-block animate-pulse shadow-[0_0_8px_rgba(245,49,129,0.8)]"></span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
