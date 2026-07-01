import { Metadata } from 'next';
import FilmsClient from './FilmsClient';

export const metadata: Metadata = {
  title: 'Selected Films',
  description: 'A curated catalog of architectural sweeps, cinematic wilderness runs, and documentary vignettes drafted directly in the Himalayan ridges.',
};

export default function FilmsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://himalyanframes.com' },
      { '@type': 'ListItem', position: 2, name: 'Films', item: 'https://himalyanframes.com/films' }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="pt-20 min-h-screen">
        <FilmsClient />
      </div>
    </>
  );
}
