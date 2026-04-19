import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Calendar, Code, Users, Star } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Chairperson",
      organization: "CSI AITR Student Chapter",
      duration: "2025-26",
      description: "Leading the Computer Society of India student chapter by managing initiatives, organizing technical and non-technical events, guiding team members, and fostering a collaborative tech-driven community.",
      icon: <Crown className="text-pink-500" size={24} />,
      isMain: true
    },
    {
      role: "Event Head",
      organization: "CSI AITR Student Chapter",
      duration: "2024-25",
      description: "Planned and executed engaging events, coordinated teams, and managed operations to ensure successful event delivery and participation.",
      icon: <Star className="text-purple-500" size={24} />
    },
    {
      role: "Web Developer",
      organization: "GDG on Campus AITR Student Chapter",
      duration: "2024-25",
      description: "Worked as part of the core web development team to contribute to technical projects and support chapter initiatives focused on innovation and learning.",
      icon: <Users className="text-rose-500" size={24} />
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 relative z-10 container mx-auto max-w-5xl transition-colors duration-500">
      <div className="text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-rose-400 mb-6"
        >
          Experience & Leadership 👑
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-500 dark:text-gray-400 font-medium max-w-3xl mx-auto text-lg leading-relaxed"
        >
          My journey extends beyond academics—through leadership, collaboration, and technical contributions, I’ve continuously worked toward creating impact in every role I undertake.
        </motion.p>
      </div>

      <div className="relative">
        {/* Animated Central Glowing Line for Desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-400 via-purple-400 to-pink-400 -translate-x-1/2 z-0 shadow-[0_0_10px_rgba(245,49,129,0.3)]"></div>

        {/* Left timeline line for mobile */}
        <div className="md:hidden absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-400 via-purple-400 to-pink-400 z-0 shadow-[0_0_10px_rgba(245,49,129,0.2)]"></div>

        <div className="flex flex-col gap-12 md:gap-0">
          {experiences.map((exp, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className={`relative flex items-center w-full mb-16 md:mb-20 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Timeline Node Desktop */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 z-20 items-center justify-center">
                  <div className="w-8 h-8 rounded-full border-4 border-white dark:border-gray-900 bg-pink-500 shadow-[0_0_15px_rgba(245,49,129,0.6)] group-hover:scale-125 transition-transform duration-500">
                    <div className="w-2 h-2 m-auto bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Timeline Node Mobile */}
                <div className="md:hidden absolute left-6 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 z-20 flex items-center justify-center">
                  <div className="w-7 h-7 rounded-full border-[3px] border-white dark:border-gray-900 bg-pink-500 shadow-[0_0_10px_rgba(245,49,129,0.4)]"></div>
                </div>

                {/* Content Side */}
                <div className={`w-full md:w-1/2 ${isLeft ? 'md:pr-16' : 'md:pl-16'} pl-16 md:pl-0`}>
                  <div className={`glass-card dark:bg-gray-900/60 p-6 md:p-8 rounded-[2rem] hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(245,49,129,0.15)] dark:hover:shadow-[0_25px_50px_rgba(245,49,129,0.05)] transition-all duration-500 relative group border-t-4 ${exp.isMain ? 'border-pink-500 px-4' : 'border-purple-300 dark:border-purple-900/50'}`}>
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-14 h-14 rounded-2xl bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center shrink-0 border border-pink-100 dark:border-pink-900/50 group-hover:scale-110 transition-transform">
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold font-heading text-gray-800 dark:text-white leading-tight transition-colors">
                          {exp.role}
                        </h3>
                        <h4 className="text-pink-600 dark:text-pink-400 font-semibold text-sm mt-1">{exp.organization}</h4>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500 text-xs font-bold mb-4 uppercase tracking-widest">
                      <Calendar size={14} className="text-pink-400" />
                      {exp.duration}
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 font-light text-sm md:text-base leading-relaxed border-l-2 border-pink-100 dark:border-pink-900/50 pl-4 py-1 transition-colors">
                      {exp.description}
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

export default ExperienceSection;
