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
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800" 
                  alt="Giri - Founder"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-gold p-4 rounded-2xl shadow-xl">
              <p className="text-black font-black text-2xl">50+</p>
              <p className="text-black/80 font-bold text-[10px] uppercase tracking-wider">Global Projects</p>
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
                Hi, I'm Giri. I started Giri Web Solutions after seeing too many business owners waste money on "pretty" websites that didn't bring in a single customer.
              </p>
              <p>
                I realized that businesses don't need complex animations or awards—they need <strong>leads</strong>. They need a site that loads fast, looks professional, and makes it incredibly easy for a customer to call or visit.
              </p>
              <p>
                My mission is simple: To help 1,000 businesses grow their revenue through high-converting web design. I handle the tech, so you can focus on your customers.
              </p>
            </div>

            <div className="mt-12 flex flex-col items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Client" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium text-gray-500">
                Joined by <span className="text-black font-bold">50+ happy business owners</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
