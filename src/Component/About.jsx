import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Hexagon, 
  Cpu, 
  Zap, 
  Cloud, 
  Rocket, 
  Users, 
  ArrowRight,
  FlaskConical
} from 'lucide-react';

const About = () => {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

   const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] transition-colors duration-300 overflow-hidden" id='about'>
      
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative pt-32 pb-20 px-4 md:px-6">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/5 dark:bg-orange-500/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm font-semibold mb-6"
          >
            <FlaskConical size={16} />
            <span>Currently in Public Beta</span>
          </motion.div>

          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
          >
            Automating Conversations with <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">
              Autonomous AI
            </span>
          </motion.h1>

          <motion.p 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Hexacore is an early-stage artificial intelligence startup building autonomous AI voice agents designed to help startups automate customer interactions with speed, reliability, and human-like intelligence.
          </motion.p>
        </div>
      </section>

      {/* ==================== VISION SECTION ==================== */}
      <section className="py-20 bg-gray-50 dark:bg-[#0a0a0a]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Content */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Making Voice Automation <br /> Simple & Accessible
              </h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                <p>
                  Founded with the vision of eliminating complexity, Hexacore enables teams to deploy production-ready AI agents for inbound calls, lead qualification, scheduling, and customer support — without complex setup or large operational overhead.
                </p>
                <p>
                  Our platform focuses on real-time AI processing, low-latency voice synthesis, and scalable cloud infrastructure to support high-quality, natural conversations at scale.
                </p>
                <div className="p-4 bg-white dark:bg-gray-900 border-l-4 border-orange-500 rounded-r-lg shadow-sm">
                  <p className="text-sm italic text-gray-700 dark:text-gray-300">
                    "Hexacore is currently in beta, working closely with early users to refine performance, reliability, and usability."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right: Visual Abstract */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative flex items-center justify-center"
            >
              {/* Abstract Hexagon Composition */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="relative z-10 grid grid-cols-2 gap-4 rotate-12">
                   <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 flex items-center justify-center">
                      <Zap size={40} className="text-orange-500" />
                   </div>
                   <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 flex items-center justify-center translate-y-8">
                      <Cloud size={40} className="text-blue-500" />
                   </div>
                   <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 flex items-center justify-center -translate-y-8">
                      <Cpu size={40} className="text-purple-500" />
                   </div>
                   <div className="bg-orange-500 p-6 rounded-2xl shadow-xl flex items-center justify-center">
                      <Hexagon size={40} className="text-white fill-white/20" />
                   </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ==================== TECHNOLOGY SECTION ==================== */}
      <section className="py-20 bg-white dark:bg-[#050505]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-orange-600 dark:text-orange-400 font-bold tracking-wider uppercase text-sm">Our Technology</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Built on Modern Infrastructure
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Hexacore leverages modern large language models, real-time speech systems, and cloud-native architecture.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Cpu size={32} />,
                title: "Context-Aware LLMs",
                desc: "Delivering responsive and intelligent conversations that understand nuance and intent."
              },
              {
                icon: <Zap size={32} />,
                title: "Real-Time Processing",
                desc: "Low-latency voice synthesis ensures natural, interruption-free dialogue flows."
              },
              {
                icon: <Cloud size={32} />,
                title: "Cloud-Native Scale",
                desc: "Designed to scale efficiently as usage grows, supporting experimentation and iteration."
              }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-orange-200 dark:hover:border-orange-900 transition-colors"
              >
                <div className="w-14 h-14 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center text-orange-600 dark:text-orange-400 mb-6 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==================== GROWTH / BETA SECTION ==================== */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="inline-block p-3 rounded-full bg-orange-500/20 mb-6">
                <Rocket size={32} className="text-orange-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Built for Early-Stage Growth
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Hexacore is focused on product development and infrastructure optimization during its early stage. We are actively testing workflows, improving call intelligence, and validating real-world use cases with pilot customers.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                   onClick={() => scrollToSection("contact")} 
                  className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-bold shadow-lg shadow-orange-500/20 transition-all flex items-center gap-2"
                >
                  Join the Pilot Program
                  <ArrowRight size={20} />
                </Link>
                <Link 
                   onClick={() => scrollToSection("features")} 
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg font-bold backdrop-blur-sm transition-all"
                >
                  Explore Features
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;