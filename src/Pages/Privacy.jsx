import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Lock, Eye, FileText, Server, Mail } from 'lucide-react';

const Privacy = () => {
  // Page load hone par scroll top par le jane ke liye
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "1. Introduction",
      content: "At Hexacore LLC, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered calling platform."
    },
    {
      title: "2. Information We Collect",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Personal Information</h4>
            <p className="mb-2">When you register for an account, we collect:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Name and email address</li>
              <li>Phone number (if provided)</li>
              <li>Company information</li>
              <li>Payment information (processed securely through our payment partners)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Usage Data</h4>
            <p className="mb-2">We automatically collect certain information when you use our platform:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Call records and transcripts</li>
              <li>Campaign performance data</li>
              <li>Device and browser information</li>
              <li>IP addresses and log data</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "3. Call Recording and AI Processing",
      content: (
        <>
          <p className="mb-3">When you use our AI calling services, we process the following data:</p>
          <ul className="space-y-2 ml-2">
            <li><strong className="text-gray-900 dark:text-gray-100">Voice Recordings:</strong> AI-generated and recipient audio during calls</li>
            <li><strong className="text-gray-900 dark:text-gray-100">Transcripts:</strong> Real-time speech-to-text conversion of conversations</li>
            <li><strong className="text-gray-900 dark:text-gray-100">AI Analysis:</strong> Automated summaries, sentiment analysis, and lead scoring</li>
            <li><strong className="text-gray-900 dark:text-gray-100">Call Metadata:</strong> Duration, timestamps, caller ID, and connection status</li>
          </ul>
        </>
      )
    },
    {
      title: "4. How We Use Your Information",
      content: (
        <>
          <p className="mb-3">We use the collected information for the following purposes:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li><strong className="text-gray-900 dark:text-gray-100">Service Delivery:</strong> To provide and maintain our AI calling platform</li>
            <li><strong className="text-gray-900 dark:text-gray-100">Account Management:</strong> To manage your subscription and credits</li>
            <li><strong className="text-gray-900 dark:text-gray-100">Analytics:</strong> To improve our AI models and service quality</li>
            <li><strong className="text-gray-900 dark:text-gray-100">Communication:</strong> To send important updates and notifications</li>
            <li><strong className="text-gray-900 dark:text-gray-100">Support:</strong> To respond to your inquiries and resolve issues</li>
            <li><strong className="text-gray-900 dark:text-gray-100">Legal Compliance:</strong> To meet regulatory requirements</li>
          </ul>
        </>
      )
    },
    {
      title: "5. Data Storage and Security",
      content: (
        <>
          <p className="mb-3">We implement industry-standard security measures to protect your data:</p>
          <ul className="space-y-2 ml-2">
            <li><strong className="text-gray-900 dark:text-gray-100">Encryption:</strong> All data is encrypted in transit (TLS) and at rest</li>
            <li><strong className="text-gray-900 dark:text-gray-100">Access Controls:</strong> Strict role-based access to sensitive data</li>
            <li><strong className="text-gray-900 dark:text-gray-100">Data Centers:</strong> Secure, SOC 2 compliant hosting facilities</li>
            <li><strong className="text-gray-900 dark:text-gray-100">Regular Audits:</strong> Periodic security assessments and penetration testing</li>
          </ul>
        </>
      )
    },
    {
      title: "6. Third-Party Services",
      content: (
        <>
          <p className="mb-3">We integrate with trusted third-party services to provide our platform:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li><strong className="text-gray-900 dark:text-gray-100">Telephony Providers:</strong> For phone number provisioning and call routing</li>
            <li><strong className="text-gray-900 dark:text-gray-100">AI Voice Services:</strong> For voice synthesis and speech processing</li>
            <li><strong className="text-gray-900 dark:text-gray-100">Payment Processors:</strong> For secure payment handling</li>
            <li><strong className="text-gray-900 dark:text-gray-100">Analytics Services:</strong> For platform performance monitoring</li>
          </ul>
          <p className="mt-3 text-sm italic">These providers are bound by strict data processing agreements and privacy standards.</p>
        </>
      )
    },
    {
      title: "7. Your Rights",
      content: (
        <>
          <p className="mb-3">Depending on your location, you may have the following rights:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li><strong className="text-gray-900 dark:text-gray-100">Access:</strong> Request a copy of your personal data</li>
            <li><strong className="text-gray-900 dark:text-gray-100">Correction:</strong> Update inaccurate or incomplete information</li>
            <li><strong className="text-gray-900 dark:text-gray-100">Deletion:</strong> Request removal of your personal data</li>
            <li><strong className="text-gray-900 dark:text-gray-100">Export:</strong> Receive your data in a portable format</li>
            <li><strong className="text-gray-900 dark:text-gray-100">Opt-Out:</strong> Unsubscribe from marketing communications</li>
          </ul>
          <p className="mt-3">To exercise these rights, please contact us using the information below.</p>
        </>
      )
    },
    {
      title: "8. Data Retention",
      content: (
        <ul className="space-y-2 ml-2">
          <li><strong className="text-gray-900 dark:text-gray-100">Account Data:</strong> Until you delete your account</li>
          <li><strong className="text-gray-900 dark:text-gray-100">Call Recordings:</strong> 90 days, or as required by your settings</li>
          <li><strong className="text-gray-900 dark:text-gray-100">Transcripts:</strong> Duration of your subscription plus 30 days</li>
          <li><strong className="text-gray-900 dark:text-gray-100">Payment Records:</strong> As required by financial regulations</li>
        </ul>
      )
    },
    {
      title: "9. Changes to This Policy",
      content: "We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating."
    },
    {
      title: "10. Contact Us",
      content: "If you have any questions about this Privacy Policy or our data practices, please contact our support team through the application or visit our contact page."
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
            <Shield size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Privacy Policy
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
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
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

export default Privacy;