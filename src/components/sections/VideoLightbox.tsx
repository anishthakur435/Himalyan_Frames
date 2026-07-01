"use client";
import { useState, useRef, useEffect, MouseEvent } from 'react';
import { X, Volume2, VolumeX, Play, Pause, Award } from 'lucide-react';
import { Film } from '@/types';
import { Dialog, DialogContent, DialogOverlay, DialogPortal, DialogTitle } from '@/components/ui/dialog';

interface VideoLightboxProps {
  film: Film | null;
  onClose: () => void;
}

export default function VideoLightbox({ film, onClose }: VideoLightboxProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showUi, setShowUi] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => setIsPlaying(false));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, film]);

  const togglePlay = (e: MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(!isPlaying);
  };

  const toggleMute = (e: MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <Dialog open={!!film} onOpenChange={(open) => !open && onClose()}>
      <DialogPortal>
        <DialogOverlay className="bg-black/95 backdrop-blur-md" />
        <DialogContent 
          showCloseButton={false} 
          className="max-w-5xl w-full p-0 bg-[#0b0b0b] border-neutral-800 shadow-2xl rounded-md overflow-hidden aspect-video"
          aria-describedby={undefined}
        >
          {film && (
            <div 
              className="relative w-full h-full"
              onClick={(e) => e.stopPropagation()}
              onMouseEnter={() => setShowUi(true)}
              onMouseOver={() => setShowUi(true)}
              onMouseLeave={() => setShowUi(false)}
            >
              <DialogTitle className="sr-only">{film.title}</DialogTitle>
              
              {/* Loader backdrop */}
              <div className="absolute inset-0 flex items-center justify-center -z-10 bg-black">
                <div className="w-12 h-12 border-2 border-app-accent border-t-transparent rounded-full animate-spin"></div>
              </div>

              {/* Video Element */}
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster={film.coverUrl}
                preload="auto"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                id={`lightbox-video-${film.id}`}
              >
                {film.videoUrl && <source src={film.videoUrl.replace('.mp4', '.webm')} type="video/webm" />}
                {film.videoUrl && <source src={film.videoUrl} type="video/mp4" />}
                Your browser does not support the video tag.
              </video>

              {/* Cinematic Vignette Overlay shadow */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-transparent to-black/50" />

              {/* Interactive Overlay & Controls */}
              <div className={`absolute inset-0 flex flex-col justify-between p-6 transition-opacity duration-300 ${showUi ? 'opacity-100' : 'opacity-0'}`}>
                {/* Header */}
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs font-mono text-app-accent uppercase tracking-wider bg-app-accent/10 px-2 py-1 rounded">
                      Now Playing: {film.category}
                    </span>
                    <h3 id="lightbox-title" className="text-2xl font-serif text-[#F4F2EE] mt-1 tracking-wide">
                      {film.title}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1 font-mono flex items-center gap-2">
                      < Award size={12} className="text-app-accent" /> {film.location} • {film.year}
                    </p>
                  </div>
                  
                  <button 
                    id="close-lightbox"
                    onClick={onClose}
                    className="p-2 bg-black/50 hover:bg-[#1a1a1a]/80 rounded-full text-white/80 hover:text-white border border-white/10 transition-colors"
                    title="Close Player"
                    aria-label="Close video player"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Center Play Indicator (overlay check) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {!isPlaying && (
                    <div className="w-16 h-16 rounded-full bg-black/60 border border-app-accent/40 flex items-center justify-center text-app-accent">
                      <Play size={28} className="ml-1 fill-current" />
                    </div>
                  )}
                </div>

                {/* Footer controls */}
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-4">
                    <button 
                      id="toggle-lightbox-play"
                      onClick={togglePlay}
                      className="p-3 bg-[#8A6A3D] hover:bg-[#8A6A3D]/90 text-white rounded-md flex items-center justify-center transition-colors cursor-pointer"
                      aria-label={isPlaying ? "Pause video playback" : "Start video playback"}
                    >
                      {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                    </button>

                    <button 
                      id="toggle-lightbox-mute"
                      onClick={toggleMute}
                      className="p-3 bg-black/40 hover:bg-black/60 text-white/90 hover:text-white rounded-md border border-white/10 transition-colors cursor-pointer"
                      aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                    >
                      {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                    </button>
                  </div>

                  {/* Technical Specs Overlay */}
                  <div className="hidden sm:flex items-center gap-4 text-right bg-black/40 backdrop-blur-sm px-4 py-2 rounded border border-white/5">
                    <div>
                      <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Project Gear Specs</p>
                      <p className="text-xs font-mono text-neutral-200 mt-0.5">
                        {film.specs.slice(0, 2).join(' • ')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
