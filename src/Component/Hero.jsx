import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2, Zap, Sparkles } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full pt-20 pb-32 overflow-hidden bg-white dark:bg-[#050505] transition-colors duration-300">
      
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-orange-500/10 dark:bg-orange-500/20 blur-[80px] md:blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
      </div>

      <div className="container relative mx-auto px-4 md:px-6 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-200 dark:border-orange-900/50 bg-orange-50 dark:bg-orange-950/30 text-xs font-semibold text-orange-700 dark:text-orange-300">
              <Zap size={12} className="fill-orange-500 text-orange-500" />
              <span>Powered by Next-Gen LLMs</span>
            </div>
          </motion.div>

          {/* Modified Headline */}
          <motion.div variants={itemVariants} className="relative mb-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.1]">
              Transform Your <br className="hidden md:block" />
              Startup's Growth with{' '}
              <span className="relative inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">
                  Autonomous AI
                </span>
                <Sparkles className="absolute -top-6 -right-8 w-8 h-8 text-amber-400 animate-pulse hidden md:block" />
              </span>
            </h1>
          </motion.div>

          {/* Modified Subheadline */}
          <motion.p 
            variants={itemVariants} 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Deploy production-ready voice agents in minutes, not months. 
            Automate inbound calls, qualify leads, and scale your <span className="text-gray-900 dark:text-gray-100 font-semibold">Startup's</span> support 24/7 without increasing overhead.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Link 
              to="/signup" 
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white rounded-lg font-semibold text-lg flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-1 transition-all duration-300"
            >
              Start Building Free
              <ArrowRight size={20} />
            </Link>

            
          </motion.div>

          {/* Modified Trust Indicators */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10 w-full max-w-2xl flex flex-wrap justify-center gap-y-4 gap-x-8 text-sm text-gray-600 dark:text-gray-400"
          >
            {['No credit card needed', 'Zero cost for Startups', 'Go live in 5 mins'].map((text, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-orange-500" />
                <span>{text}</span>
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;