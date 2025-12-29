import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Hexagon, 
  User, 
  Mail, 
  Lock, 
  ArrowLeft, 
  Eye, 
  EyeOff, 
  Loader2,
  Check
} from 'lucide-react';

const SignUp = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!agreed) {
      alert("Please agree to the Terms & Privacy Policy");
      return;
    }

    setIsLoading(true);

    // Simulate API Signup
    setTimeout(() => {
      setIsLoading(false);
      alert("Account Created Successfully! Welcome to Hexacore.");
      // Redirect logic would go here
    }, 2000);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 dark:bg-[#050505] transition-colors duration-300 relative overflow-hidden px-4 py-10">
      
      {/* --- Background Glow Effects --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-500/10 dark:bg-orange-500/20 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-500/10 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
      </div>

      {/* --- Back to Home Button --- */}
      <Link 
        to="/" 
        className="absolute top-6 left-6 md:top-8 md:left-8 flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors z-20"
      >
        <div className="p-2 bg-white dark:bg-gray-900 rounded-full shadow-sm border border-gray-200 dark:border-gray-800 hover:border-orange-300 dark:hover:border-orange-700 transition-all">
            <ArrowLeft size={18} />
        </div>
        <span className="hidden sm:block">Back to Home</span>
      </Link>

      {/* --- Sign Up Card --- */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xl dark:shadow-none p-8"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 group mb-4">
             <div className="relative flex items-center justify-center">
                <Hexagon className="h-10 w-10 text-blue-600 dark:text-blue-400 fill-blue-100 dark:fill-blue-900/30" strokeWidth={2.5} />
                <span className="absolute text-xs font-bold text-blue-600 dark:text-blue-400">H</span>
            </div>
          </Link>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Create an Account</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Start your 14-day free trial. No credit card required.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text"
                required
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
              />
            </div>
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="email"
                required
                placeholder="name@company.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type={showPassword ? "text" : "password"}
                required
                placeholder="Create a strong password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full pl-10 pr-10 py-2.5 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start gap-2 pt-2">
            <div className="relative flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                checked={agreed}
                onChange={() => setAgreed(!agreed)}
                className="w-4 h-4 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-orange-500/20 text-orange-600 cursor-pointer"
              />
            </div>
            <label htmlFor="terms" className="text-xs text-gray-600 dark:text-gray-400 leading-snug cursor-pointer select-none">
              I agree to the <Link to="/terms" className="text-orange-600 hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-orange-600 hover:underline">Privacy Policy</Link>.
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-semibold py-3 rounded-lg shadow-lg shadow-orange-500/20 transition-all transform active:scale-[0.98]"
          >
            {isLoading ? (
                <>
                    <Loader2 size={20} className="animate-spin" />
                    Creating Account...
                </>
            ) : (
                "Create Account"
            )}
          </button>
        </form>

        

        {/* Footer Link */}
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8">
          Already have an account?{' '}
          <Link to="/signin" className="font-semibold text-orange-600 hover:text-orange-500 transition-colors">
            Sign In
          </Link>
        </p>

      </motion.div>
    </div>
  );
};

export default SignUp;