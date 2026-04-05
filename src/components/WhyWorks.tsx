import { PhoneCall, Smartphone, ShieldCheck, Search, Zap, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: <PhoneCall className="text-gold" size={32} />,
    title: "One-Click Call & WhatsApp",
    description: "We remove friction. Your customers can reach you in a single tap from any device."
  },
  {
    icon: <Smartphone className="text-gold" size={32} />,
    title: "Mobile-First Design",
    description: "90% of local searches happen on mobile. We design for the thumb first, desktop second."
  },
  {
    icon: <ShieldCheck className="text-gold" size={32} />,
    title: "Trust-Building Layout",
    description: "We use psychological triggers and social proof placement to turn skeptics into leads."
  },
  {
    icon: <Search className="text-gold" size={32} />,
    title: "Local SEO Optimization",
    description: "Be found when Chennai customers search for your services on Google Maps."
  }
];

export default function WhyWorks() {
  return (
    <section className="py-24 bg-navy text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -mr-48 -mt-48" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-gold font-bold tracking-widest uppercase text-sm mb-3">The Strategy</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Why Our Websites <span className="text-gold">Actually Convert</span>
            </h3>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Most designers build websites to look good in their portfolio. We build websites to make your phone ring. Every pixel is placed with conversion in mind.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="text-gold" size={24} />
                  <span className="text-2xl font-bold">2.5x</span>
                </div>
                <p className="text-sm text-gray-400">More conversions compared to standard templates.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="text-gold" size={24} />
                  <span className="text-2xl font-bold">&lt;1s</span>
                </div>
                <p className="text-sm text-gray-400">Average load time for lightning-fast experience.</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="mb-6">{feature.icon}</div>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
