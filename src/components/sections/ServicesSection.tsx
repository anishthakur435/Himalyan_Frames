"use client";
import { useState } from 'react';
import { Check, ClipboardList, ArrowUpRight, Flame, Plus, Minus, Sparkles, Building, Heart, MessageSquare } from 'lucide-react';
import { SERVICES } from '@/lib/data';
import { Service } from '@/types';

export default function ServicesSection() {
  const [openServiceId, setOpenServiceId] = useState<string | null>('resort-tourism');

  const toggleService = (id: string) => {
    setOpenServiceId(openServiceId === id ? null : id);
  };

  const whatsappBaseUrl = "https://wa.me/918219807180?text=";

  // Filter services into exact requested categories
  const commercialIds = ['resort-tourism', 'travel-films', 'social-media-reels', 'drone-cinematography', 'editing-post-production'];
  const personalIds = ['pre-wedding', 'wedding-films'];

  const commercialServices = SERVICES.filter(s => commercialIds.includes(s.id));
  const personalServices = SERVICES.filter(s => personalIds.includes(s.id));

  // Determine CTA label, preloaded text query based on service category/ID rules
  const getCtaAndQuery = (srv: Service) => {
    if (srv.id === 'pre-wedding' || srv.id === 'wedding-films') {
      return {
        label: 'Plan My Shoot',
        query: `Hi Himalyan Frames, I am looking to Plan My Shoot for our upcoming mountain story ("${srv.title}"). Let's discuss availability!`
      };
    } else if (srv.id === 'resort-tourism' || srv.id === 'travel-films') {
      return {
        label: 'Request the Media Kit',
        query: `Hi Himalyan Frames, I would like to Request the Media Kit for our hospitality brand/property to review booking packages for "${srv.title}".`
      };
    } else {
      return {
        label: 'Get a Custom Quote',
        query: `Hi Himalyan Frames, I would like to Get a Custom Quote for elite technical production ("${srv.title}"). Please send over estimates.`
      };
    }
  };

  return (
    <section 
      id="services" 
      className="py-24 sm:py-32 bg-app-surface text-app-text border-b border-app-border/40 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-app-accent font-semibold block mb-3">
            Service Framework
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif tracking-tight text-app-text leading-tight">
            Immersive Cinematic Production
          </h2>
          <div className="h-[2px] w-12 bg-app-accent mt-4 mb-6"></div>
          <p className="text-sm sm:text-base text-app-sec max-w-xl font-sans leading-relaxed">
            We operate fully equipped professional cinema camera gear to record authentic organic moments. Strictly eschewing overproduced commercial formulas, we tailor every crop and color print to your vision.
          </p>
        </div>

        {/* CATEGORY A: COMMERCIAL PROJECTS SECTION */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-app-border/25">
            <Building className="text-app-accent" size={20} />
            <div>
              <h3 className="text-xl sm:text-2xl font-serif text-[#F4F2EE] font-medium tracking-wide">
                Commercial Projects
              </h3>
              <p className="text-xs text-app-sec mt-0.5 font-mono uppercase tracking-wider">
                Resort Content • Tourism Campaigns • Travel Films • Social Reels • Drone Cinematography
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {commercialServices.map((srv, idx) => {
              const isOpen = openServiceId === srv.id;
              const formattedIdx = String(idx + 1).padStart(2, '0');
              const { label, query } = getCtaAndQuery(srv);
              const srvWhatsAppUrl = `${whatsappBaseUrl}${encodeURIComponent(query)}`;

              return (
                <div 
                  key={srv.id}
                  id={`service-item-${srv.id}`}
                  className={`border-b border-app-border/40 transition-all duration-300 ${
                    isOpen ? 'bg-app-card/15 px-4 md:px-8 py-6 rounded-md border border-app-accent/20' : 'py-6 px-2'
                  }`}
                >
                  {/* Accordion Trigger Header */}
                  <div 
                    className="flex items-center justify-between cursor-pointer group"
                    onClick={() => toggleService(srv.id)}
                  >
                    <div className="flex items-center gap-6 md:gap-10">
                      <span className="font-display text-2xl md:text-3xl font-bold tracking-tight text-app-accent/40 font-mono select-none">
                        {formattedIdx}
                      </span>
                      <div>
                        <h3 className="text-lg font-serif text-app-text group-hover:text-app-accent transition-colors">
                          {srv.title}
                        </h3>
                        <span className="block lg:hidden text-[9px] font-mono tracking-wider text-app-accent/70 uppercase mt-0.5">
                          {srv.highlight}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="hidden lg:inline text-[10px] font-mono tracking-wider text-app-accent/70 uppercase">
                        {srv.highlight}
                      </span>
                      
                      <button 
                        id={`toggle-arrow-${srv.id}`}
                        className={`p-1.5 rounded-full bg-app-card/30 border border-app-border/20 text-app-sec group-hover:text-app-accent transition-all ${
                          isOpen ? 'rotate-180 text-app-accent' : ''
                        }`}
                        title={isOpen ? 'Collapse Details' : 'Expand Details'}
                      >
                        {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                      </button>
                    </div>
                  </div>

                  {/* Sliding Accordion Content Panel */}
                  <div 
                    id={`service-panel-${srv.id}`}
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-8 overflow-hidden transition-all duration-[600ms] ease-out ${
                      isOpen ? 'max-h-[1200px] opacity-100 mt-8 pt-6 border-t border-app-border/20' : 'max-h-0 opacity-0 pointer-events-none'
                    }`}
                  >
                    <div className="lg:col-span-5 space-y-4">
                      <p className="text-xs font-mono tracking-wider text-app-accent uppercase flex items-center gap-1.5">
                        <Flame size={12} className="text-app-accent shrink-0 animate-pulse" /> {srv.highlight}
                      </p>
                      <p className="text-sm text-app-sec leading-relaxed">
                        {srv.description}
                      </p>

                      <div className="pt-4">
                        <a 
                          id={`whatsapp-booking-service-${srv.id}`}
                          href={srvWhatsAppUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono tracking-wider uppercase bg-app-accent text-[#F4F2EE] hover:bg-[#72542C] rounded transition-all group/link cursor-pointer border border-app-accent/20"
                        >
                          <span>{label}</span>
                          <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </a>
                      </div>
                    </div>

                    <div className="lg:col-span-4">
                      <h4 className="text-xs font-mono tracking-widest text-[#F4F2EE] uppercase mb-4 opacity-80">
                        SOP Framework Details
                      </h4>
                      <ul className="space-y-2.5">
                        {srv.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2.5 text-xs text-app-sec leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-app-accent mt-1.5 shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="lg:col-span-3 bg-app-card/25 p-5 rounded-md border border-app-border/40 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#F4F2EE] mb-4">
                          <ClipboardList size={14} className="text-app-accent" />
                          <span>Deliverables Draft</span>
                        </div>
                        
                        <ul className="space-y-2.5">
                          {srv.deliverables.map((deliv, delivIdx) => (
                            <li key={delivIdx} className="flex items-start gap-2 text-xs text-app-sec">
                              <Check size={12} className="text-app-accent mt-0.5 shrink-0" />
                              <span>{deliv}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 pt-4 border-t border-app-border/20 flex items-center justify-between text-[10px] font-mono text-app-sec">
                        <span>Ref Index</span>
                        <span className="text-app-accent">SYS-0{srv.priority}</span>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* TASK 4: DEDICATED RESORT COLLABORATION SECTION BANNER BLOCK */}
        <div className="mb-24 mt-8 bg-app-bg border border-app-accent/20 rounded-lg p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none scrollbar-none">
            <Building size={200} />
          </div>
          <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-app-accent/5 blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl space-y-6 relative z-10 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-app-accent/15 border border-app-accent/35 rounded-full mb-2">
              <Sparkles size={12} className="text-app-accent animate-pulse" />
              <span className="text-[9px] font-mono tracking-widest text-app-accent uppercase">
                Hospitality Partnerships
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-serif text-[#F4F2EE] leading-tight">
              Content for Resorts and Tourism Brands
            </h3>

            <p className="text-sm sm:text-base text-app-sec leading-relaxed max-w-2xl">
              Helping hospitality brands increase bookings through cinematic storytelling. We trade cookie-cutter horizontal wide angles for intimate sunset mist sweeps, organic deodar textures, and natural light pathing showing genuine guest experience trails.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-center sm:justify-start">
              <a 
                id="cta-hospitality-media-kit"
                href={`https://wa.me/918219807180?text=${encodeURIComponent('Hi Himalyan Frames, I am interested in Requesting the Hospitality Media Kit for our resort/property brand. Please send over the deck.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto h-12 px-6 text-xs font-mono tracking-widest uppercase font-semibold bg-app-accent text-[#F4F2EE] hover:bg-[#72542C] rounded-md flex items-center justify-center gap-2.5 transition-colors border border-app-accent/20 shadow-lg"
              >
                <MessageSquare size={14} />
                <span>Request the Hospitality Media Kit</span>
              </a>
              <span className="text-[10px] font-mono text-app-sec/60">Includes custom rates, season scheduling & flight maps</span>
            </div>
          </div>
        </div>

        {/* CATEGORY B: PERSONAL STORIES SECTION */}
        <div>
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-app-border/25">
            <Heart className="text-app-accent" size={20} />
            <div>
              <h3 className="text-xl sm:text-2xl font-serif text-[#F4F2EE] font-medium tracking-wide">
                Personal Stories
              </h3>
              <p className="text-xs text-app-sec mt-0.5 font-mono uppercase tracking-wider">
                Pre-Weddings • Wedding Films
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {personalServices.map((srv, idx) => {
              const isOpen = openServiceId === srv.id;
              const formattedIdx = String(idx + 1).padStart(2, '0');
              const { label, query } = getCtaAndQuery(srv);
              const srvWhatsAppUrl = `${whatsappBaseUrl}${encodeURIComponent(query)}`;

              return (
                <div 
                  key={srv.id}
                  id={`service-item-${srv.id}`}
                  className={`border-b border-app-border/40 transition-all duration-300 ${
                    isOpen ? 'bg-app-card/15 px-4 md:px-8 py-6 rounded-md border border-app-accent/20' : 'py-6 px-2'
                  }`}
                >
                  {/* Accordion Trigger Header */}
                  <div 
                    className="flex items-center justify-between cursor-pointer group"
                    onClick={() => toggleService(srv.id)}
                  >
                    <div className="flex items-center gap-6 md:gap-10">
                      <span className="font-display text-2xl md:text-3xl font-bold tracking-tight text-app-accent/40 font-mono select-none">
                        {formattedIdx}
                      </span>
                      <div>
                        <h3 className="text-lg font-serif text-app-text group-hover:text-app-accent transition-colors">
                          {srv.title}
                        </h3>
                        <span className="block lg:hidden text-[9px] font-mono tracking-wider text-app-accent/70 uppercase mt-0.5">
                          {srv.highlight}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="hidden lg:inline text-[10px] font-mono tracking-wider text-app-accent/70 uppercase">
                        {srv.highlight}
                      </span>
                      
                      <button 
                        id={`toggle-arrow-${srv.id}`}
                        className={`p-1.5 rounded-full bg-app-card/30 border border-app-border/20 text-app-sec group-hover:text-app-accent transition-all ${
                          isOpen ? 'rotate-180 text-app-accent' : ''
                        }`}
                        title={isOpen ? 'Collapse Details' : 'Expand Details'}
                      >
                        {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                      </button>
                    </div>
                  </div>

                  {/* Sliding Accordion Content Panel */}
                  <div 
                    id={`service-panel-${srv.id}`}
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-8 overflow-hidden transition-all duration-[600ms] ease-out ${
                      isOpen ? 'max-h-[1200px] opacity-100 mt-8 pt-6 border-t border-app-border/20' : 'max-h-0 opacity-0 pointer-events-none'
                    }`}
                  >
                    <div className="lg:col-span-5 space-y-4">
                      <p className="text-xs font-mono tracking-wider text-app-accent uppercase flex items-center gap-1.5">
                        <Flame size={12} className="text-app-accent shrink-0 animate-pulse" /> {srv.highlight}
                      </p>
                      <p className="text-sm text-app-sec leading-relaxed">
                        {srv.description}
                      </p>

                      <div className="pt-4">
                        <a 
                          id={`whatsapp-booking-service-${srv.id}`}
                          href={srvWhatsAppUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono tracking-wider uppercase bg-app-accent text-[#F4F2EE] hover:bg-[#72542C] rounded transition-all group/link cursor-pointer border border-app-accent/20"
                        >
                          <span>{label}</span>
                          <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </a>
                      </div>
                    </div>

                    <div className="lg:col-span-4">
                      <h4 className="text-xs font-mono tracking-widest text-[#F4F2EE] uppercase mb-4 opacity-80">
                        SOP Framework Details
                      </h4>
                      <ul className="space-y-2.5">
                        {srv.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2.5 text-xs text-app-sec leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-app-accent mt-1.5 shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="lg:col-span-3 bg-app-card/25 p-5 rounded-md border border-app-border/40 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#F4F2EE] mb-4">
                          <ClipboardList size={14} className="text-app-accent" />
                          <span>Deliverables Draft</span>
                        </div>
                        
                        <ul className="space-y-2.5">
                          {srv.deliverables.map((deliv, delivIdx) => (
                            <li key={delivIdx} className="flex items-start gap-2 text-xs text-app-sec">
                              <Check size={12} className="text-app-accent mt-0.5 shrink-0" />
                              <span>{deliv}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 pt-4 border-t border-app-border/20 flex items-center justify-between text-[10px] font-mono text-app-sec">
                        <span>Ref Index</span>
                        <span className="text-app-accent">SYS-0{srv.priority}</span>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

