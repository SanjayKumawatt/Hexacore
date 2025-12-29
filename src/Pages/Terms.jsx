import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ScrollText, ShieldAlert, Mail } from 'lucide-react';

const Terms = () => {
  // Page load hone par scroll top par le jane ke liye
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing or using Hexacore LLC (\"the Service\"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Service."
    },
    {
      title: "2. Description of Service",
      content: (
        <>
          Hexacore LLC provides an AI-powered bulk calling platform that enables users to:
          <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
            <li>Create and deploy AI voice agents</li>
            <li>Run outbound calling campaigns</li>
            <li>Manage contacts and analyze call data</li>
            <li>Integrate with third-party services</li>
          </ul>
        </>
      )
    },
    {
      title: "3. Account Registration",
      content: (
        <>
          To use our Service, you must:
          <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
            <li>Provide accurate and complete registration information</li>
            <li>Maintain the security of your account credentials</li>
            <li>Be at least 18 years old</li>
            <li>Accept responsibility for all activities under your account</li>
            <li>Notify us immediately of any unauthorized access</li>
          </ul>
        </>
      )
    },
    {
      title: "4. Acceptable Use",
      content: (
        <>
          You agree NOT to use the Service to:
          <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
            <li>Make calls to numbers on do-not-call lists</li>
            <li>Engage in harassment, threats, or abuse</li>
            <li>Conduct fraudulent or deceptive activities</li>
            <li>Violate telemarketing laws (TCPA, GDPR, etc.)</li>
            <li>Send spam or unsolicited communications</li>
            <li>Impersonate individuals or organizations</li>
            <li>Transmit malicious code or content</li>
          </ul>
        </>
      )
    },
    {
      title: "5. Payment Terms",
      content: (
        <>
          By subscribing to our Service:
          <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
            <li>You authorize us to charge your payment method for subscription fees</li>
            <li>Credits are non-refundable except as required by law</li>
            <li>Unused credits expire according to your plan terms</li>
            <li>We may change pricing with 30 days notice</li>
            <li>Phone number costs are billed separately</li>
          </ul>
        </>
      )
    },
    {
      title: "6. Intellectual Property",
      content: "Hexacore LLC and its original content, features, and functionality are owned by us and are protected by international copyright, trademark, and other intellectual property laws."
    },
    {
      title: "7. Data and Privacy",
      content: "Your use of the Service is also governed by our Privacy Policy. By using the Service, you consent to our collection and use of data as described in the Privacy Policy."
    },
    {
      title: "8. Limitation of Liability",
      content: "TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR BUSINESS OPPORTUNITIES."
    },
    {
      title: "9. Termination",
      content: (
        <>
          We may terminate or suspend your account immediately, without prior notice, for:
          <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
            <li>Violation of these Terms</li>
            <li>Fraudulent or illegal activity</li>
            <li>Non-payment of fees</li>
            <li>Actions that harm other users or the Service</li>
          </ul>
        </>
      )
    },
    {
      title: "10. Changes to Terms",
      content: "We reserve the right to modify these Terms at any time. We will provide notice of material changes through the Service or by email. Continued use after changes constitutes acceptance of the new Terms."
    },
    {
      title: "11. Contact",
      content: "If you have questions about these Terms, please contact our support team through the application or email us at support@hexacore.in."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#050505] transition-colors duration-300 relative py-12 px-4 md:px-8">
      
      {/* --- Back Button --- */}
      <Link 
        to="/" 
        className="fixed top-6 left-6 md:top-8 md:left-8 flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors z-50 bg-white/80 dark:bg-black/50 backdrop-blur-sm p-2 rounded-full md:bg-transparent md:p-0"
      >
        <div className="p-2 bg-white dark:bg-gray-900 rounded-full shadow-sm border border-gray-200 dark:border-gray-800 hover:border-orange-300 dark:hover:border-orange-700 transition-all">
            <ArrowLeft size={18} />
        </div>
        <span className="hidden md:block">Back to Home</span>
      </Link>

      <div className="container mx-auto max-w-4xl">
        
        {/* --- Header Section --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 mb-6 shadow-lg shadow-orange-500/10">
            <ScrollText size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Terms of Service
          </h1>
          
        </motion.div>

        {/* --- Content Card --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800"
        >
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="space-y-12">
              {sections.map((section, index) => (
                <div key={index} className="border-b border-gray-100 dark:border-gray-800 last:border-0 pb-10 last:pb-0">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                    {section.title}
                  </h3>
                  <div className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* --- Footer Note / Contact --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 dark:text-gray-500 text-sm mb-4">
            Hexacore LLC • 30N GOULD ST STE N, Sheridan, Wyoming - 82801
          </p>
          <a 
            href="mailto:support@hexacore.in" 
            className="inline-flex items-center gap-2 text-orange-600 dark:text-orange-400 hover:underline font-medium"
          >
            <Mail size={16} />
            support@hexacore.in
          </a>
        </motion.div>

      </div>
    </div>
  );
};

export default Terms;