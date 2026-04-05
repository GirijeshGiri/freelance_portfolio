import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How long does it take to build my website?",
    answer: "For our Starter and Growth plans, we typically deliver the first draft within 7-10 days. We value speed because we know every day without a site is a lost lead."
  },
  {
    question: "Will my website work on mobile phones?",
    answer: "Absolutely. We follow a 'mobile-first' approach. Your website will look and function perfectly on iPhones, Androids, tablets, and desktops."
  },
  {
    question: "Do I need to be tech-savvy to manage it?",
    answer: "Not at all. We build our sites to be 'set and forget'. If you need updates, we're just a WhatsApp message away, or we can show you how to make simple changes yourself."
  },
  {
    question: "Can you help my business show up on Google?",
    answer: "Yes! Every site we build includes basic Local SEO optimization. We also help you set up your Google Business Profile to ensure you show up in local Chennai searches."
  },
  {
    question: "Are there any hidden monthly fees?",
    answer: "No hidden fees. You pay for the build once. After the first year, you only pay a small annual fee for domain and hosting renewal (approx ₹2000-₹3000/year)."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-gold font-bold tracking-widest uppercase text-sm mb-3">FAQ</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-navy mb-6">Common Questions</h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-100 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <span className="font-bold text-navy pr-8">{faq.question}</span>
                  {openIndex === index ? <ChevronUp className="text-gold" /> : <ChevronDown className="text-gold" />}
                </button>
                
                {openIndex === index && (
                  <div className="p-6 bg-white text-gray-600 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
