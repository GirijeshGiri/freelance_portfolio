import { MessageCircle, Phone } from 'lucide-react';

export default function FloatingActions() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

  return (
    <>
      {/* Desktop Floating WhatsApp */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform hidden md:flex items-center justify-center"
        aria-label="WhatsApp"
      >
        <MessageCircle size={32} />
      </a>

      {/* Mobile Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 w-full z-50 md:hidden bg-white border-t border-gray-100 p-3 flex gap-3 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
        <a
          href="tel:+918122934681"
          className="flex-1 bg-black text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2"
        >
          <Phone size={18} />
          Call Now
        </a>
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#25D366] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
      </div>
    </>
  );
}
