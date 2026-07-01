"use client";
import { useState } from 'react';
import FeaturedFilms from '@/components/sections/FeaturedFilms';
import VideoLightbox from '@/components/sections/VideoLightbox';
import { Film } from '@/types';

export default function FilmsClient() {
  const [playingFilm, setPlayingFilm] = useState<Film | null>(null);

  return (
    <>
      <FeaturedFilms onSelectFilm={(film) => setPlayingFilm(film)} />
      <VideoLightbox film={playingFilm} onClose={() => setPlayingFilm(null)} />
    </>
  );
}
