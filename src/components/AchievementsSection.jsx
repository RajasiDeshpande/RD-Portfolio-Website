import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Code2, Medal, Crown } from 'lucide-react';

const RankBadge = ({ rank }) => (
  <div className="absolute top-4 right-4 px-2 py-0.5 rounded-md bg-pink-500/10 dark:bg-pink-500/20 text-pink-500 text-[9px] font-black uppercase tracking-widest border border-pink-500/20 z-10 backdrop-blur-sm">
    {rank}
  </div>
);

const AchievementCard = ({ title, subtitle, description, icon, rank, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
    className="group relative h-full glass-card p-6 rounded-3xl border border-white/30 dark:border-white/5 shadow-lg hover:shadow-pink-500/5 transition-all cursor-default overflow-hidden"
  >
    {/* Subtle Glow Effect */}
    <div className="absolute -inset-2 bg-gradient-to-br from-pink-400/0 via-purple-400/0 to-pink-400/0 group-hover:from-pink-400/5 group-hover:to-purple-400/5 blur-xl transition-all duration-700" />

    {rank && <RankBadge rank={rank} />}

    <div className="relative z-10 flex flex-col h-full">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 dark:from-pink-400/20 dark:to-purple-400/20 flex items-center justify-center text-pink-500 mb-5 group-hover:scale-110 transition-transform duration-300">
        {React.cloneElement(icon, { size: 22 })}
      </div>

      <h3 className="text-lg font-bold font-heading text-gray-800 dark:text-white mb-1 group-hover:text-pink-500 transition-colors">
        {title}
      </h3>

      <p className="text-[11px] font-bold text-pink-400/80 uppercase tracking-wider mb-3">
        {subtitle}
      </p>

      <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed text-xs">
        {description}
      </p>
    </div>
  </motion.div>
);

const AchievementsSection = () => {
  const achievements = [
    {
      title: "Case Study Winner",
      subtitle: "E-Summit '25 | Mar 2025",
      rank: "Winner",
      icon: <Medal />,
      description: "Won 1st place for strategic business solutions and analytical thinking at E-Summit."
    },
    {
      title: "DBMS Project Winner",
      subtitle: "3rd Place | Dec 2025",
      rank: "Bronze",
      icon: <Trophy />,
      description: "Recognized for innovation and strong database design in AITR's flagship project exhibition."
    },
    {
      title: "NPTEL Discipline Star",
      subtitle: "Academic Perk | Dec 2025",
      icon: <Star />,
      description: "Awarded for excellence in multiple advanced courses including Java, DSA, and Algorithms."
    },
    {
      title: "100 Days of Code",
      subtitle: "CodeXpress 2.0 | Mar 2025",
      icon: <Code2 />,
      description: "Completed the consistency challenge, strengthening core programming and logical skills."
    },
    {
      title: "Joint Head Girl",
      subtitle: "Leadership | Aug 2019",
      icon: <Crown />,
      description: "Elected student leader responsible for coordination, discipline, and student representation."
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4 relative overflow-hidden">
      {/* Refined Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(255,182,193,0.05)_0%,transparent_50%)] pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold font-heading mb-4"
            >
              <span className="text-gradient">Achievements</span> & Milestones
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 dark:text-gray-400 text-sm font-light"
            >
              A snapshot of my commitment to excellence, leadership, and technical growth.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-pink-500/20 bg-pink-500/5 text-pink-500 text-xs font-bold uppercase tracking-widest"
          >
            <Star size={14} className="animate-pulse" />
            Impact Over Years
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className={`
                ${idx === 3 ? "lg:col-start-1" : ""}
                ${idx === 4 ? "lg:col-start-2" : ""}
              `}
            >
              <AchievementCard {...item} delay={idx * 0.05} />
            </div>
          ))}

          {/* Decorative Milestone Box for Grid Balance */}
          <div className="hidden lg:flex items-center justify-center glass-card rounded-3xl border border-dashed border-pink-500/30 p-6 opacity-40 group hover:opacity-100 transition-opacity">
            <div className="text-center">
              <div className="text-pink-500 mb-2 flex justify-center">
                <Trophy size={20} />
              </div>
              <p className="text-[10px] uppercase font-black tracking-tighter text-gray-400 group-hover:text-pink-400 transition-colors">The Journey Continues</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
