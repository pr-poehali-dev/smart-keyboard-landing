import Header from '@/components/KeyboardLanding/Header';
import Hero from '@/components/KeyboardLanding/Hero';
import Features from '@/components/KeyboardLanding/Features';
import Testimonials from '@/components/KeyboardLanding/Testimonials';
import Comparison from '@/components/KeyboardLanding/Comparison';
import FAQ from '@/components/KeyboardLanding/FAQ';
import OrderForm from '@/components/KeyboardLanding/OrderForm';
import Footer from '@/components/KeyboardLanding/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <Comparison />
      <FAQ />
      <OrderForm />
      <Footer />
    </div>
  );
};

export default Index;
