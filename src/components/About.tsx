export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                alt="Giri - Founder of Giri Web Solutions"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-gold p-8 rounded-3xl shadow-xl hidden md:block">
              <p className="text-navy font-black text-4xl mb-1">50+</p>
              <p className="text-navy/80 font-bold text-sm uppercase tracking-wider">Local Projects</p>
            </div>
          </div>

          <div>
            <h2 className="text-gold font-bold tracking-widest uppercase text-sm mb-3">About Me</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
              I build websites that make your <span className="text-gold">phone ring.</span>
            </h3>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Hi, I'm Giri. I started Giri Web Solutions after seeing too many Chennai business owners waste money on "pretty" websites that didn't bring in a single customer.
              </p>
              <p>
                I realized that local businesses don't need complex animations or awards—they need <strong>leads</strong>. They need a site that loads fast, looks professional, and makes it incredibly easy for a customer to call or visit.
              </p>
              <p>
                My mission is simple: To help 1,000 local businesses in Chennai grow their revenue through high-converting web design. I handle the tech, so you can focus on your customers.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Client" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium text-gray-500">
                Joined by <span className="text-navy font-bold">50+ happy business owners</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
