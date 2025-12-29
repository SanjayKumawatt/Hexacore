import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  X, 
  Zap, 
  Phone, 
  Bot, 
  CreditCard, 
  Calendar, 
  Webhook, 
  Cpu, 
  Globe 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingAndIntegrations = () => {
  const [isAnnual, setIsAnnual] = useState(false);

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

  // --- INTEGRATIONS DATA ---
  // Using Lucide icons to represent the brands shown in your image
  const integrations = [
    { name: 'Twilio', icon: <Phone size={24} />, desc: 'Telephony' },
    { name: 'ElevenLabs', icon: <Bot size={24} />, desc: 'Voice Synthesis' },
    { name: 'OpenAI', icon: <Cpu size={24} />, desc: 'Intelligence' },
    { name: 'Cal.com', icon: <Calendar size={24} />, desc: 'Scheduling' },
    { name: 'Stripe', icon: <CreditCard size={24} />, desc: 'Payments' },
    { name: 'Zapier', icon: <Webhook size={24} />, desc: 'Automation' },
  ];

  // --- PRICING DATA ---
  const plans = [
    {
      name: 'Free',
      description: 'Perfect for trying out AI calling. Get started with basic features at no cost.',
      priceMonthly: '₹0',
      priceAnnual: '₹0',
      isPopular: false,
      features: [
        '2 AI Agents',
        '3 Campaigns',
        'Max 10 contacts per campaign',
        '2 Flow Automations',
        '3 Knowledge Bases',
        '2 Webhooks',
        'System-assigned phone number',
        '50 free credits'
      ],
      buttonText: 'Get Started',
      buttonStyle: 'outline'
    },
    {
      name: 'Growth',
      description: 'For growing businesses. Unlock advanced features, more capacity, and premium support.',
      priceMonthly: '₹4,000',
      priceAnnual: '₹35,000', // Discounted for annual
      isPopular: true,
      features: [
        '25 AI Agents',
        '50 Campaigns',
        '1000 contacts/campaign',
        '25 Flow Automations',
        '25 Knowledge Bases',
        '20 Webhooks',
        '10 Phone Numbers',
        'Purchase own phone numbers',
        'Credit-based calling',
        'Priority support',
        'Choose your LLM model',
        'Advanced analytics'
      ],
      buttonText: 'Start Free Trial',
      buttonStyle: 'solid'
    }
  ];

  
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

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
                {/* Optional: Small description if needed */}
                {/* <span className="text-[10px] text-gray-400 mt-1">{item.desc}</span> */}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ==================== PART 2: PRICING ==================== */}
        <div id="pricing" className='pt-19'>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Start free, upgrade when you're ready. No hidden fees.
            </p>

            {/* Toggle Switch */}
            <div className="flex items-center justify-center gap-4">
              <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900 dark:text-white' : 'text-gray-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative w-14 h-7 bg-gray-200 dark:bg-gray-700 rounded-full focus:outline-none transition-colors duration-300"
              >
                <motion.div
                  layout
                  transition={{ type: "spring", stiffness: 700, damping: 30 }}
                  className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-sm ${isAnnual ? 'translate-x-7' : 'translate-x-0'}`}
                />
              </button>
              <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900 dark:text-white' : 'text-gray-500'}`}>
                Yearly <span className="text-orange-500 text-xs ml-1 font-bold">(Save 15%)</span>
              </span>
            </div>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto"
          >
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex flex-col p-8 rounded-2xl w-full md:w-1/2 transition-all duration-300 ${
                  plan.isPopular 
                    ? 'bg-white dark:bg-gray-900 border-2 border-orange-500 shadow-2xl shadow-orange-500/10 scale-100 md:scale-105 z-10' 
                    : 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm opacity-90 hover:opacity-100 hover:shadow-lg'
                }`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    MOST POPULAR
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 min-h-[40px]">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    {isAnnual ? plan.priceAnnual : plan.priceMonthly}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">/month</span>
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
                <Link onClick={() => scrollToSection("contact")}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.buttonStyle === 'solid'
                      ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/25'
                      : 'border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {plan.buttonText}
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          <p className="text-center text-xs text-gray-400 mt-8">
            All plans include 30-day money-back guarantee. No credit card required for free plan.
          </p>
        </div>

      </div>
    </section>
  );
};

export default PricingAndIntegrations;