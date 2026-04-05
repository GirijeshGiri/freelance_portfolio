import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-black/5 rounded-full blur-3xl -z-10" />

      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-gold/10 text-gold-dark px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
            </span>
            <span>Premium Web Solutions for Global Brands</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-black leading-[1.1] mb-6 tracking-tight"
          >
            Get More Calls & Customers with a <span className="text-gradient-gold">Website That Actually Converts</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            We build fast, mobile-first websites that turn visitors into paying customers.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-gold hover:text-black transition-all shadow-xl hover:shadow-2xl flex items-center justify-center group"
            >
              Get Free Website Demo
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="#work"
              className="w-full sm:w-auto bg-white text-black border-2 border-black/10 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-50 transition-all flex items-center justify-center"
            >
              View Work
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-sm font-medium text-gray-500"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-gold" size={18} />
              <span>✔ No advance needed</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-gold" size={18} />
              <span>✔ Delivered in 7 days</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-gold" size={18} />
              <span>✔ WhatsApp integration included</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
