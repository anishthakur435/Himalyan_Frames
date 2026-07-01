import { useState } from 'react';
import { Compass, MapPin, Feather, Landmark, CloudLightning, ArrowRight } from 'lucide-react';
import { SERVICE_AREAS } from '../data';

export default function WhyDharamshala() {
  const [activeAreaIndex, setActiveAreaIndex] = useState<number>(0);

  const activeArea = SERVICE_AREAS[activeAreaIndex] || SERVICE_AREAS[0];

  // Specific high-res descriptive visual cards matching each location
  const areaImages = [
    'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800', // Dharamshala
    'https://images.unsplash.com/photo-1590050752117-238cb0612b1b?q=80&w=800', // McLeod Ganj
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800', // Bir Billing
    'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800', // Palampur
    'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=800', // Triund
    'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=800', // Manali
    'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800', // Kasol
    'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800', // Jibhi
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800'  // Spiti Valley
  ];

  return (
    <section 
      id="destinations" 
      className="py-24 sm:py-32 bg-app-bg text-app-text border-b border-app-border/40 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Narrative on the Left, Interactive Deck on the Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Block: Editorial Narrative */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-app-accent font-semibold block mb-3">
                Behind the Lens
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-app-text leading-tight">
                Why Dharamshala?
              </h2>
              <div className="h-[2px] w-12 bg-app-accent mt-4"></div>
            </div>

            <p className="text-sm sm:text-base text-app-sec leading-relaxed font-sans">
              Modern digital imagery is often overly sharp, clinical, and synthetic. Our home base, nestled at the foothills of the colossal Dhauladhar range, offers a raw, organic backdrop that shifts daily.
            </p>

            <blockquote className="border-l-2 border-app-accent pl-5 py-2 italic text-app-text font-serif text-base sm:text-lg leading-relaxed">
              "We trade artificial lighting rigs and green screens for slow sunrise mist, genuine wooden tea tables, wind-whistled deodar pine needles, and the ancient resonance of Tibetan morning chimes."
            </blockquote>

            <p className="text-xs text-app-sec leading-relaxed">
              Operating here teaches our team patience. Capturing natural light means moving with the clouds, staying light on our feet, and embracing high altitude weather drafts.
            </p>

            {/* Premium service-focused badges card list */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-app-border/20">
              <div className="space-y-1">
                <p className="text-xs font-mono text-[#F4F2EE] h-5 flex items-center gap-1.5 uppercase tracking-wider">
                  <Feather size={14} className="text-app-accent" /> Authentic
                </p>
                <p className="text-[11px] text-app-sec">Seeking honest human narratives over fake poses.</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-mono text-[#F4F2EE] h-5 flex items-center gap-1.5 uppercase tracking-wider">
                  <Compass size={14} className="text-app-accent" /> High-Altitude
                </p>
                <p className="text-[11px] text-app-sec">Equipped and physically prepared for extreme environments.</p>
              </div>
            </div>
          </div>

          {/* Right Block: Service Areas Interactive Map List */}
          <div className="lg:col-span-7 bg-app-surface border border-app-border/40 p-6 sm:p-8 rounded-md shadow-lg transition-colors duration-500">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-app-border/20">
              <div>
                <h3 className="text-lg font-serif text-[#F4F2EE]">
                  Himalayan Service Sectors
                </h3>
                <p className="text-[11px] font-mono text-app-accent uppercase tracking-wider mt-1">
                  Active mountain logistics mapping
                </p>
              </div>
              
              <span className="shrink-0 text-[10px] font-mono tracking-widest uppercase bg-app-accent/10 text-app-accent px-3 py-1 rounded border border-app-accent/25">
                Active Staged Routes
              </span>
            </div>

            {/* Twin Panel Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              
              {/* Left inner rail: The clickable buttons */}
              <div className="md:col-span-5 space-y-1 max-h-[360px] overflow-y-auto pr-2 custom-scroll">
                {SERVICE_AREAS.map((area, index) => {
                  const isActive = activeAreaIndex === index;
                  return (
                    <button
                      key={area.name}
                      id={`destination-btn-${area.name.toLowerCase().replace(/\s+/g, '-')}`}
                      onClick={() => setActiveAreaIndex(index)}
                      className={`w-full text-left py-2.5 px-4 text-xs font-mono tracking-wider uppercase rounded-md transition-all flex items-center justify-between cursor-pointer ${
                        isActive
                          ? 'bg-app-accent text-[#F4F2EE] font-semibold'
                          : 'text-app-sec hover:bg-app-card/40'
                      }`}
                    >
                      <span>{area.name}</span>
                      <MapPin size={12} className={isActive ? 'text-white' : 'text-app-accent/60 opacity-0 group-hover:opacity-100'} />
                    </button>
                  );
                })}
              </div>

              {/* Right inner card: Active service area details */}
              <div className="md:col-span-7 flex flex-col justify-between space-y-6">
                
                {/* Descriptive card with tiny high-res visual placeholder */}
                <div className="space-y-4">
                  <div className="relative aspect-[16/10] overflow-hidden rounded border border-app-border/40">
                    <img
                      src={areaImages[activeAreaIndex] || areaImages[0]}
                      alt={activeArea.name}
                      className="w-full h-full object-cover scale-102"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10" />
                    <span className="absolute bottom-3 left-3 text-[10px] font-mono tracking-widest uppercase text-white bg-black/40 px-2 py-0.5 rounded">
                      HP ROUTE // 0{activeAreaIndex + 1}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-sm font-serif text-app-text font-bold flex items-center gap-2">
                      <MapPin size={14} className="text-app-accent" />
                      {activeArea.name}
                    </h4>
                    <p className="text-xs text-app-sec leading-relaxed mt-2">
                      {activeArea.description}
                    </p>
                  </div>
                </div>

                {/* Logistics disclaimer */}
                <div className="pt-4 border-t border-app-border/20">
                  <p className="text-[10px] font-mono text-app-accent uppercase tracking-wider">
                    Logistics Protocol:
                  </p>
                  <p className="text-[11px] text-app-sec mt-1">
                    Free deployment across local Kangra district. Mountain passes of Jibhi, J&K, Spiti, and outer state territories dictate custom gear hauling configurations.
                  </p>
                </div>

              </div>

            </div>

            {/* Full India Coverage Banner */}
            <div className="mt-8 p-4 bg-app-card/50 border border-app-border/60 rounded-md flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <Landmark size={16} className="text-app-accent" />
                <div>
                  <p className="text-xs font-mono text-[#F4F2EE] uppercase tracking-wider">
                    Available Across India
                  </p>
                  <p className="text-[11px] text-app-sec">
                    Custom deployment for paid resort, lifestyle, and tourism board campaigns.
                  </p>
                </div>
              </div>
              
              <a 
                id="cta-whatsapp-destinations"
                href="https://wa.me/918219807180?text=Hi%20Himalyan%20Frames,%20I'd%20love%20to%20discuss%20a%20visual%20campaign%20for%20our%20property/brand%20outside%20Dharamshala!"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-mono text-app-accent hover:text-white uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>Inquire Flight Deck</span>
                <ArrowRight size={14} />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
