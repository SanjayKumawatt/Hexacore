import React from 'react';
import { motion } from 'framer-motion';
import { 
  BrainCircuit, 
  AudioWaveform, 
  Zap, 
  Layers, 
  Rocket, 
  LineChart, 
  Database, 
  PhoneForwarded, 
  CalendarCheck, 
  BarChart3, 
  MessageCircle, 
  Target 
} from 'lucide-react';

const Features = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5 }
    }
  };

  // --- Data Sections ---

  // Section 1: Top Highlights
  const topFeatures = [
    {
      icon: <BrainCircuit size={28} />,
      title: "Advanced AI Intelligence",
      desc: "Powered by next-gen LLMs that understand context, nuance, and intent better than any legacy system."
    },
    {
      icon: <AudioWaveform size={28} />,
      title: "Hyper-Realistic Voices",
      desc: "Ultra-low latency synthesis that sounds indistinguishable from human agents, building real trust."
    },
    {
      icon: <Zap size={28} />,
      title: "Real-Time Processing",
      desc: "Instant response times with sub-second latency ensures smooth, interruption-free conversations."
    }
  ];

  // Section 2: How It Works
  const steps = [
    {
      id: "01",
      icon: <Layers size={24} />,
      title: "Build",
      desc: "Use our intuitive drag-and-drop builder to create custom voice workflows tailored to your startup's needs."
    },
    {
      id: "02",
      icon: <Rocket size={24} />,
      title: "Deploy",
      desc: "Instantly provision phone numbers and deploy your AI agents to handle inbound or outbound calls globally."
    },
    {
      id: "03",
      icon: <LineChart size={24} />,
      title: "Monitor",
      desc: "Track success rates, analyze call recordings, and optimize agent performance with real-time dashboards."
    }
  ];

  // Section 3: Detailed Feature Grid
  const featureGrid = [
    {
      icon: <Database size={24} />,
      title: "Auto-Sync Knowledge Base",
      desc: "Your AI agents stay up-to-date by syncing directly with your startup's docs and FAQs. No manual training."
    },
    {
      icon: <PhoneForwarded size={24} />,
      title: "Smart Call Handoff",
      desc: "Intelligently detects when to transfer complex issues to human agents with full context preservation."
    },
    {
      icon: <CalendarCheck size={24} />,
      title: "Autonomous Scheduling",
      desc: "Let your AI agents book demos and meetings directly into your calendar while you sleep."
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Deep Call Analytics",
      desc: "Extract actionable insights, sentiment analysis, and call summaries automatically after every conversation."
    },
    {
      icon: <MessageCircle size={24} />,
      title: "Natural Conversations",
      desc: "Handles interruptions, fillers (um, ah), and complex queries just like a top-tier support rep."
    },
    {
      icon: <Target size={24} />,
      title: "Intelligent Lead Scoring",
      desc: "Automatically qualifies leads based on conversation intent and pushes hot leads straight to your CRM."
    }
  ];

  return (
    <section   className="py-24 bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* ==================== SECTION 1: TOP HIGHLIGHTS ==================== */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-orange-600 dark:text-orange-400 font-semibold text-sm uppercase tracking-wider">
              Core Technology
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Built for the Future of <br /> Communication
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Experience cutting-edge AI infrastructure designed to scale with your startup from day one.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {topFeatures.map((feature, index) => (
              <motion.div 
                key={index} 
                variants={cardVariants}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:border-orange-200 dark:hover:border-orange-900/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center text-orange-600 dark:text-orange-400 mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ==================== SECTION 2: HOW IT WORKS ==================== */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              How It Works
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Go from idea to deployed AI agent in three simple steps.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                variants={cardVariants}
                className="relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden group"
              >
                {/* Large Background Number */}
                <span className="absolute -top-4 -right-4 text-9xl font-bold text-gray-100 dark:text-gray-800/50 opacity-50 group-hover:text-orange-50 dark:group-hover:text-orange-900/10 transition-colors select-none">
                  {step.id}
                </span>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg flex items-center justify-center mb-6 shadow-lg">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-3">
                     <span className="text-orange-500">{step.id}.</span> {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ==================== SECTION 3: FEATURE GRID ==================== */}
        <div id='features'  className='pt-26'>
          <div  className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Powerful AI Voice Agent Features
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Everything you need to create, deploy, and manage AI voice agents at scale.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {featureGrid.map((feature, index) => (
              <motion.div 
                key={index} 
                variants={cardVariants}
                className="flex flex-col bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-orange-500/30 dark:hover:border-orange-500/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded-lg flex items-center justify-center mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Features;