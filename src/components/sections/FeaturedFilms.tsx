"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Play, MapPin, Film as FilmIcon, Cpu } from 'lucide-react';
import { FILMS } from '@/lib/data';
import { Film } from '@/types';

interface FeaturedFilmsProps {
  onSelectFilm: (film: Film) => void;
}

export default function FeaturedFilms({ onSelectFilm }: FeaturedFilmsProps) {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const categories = ['All', 'Travel Film', 'Resort & Tourism', 'Social Reel Film', 'Drone Cinematography'];

  const filteredFilms = activeTab === 'All'
    ? FILMS
    : FILMS.filter(film => film.category === activeTab);

  return (
    <section 
      id="films" 
      className="py-24 sm:py-32 bg-app-bg text-app-text border-b border-app-border/40 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-app-accent font-semibold block mb-3">
              Film Repository
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif tracking-tight text-app-text">
              Selected Works
            </h2>
            <div className="h-[2px] w-12 bg-app-accent mt-4"></div>
          </div>
          
          <p className="max-w-md text-sm text-app-sec font-sans leading-relaxed">
            A curated catalog of architectural sweeps, cinematic wilderness runs, and documentary vignettes drafted directly in the Himalayan ridges.
          </p>
        </div>

        {/* Categories Tab (Minimalist Horizontal Row) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-6 mb-12 scrollbar-none border-b border-app-border/20">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`tab-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setActiveTab(cat)}
              className={`text-xs font-mono tracking-[0.15em] uppercase py-2 px-4 rounded-md transition-all whitespace-nowrap cursor-pointer ${
                activeTab === cat
                  ? 'bg-app-accent text-[#F4F2EE]'
                  : 'text-app-sec hover:text-app-text hover:bg-app-card/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Primary Film Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFilms.map((film) => {
            const isHovered = hoveredId === film.id;
            
            return (
              <div
                key={film.id}
                id={`film-card-${film.id}`}
                className="group relative flex flex-col bg-app-card/10 border border-app-border/40 rounded-md overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-app-accent/60"
                onMouseEnter={() => setHoveredId(film.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Visual Thumbnail Stage */}
                <div 
                  className="relative aspect-video w-full overflow-hidden cursor-pointer bg-neutral-900"
                  onClick={() => onSelectFilm(film)}
                >
                  {/* Image Backdrop */}
                  <Image
                    src={film.coverUrl}
                    alt={film.title}
                    fill
                    className={`object-cover transition-transform duration-[1.2s] ease-out ${
                      isHovered ? 'scale-108 blur-[2px]' : 'scale-100'
                    }`}
                  />

                  {/* Cinematic Viewfinder Focus Lines */}
                  {isHovered && (
                    <div className="absolute inset-4 border border-white/10 pointer-events-none z-10 flex flex-col justify-between p-2">
                      <div className="flex justify-between font-mono text-[8px] text-white/40">
                        <span>STBY</span>
                        <span>04m 12s</span>
                      </div>
                      <div className="flex justify-between font-mono text-[8px] text-white/40">
                        <span>4K HFR</span>
                        <span>{film.year}</span>
                      </div>
                    </div>
                  )}

                  {/* Shading gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/35 opacity-90 transition-opacity" />

                  {/* Play Trigger / Static Action Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      id={`play-trigger-${film.id}`}
                      className={`w-12 h-12 rounded-full border bg-black/60 backdrop-blur-sm flex items-center justify-center text-app-text transition-all duration-300 ${
                        isHovered 
                          ? 'border-app-accent bg-app-accent text-white scale-110 shadow-lg shadow-app-accent/20' 
                          : 'border-white/10 text-white'
                      }`}
                      title={`Watch ${film.title}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectFilm(film);
                      }}
                    >
                      <Play size={18} className="ml-0.5 fill-current" />
                    </button>
                  </div>

                  {/* Category Pill Tag */}
                  <span className="absolute top-4 left-4 z-10 text-[9px] font-mono tracking-wider uppercase px-2 py-1 rounded bg-[#0b0b0b]/80 text-app-accent border border-app-accent/20">
                    {film.category}
                  </span>

                  {/* Timestamp Tag */}
                  <span className="absolute bottom-4 right-4 z-10 text-[9px] font-mono tracking-wider uppercase text-neutral-300 bg-black/40 px-2 py-0.5 rounded">
                    {film.duration}
                  </span>
                </div>

                {/* Information Layout */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-xs text-app-sec mb-2 font-mono">
                      <MapPin size={12} className="text-app-accent" />
                      <span>{film.location}</span>
                    </div>

                    <Link href={`/films/${film.id}`}>
                      <h3 className="text-lg font-serif text-app-text group-hover:text-app-accent transition-colors">
                        {film.title}
                      </h3>
                    </Link>

                    <p className="text-xs text-app-sec mt-3 leading-relaxed line-clamp-2">
                      {film.description}
                    </p>
                  </div>

                  {/* Render Technical Hardware Labels */}
                  <div className="mt-6 pt-4 border-t border-app-border/30 flex items-center justify-between text-[10px] font-mono text-app-sec">
                    <div className="flex items-center gap-1.5 max-w-[70%] overflow-hidden">
                      <Cpu size={12} className="text-app-accent shrink-0" />
                      <span className="truncate">{film.specs[0]} • {film.specs[1]}</span>
                    </div>
                    <span className="text-app-accent uppercase tracking-wider">{film.year}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Staging Awaiting content upload check */}
        <div className="mt-16 p-8 bg-app-card/25 border border-dashed border-app-border/40 rounded-md text-center max-w-xl mx-auto">
          <FilmIcon size={20} className="text-app-accent/40 mx-auto mb-3" />
          <p className="text-xs font-mono text-app-sec uppercase tracking-wider">
            Draft Footage Assets Staging
          </p>
          <p className="text-xs text-app-sec mt-1">
            New travel video cuts from Spiti Valley winter log are currently undergoing post-production review. Raw frames display pending content team approvals.
          </p>
        </div>

      </div>
    </section>
  );
}
