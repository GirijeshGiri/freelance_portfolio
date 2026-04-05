import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoThisIsFor from './components/WhoThisIsFor';
import LeadForm from './components/LeadForm';
import Portfolio from './components/Portfolio';
import WhyWorks from './components/WhyWorks';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import About from './components/About';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <WhoThisIsFor />
        <Portfolio />
        <WhyWorks />
        <Pricing />
        <Testimonials />
        <FAQ />
        <About />
        <CTA />
        <LeadForm />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
