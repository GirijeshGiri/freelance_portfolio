import React, { useState } from 'react';
import { MessageCircle, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { db, collection, addDoc, Timestamp, handleFirestoreError, OperationType } from '../firebase';

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    businessType: '',
    requirement: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const WHATSAPP_NUMBER = "8122934681";
  const EMAIL_RECIPIENT = "jeshgiri52@gmail.com";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.phone.length < 10) {
      return;
    }

    setStatus('loading');

    // 1. Prepare WhatsApp Message
    const waMessage = `New Lead 🚀\nName: ${formData.name}\nPhone: ${formData.phone}\nBusiness: ${formData.businessType || 'N/A'}\nRequirement: ${formData.requirement || 'N/A'}\nBudget: ${formData.budget || 'N/A'}\nTimeline: ${formData.timeline || 'N/A'}\nMessage: ${formData.message || 'N/A'}`;
    const waUrl = `https://wa.me/8122934681?text=${encodeURIComponent(waMessage)}`;

    try {
      // 2. Store in Firestore (Leads)
      await addDoc(collection(db, 'leads'), {
        ...formData,
        createdAt: Timestamp.now()
      });

      // 3. Submit to FormSubmit (Email)
      const formBody = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formBody.append(key, String(value));
      });
      formBody.append('_subject', 'New G.H Web Solutions Lead');
      formBody.append('_captcha', 'false');

      await fetch(`https://formsubmit.co/ajax/jeshgiri52@gmail.com`, {
        method: 'POST',
        body: formBody
      });

      setStatus('success');
      
      // Redirect to WhatsApp after a short delay
      setTimeout(() => {
        window.open(waUrl, '_blank');
        setStatus('idle');
        setFormData({ 
          name: '', 
          phone: '', 
          businessType: '', 
          requirement: '',
          budget: '',
          timeline: '',
          message: '' 
        });
      }, 1500);

    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'leads');
      setStatus('idle');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Get Your Free Website Demo</h2>
            <p className="text-gray-500">Fill in your details and we’ll contact you within minutes</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-black ml-1">Name *</label>
                <input
                  required
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all outline-none"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-black ml-1">Phone Number *</label>
                <input
                  required
                  type="tel"
                  placeholder="10-digit number"
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all outline-none"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-black ml-1">Business Type *</label>
                <select
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all outline-none appearance-none"
                  value={formData.businessType}
                  onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                >
                  <option value="">Select Business Type</option>
                  <option value="Dental Clinic">Dental Clinic</option>
                  <option value="Gym / Fitness">Gym / Fitness</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Restaurant">Restaurant</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-black ml-1">Requirement *</label>
                <select
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all outline-none appearance-none"
                  value={formData.requirement}
                  onChange={(e) => setFormData({...formData, requirement: e.target.value})}
                >
                  <option value="">Select Requirement</option>
                  <option value="New Website">New Website</option>
                  <option value="Redesign">Redesign</option>
                  <option value="Lead Generation">Lead Generation</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-black ml-1">Budget Range *</label>
                <select
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all outline-none appearance-none"
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                >
                  <option value="">Select Budget</option>
                  <option value="₹3,999 - ₹7,999">₹3,999 - ₹7,999</option>
                  <option value="₹7,999 - ₹14,999">₹7,999 - ₹14,999</option>
                  <option value="₹15,000+">₹15,000+</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-black ml-1">Timeline *</label>
                <select
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all outline-none appearance-none"
                  value={formData.timeline}
                  onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                >
                  <option value="">Select Timeline</option>
                  <option value="Within 7 Days">Within 7 Days</option>
                  <option value="1-2 Weeks">1-2 Weeks</option>
                  <option value="1 Month">1 Month</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-black ml-1">Message (Optional)</label>
              <textarea
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all outline-none resize-none"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <button
              disabled={status !== 'idle'}
              type="submit"
              className={`w-full py-5 rounded-2xl font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 disabled:opacity-70 ${
                status === 'success' ? 'bg-green-500 text-white' : 'bg-black text-white hover:bg-gold hover:text-black'
              }`}
            >
              <AnimatePresence mode="wait">
                {status === 'loading' ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3"
                  >
                    <Loader2 className="animate-spin" />
                    Processing...
                  </motion.div>
                ) : status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="animate-bounce" />
                    Success! Redirecting...
                  </motion.div>
                ) : (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3"
                  >
                    <Send size={20} />
                    Get Free Website Demo
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
            {status === 'idle' && formData.phone && formData.phone.length > 0 && formData.phone.length < 10 && (
              <p className="text-red-500 text-xs font-bold mt-2 text-center">Please enter a valid 10-digit phone number.</p>
            )}
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-400 font-medium uppercase tracking-widest">
              🔒 Your data is safe with us. No spam, ever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
