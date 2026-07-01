import { Metadata } from 'next';
import AboutAndFaqs from '@/components/sections/AboutAndFaqs';

export const metadata: Metadata = {
  title: 'Biography & FAQs',
  description: 'Learn about the filmmaker behind Himalyan Frames and read our FAQs.',
};

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://himalyanframes.com' },
      { '@type': 'ListItem', position: 2, name: 'About', item: 'https://himalyanframes.com/about' }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="pt-20 min-h-screen">
        <AboutAndFaqs />
      </div>
    </>
  );
}
