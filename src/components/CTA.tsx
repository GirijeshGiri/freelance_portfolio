import { MessageCircle, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section id="quick-contact" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white rounded-full" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-6xl font-bold mb-8 leading-tight">
            Ready to Get <span className="text-gradient-gold">More Customers?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Stop losing leads to competitors with better websites. Let’s build a website that actually brings you business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <a
              href="https://wa.me/8122934681"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#25D366] text-white px-10 py-5 rounded-2xl text-xl font-bold hover:scale-105 transition-all flex items-center justify-center shadow-xl"
            >
              <MessageCircle className="mr-3" size={28} />
              WhatsApp Me
            </a>
            <a
              href="tel:+918122934681"
              className="w-full sm:w-auto bg-white text-black px-10 py-5 rounded-2xl text-xl font-bold hover:scale-105 transition-all flex items-center justify-center shadow-xl"
            >
              <Phone className="mr-3" size={24} />
              Call Now
            </a>
          </div>

          <div className="inline-flex items-center gap-2 text-gold font-bold animate-pulse">
            <span className="w-2 h-2 bg-gold rounded-full"></span>
            <span className="uppercase tracking-widest text-sm">⚡ Limited slots available this week</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
