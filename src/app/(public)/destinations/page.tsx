
import { Metadata } from 'next';
import WhyDharamshala from '@/components/sections/WhyDharamshala';

export const metadata: Metadata = {
  title: 'Destinations',
  description: 'Filming locations across Dharamshala, Spiti, and the greater Himalayas.',
};

export default function DestinationsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://himalyanframes.com' },
      { '@type': 'ListItem', position: 2, name: 'Destinations', item: 'https://himalyanframes.com/destinations' }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="pt-20 min-h-screen">
        <WhyDharamshala />
      </div>
    </>
  );
}
