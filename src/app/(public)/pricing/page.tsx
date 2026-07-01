import { Metadata } from 'next';
import PricingSection from '@/components/sections/PricingSection';

export const metadata: Metadata = {
  title: 'Pricing Guide',
  description: 'Production rates and packages for travel, resort, and commercial videography.',
};

export default function PricingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://himalyanframes.com' },
      { '@type': 'ListItem', position: 2, name: 'Pricing', item: 'https://himalyanframes.com/pricing' }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="pt-20 min-h-screen">
        <PricingSection />
      </div>
    </>
  );
}
