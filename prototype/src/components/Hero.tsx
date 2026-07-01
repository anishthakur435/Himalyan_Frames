import { Play, MapPin, Sparkles, Compass } from 'lucide-react';
import { Film } from '../types';

interface HeroProps {
  onWatchShowreel: (showreelFilm: Film) => void;
}

export default function Hero({ onWatchShowreel }: HeroProps) {
  const showreelFilm: Film = {
    id: 'showreel-2026',
    title: 'Himalyan Frames — Cinematic Showreel',
    location: 'Dharamshala, Himachal Pradesh',
    category: 'Showreel Portfolio',
    duration: '2m 15s',
    year: '2026',
    coverUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-misty-mountain-landscape-with-forest-and-clouds-41656-large.mp4',
    description: 'An expansive compilation of cinematic narratives, high-altitude expeditions, and luxury stay campaigns captured across the Himalayan frontier.',
    roles: ['Director', 'DP', 'Editor', 'Drone Pilot'],
    specs: ['RED V-Raptor 8K', 'ARRI Alexa Mini', 'DJI Inspire 3'],
    isFeatured: true
  };

  const whatsappUrl = "https://wa.me/918219807180?text=Hi%20Himalyan%20Frames,%20I%20saw%20your%20cinematic%20portfolio%20and%20would%20love%20to%20discuss%20a%20visual%20storytelling%20project!";

  return (
    <div 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-500 pt-20"
    >
      {/* Background Image with Rich Shading and Grain */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1920"
          alt="Majestic Himalayan Peaks"
          className="w-full h-full object-cover scale-102 transition-transform duration-[10s] ease-out select-none"
          referrerPolicy="no-referrer"
        />
        {/* Cinematic atmospheric fog shading overlays */}
        <div className="absolute inset-0 bg-black/60 z-1" />
        <div className="absolute inset-0 bg-gradient-to-t from-app-bg via-transparent to-black/30 z-2" />
        {/* Subtle noise layer to give a physical film texture look */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.03] z-3 mix-blend-overlay"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")"
          }}
        />
      </div>

      {/* Aesthetic Camera Frame Viewfinder Overlay (A24 / Astray Style) */}
      <div className="absolute inset-4 sm:inset-8 border border-white/5 pointer-events-none z-10 flex flex-col justify-between p-4 font-mono text-[10px] text-white/30 uppercase tracking-[0.2em] select-none">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
            <span>REC: 24FPS</span>
          </div>
          <span>TC: 10:45:02:18</span>
        </div>
        <div className="flex justify-between items-end">
          <div className="flex items-center gap-1">
            <span className="text-app-accent font-semibold">DHAULADHAR</span>
            <span>- BASING STATE</span>
          </div>
          <span>ISO 400 • Shutter 180°</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 text-center select-none pt-12 md:pt-16">
        
        {/* Editorial Subline Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6 backdrop-blur-md">
          <MapPin size={12} className="text-app-accent" />
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#F4F2EE]">
            Dharamshala • Himachal Pradesh
          </span>
        </div>

        {/* Cinematic Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#F4F2EE] tracking-wide leading-[1.1] mb-6 drop-shadow-md">
          Cinematic Stories <br />
          <span className="italic font-normal font-sans tracking-normal font-serif text-app-accent">from the Himalayas</span>
        </h1>

        {/* Bulleted Tagline Grid */}
        <p className="max-w-2xl mx-auto text-xs sm:text-sm font-mono tracking-[0.16em] uppercase text-neutral-300 mb-4 px-2">
          Travel Films • Tourism Campaigns • Drone Visuals • Social Content
        </p>

        {/* Base Note */}
        <p className="text-xs text-neutral-400 font-sans tracking-wider mb-10 max-w-md mx-auto">
          Permanently based in Dharamshala. Available across India for paid visual storytelling expeditions.
        </p>

        {/* CTA Button Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 max-w-sm sm:max-w-none mx-auto">
          {/* Primary WhatsApp CTA */}
          <a
            id="cta-whatsapp-hero"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto h-12 px-8 text-xs font-mono tracking-[0.2em] uppercase font-semibold bg-app-accent text-[#F4F2EE] hover:bg-[#72542C] rounded-md flex items-center justify-center gap-2.5 transition-colors border border-app-accent/30 shadow-lg shadow-black/30"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.457h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>WhatsApp Now</span>
          </a>

          {/* Secondary Watch Showreel Button */}
          <button
            id="watch-showreel-btn"
            onClick={() => onWatchShowreel(showreelFilm)}
            className="w-full sm:w-auto h-12 px-8 text-xs font-mono tracking-[0.2em] uppercase font-semibold text-[#F4F2EE] hover:text-[#0b0b0b] bg-white/5 hover:bg-[#F4F2EE] border border-white/20 rounded-md flex items-center justify-center gap-2.5 transition-all cursor-pointer"
          >
            <Play size={14} className="fill-current" />
            <span>Watch Showreel</span>
          </button>
        </div>

      </div>

      {/* Cinematic slow ambient scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[8px] font-mono tracking-[0.4em] uppercase text-white/60">Explore Frames</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-white/60 to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-app-accent animate-bounce"></div>
        </div>
      </div>
    </div>
  );
}
