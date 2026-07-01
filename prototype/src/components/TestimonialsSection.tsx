import { ShieldCheck, Lock, UploadCloud, AlertCircle, Camera, Cpu, Sparkles, Check, Settings, Compass, HelpCircle } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';

export default function TestimonialsSection() {
  const btsImages = [
    {
      url: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=600',
      tag: 'Rigging Rig',
      description: 'Anamorphic focus setup inside a misty wooden cabin in Jibhi.'
    },
    {
      url: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=600',
      tag: 'High Ridge Flight',
      description: 'Inspecting DJI Inspire 3 air telemetry profiles on Triund heights.'
    },
    {
      url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600',
      tag: 'Tracking shot',
      description: 'Documenting paraglider thermal ascents above Bir pine forests.'
    }
  ];

  const instagramPosts = [
    {
      url: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=400',
      location: 'McLeod Ganj',
      caption: 'Deodar shadows framing slow afternoon rays. Scouting frame ratios for the hospitality series.',
      likes: '342'
    },
    {
      url: 'https://images.unsplash.com/photo-1590050752117-238cb0612b1b?q=80&w=400',
      location: 'Bir Billing',
      caption: 'Fluttering prayers in early wind layers. Captured on Sony FX6 & Zeiss Supreme prime anamorphic setup.',
      likes: '512'
    },
    {
      url: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=400',
      location: 'Spiti Valley',
      caption: 'Cold, ancient, empty deserts. Mapping massive geographic scales using 8K ProRes air captures.',
      likes: '489'
    }
  ];

  const gearCategories = [
    {
      title: 'Cinema Cameras',
      items: [
        { name: 'RED V-Raptor 8K', specs: 'Ultra High Resolution, raw dynamic range, high-altitude heating protection' },
        { name: 'Sony FX6 Cinema Line', specs: 'Variable dual native ISO, matching cinematic color science profile' },
        { name: 'Sony FX3 Compact', specs: 'Ultralight setup for extreme mountain treks, fast deodar run trails' }
      ]
    },
    {
      title: 'Optical Glass',
      items: [
        { name: 'Atlas Orion Anamorphics', specs: 'Classic cinematic widescreen bokeh, warm organic flare profiles' },
        { name: 'Zeiss Supreme Primes', specs: 'Flawless corner sharpness matching 8K sensory details perfectly' },
        { name: 'Sirui 50mm T2.9 Cine', specs: 'Compact portrait anamorphic configuration optimized for active hand rigs' }
      ]
    },
    {
      title: 'Himalayan Flight Rig',
      items: [
        { name: 'DJI Inspire 3 Drone', specs: 'CinemaDNG raw camera, dual-pilot precision wind resistance' },
        { name: 'DJI Mavic 3 Pro Cine', specs: 'Triple-camera multi-focal ProRes, quick deployment tracking' },
        { name: 'FPV Close Tracking Rig', specs: 'High-speed custom athletic tracking over mountain cliffs' }
      ]
    }
  ];

  return (
    <section 
      id="testimonials" 
      className="py-24 sm:py-32 bg-app-bg text-app-text border-b border-app-border/40 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-app-accent font-semibold block mb-3">
            Trust & Production Standards
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif tracking-tight text-app-text">
            Client Verification & Behind the Scenes
          </h2>
          <div className="h-[2px] w-12 bg-app-accent mt-4"></div>
        </div>

        {/* The Beautiful "Verified client reviews" Stage */}
        <div className="bg-app-surface border border-app-border/70 p-8 sm:p-12 rounded-lg relative overflow-hidden mb-16 shadow-lg">
          {/* Subtle Ambient Light Glow */}
          <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-app-accent/5 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-app-accent/5 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Locked Icon Deck */}
            <div className="lg:col-span-4 flex flex-col justify-center gap-4 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="w-10 h-10 rounded-full bg-app-card/80 border border-app-border/40 flex items-center justify-center text-app-accent">
                  <Lock size={16} />
                </div>
                <div className="w-12 h-12 rounded-full bg-app-accent/10 border border-app-accent/20 flex items-center justify-center text-app-accent">
                  <ShieldCheck size={20} className="animate-pulse" />
                </div>
                <div className="w-10 h-10 rounded-full bg-app-card/80 border border-app-border/40 flex items-center justify-center text-app-sec">
                  <UploadCloud size={16} />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif text-app-text font-medium tracking-wide">
                Verified client reviews are currently being prepared.
              </h3>

              <span className="text-xs font-mono text-app-accent uppercase tracking-[0.2em]">
                Staging Protocol Ref: STG-RES-2026
              </span>
            </div>

            {/* Explanation card */}
            <div className="lg:col-span-8 border-t lg:border-t-0 lg:border-l border-app-border/30 pt-8 lg:pt-0 lg:pl-8 space-y-4">
              <p className="text-xs sm:text-sm text-app-sec leading-relaxed font-sans">
                We strictly honor client confidentiality agreements. Authentic video reviews, verified brand partnership transcripts, and resort collaboration catalogs from luxury McLeod Ganj stays, Spiti Valley expeditions, and paragliding groups in Bir are currently undergoing verified final production approval cycles.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-[10px] font-mono text-app-sec/80 pt-2">
                <div className="flex items-center gap-1.5 bg-app-card/40 border border-app-border/30 rounded p-2.5">
                  <Check size={11} className="text-app-accent shrink-0" />
                  <span>Dharsh Woods Elite</span>
                </div>
                <div className="flex items-center gap-1.5 bg-app-card/40 border border-app-border/30 rounded p-2.5">
                  <Check size={11} className="text-app-accent shrink-0" />
                  <span>Kangra Skies Paragliders</span>
                </div>
                <div className="flex items-center gap-1.5 bg-app-card/40 border border-app-border/30 rounded p-2.5 col-span-2 md:col-span-1">
                  <Check size={11} className="text-app-accent shrink-0" />
                  <span>Key Monastery Docs</span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2 text-[10px] font-mono text-app-sec">
                <AlertCircle size={12} className="text-app-accent shrink-0" />
                <span>Zero Simulated Reviews • Authenticity Guaranteed</span>
              </div>
            </div>

          </div>
        </div>

        {/* Content Section: Behind the Scenes Gallery */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-mono tracking-wider text-app-accent uppercase block mb-1">
                Active Production
              </span>
              <h3 className="text-xl sm:text-2xl font-serif text-[#F4F2EE]">
                Behind-The-Scenes Dispatch
              </h3>
            </div>
            <p className="text-xs text-app-sec max-w-sm">
              Honest captures of our crew operating heavy visual gear across extreme mountain topography in Himachal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {btsImages.map((bts, idx) => (
              <div 
                key={idx}
                className="group bg-app-surface border border-app-border/40 rounded-md overflow-hidden hover:border-app-accent/40 transition-colors"
              >
                <div className="aspect-[3/2] overflow-hidden relative">
                  <img 
                    src={bts.url} 
                    alt={bts.tag} 
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-3 left-3 text-[9px] font-mono bg-black/60 text-app-accent px-2 py-0.5 rounded border border-app-accent/20 uppercase tracking-wider">
                    {bts.tag}
                  </span>
                </div>
                <div className="p-4 space-y-1.5">
                  <p className="text-[11px] font-mono text-app-sec/60">DISPATCH FRAME 0{idx + 1}</p>
                  <p className="text-xs text-app-sec leading-relaxed">{bts.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Section: Instagram Live Dispatch Filter */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-mono tracking-wider text-app-accent uppercase block mb-1">
                Social Visual Grid
              </span>
              <h3 className="text-xl sm:text-2xl font-serif text-[#F4F2EE]">
                Explore Our Instagram Feed Preview
              </h3>
            </div>
            
            <a 
              id="follow-instagram-testimonials"
              href="https://www.instagram.com/_dipps__/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-app-accent hover:text-[#F4F2EE] transition-colors"
            >
              <FaInstagram size={14} />
              <span>Follow @_dipps__ On Instagram</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {instagramPosts.map((post, index) => (
              <div 
                key={index}
                className="bg-app-card/20 border border-app-border/50 rounded-md overflow-hidden flex flex-col justify-between group cursor-pointer"
                onClick={() => window.open('https://www.instagram.com/_dipps__/', '_blank')}
              >
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={post.url} 
                    alt="Instagram Post" 
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex items-center justify-between text-white text-[10px] font-mono">
                    <span className="flex items-center gap-1 text-app-accent font-bold">
                      <Compass size={11} /> {post.location}
                    </span>
                    <span>♥ {post.likes}</span>
                  </div>
                </div>
                
                <div className="p-4 space-y-3">
                  <p className="text-xs text-app-sec font-sans leading-relaxed line-clamp-2">
                    <span className="font-mono text-app-accent font-semibold mr-1.5">@_dipps__</span>
                    {post.caption}
                  </p>
                  
                  <div className="text-[9px] font-mono text-app-accent/60 uppercase tracking-widest text-[#F4F2EE]/40 border-t border-app-border/30 pt-3">
                    POST // HP-CINE-DISPATCH
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Section: Rigid High-Altitude Equipment Manifest */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-mono tracking-wider text-app-accent uppercase block mb-1">
                Hardware & Mechanics
              </span>
              <h3 className="text-xl sm:text-2xl font-serif text-[#F4F2EE]">
                Independent Cine Gear Manifest
              </h3>
            </div>
            <p className="text-xs text-app-sec max-w-sm">
              We own and operate high-fidelity specialized cinema setups, ensuring absolute technical self-sufficiency inside alpine altitude profiles.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {gearCategories.map((cat, idx) => (
              <div 
                key={idx}
                className="bg-app-surface border border-app-border/50 p-6 rounded-md hover:border-app-accent/30 transition-colors"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-[#F4F2EE] uppercase tracking-wider mb-6 border-b border-app-border/20 pb-4">
                  <span className="w-2 h-2 rounded-full bg-app-accent" />
                  <span>{cat.title}</span>
                </div>

                <div className="space-y-6">
                  {cat.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="space-y-1">
                      <p className="text-sm font-sans font-medium text-[#F4F2EE]">{item.name}</p>
                      <p className="text-xs text-app-sec leading-relaxed">{item.specs}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

