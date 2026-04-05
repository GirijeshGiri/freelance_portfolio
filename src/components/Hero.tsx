import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-navy/5 rounded-full blur-3xl -z-10" />

      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-gold/10 text-gold-dark px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
            </span>
            <span>Available for new projects in Chennai</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-navy leading-[1.1] mb-6 tracking-tight">
            Websites That Turn Visitors Into <span className="text-gold">Calls, Bookings & Revenue</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Helping Chennai businesses get more customers with fast, mobile-first, high-converting websites. We don't just build sites; we build growth engines.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#contact"
              className="w-full sm:w-auto bg-navy text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-navy-light transition-all shadow-xl hover:shadow-2xl flex items-center justify-center group"
            >
              Get Free Website Demo
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="#work"
              className="w-full sm:w-auto bg-white text-navy border-2 border-navy/10 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-50 transition-all flex items-center justify-center"
            >
              View Work
            </a>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-sm font-medium text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-gold" size={18} />
              <span>📍 Chennai-based</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-gold" size={18} />
              <span>⚡ Delivered in 7 days</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-gold" size={18} />
              <span>⭐ Trusted by local businesses</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
