import { Stethoscope, Dumbbell, HardHat, Building2, Store } from 'lucide-react';
import { motion } from 'motion/react';

const targets = [
  { icon: <Stethoscope size={24} />, label: "Dentists" },
  { icon: <Dumbbell size={24} />, label: "Gyms" },
  { icon: <HardHat size={24} />, label: "Contractors" },
  { icon: <Building2 size={24} />, label: "Clinics" },
  { icon: <Store size={24} />, label: "Local service businesses" },
];

export default function WhoThisIsFor() {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-black font-bold text-2xl md:text-3xl tracking-tight">Who This Is For</h2>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {targets.map((target, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center gap-4 text-gray-600 font-medium hover:text-gold transition-colors group"
            >
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-black group-hover:bg-gold group-hover:text-white transition-all duration-300 shadow-sm">
                {target.icon}
              </div>
              <span className="text-sm md:text-base font-bold">{target.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
