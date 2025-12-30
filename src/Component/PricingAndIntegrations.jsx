import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Check,
  Phone,
  Bot,
  CreditCard,
  Calendar,
  Webhook,
  Cpu,
  Server,
  ShieldCheck,
  Zap,
  Users
} from 'lucide-react';

const scrollToSection = (id) => {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
};

const PricingAndIntegrations = () => {

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // --- INTEGRATIONS DATA (Same as before) ---
  const integrations = [
    { name: 'Twilio', icon: <Phone size={24} /> },
    { name: 'ElevenLabs', icon: <Bot size={24} /> },
    { name: 'OpenAI', icon: <Cpu size={24} /> },
    { name: 'Cal.com', icon: <Calendar size={24} /> },
    { name: 'Stripe', icon: <CreditCard size={24} /> },
    { name: 'Zapier', icon: <Webhook size={24} /> },
  ];

  // --- NEW PRICING DATA (3 TIERS) ---
  const plans = [
    {
      name: 'Free (Beta)',
      subtitle: 'For product testing & pilots',
      price: '₹0',
      period: '/forever',
      description: 'Perfect for testing the waters with AI voice agents.',
      features: [
        'Limited call minutes',
        'Shared infrastructure',
        'Community support',
        'No credit card required'
      ],
      buttonText: 'Join Beta',
      buttonLink: 'contact',
      highlight: false,
      icon: <Users size={24} />
    },
    {
      name: 'Startup Access',
      subtitle: 'For early customers & pilots',
      price: 'Usage Based',
      period: '', // No fixed period
      description: 'Pay only for what you use. Scale as you grow.',
      features: [
        'Usage-based billing',
        'Priority onboarding',
        'Limited availability',
        'Full platform access'
      ],
      buttonText: 'Request Access',
      buttonLink: 'contact',
      highlight: true, // This will make it pop
      badge: 'LIMITED SPOTS',
      icon: <Zap size={24} />
    },
    {
      name: 'Enterprise',
      subtitle: 'Later Stage / Custom',
      price: 'Custom',
      period: '',
      description: 'For high-volume compliance and dedicated needs.',
      features: [
        'Dedicated infrastructure',
        'SLA & compliance support',
        'API-first deployment',
        '24/7 Dedicated Support'
      ],
      buttonText: 'Contact Sales',
      buttonLink: 'contact',
      highlight: false,
      icon: <ShieldCheck size={24} />
    }
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">

        {/* ==================== PART 1: INTEGRATIONS ==================== */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Seamlessly Integrate with Your Tech Stack
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Native connectivity to any CRM, telephony, and automation platform so you can plug and play instantly.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {integrations.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-orange-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 group-hover:text-orange-500 group-hover:scale-110 transition-all mb-3">
                  {item.icon}
                </div>
                <span className="font-semibold text-gray-900 dark:text-white text-sm">
                  {item.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ==================== PART 2: PRICING (UPDATED) ==================== */}
        <div id="pricing">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Early Access Plans            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Hexacore is currently in early access. These plans are designed to help startups test AI voice agents during our beta phase.            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex flex-col p-8 rounded-2xl transition-all duration-300 h-full ${plan.highlight
                  ? 'bg-white dark:bg-gray-900 border-2 border-orange-500 shadow-2xl shadow-orange-500/10 scale-100 md:scale-105 z-10'
                  : 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm hover:border-orange-200 dark:hover:border-orange-900'
                  }`}
              >
                {/* Optional Badge for Startup Access */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg tracking-wider">
                    {plan.badge}
                  </div>
                )}

                {/* Header */}
                <div className="mb-6">
                  <div className="w-12 h-12 bg-orange-50 dark:bg-orange-900/20 rounded-xl flex items-center justify-center text-orange-600 dark:text-orange-400 mb-4">
                    {plan.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
                  <p className="text-sm font-medium text-orange-600 dark:text-orange-400 mt-1">
                    {plan.subtitle}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-gray-100 dark:border-gray-800">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-gray-500 dark:text-gray-400 ml-1 text-sm">
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                    {plan.description}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                      <Check size={18} className="text-orange-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <Link
                  onClick={() => scrollToSection(plan.buttonLink)} className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${plan.highlight
                    ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/25'
                    : 'border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                >
                  {plan.buttonText}
                </Link>
              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default PricingAndIntegrations;