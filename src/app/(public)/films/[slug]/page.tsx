import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { FILMS } from '@/lib/data';
import Link from 'next/link';

interface FilmPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return FILMS.map((film) => ({
    slug: film.id,
  }));
}

export function generateMetadata({ params }: FilmPageProps): Metadata {
  const film = FILMS.find((f) => f.id === params.slug);
  
  if (!film) {
    return {
      title: 'Film Not Found',
    };
  }

  return {
    title: `${film.title} | Himalyan Frames`,
    description: film.description,
    openGraph: {
      title: film.title,
      description: film.description,
      images: [film.coverUrl],
      type: 'video.movie',
    },
  };
}

export default function FilmDetailPage({ params }: FilmPageProps) {
  const film = FILMS.find((f) => f.id === params.slug);

  if (!film) {
    notFound();
  }

  // Phase 5: SEO - VideoObject JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: film.title,
    description: film.description,
    thumbnailUrl: film.coverUrl,
    uploadDate: `${film.year}-01-01T08:00:00+08:00`,
    duration: `PT${film.duration.replace('m ', 'M').replace('s', 'S')}`,
    contentUrl: film.videoUrl,
    embedUrl: film.videoUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="pt-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link href="/films" className="text-xs font-mono uppercase tracking-wider text-app-sec hover:text-app-accent mb-8 inline-block transition-colors">
            ← Back to Films
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif text-app-text mb-4">{film.title}</h1>
              <div className="flex items-center gap-4 text-xs font-mono text-app-sec uppercase tracking-wider mb-8">
                <span>{film.location}</span>
                <span>•</span>
                <span>{film.year}</span>
                <span>•</span>
                <span>{film.duration}</span>
              </div>
              
              <p className="text-app-sec/80 leading-relaxed mb-8">
                {film.description}
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-mono text-app-text uppercase tracking-wider mb-2">Roles</h3>
                  <div className="flex flex-wrap gap-2">
                    {film.roles.map(role => (
                      <span key={role} className="text-xs px-2 py-1 bg-app-card border border-app-border rounded text-app-sec">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xs font-mono text-app-text uppercase tracking-wider mb-2">Technical Specs</h3>
                  <div className="flex flex-wrap gap-2">
                    {film.specs.map(spec => (
                      <span key={spec} className="text-xs px-2 py-1 bg-app-card border border-app-border rounded text-app-sec">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-app-border/40 group">
              <Image 
                src={film.coverUrl} 
                alt={film.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <a 
                  href={film.videoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all hover:scale-110"
                >
                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
