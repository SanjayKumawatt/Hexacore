import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PhoneIncoming, 
  CalendarClock, 
  Filter, 
  ClipboardList, 
  Headphones, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import img from "../assets/img.jpg";

const UseCases = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Data for all tabs
  const features = [
    {
      id: 'receptionist',
      label: 'Receptionist',
      icon: <PhoneIncoming size={24} />,
      title: '24/7 Virtual Receptionist That Never Sleeps',
      description: 'Transform your front desk with AI that handles incoming calls professionally, answers FAQs instantly, and routes callers to the right department. No hold times, no missed calls.',
      checklist: [
        'Answer calls instantly, 24 hours a day',
        'Route to correct departments automatically',
        'Handle FAQs without human intervention',
        'Capture caller details for follow-up'
      ],
      stats: [
        { value: '99%', label: 'Call Answer Rate' },
        { value: '45s', label: 'Avg. Handle Time' },
        { value: '3x', label: 'Efficiency Gain' }
      ],
      // Placeholder image - replace with your actual image path
      image: img
    },
    {
      id: 'appointment',
      label: 'Appointment Setter',
      icon: <CalendarClock size={24} />,
      title: 'Book More Meetings While You Sleep',
      description: 'Let AI handle the tedious work of scheduling. Your voice agent qualifies leads, checks availability, and books meetings directly into your calendar. Wake up to a full schedule.',
      checklist: [
        'Qualify prospects before booking',
        'Sync with your calendar in real-time',
        'Send automatic confirmations & reminders',
        'Handle rescheduling autonomously'
      ],
      stats: [
        { value: '85%', label: 'Booking Rate' },
        { value: '60%', label: 'No-Show Reduction' },
        { value: '10x', label: 'More Appointments' }
      ],
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 'lead-qual',
      label: 'Lead Qualification',
      icon: <Filter size={24} />,
      title: 'Screen Leads at Scale, Close More Deals',
      description: 'Stop wasting time on unqualified leads. AI agents ask the right questions, score prospects based on your criteria, and pass only the hottest leads to your sales team.',
      checklist: [
        'Custom qualification criteria',
        'Real-time lead scoring & classification',
        'Instant CRM integration',
        'Detailed call transcripts & insights'
      ],
      stats: [
        { value: '70%', label: 'Lead Quality Increase' },
        { value: '4x', label: 'Sales Efficiency' },
        { value: '35%', label: 'Close Rate Boost' }
      ],
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 'feedback',
      label: 'Survey & Feedback',
      icon: <ClipboardList size={24} />,
      title: 'Automated Feedback Collection & Analysis',
      description: 'Gather valuable customer insights without the manual effort. AI agents conduct natural voice surveys post-purchase or support interaction to gauge satisfaction.',
      checklist: [
        'Higher response rates than email surveys',
        'Sentiment analysis on every call',
        'Identify at-risk customers instantly',
        'Aggregate data for product improvements'
      ],
      stats: [
        { value: '40%', label: 'Response Rate' },
        { value: '24/7', label: 'Data Collection' },
        { value: '100%', label: 'Actionable Insights' }
      ],
      image: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 'support',
      label: 'Customer Service',
      icon: <Headphones size={24} />,
      title: 'Support That Scales Without Limits',
      description: 'Provide instant, consistent support around the clock. AI agents resolve common issues, answer questions, and escalate complex cases to human agents.',
      checklist: [
        'Instant response, zero wait time',
        'Consistent quality every call',
        'Smart escalation to humans',
        'Multi-language support included'
      ],
      stats: [
        { value: '65%', label: 'First-Call Resolution' },
        { value: '50%', label: 'Cost Reduction' },
        { value: '4.8★', label: 'Customer Rating' }
      ],
      image: "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  
  return (
    <section id='use-cases' className="py-24 bg-white dark:bg-[#050505] transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Transform Every Customer Interaction
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From first contact to ongoing support, our AI voice agents handle it all with human-like conversations.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {features.map((feature, index) => (
            <button
              key={feature.id}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === index
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25 scale-105'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {/* Only show icon on larger screens to save space on mobile */}
              <span className="hidden sm:block">{feature.icon}</span>
              {feature.label}
            </button>
          ))}
        </div>

        {/* Content Display Area */}
        <div className="relative min-h-[600px] bg-gray-50 dark:bg-[#0a0a0a] rounded-3xl p-6 md:p-12 overflow-hidden border border-gray-100 dark:border-gray-800">
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              
              {/* Left Column: Text Content */}
              <div className="flex flex-col space-y-8">
                <div>
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg shadow-orange-500/20">
                    {features[activeTab].icon}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {features[activeTab].title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                    {features[activeTab].description}
                  </p>
                </div>

                {/* Checklist */}
                <div className="space-y-3">
                  {features[activeTab].checklist.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      <CheckCircle2 size={20} className="text-orange-500 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Stats Row */}
                <div className="flex flex-wrap gap-8 pt-6 border-t border-gray-200 dark:border-gray-800">
                  {features[activeTab].stats.map((stat, i) => (
                    <div key={i}>
                      <div className="text-2xl font-bold text-orange-600 dark:text-orange-500">
                        {stat.value}
                      </div>
                      <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Button - Redirects to Contact */}
                <div className="pt-4">
                  <Link 
                    onClick={() => scrollToSection("contact")}
                    className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg shadow-orange-500/25 hover:-translate-y-1 transition-all duration-300"
                  >
                    Get Started Free
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>

              {/* Right Column: Image */}
              <div className="relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-gray-200 dark:shadow-black/50">
                <img 
                  src={features[activeTab].image} 
                  alt={features[activeTab].title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay gradient for better text contrast if needed, mostly for aesthetics */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default UseCases;