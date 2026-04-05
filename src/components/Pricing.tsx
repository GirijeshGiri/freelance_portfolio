import { Check, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

const plans = [
  {
    name: "Starter",
    price: "3,999",
    description: "Perfect for new small businesses.",
    features: [
      "Single Page Landing Site",
      "Mobile Responsive Design",
      "WhatsApp Integration",
      "Google Maps Setup",
      "Free Domain (1 Year)",
      "7 Days Delivery"
    ],
    cta: "Start Now",
    highlighted: false
  },
  {
    name: "Growth",
    price: "7,999",
    description: "Best for established local businesses.",
    features: [
      "Up to 5 Pages Website",
      "Advanced SEO Setup",
      "Contact Form with Email",
      "Customer Reviews Section",
      "Speed Optimization",
      "Priority Support",
      "10 Days Delivery"
    ],
    cta: "Most Popular",
    highlighted: true
  },
  {
    name: "Pro",
    price: "14,999",
    description: "Complete digital solution for growth.",
    features: [
      "Multi-page Dynamic Site",
      "E-commerce / Booking System",
      "Content Management (CMS)",
      "Monthly Performance Report",
      "Custom Graphic Design",
      "Premium Hosting Included",
      "14 Days Delivery"
    ],
    cta: "Go Pro",
    highlighted: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-gold font-bold tracking-widest uppercase text-sm mb-3">Pricing</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-black mb-6">Simple Pricing. <span className="text-gradient-gold">No Hidden Costs.</span></h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Professional web solutions that fit your budget. Choose the plan that matches your business goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl transition-all duration-300 ${
                plan.highlighted 
                ? 'bg-black text-white shadow-2xl scale-105 z-10 border-4 border-gold' 
                : 'bg-gray-50 text-black border border-gray-100 hover:shadow-lg'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gold text-black text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
                  Best Value
                </div>
              )}
              
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
                <p className={`${plan.highlighted ? 'text-gray-400' : 'text-gray-500'} text-sm mb-6`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold">₹</span>
                  <span className="text-5xl font-black">{plan.price}</span>
                  <span className={`${plan.highlighted ? 'text-gray-400' : 'text-gray-500'} text-sm`}>/one-time</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-sm">
                    <Check className={plan.highlighted ? 'text-gold' : 'text-green-500'} size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full py-4 rounded-xl text-center font-bold transition-all ${
                  plan.highlighted
                  ? 'bg-gold text-black hover:bg-gold-dark'
                  : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-gold/5 px-6 py-2 rounded-full border border-gold/10">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse"></span>
            <p className="text-sm text-black font-bold">No advance needed. Pay only after you approve the design.</p>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-gray-500">
            <ShieldCheck className="text-gold" size={20} />
            <p className="text-sm font-medium italic">"If you don’t like the design, you don’t pay." — Our Guarantee</p>
          </div>
        </div>
      </div>
    </section>
  );
}
