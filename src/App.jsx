import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Projects from "./components/Projects";
import Team from "./components/Team";
import Stats from "./components/Stats";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Offices from "./components/Offices";
import Partners from "./components/Partners";
import FAQ from "./components/FAQ";
import Gallery from "./components/Gallery";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { useTheme } from "./hooks/useTheme";
import "./index.css";
import VideoGallery from "./components/Videos";
function App() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <main>
        <section className="app-section">
          <Hero />
        </section>
        
        <section className="app-section">
          <Features />
        </section>
        
        <section className="app-section">
          <Projects />
        </section>
        
        <section className="app-section">
          <Team />
        </section>
        
        <section className="app-section">
          <VideoGallery />
        </section>

        <section className="app-section">
          <Stats />
        </section>
        
        <section className="app-section">
          <Pricing />
        </section>
        
        <section className="app-section">
          <Testimonials />
        </section>
        
        <section className="app-section">
          <Offices />
        </section>
        
        <section className="app-section">
          <Partners />
        </section>
        
        <section className="app-section">
          <FAQ />
        </section>
        
        <section className="app-section">
          <Gallery />
        </section>
        
        <section className="app-section">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;