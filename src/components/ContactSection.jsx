import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail as MailIcon } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    const mailToUrl = `mailto:rajasideshpande04@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailToUrl;
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 px-4 relative z-10 container mx-auto max-w-5xl transition-colors duration-500">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold font-heading text-gray-800 dark:text-white mb-2">Let's Connect 📫</h2>
        <p className="text-gray-500 dark:text-gray-400 font-medium">I'm always open to new opportunities and collaborations!</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-card dark:bg-gray-900/60 p-8 rounded-3xl h-full flex flex-col gap-8 shadow-xl">
            <div>
              <h3 className="text-2xl font-bold font-heading text-gray-800 dark:text-white mb-2">Get in Touch</h3>
              <p className="text-gray-600 dark:text-gray-400 font-light">
                Whether you have a question, a project idea, or just want to say hi, my inbox is always open!
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-pink-50 dark:bg-gray-800 text-pink-500 dark:text-pink-400 flex items-center justify-center group-hover:bg-pink-500 group-hover:text-white transition-all">
                  <MailIcon size={20} />
                </div>
                <div>
                  <span className="block text-sm text-gray-500 dark:text-gray-400 font-medium transition-colors">Email Me</span>
                  <a href="mailto:rajasideshpande04@gmail.com" className="text-gray-800 dark:text-gray-200 font-bold group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-colors">
                    rajasideshpande04@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-pink-50 dark:bg-gray-800 text-pink-500 dark:text-pink-400 flex items-center justify-center group-hover:bg-pink-500 group-hover:text-white transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="block text-sm text-gray-500 dark:text-gray-400 font-medium transition-colors">Location</span>
                  <span className="text-gray-800 dark:text-gray-200 font-bold group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-colors">
                    Indore, India
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-6 border-t border-pink-100 dark:border-pink-900/30">
              <p className="text-sm text-gray-500 dark:text-gray-500 italic font-medium transition-colors">"Design is not just what it looks like and feels like. Design is how it works."</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="glass-card dark:bg-gray-900/60 p-8 rounded-3xl flex flex-col gap-6 shadow-xl">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-pink-200 dark:border-pink-800 focus:outline-none focus:border-pink-500 focus:bg-white dark:focus:bg-gray-800 text-gray-800 dark:text-white transition-all transition-colors duration-300"
                placeholder="Barbie Roberts"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Your Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-pink-200 dark:border-pink-800 focus:outline-none focus:border-pink-500 focus:bg-white dark:focus:bg-gray-800 text-gray-800 dark:text-white transition-all transition-colors duration-300"
                placeholder="barbie@dreamhouse.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Message</label>
              <textarea
                id="message"
                rows="4"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-pink-200 dark:border-pink-800 focus:outline-none focus:border-pink-500 focus:bg-white dark:focus:bg-gray-800 text-gray-800 dark:text-white transition-all transition-colors duration-300 resize-none"
                placeholder="Let's build something beautiful..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSent}
              className={`flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-white transition-all duration-300 ${isSent
                  ? 'bg-green-500'
                  : 'bg-gradient-to-r from-pink-500 to-rose-400 hover:shadow-[0_4px_20px_rgba(245,49,129,0.4)] hover:scale-[1.02]'
                }`}
            >
              {isSent ? 'Message Sent! ✨' : (
                <>
                  Send Message
                  <Send size={18} />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>

  );
};

export default ContactSection;
