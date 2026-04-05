export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <span className="text-2xl font-bold text-navy mb-6 block">
              Giri <span className="text-gold">Web Solutions</span>
            </span>
            <p className="text-gray-500 max-w-sm mb-8 leading-relaxed">
              We build high-converting websites for local businesses in Chennai. Our focus is on speed, mobile-first design, and lead generation.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition-colors cursor-pointer">
                <span className="font-bold">In</span>
              </div>
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition-colors cursor-pointer">
                <span className="font-bold">Fb</span>
              </div>
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition-colors cursor-pointer">
                <span className="font-bold">Ig</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-navy mb-6 uppercase text-xs tracking-widest">Quick Links</h4>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li><a href="#" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#work" className="hover:text-gold transition-colors">Our Work</a></li>
              <li><a href="#pricing" className="hover:text-gold transition-colors">Pricing</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">About</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-navy mb-6 uppercase text-xs tracking-widest">Contact</h4>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li>Chennai, Tamil Nadu</li>
              <li><a href="mailto:hello@giriweb.com" className="hover:text-gold transition-colors">hello@giriweb.com</a></li>
              <li><a href="tel:+919000000000" className="hover:text-gold transition-colors">+91 90000 00000</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400 font-medium">
          <p>© {currentYear} Giri Web Solutions. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-navy transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-navy transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
