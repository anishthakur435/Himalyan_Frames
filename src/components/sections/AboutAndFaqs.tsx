"use client";
import { HelpCircle, Trees, Film, Mail } from 'lucide-react';
import { FAQS } from '@/lib/data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AboutAndFaqs() {
  return (
    <section 
      id="about" 
      className="py-24 sm:py-32 bg-app-bg text-app-text border-b border-app-border/40 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Responsive Dual Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: About Brand & Storytelling Philosophy */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-app-accent font-semibold block mb-3">
                The Collective
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-app-text leading-tight">
                About <br className="hidden lg:block" />Himalyan Frames
              </h2>
              <div className="h-[2px] w-12 bg-app-accent mt-4"></div>
            </div>

            <p className="text-sm text-app-sec leading-relaxed">
              Founded in Dharamshala, Himalyan Frames is an independent adventure film boutique specializing in mountain lifestyles, boutique resort campaigns, drone visual grids, and custom tourism stories.
            </p>

            <p className="text-sm text-app-sec leading-relaxed">
              We operate as a compact production crew. This keeps our filming footprints virtually silent, allowing us to capture candid human moments in local villages, monasteries, and steep trail ridges without disrupting the local flow.
            </p>

            {/* Crew philosophy highlights checklist */}
            <div className="space-y-4 pt-6 border-t border-app-border/20">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-app-card/60 rounded border border-app-border/40 text-app-accent shrink-0">
                  <Trees size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-[#F4F2EE] uppercase tracking-wider">Deodar Pine Rooted</h4>
                  <p className="text-xs text-app-sec mt-0.5">Living permanently in McLeod Ganj height. We understand the mountains intimately.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-app-card/60 rounded border border-app-border/40 text-app-accent shrink-0">
                  <Film size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-[#F4F2EE] uppercase tracking-wider">Independent Cine Rigging</h4>
                  <p className="text-xs text-app-sec mt-0.5">Equipped with RED, Sony FX, and DJI Inspire gear optimized for rugged packing.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive FAQ Accordions */}
          <div className="lg:col-span-7 bg-app-surface border border-app-border/40 p-6 sm:p-8 rounded-md transition-colors duration-500">
            <div className="mb-8">
              <p className="text-xs font-mono text-app-accent uppercase tracking-wider">
                Common Consultations
              </p>
              <h3 className="text-xl font-serif text-app-text mt-1">
                Frequently Asked Inquiries
              </h3>
            </div>

            <Accordion defaultValue={["faq-1"]} className="w-full space-y-2">
              {FAQS.map((faq) => (
                <AccordionItem 
                  key={faq.id} 
                  value={faq.id}
                  className="border-b border-app-border/30 pb-2"
                >
                  <AccordionTrigger className="text-left text-sm font-sans font-medium text-[#F4F2EE] hover:text-app-accent hover:no-underline transition-colors py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-sm text-app-sec leading-relaxed pt-2 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Micro Call-out card footer */}
            <div className="mt-8 pt-6 border-t border-app-border/20 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2.5 text-xs text-app-sec">
                <HelpCircle size={15} className="text-app-accent shrink-0" />
                <span>Have a unique flight or scouting query?</span>
              </div>
              <a
                id="faq-mailto-cta"
                href="mailto:thakurdipps05@gmail.com?subject=Inquiry%20from%20Himalyan%20Frames%20Portfolio"
                className="text-xs font-mono text-app-accent hover:text-[#F4F2EE] uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Mail size={12} />
                <span>Email Our Team</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
