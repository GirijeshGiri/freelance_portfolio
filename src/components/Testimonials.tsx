import React, { useState, useEffect } from 'react';
import { Star, Quote, LogIn, Send, User as UserIcon, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  db, auth, googleProvider, signInWithPopup, signOut, onAuthStateChanged, 
  collection, addDoc, onSnapshot, query, orderBy, limit, Timestamp,
  handleFirestoreError, OperationType, User
} from '../firebase';

interface Review {
  id?: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
  uid: string;
  createdAt: any;
}

export default function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [newReview, setNewReview] = useState({
    role: '',
    content: '',
    rating: 5
  });

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    const reviewsQuery = query(
      collection(db, 'reviews'),
      orderBy('createdAt', 'desc'),
      limit(12)
    );

    const unsubscribeReviews = onSnapshot(reviewsQuery, (snapshot) => {
      const reviewsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Review[];
      setReviews(reviewsData);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'reviews');
    });

    return () => {
      unsubscribeAuth();
      unsubscribeReviews();
    };
  }, []);

  const handleSignIn = async () => {
    setAuthError(null);
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error: any) {
      if (error.code === 'auth/popup-closed-by-user') {
        setAuthError("Sign-in popup was closed. Please try again.");
      } else if (error.code === 'auth/cancelled-by-user') {
        setAuthError("Sign-in was cancelled.");
      } else {
        setAuthError("An unexpected error occurred during sign-in.");
        console.error("Sign in failed", error);
      }
      
      // Clear error after 5 seconds
      setTimeout(() => setAuthError(null), 5000);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Sign out failed", error);
    }
  };

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    if (!newReview.content || !newReview.role) return;

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'reviews'), {
        name: user.displayName || 'Anonymous',
        role: newReview.role,
        content: newReview.content,
        rating: newReview.rating,
        avatar: user.photoURL || `https://i.pravatar.cc/150?u=${user.uid}`,
        uid: user.uid,
        createdAt: Timestamp.now()
      });
      setNewReview({ role: '', content: '', rating: 5 });
      setShowForm(false);
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'reviews');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="reviews" className="py-24 bg-gray-50 overflow-hidden relative">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-gold font-bold tracking-widest uppercase text-sm mb-3">Reviews</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-black mb-6">Real <span className="text-gradient-gold">Client Feedback</span></h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-8">
            See what business owners are saying about their new high-converting websites.
          </p>

          <div className="flex flex-col items-center gap-4">
            <div className="flex justify-center gap-4">
              {!user ? (
                <button 
                  onClick={handleSignIn}
                  className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-bold hover:bg-gold hover:text-black transition-all shadow-lg"
                >
                  <LogIn size={18} />
                  Sign in to Leave a Review
                </button>
              ) : (
                <div className="flex flex-col items-center gap-4">
                  <div className="flex items-center gap-4 bg-white p-2 pr-6 rounded-full shadow-md border border-gray-100">
                    <img src={user.photoURL || ''} alt={user.displayName || ''} className="w-10 h-10 rounded-full border-2 border-gold" />
                    <span className="font-bold text-black">{user.displayName}</span>
                    <button onClick={handleSignOut} className="text-gray-400 hover:text-red-500 transition-colors">
                      <LogOut size={18} />
                    </button>
                  </div>
                  <button 
                    onClick={() => setShowForm(!showForm)}
                    className="bg-gold text-black px-8 py-3 rounded-xl font-bold hover:bg-black hover:text-white transition-all shadow-lg"
                  >
                    {showForm ? 'Cancel' : 'Write a Review'}
                  </button>
                </div>
              )}
            </div>

            <AnimatePresence>
              {authError && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-red-500 text-sm font-medium"
                >
                  {authError}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <AnimatePresence>
          {showForm && user && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="max-w-2xl mx-auto mb-16 overflow-hidden"
            >
              <form onSubmit={handleSubmitReview} className="bg-white p-8 rounded-3xl shadow-xl border border-gold/20">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-bold text-black mb-2 uppercase tracking-wider">Your Business / Role</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Owner, Elite Dental"
                      value={newReview.role}
                      onChange={(e) => setNewReview({...newReview, role: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-black mb-2 uppercase tracking-wider">Rating</label>
                    <div className="flex gap-2 h-[46px] items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewReview({...newReview, rating: star})}
                          className="hover:scale-110 transition-transform"
                        >
                          <Star 
                            size={24} 
                            className={star <= newReview.rating ? 'fill-gold text-gold' : 'text-gray-300'} 
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-bold text-black mb-2 uppercase tracking-wider">Your Experience</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="How has your new website helped your business?"
                    value={newReview.content}
                    onChange={(e) => setNewReview({...newReview, content: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold transition-all resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gold hover:text-black transition-all disabled:opacity-50"
                >
                  {isSubmitting ? 'Posting...' : (
                    <>
                      <Send size={18} />
                      Post Review
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <motion.div 
                key={review.id || `dynamic-${index}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm relative group hover:-translate-y-2 transition-all duration-300"
              >
                <Quote className="absolute top-6 right-8 text-gold/10 group-hover:text-gold/20 transition-colors" size={60} />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-gold text-gold" />
                  ))}
                </div>

                <p className="text-gray-600 mb-8 italic leading-relaxed relative z-10">
                  "{review.content}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold/20">
                    <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black">{review.name}</h4>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-3 text-center py-12 bg-white rounded-3xl border border-dashed border-gray-200">
              <UserIcon className="mx-auto text-gray-300 mb-4" size={48} />
              <p className="text-gray-500 font-medium">No reviews yet. Be the first to leave one!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
