import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Elite Dental Care",
    category: "Dental Clinic",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    problem: "Old website wasn't mobile-friendly. Zero online bookings.",
    solution: "High-speed landing page with direct WhatsApp integration.",
    result: "45+ new patient inquiries in the first month."
  },
  {
    title: "PowerHouse Fitness",
    category: "Gym & Wellness",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    problem: "Hard to explain membership tiers. High drop-off rate.",
    solution: "Clear pricing tables and 'Join Now' sticky CTAs.",
    result: "2.5x increase in membership demo signups."
  },
  {
    title: "Vanguard Builders",
    category: "Construction",
    image: "https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=800",
    problem: "No portfolio showcase. Customers couldn't see past work.",
    solution: "Visual-heavy portfolio with project-specific lead forms.",
    result: "Secured 3 high-value contracts via web leads."
  }
];

export default function Portfolio() {
  return (
    <section id="work" className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-gold font-bold tracking-widest uppercase text-sm mb-3">Portfolio</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-navy mb-6">Real Businesses. Real Results.</h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We don't just make things look pretty. We build tools that solve business problems and generate actual revenue.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-navy">
                  {project.category}
                </div>
              </div>
              
              <div className="p-8">
                <h4 className="text-xl font-bold text-navy mb-4 flex justify-between items-center">
                  {project.title}
                  <ExternalLink size={18} className="text-gray-400" />
                </h4>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-red-500 font-bold uppercase text-[10px] tracking-wider block mb-1">The Problem</span>
                    <p className="text-gray-600">{project.problem}</p>
                  </div>
                  <div>
                    <span className="text-blue-500 font-bold uppercase text-[10px] tracking-wider block mb-1">The Solution</span>
                    <p className="text-gray-600">{project.solution}</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-xl border border-green-100">
                    <span className="text-green-600 font-bold uppercase text-[10px] tracking-wider block mb-1">The Result</span>
                    <p className="text-navy font-semibold">{project.result}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center text-navy font-bold hover:text-gold transition-colors group"
          >
            Want results like these for your business? 
            <span className="ml-2 group-hover:translate-x-1 transition-transform">Let's talk →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
