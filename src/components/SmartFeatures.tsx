import { motion } from 'motion/react';
import { Zap, MessageSquare, Layout, Smartphone } from 'lucide-react';

const features = [
  {
    icon: <Zap className="text-gold" size={32} />,
    title: "Real-time lead capture",
    description: "Instantly capture and store leads in Firebase. Never miss a potential customer again."
  },
  {
    icon: <MessageSquare className="text-gold" size={32} />,
    title: "WhatsApp automation",
    description: "One-click WhatsApp integration for instant response and higher conversion rates."
  },
  {
    icon: <Layout className="text-gold" size={32} />,
    title: "Conversion-focused UI/UX",
    description: "Design that guides visitors toward taking action—whether it's a call or a booking."
  },
  {
    icon: <Smartphone className="text-gold" size={32} />,
    title: "Fast-loading, mobile-first",
    description: "Optimized for speed and mobile devices, where 80% of your local customers are."
  }
];

export default function SmartFeatures() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 blur-3xl -z-10" />
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-gold font-bold tracking-widest uppercase text-sm mb-3">Smart Features</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">Features That Help You <span className="text-gradient-gold">Get More Leads</span></h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We don't just build websites; we build high-performance sales tools designed to grow your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{feature.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
