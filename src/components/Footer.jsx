import React from 'react';
import { Heart, Github, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative mt-24 py-12 px-4 overflow-hidden transition-colors duration-500">
      {/* Pink Glow Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-pink-400 dark:bg-pink-900 opacity-20 dark:opacity-30 filter blur-[80px] rounded-[100%]" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center justify-center gap-8">
        {/* Social Links */}
        <div className="flex gap-6">
          {[
            { icon: Github, href: "https://github.com/RajasiDeshpande" },
            { icon: Linkedin, href: "https://linkedin.com/in/rajasi-deshpande" },
            { icon: Instagram, href: "https://instagram.com/rd_rajasi" },
            { icon: Mail, href: "mailto:deshpanderajasi04@gmail.com" }
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 hover:bg-white dark:hover:bg-gray-800 hover:scale-110 hover:shadow-[0_0_20px_rgba(245,49,129,0.3)] transition-all duration-300"
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center font-medium text-gray-500 dark:text-gray-400 transition-colors">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="text-pink-500 animate-pulse" size={16} fill="currentColor" /> by Rajasi Deshpande
          </p>
          <p className="text-sm mt-2 opacity-80">
            © {new Date().getFullYear()} All Rights Reserved. Code Bold. Build Beautifully.
          </p>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
