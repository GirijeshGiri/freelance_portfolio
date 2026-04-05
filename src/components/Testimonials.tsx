import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Dr. Arul Kumar",
    role: "Elite Dental Clinic",
    content: "Giri understood exactly what my clinic needed. The WhatsApp integration is a game changer. We're getting patient inquiries even after clinic hours!",
    rating: 5
  },
  {
    name: "Suresh Raina",
    role: "PowerHouse Gym Owner",
    content: "I was skeptical about how a website could help a local gym, but the results speak for themselves. Our demo signups have doubled in just 3 weeks.",
    rating: 5
  },
  {
    name: "Rajesh Sekhar",
    role: "Vanguard Constructions",
    content: "Professional, fast, and high quality. The portfolio section they built helps me close deals much faster by showing my work to clients instantly.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-gold font-bold tracking-widest uppercase text-sm mb-3">Testimonials</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-navy mb-6">Trusted by Chennai Business Owners</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm relative group hover:-translate-y-2 transition-all duration-300">
              <Quote className="absolute top-6 right-8 text-gold/10 group-hover:text-gold/20 transition-colors" size={60} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>

              <p className="text-gray-600 mb-8 italic leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-navy/5 rounded-full flex items-center justify-center text-navy font-bold text-xl">
                  {testimonial.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-navy">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
