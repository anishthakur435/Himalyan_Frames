"use client";

import { useState } from 'react';
import Hero from '@/components/sections/Hero';
import FeaturedFilms from '@/components/sections/FeaturedFilms';
import ServicesSection from '@/components/sections/ServicesSection';
import HowWeWork from '@/components/sections/HowWeWork';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import VideoLightbox from '@/components/sections/VideoLightbox';
import { Film } from '@/types';

export default function HomePage() {
  const [playingFilm, setPlayingFilm] = useState<Film | null>(null);

  return (
    <>
      <Hero onWatchShowreel={(showreelFilm) => setPlayingFilm(showreelFilm)} />
      <FeaturedFilms onSelectFilm={(film) => setPlayingFilm(film)} />
      <HowWeWork />
      <ServicesSection />
      <TestimonialsSection />
      
      <VideoLightbox 
        film={playingFilm} 
        onClose={() => setPlayingFilm(null)} 
      />
    </>
  );
}
