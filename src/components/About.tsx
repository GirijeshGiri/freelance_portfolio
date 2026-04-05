import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-12 relative inline-block"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-white mx-auto">
              <div className="w-full h-full bg-black/5 flex items-center justify-center text-black/20">
                <img 
                  src="assets/about.jpg" 
                  alt="G.H - Founder"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-gold p-4 rounded-2xl shadow-xl">
              <p className="text-black font-black text-2xl">3</p>
              <p className="text-black/80 font-bold text-[10px] uppercase tracking-wider">Premium Projects</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-gold font-bold tracking-widest uppercase text-sm mb-3">About Me</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-black mb-8 leading-tight">
              I build websites that make your <span className="text-gradient-gold">phone ring.</span>
            </h3>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
              <p>
                Hi, I'm G.H. I started G.H Web Solutions after seeing too many business owners waste money on "pretty" websites that didn't bring in a single customer.
              </p>
              <p>
                I realized that businesses don't need complex animations or awards—they need <strong>leads</strong>. They need a site that loads fast, looks professional, and makes it incredibly easy for a customer to call or visit.
              </p>
              <p>
                My mission is simple: To help 1,000 businesses grow their revenue through high-converting web design. I handle the tech, so you can focus on your customers.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
