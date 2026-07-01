import Link from 'next/link';
import { Compass } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-app-bg border-t border-app-border/40 py-16 text-app-sec select-none transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Branding context block */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-display text-base font-bold tracking-[0.25em] uppercase text-app-text block">
              Himalyan Frames
            </span>
            <span className="text-xs font-mono tracking-widest text-app-accent uppercase block">
              Crafted in the Himalayas.
            </span>
            <p className="text-xs text-app-sec/70 max-w-sm leading-relaxed pt-2">
              An independent adventure film boutique documenting real raw deodar lines, ancient mountain histories, and boutique resort stays.
            </p>
          </div>

          {/* Nav anchors list Column */}
          <div className="md:col-span-4 space-y-2">
            <p className="text-xs font-mono text-[#F4F2EE] uppercase tracking-wider mb-2">Framework Index</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <Link href="/films" className="text-left hover:text-app-accent transition-colors font-mono uppercase tracking-wider text-[11px]">Selected Films</Link>
              <Link href="/services" className="text-left hover:text-app-accent transition-colors font-mono uppercase tracking-wider text-[11px]">Services List</Link>
              <Link href="/destinations" className="text-left hover:text-app-accent transition-colors font-mono uppercase tracking-wider text-[11px]">Altitude Zones</Link>
              <Link href="/pricing" className="text-left hover:text-app-accent transition-colors font-mono uppercase tracking-wider text-[11px]">Pricing Guide</Link>
              <Link href="/about" className="text-left hover:text-app-accent transition-colors font-mono uppercase tracking-wider text-[11px]">Biography</Link>
              <Link href="/contact" className="text-left hover:text-app-accent transition-colors font-mono uppercase tracking-wider text-[11px]">Submit Brief</Link>
              <Link href="/privacy" className="text-left hover:text-app-accent transition-colors font-mono uppercase tracking-wider text-[11px]">Privacy Policy</Link>
              <Link href="/terms" className="text-left hover:text-app-accent transition-colors font-mono uppercase tracking-wider text-[11px]">Terms of Service</Link>
            </div>
          </div>

          {/* High altitude logistical statement */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-mono text-[#F4F2EE] uppercase tracking-wider mb-2">Basecamp status</p>
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-app-sec">
              <Compass size={13} className="text-app-accent anim-spin" />
              <span>Dharamshala Office: McLeod Ganj heights</span>
            </div>
            <p className="text-[11px] text-app-sec/60 leading-relaxed font-sans mt-1">
              Field crew operations are fully operational. Flight permits ready for Kangra district. Spiti Valley treks staging is active for winter draft bookings.
            </p>
          </div>
        </div>

        <div className="border-t border-app-border/30 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-app-sec/80">
          <div>
            <p>© {new Date().getFullYear()} Himalyan Frames. All rights reserved.</p>
            <p className="text-app-accent mt-0.5">Designed with A24 & Patagonia visual references.</p>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono text-app-sec/60">
            <span className="text-[10px] text-app-accent hover:text-[#F4F2EE] uppercase tracking-wider">
              MCLEOD GANJ • DHARAMSHALA • INDIA
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
