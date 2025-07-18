
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Resources from '@/components/Resources';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-huaiqs-darker">
      <Header />
      <Hero />
      <Services />
      <About />
      <Resources />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
