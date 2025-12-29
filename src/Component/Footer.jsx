import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Hexagon, Mail, MapPin, Sparkles } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Links Data Structure for easier management
  const productLinks = [
    { name: 'Features', id: 'features' },
    { name: 'Use Cases', id: 'use-cases' },
    { name: 'Pricing', id: 'pricing' },

  ];

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const companyLinks = [
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="bg-white dark:bg-[#050505] border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">

      {/* ==================== UPPER CTA SECTION ==================== */}
      <div className="relative overflow-hidden bg-gray-900 py-20 px-6 sm:py-24 lg:px-8">

        {/* Background Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Ready to Transform Your <br /> Call Operations?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300"
          >
            Join forward-thinking startups using AI voice agents to automate calls, qualify leads, and boost customer satisfaction 24/7.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              to="/signup"
              className="flex items-center gap-2 rounded-md bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 transition-all hover:scale-105"
            >
              <Sparkles size={16} />
              Get Started for Free
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex items-center justify-center gap-x-6 text-xs text-gray-400"
          >
            <span>No credit card required</span>
            <span className="w-1 h-1 rounded-full bg-gray-600" />
            <span>Setup in 5 minutes</span>
            <span className="w-1 h-1 rounded-full bg-gray-600" />
            <span>Free forever plan</span>
          </motion.div>
        </div>
      </div>

      {/* ==================== MAIN FOOTER LINKS ==================== */}
      <div className="container mx-auto px-4 md:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">

          {/* Column 1: Brand & Contact */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group w-fit">
              <div className="relative flex items-center justify-center">
                <Hexagon className="h-8 w-8 text-blue-600 dark:text-blue-400 fill-blue-100 dark:fill-blue-900/30" strokeWidth={2.5} />
                <span className="absolute text-[10px] font-bold text-blue-600 dark:text-blue-400">H</span>
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                HEXACORE LLC
              </span>
            </Link>

            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs">
              Empowering startups with autonomous AI voice agents. Scale your support and sales without scaling headcount.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                <MapPin size={18} className="text-orange-500 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  30N GOULD ST STE N,<br />
                  Sheridan, Wyoming - 82801
                </span>
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                <Mail size={18} className="text-orange-500 shrink-0" />
                <a href="mailto:support@hexacore.in" className="hover:text-orange-500 transition-colors">
                  support@hexacore.in
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Product */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-6">
              Product
            </h3>
            <ul className="space-y-4">
              {productLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-6">
              Company
            </h3>
            <ul className="space-y-4">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    onClick={() => scrollToSection(item.id)} className="text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 dark:text-gray-500">
            © {currentYear} HEXACORE LLC. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-xs text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="text-xs text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;