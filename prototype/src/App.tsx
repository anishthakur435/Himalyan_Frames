import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedFilms from './components/FeaturedFilms';
import ServicesSection from './components/ServicesSection';
import HowWeWork from './components/HowWeWork';
import WhyDharamshala from './components/WhyDharamshala';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import AboutAndFaqs from './components/AboutAndFaqs';
import ContactSection from './components/ContactSection';
import VideoLightbox from './components/VideoLightbox';
import { Theme, Film } from './types';
import { Sparkles, Calendar, Compass, ShieldAlert, Award, AlertCircle } from 'lucide-react';

export default function App() {
  // Theme state persisted locally
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('hf_theme');
    return (saved === 'light' || saved === 'dark') ? (saved as Theme) : 'dark';
  });

  const [activeSection, setActiveSection] = useState('hero');
  const [playingFilm, setPlayingFilm] = useState<Film | null>(null);

  // Sync theme with local storage and body class wrapper
  useEffect(() => {
    localStorage.setItem('hf_theme', theme);
  }, [theme]);

  // Viewport section monitoring coordinates
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'films', 'services', 'destinations', 'pricing', 'about', 'contact'];
      const scrollPosition = window.scrollY + 250; // offset

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleThemeToggle = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleNavigationChange = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 selection:bg-brand-accent selection:text-white ${
      theme === 'dark' ? 'theme-dark bg-app-bg text-app-text' : 'theme-light bg-app-bg text-app-text'
    }`}>
      
      {/* Premium Header Layout */}
      <Navbar 
        theme={theme} 
        onThemeToggle={handleThemeToggle} 
        activeSection={activeSection}
        onNavigate={handleNavigationChange}
      />

      {/* Main Sections Body */}
      <main className="relative pb-20 md:pb-0">
        
        {/* Section 1: Hero Visuals Viewfinder block */}
        <Hero onWatchShowreel={(showreelFilm) => setPlayingFilm(showreelFilm)} />

        {/* Section 2: Featured Films list */}
        <FeaturedFilms onSelectFilm={(film) => setPlayingFilm(film)} />

        {/* Section 3: Priority Services Accordion framework */}
        <ServicesSection />

        {/* Section 3.5: Production Pipeline workflow */}
        <HowWeWork />

        {/* Section 4: Mountain Geolocations panel deck */}
        <WhyDharamshala />

        {/* Section 5: Transparent Pricing blueprints */}
        <PricingSection />

        {/* Section 6: Endorsements - Confirms awaiting status securely */}
        <TestimonialsSection />

        {/* Section 7: Biography and FAQs */}
        <AboutAndFaqs />

        {/* Section 8: Inquiries Brief Generator formulary */}
        <ContactSection />

      </main>

      {/* Editorial aesthetic global footer details */}
      <footer className="bg-app-bg border-t border-app-border/40 py-16 text-app-sec select-none transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
            
            {/* Branding context block */}
            <div className="md:col-span-4 space-y-3">
              <span className="font-display text-base font-bold tracking-[0.25em] uppercase text-app-text block">
                Himalyan Frames
              </span>
              <span className="text-xs font-mono tracking-widest text-app-accent uppercase block">
                Crafted in the Himalayas.
              </span>
              <p className="text-xs text-app-sec/70 max-w-sm leading-relaxed pt-2">
                An independent adventure film boutique documenting real raw deodar lines, ancient mountain histories, and boutique resort stays.
              </p>
            </div>

            {/* Nav anchors list Column */}
            <div className="md:col-span-4 space-y-2">
              <p className="text-xs font-mono text-[#F4F2EE] uppercase tracking-wider mb-2">Framework Index</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button onClick={() => handleNavigationChange('films')} className="text-left hover:text-app-accent cursor-pointer transition-colors font-mono uppercase tracking-wider text-[11px]">Selected Films</button>
                <button onClick={() => handleNavigationChange('services')} className="text-left hover:text-app-accent cursor-pointer transition-colors font-mono uppercase tracking-wider text-[11px]">Services List</button>
                <button onClick={() => handleNavigationChange('destinations')} className="text-left hover:text-app-accent cursor-pointer transition-colors font-mono uppercase tracking-wider text-[11px]">Altitude Zones</button>
                <button onClick={() => handleNavigationChange('pricing')} className="text-left hover:text-app-accent cursor-pointer transition-colors font-mono uppercase tracking-wider text-[11px]">Pricing Guide</button>
                <button onClick={() => handleNavigationChange('about')} className="text-left hover:text-app-accent cursor-pointer transition-colors font-mono uppercase tracking-wider text-[11px]">Biography</button>
                <button onClick={() => handleNavigationChange('contact')} className="text-left hover:text-app-accent cursor-pointer transition-colors font-mono uppercase tracking-wider text-[11px]">Submit Brief</button>
              </div>
            </div>

            {/* High altitude logistical statement */}
            <div className="md:col-span-4 space-y-3">
              <p className="text-xs font-mono text-[#F4F2EE] uppercase tracking-wider mb-2">Basecamp status</p>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-app-sec">
                <Compass size={13} className="text-app-accent anim-spin" />
                <span>Dharamshala Office: McLeod Ganj heights</span>
              </div>
              <p className="text-[11px] text-app-sec/60 leading-relaxed font-sans mt-1">
                Field crew operations are fully operational. Flight permits ready for Kangra district. Spiti Valley treks staging is active for winter draft bookings.
              </p>
            </div>

          </div>

          <div className="border-t border-app-border/30 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-app-sec/80">
            <div>
              <p>© 2026 Himalyan Frames. All rights reserved.</p>
              <p className="text-app-accent mt-0.5">Designed with A24 & Patagonia visual references.</p>
            </div>
            
            <div className="flex items-center gap-4 text-xs font-mono text-app-sec/60">
              <span className="text-[10px] text-app-accent hover:text-[#F4F2EE] uppercase tracking-wider">
                MCLEOD GANJ • DHARAMSHALA • INDIA
              </span>
            </div>
          </div>

        </div>
      </footer>

      {/* Theatrical Lightbox Cinema Overlay */}
      <VideoLightbox 
        film={playingFilm} 
        onClose={() => setPlayingFilm(null)} 
      />

      {/* Sticky Mobile Action Bar (only visible below md breakpoint, min-h-56px, high contrast, safe area inset aware) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-md border-t border-neutral-850 md:hidden flex items-center justify-between px-4 py-3 min-h-[56px] pb-safe-bottom select-none">
        <a 
          id="mobile-action-bar-whatsapp-icon"
          href="https://wa.me/918219807180?text=Hi%20Himalyan%20Frames,%20I%20am%20looking%20to%20Plan%20My%20Shoot%20for%20our%20mountain%20story.%20Let's%20discuss%20availability!"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-11 h-11 bg-neutral-900 border border-neutral-800 text-app-accent hover:text-white rounded-md transition-colors shadow-inner"
          title="Contact on WhatsApp"
          aria-label="Contact us on WhatsApp"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.457h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>

        <a 
          id="mobile-action-bar-plan-shoot"
          href="https://wa.me/918219807180?text=Hi%20Himalyan%20Frames,%20I%20am%20looking%20to%20Plan%20My%20Shoot%20for%20our%20upcoming%2520mountain%252520story.Let's%20discuss%20availability!"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 ml-3 h-11 bg-app-accent hover:bg-[#72542C] text-[#F4F2EE] hover:text-white font-mono text-xs font-semibold tracking-[0.12em] uppercase rounded-md flex items-center justify-center gap-2 transition-all border border-app-accent/20 shadow-md"
        >
          <span>Plan My Shoot</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
          </svg>
        </a>
      </div>

    </div>
  );
}
