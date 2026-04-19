import React from 'react';
import { motion } from 'framer-motion';

const SkillBadge = ({ name, icon }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    whileHover={{
      scale: 1.1,
      backgroundColor: "rgba(245, 49, 129, 0.1)",
      borderColor: "rgba(245, 49, 129, 0.4)",
      boxShadow: "0 0 15px rgba(245, 49, 129, 0.2)"
    }}
    transition={{ duration: 0.3 }}
    className="flex items-center gap-2 px-4 py-2 rounded-full border border-pink-100 dark:border-pink-900/30 glass-card text-sm font-medium text-gray-700 dark:text-gray-200 transition-all cursor-default"
  >
    <span>{icon}</span>
    <span>{name}</span>
  </motion.div>
);

const SkillCategory = ({ title, skills, icon, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ y: -8 }}
    className="p-8 rounded-3xl glass-card border border-white/40 dark:border-white/10 shadow-xl group"
  >
    <div className="flex items-center gap-4 mb-8">
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center text-white text-2xl shadow-lg shadow-pink-500/20 group-hover:rotate-6 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-pink-500 transition-colors">
        {title}
      </h3>
    </div>

    <div className="flex flex-wrap gap-3">
      {skills.map((skill, idx) => (
        <SkillBadge key={idx} {...skill} />
      ))}
    </div>
  </motion.div>
);

const SkillsSection = () => {
  const categories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "React.js", icon: "⚛️" },
        { name: "Next.js", icon: "▲" },
        { name: "JavaScript", icon: "🟨" },
        { name: "TypeScript", icon: "🟦" },
        { name: "Tailwind CSS", icon: "💅" },
        { name: "HTML", icon: "📄" },
        { name: "CSS", icon: "📄" }
      ]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "NestJS", icon: "🐈" },
        { name: "Express.js", icon: "🚂" },
        { name: "REST APIs", icon: "🔗" },
      ]
    },
    {
      title: "Databases",
      icon: "💾",
      skills: [
        { name: "MongoDB", icon: "🍃" },
        { name: "MySQL", icon: "🐬" },
      ]
    },
    {
      title: "Tools & Technologies",
      icon: "🚀",
      skills: [
        { name: "Git", icon: "🌿" },
        { name: "GitHub", icon: "🐙" },
        { name: "Postman", icon: "📮" },
        { name: "VS Code", icon: "💻" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 px-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-pink-100/30 dark:bg-pink-900/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-purple-100/30 dark:bg-purple-900/10 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20 space-y-4">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold font-heading"
          >
            <span className="text-gradient">Tools of My Craft</span> <span className="inline-block animate-sparkle">✨</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full"
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed"
          >
            A curated collection of the technologies and tools I use to transform ideas into impactful digital experiences.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <SkillCategory key={idx} index={idx} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
