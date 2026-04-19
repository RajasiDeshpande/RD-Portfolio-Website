import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Star } from 'lucide-react';

const EducationSection = () => {
  const educationData = [
    {
      institution: "Acropolis Institute of Technology and Research (AITR), Indore",
      program: "B.Tech in Computer Science Engineering",
      duration: "2023 – 2027",
      icon: <GraduationCap className="text-purple-500" size={24} />
    },
    {
      institution: "IIT Madras",
      program: "BS in Data Science & Applications",
      duration: "2023 – Present",
      icon: <BookOpen className="text-pink-500" size={24} />
    },
    {
      institution: "Kendriya Vidyalaya",
      program: "Class XII – PCM (95.6%)",
      duration: "2022",
      icon: <Award className="text-amber-500" size={24} />
    },
    {
      institution: "Eminent Public School, Dhar",
      program: "Class X (92.2%)",
      duration: "2020",
      icon: <Star className="text-rose-500" size={24} />
    }
  ];

  return (
    <section id="education" className="py-24 px-4 relative z-10 container mx-auto max-w-5xl">
      <div className="text-center mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-6 drop-shadow-sm"
        >
          Education 🎓
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-500 dark:text-gray-400 font-medium max-w-3xl mx-auto text-lg leading-relaxed"
        >
          My academic journey reflects my commitment to continuous learning, excellence, and balancing diverse ambitions through discipline and dedication.
        </motion.p>
      </div>

      <div className="relative">
        {/* Animated Central Glowing Line for Desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-400 via-purple-400 to-pink-400 -translate-x-1/2 z-0 shadow-[0_0_10px_rgba(245,49,129,0.3)]"></div>

        {/* Left timeline line for mobile */}
        <div className="md:hidden absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-400 via-purple-400 to-pink-400 z-0 shadow-[0_0_10px_rgba(245,49,129,0.2)]"></div>

        <div className="flex flex-col gap-12 md:gap-0">
          {educationData.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className={`relative flex items-center w-full mb-16 md:mb-20 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Timeline Dot Desktop */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 z-20 items-center justify-center">
                  <div className="w-8 h-8 rounded-full border-4 border-white dark:border-gray-900 bg-pink-500 shadow-[0_0_15px_rgba(245,49,129,0.6)] group-hover:scale-125 transition-transform duration-500">
                    <div className="w-2 h-2 m-auto bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Timeline Dot Mobile */}
                <div className="md:hidden absolute left-6 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 z-20 flex items-center justify-center">
                  <div className="w-7 h-7 rounded-full border-[3px] border-white dark:border-gray-900 bg-pink-500 shadow-[0_0_10px_rgba(245,49,129,0.4)]"></div>
                </div>

                {/* Content Side */}
                <div className={`w-full md:w-1/2 ${isLeft ? 'md:pr-16' : 'md:pl-16'} pl-16 md:pl-0`}>
                  <div className="glass-card dark:bg-gray-900/60 p-6 md:p-8 rounded-3xl hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(245,49,129,0.2)] dark:hover:shadow-[0_20px_50px_rgba(245,49,129,0.1)] transition-all duration-500 relative group">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center shrink-0 border border-pink-100 dark:border-pink-900/50 group-hover:rotate-6 transition-transform">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-heading text-gray-800 dark:text-white group-hover:text-pink-600 transition-colors">
                          {item.institution}
                        </h3>
                        <span className="text-pink-500 text-xs font-bold font-mono tracking-tight dark:text-pink-400">
                          {item.duration}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 font-medium border-l-2 border-pink-200 dark:border-pink-900/50 pl-4 py-1 leading-relaxed">
                      {item.program}
                    </p>
                  </div>
                </div>

                {/* Empty Side for Desktop */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

  );
};

export default EducationSection;
