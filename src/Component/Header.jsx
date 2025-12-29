import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, Menu, X, Hexagon, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Theme State logic
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  );

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { name: 'Features', id: 'features' },
    { name: 'Use Cases', id: 'use-cases' },
    { name: 'Pricing', id: 'pricing' },

    { name: 'Contact', id: 'contact' },
  ];

  // Animation Variants
  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.2, ease: "easeInOut" }
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-md"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">

          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.6 }}
              className="relative flex items-center justify-center"
            >
              <Hexagon className="h-8 w-8 text-blue-600 dark:text-blue-400 fill-blue-100 dark:fill-blue-900/30" strokeWidth={2.5} />
              <span className="absolute text-[10px] font-bold text-blue-600 dark:text-blue-400">H</span>
            </motion.div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              HEXACORE LLC
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.name} onClick={() => scrollToSection(link.id)}>
                <motion.span
                  whileHover={{ scale: 1.05, color: "#2563EB" }} // Blue-600
                  className="text-sm font-medium text-gray-600 dark:text-gray-300 transition-colors inline-block"
                >
                  {link.name}
                </motion.span>
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-4">

            {/* Theme Toggle Button */}
            <motion.button
              whileTap={{ scale: 0.8, rotate: 180 }}
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-500 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors focus:outline-none"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            {/* Sign In */}
            <Link to="/signin">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-sm font-semibold text-gray-700 hover:text-black dark:text-gray-200 dark:hover:text-white transition-colors"
              >
                Sign In
              </motion.span>
            </Link>

            {/* Get Started Button */}
            <Link to="/signup">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold py-2 px-4 rounded-lg shadow-lg shadow-orange-500/20 transition-colors"
              >
                <Sparkles size={16} />
                Get Started Free
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <motion.button
              whileTap={{ rotate: 90 }}
              onClick={toggleTheme}
              className="p-2 text-gray-500 dark:text-gray-400"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-200 focus:outline-none"
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown with AnimatePresence */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden overflow-hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800"
          >
            <div className="flex flex-col space-y-4 px-4 py-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-base font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <div className="h-px bg-gray-200 dark:bg-gray-700 my-2" />

              <Link
                to="/signin"
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600"
              >
                Sign In
              </Link>

              <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 rounded-lg w-full shadow-md"
                >
                  <Sparkles size={16} />
                  Get Started Free
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;