import { Calendar, Compass, Film, ArrowRight } from 'lucide-react';

export default function HowWeWork() {
  const steps = [
    {
      number: '01',
      title: 'Discovery Call',
      tagline: 'CREATIVE VOICE ALIGNMENT',
      description: 'We initiate a focused visual consultation to map your positioning parameters, project depth, and aesthetic references. We establish a clear storyline blueprint before any gear is packed.',
      icon: Calendar,
    },
    {
      number: '02',
      title: 'Planning & Location Scouting',
      tagline: 'ENVIRONMENT & FLIGHT SCAFFOLDING',
      description: 'Rigorous scouting of Himalayan ridges, sun coordinates, monasteries, and riverbed trails. We analyze wind profiles, draft DGCA clearance logs, and lock storyboards for perfect lighting transitions.',
      icon: Compass,
    },
    {
      number: '03',
      title: 'Filming & Delivery',
      tagline: 'IMMEDIATE POST-PRODUCTION GRADING',
      description: 'Highly quiet, non-intrusive operations using top-tier cinema bodies. Our local crew records realistic sounds, processes Kodak print grading, and delivers master ProRes files within the contract schedule.',
      icon: Film,
    }
  ];

  return (
    <section 
      id="process" 
      className="py-24 sm:py-32 bg-app-bg text-app-text border-b border-app-border/40 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-20">
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-app-accent font-semibold block mb-3">
            Production Pipeline
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif tracking-tight text-app-text leading-tight">
            How We Work
          </h2>
          <div className="h-[2px] w-12 bg-app-accent mt-4"></div>
        </div>

        {/* The Tri-Fold Sequence Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 sm:gap-8 relative items-stretch">
          
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            
            return (
              <div 
                key={idx}
                id={`process-step-${idx + 1}`}
                className="bg-app-surface border border-app-border/40 p-8 rounded-lg flex flex-col justify-between shadow-lg relative group/step hover:border-app-accent/40 transition-all duration-300"
              >
                {/* Visual Connector Arrow (Desktop Only) */}
                {idx < 2 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-app-accent/40">
                    <ArrowRight size={20} className="group-hover/step:translate-x-1 transition-transform" />
                  </div>
                )}

                <div className="space-y-6">
                  {/* Huge Outline/Filled Step Number */}
                  <div className="flex items-center justify-between">
                    <span className="text-4xl sm:text-5xl font-display font-medium text-app-accent font-mono select-none">
                      {step.number}
                    </span>
                    <div className="p-2.5 bg-app-card rounded border border-app-border/40 text-app-accent">
                      <IconComponent size={18} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="block text-[9px] font-mono tracking-[0.2em] text-[#72542C] dark:text-app-accent font-bold uppercase">
                      {step.tagline}
                    </span>
                    <h3 className="text-xl font-serif text-[#F4F2EE] font-medium tracking-wide">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-app-sec leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-app-border/20 flex justify-between items-center text-[10px] font-mono text-app-sec/60">
                  <span>STAGE GATEWAYS</span>
                  <span className="text-app-accent">PHASE_0{idx + 1}</span>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
