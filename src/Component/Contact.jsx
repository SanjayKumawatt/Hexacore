import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Clock, 
  Headphones, 
  CheckCircle, 
  Send, 
  MessageSquare,
  ShieldCheck,
  Loader2,
  Check
} from 'lucide-react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle'); // idle | submitting | success

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 1. Start Submitting
    setFormStatus('submitting');

    // 2. Simulate API Call (2 seconds delay)
    setTimeout(() => {
      setFormStatus('success');
      
      // 3. Reset form after 3 seconds (Optional)
      setTimeout(() => {
        setFormStatus('idle');
        e.target.reset(); // Form clear kar dega
      }, 3000);
    }, 2000);
  };

  return (
    <section id='contact' className="py-24 bg-white dark:bg-[#050505] transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* --- Left Column: Content Info --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm font-semibold mb-6">
              <MessageSquare size={16} />
              <span>Get in Touch</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Ready to Transform <br /> Your Calls?
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
              Have questions about Hexacore LLC AI voice agents? 
              Want a personalized demo? Our team is here to help you automate your call operations efficiently.
            </p>

            <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl mb-10 hover:border-orange-200 dark:hover:border-orange-900/50 transition-colors">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Email us at</p>
                <a href="mailto:support@hexacore.in" className="text-lg font-bold text-gray-900 dark:text-white hover:text-orange-500 transition-colors">
                  support@hexacore.in
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-500 shrink-0">
                  <Clock size={20} />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  We respond within 24 hours
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-500 shrink-0">
                  <Headphones size={20} />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Free consultation & personalized demo
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-500 shrink-0">
                  <CheckCircle size={20} />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  No commitment required
                </span>
              </div>
            </div>
          </motion.div>

          {/* --- Right Column: Contact Form --- */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 dark:bg-[#0a0a0a] p-8 md:p-10 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-xl shadow-gray-200/50 dark:shadow-none"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Name <span className="text-orange-500">*</span>
                </label>
                <input 
                  required
                  type="text" 
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Email <span className="text-orange-500">*</span>
                </label>
                <input 
                  required
                  type="email" 
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Company
                </label>
                <input 
                  type="text" 
                  placeholder="Your company name (optional)"
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Message <span className="text-orange-500">*</span>
                </label>
                <textarea 
                  required
                  rows={4}
                  placeholder="Tell us about your needs..."
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all resize-none"
                />
              </div>

              {/* Interactive Submit Button */}
              <motion.button
                disabled={formStatus !== 'idle'}
                whileHover={formStatus === 'idle' ? { scale: 1.02 } : {}}
                whileTap={formStatus === 'idle' ? { scale: 0.98 } : {}}
                className={`w-full font-bold py-4 rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                  formStatus === 'success' 
                    ? 'bg-green-500 text-white shadow-green-500/25' 
                    : 'bg-orange-500 hover:bg-orange-600 text-white shadow-orange-500/25'
                } ${formStatus === 'submitting' ? 'opacity-80 cursor-wait' : ''}`}
              >
                {/* Content Swap Logic */}
                {formStatus === 'idle' && (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
                
                {formStatus === 'submitting' && (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending...
                  </>
                )}

                {formStatus === 'success' && (
                  <>
                    <Check size={20} />
                    Message Sent Successfully!
                  </>
                )}
              </motion.button>

              <div className="flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400 mt-4">
                <ShieldCheck size={14} />
                <span>Your data is secure. We never share your information.</span>
              </div>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;