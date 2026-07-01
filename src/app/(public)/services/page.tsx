
import { Metadata } from 'next';
import ServicesSection from '@/components/sections/ServicesSection';
import HowWeWork from '@/components/sections/HowWeWork';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Cinematic travel, resort, and documentary videography services in the Himalayas.',
};

export default function ServicesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://himalyanframes.com' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://himalyanframes.com/services' }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="pt-20 min-h-screen">
        <ServicesSection />
        <HowWeWork />
      </div>
    </>
  );
}
