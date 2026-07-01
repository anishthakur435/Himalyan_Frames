"use client";
import { Check, ShieldAlert, Sparkles, ArrowUpRight } from 'lucide-react';
import { PRICING_TIERS } from '@/lib/data';

export default function PricingSection() {
  const whatsappBaseUrl = "https://wa.me/918219807180?text=";

  return (
    <section 
      id="pricing" 
      className="py-24 sm:py-32 bg-app-surface text-app-text border-b border-app-border/40 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-app-accent font-semibold block mb-3">
              Investment Structure
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif tracking-tight text-app-text">
              Transparent Frameworks
            </h2>
            <div className="h-[2px] w-12 bg-app-accent mt-4"></div>
          </div>
          
          <p className="max-w-md text-sm text-app-sec font-sans leading-relaxed">
            No complex hidden quotes or bloated agencies matrices. We outline concrete, value-driven pricing brackets specialized for high quality cinematic stories.
          </p>
        </div>

        {/* 3-Column Plan Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_TIERS.map((tier) => {
            const isHighlighted = tier.id === 'resort-story';
            
            // Set up conversion optimized CTA labels and messages
            let ctaLabel = 'Inquire Booking';
            let customQuery = '';
            
            if (tier.id === 'resort-story') {
              ctaLabel = 'Request the Media Kit';
              customQuery = `Hi Himalyan Frames, I am looking to Request the Hospitality Media Kit for our property/brand and discuss the "${tier.name}" package (${tier.basePrice}).`;
            } else if (tier.id === 'adventure-expeditions') {
              ctaLabel = 'Get a Custom Quote';
              customQuery = `Hi Himalyan Frames, I would like to Get a Custom Quote for an upcoming adventure film trek ("${tier.name}" - ${tier.basePrice}). Please send over logistics estimates.`;
            } else {
              ctaLabel = 'Plan My Shoot';
              customQuery = `Hi Himalyan Frames, I want to Plan Our Shoot using your "${tier.name}" package (${tier.basePrice}). Let's check filming dates!`;
            }

            const tierWhatsAppUrl = `${whatsappBaseUrl}${encodeURIComponent(customQuery)}`;

            return (
              <div
                key={tier.id}
                id={`pricing-card-${tier.id}`}
                className={`flex flex-col justify-between rounded-md p-6 sm:p-8 transition-all duration-300 relative ${
                  isHighlighted
                    ? 'bg-app-card border-2 border-app-accent shadow-xl scale-102 z-10'
                    : 'bg-app-card/30 border border-app-border/40 hover:border-app-accent/50'
                }`}
              >
                {/* Popularity Badge if highlighted */}
                {isHighlighted && (
                  <span className="absolute top-0 right-8 -translate-y-1/2 text-[9px] font-mono tracking-widest uppercase bg-app-accent text-white px-3 py-1 rounded-full flex items-center gap-1">
                    <Sparkles size={10} /> Highly Requested
                  </span>
                )}

                {/* Card Title & Content */}
                <div>
                  <span className="text-xs font-mono text-app-accent uppercase tracking-wider font-semibold">
                    {tier.name}
                  </span>
                  
                  <div className="flex items-baseline gap-2 mt-4">
                    <span className="text-3xl sm:text-4xl font-serif text-app-text font-bold tracking-tight">
                      {tier.basePrice}
                    </span>
                    <span className="text-xs text-app-sec font-mono">/ project base</span>
                  </div>

                  <p className="text-xs text-app-sec font-sans italic mt-3 min-h-[36px]">
                    {tier.tagline}
                  </p>

                  <div className="h-[1px] bg-app-border/40 my-6" />

                  {/* Bullet Lists */}
                  <ul className="space-y-3.5 mb-8">
                    {tier.includes.map((incl, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-app-sec leading-relaxed">
                        <Check size={14} className="text-app-accent mt-0.5 shrink-0" />
                        <span>{incl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer and Call actions */}
                <div>
                  <div className="bg-app-bg/40 p-4 rounded border border-app-border/25 mb-6 text-[11px] text-app-sec">
                    <p className="font-mono text-[#F4F2EE] uppercase tracking-wider text-[9px]">Best suited for:</p>
                    <p className="mt-1 font-sans leading-relaxed">{tier.bestFor}</p>
                  </div>

                  <a
                    id={`pricing-cta-${tier.id}`}
                    href={tierWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full h-11 text-xs font-mono tracking-wider uppercase font-semibold rounded flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                      isHighlighted
                        ? 'bg-app-accent text-[#F4F2EE] hover:bg-[#72542C]'
                        : 'bg-app-card border border-app-border hover:bg-app-card/80 text-app-text hover:border-app-accent'
                    }`}
                  >
                    <span>{ctaLabel}</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Custom Pricing Call Warning */}
        <div className="mt-12 bg-app-card/25 border border-app-border/40 p-6 rounded-md max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-3">
            <ShieldAlert size={20} className="text-app-accent mt-0.5 shrink-0" />
            <div>
              <p className="text-xs font-mono text-[#F4F2EE] uppercase tracking-wider">
                Custom Logistics Policy Disclaimer
              </p>
              <p className="text-xs text-app-sec mt-1 max-w-xl">
                Above figures are base starting parameters. Flights, heavy cargo payload check-ins, local high altitude rangers permissions, and accommodation must be factored for projects exceeding 3 shooting days.
              </p>
            </div>
          </div>

          <a 
            id="pricing-custom-brief"
            href="https://wa.me/918219807180?text=Hi%20Himalyan%20Frames,%20I'd%20love%20to%20discuss%20a%20tailored%20custom%20commercial%20brief%20with%20custom%20deliverables!"
            target="_blank" 
            rel="noopener noreferrer"
            className="h-10 px-6 text-xs font-mono tracking-widest uppercase bg-app-bg text-[#F4F2EE] hover:bg-app-bg/80 border border-app-border rounded flex items-center justify-center transition-colors cursor-pointer"
          >
            Request Custom Quote
          </a>
        </div>

      </div>
    </section>
  );
}
