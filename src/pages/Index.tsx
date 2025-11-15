import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import EventsSection from '../components/EventsSection';
import ContactSection from '../components/ContactSection';
import PatreonSection from '../components/PatreonSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <ContactSection />
        <PatreonSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
