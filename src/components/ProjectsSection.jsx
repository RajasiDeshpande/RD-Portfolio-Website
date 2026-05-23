import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GitBranch } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "CSESync-Streamlining Department Operations",
      description:
        "Developed a full-stack MERN-based departmental management platform with role-based dashboards for Admins, Professors, and Students. Implemented real-time attendance tracking using Socket.IO, OTP-based JWT authentication, timetable management with approval workflow, Google Drive-integrated study materials, and notification systems to streamline academic operations.",
      tags: ["React", "Tailwind", "MongoDB", "Express"],
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=600&h=400",
      codeLink: "https://github.com/RajasiDeshpande/CSESync",
    },
    {
      title: "AI Powered Habit Tracker App",
      description:
        "Developed a full-stack AI-powered habit tracking application using the MERN stack featuring habit management, streak tracking, AI-generated reports and suggestions, interactive analytics dashboards, and responsive glassmorphism UI with real-time progress visualization.",
      tags: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT Authentication",
        "Google Gemini AI API",
        "Tailwind CSS",
        "Chart.js/Recharts",
        "REST APIs",
        "JavaScript",
        "HTML",
        "CSS",
      ],
      image:
        "https://tse2.mm.bing.net/th/id/OIP.aNRvPVcfAeSsD7Lwwo0ekQHaNK?rs=1&pid=ImgDetMain&o=7&rm=3",
      codeLink:
        "https://github.com/RajasiDeshpande/AI-Powered-Habit-Tracker-App",
    },
    {
      title: "Virtual Assistant Elsa",
      description:
        "An intelligent AI-powered virtual assistant capable of voice interaction, task automation, and natural language understanding — built to feel human, designed to be smart.",
      tags: ["Javascript", "CSS", "HTML"],
      image: "/elsa-assistant.png",
      codeLink: "https://github.com/RajasiDeshpande/Virtual-Assistant",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 relative z-10 container mx-auto max-w-6xl transition-colors duration-500"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold font-heading text-gray-800 dark:text-white mb-2">
          Featured Projects 💻
        </h2>
        <p className="text-gray-500 dark:text-gray-400 font-medium">
          Some of my recent work
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="group relative glass-card dark:bg-gray-900/60 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-pink-500/20 group-hover:bg-transparent transition-colors z-10" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Project Info */}
            <div className="p-6 relative">
              <h3 className="text-2xl font-bold font-heading text-gray-800 dark:text-white mb-2">
                {project.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-light leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 bg-pink-50 dark:bg-pink-900/30 text-pink-600 dark:text-pink-300 rounded-full border border-pink-100 dark:border-pink-800/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex justify-start items-center pt-4 border-t border-pink-100/50 dark:border-pink-900/30">
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
                >
                  <GitBranch size={18} />
                  View Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Projects CTA */}
      <div className="mt-12 text-center">
        <a
          href="https://github.com/RajasiDeshpande"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full shadow-md transition"
        >
          View All Projects
          <ExternalLink size={18} />
        </a>
      </div>
    </section>
  );
};

export default ProjectsSection;