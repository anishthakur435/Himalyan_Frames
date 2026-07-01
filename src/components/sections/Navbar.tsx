"use client";
import { useState } from 'react';
import { Menu, X, Sun, Moon, Sparkles } from 'lucide-react';
import { Theme } from '@/types';

interface NavbarProps {
  theme: Theme;
  onThemeToggle: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ theme, onThemeToggle, activeSection, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'films', label: 'Films' },
    { id: 'services', label: 'Services' },
    { id: 'destinations', label: 'Destinations' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavItemClick = (sectionId: string) => {
    setIsOpen(false);
    onNavigate(sectionId);
  };

  const whatsappUrl = "https://wa.me/918219807180?text=Hi%20Himalyan%20Frames,%20I%20saw%20your%20cinematic%20portfolio%20and%20would%20love%20to%20discuss%20a%20visual%20storytelling%20project!";

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-40 bg-app-bg/85 backdrop-blur-md border-b border-app-border/40 transition-colors duration-500"
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Tagline */}
          <div 
            className="flex flex-col cursor-pointer select-none group"
            onClick={() => handleNavItemClick('hero')}
            id="brand-logo"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') handleNavItemClick('hero'); }}
            aria-label="Home"
          >
            <div className="flex items-center gap-1.5">
              <span className="font-display text-lg font-bold tracking-[0.18em] uppercase text-app-text group-hover:text-app-accent transition-colors">
                Himalyan Frames
              </span>
            </div>
            <span className="text-[9px] font-mono tracking-[0.35em] uppercase text-app-accent font-medium mt-0.5">
              Crafted in the Himalayas.
            </span>
          </div>

          {/* Desktop Navigation Links (centered context) */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => handleNavItemClick(item.id)}
                className={`text-xs font-mono tracking-[0.15em] uppercase font-medium transition-all py-2 hover:text-app-accent cursor-pointer ${
                  activeSection === item.id 
                    ? 'text-app-accent border-b border-app-accent/70' 
                    : 'text-app-sec'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Persistent CTA & Utilities */}
          <div className="hidden sm:flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <button
              id="theme-toggler"
              onClick={onThemeToggle}
              className="p-2 text-app-sec hover:text-app-accent bg-app-card/30 hover:bg-app-card/60 rounded-md transition-all border border-app-border/40 cursor-pointer"
              title={theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
              aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* WhatsApp Persistent CTA */}
            <a
              id="cta-whatsapp-navbar"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 px-5 text-xs font-mono tracking-wider uppercase font-medium bg-app-accent text-[#F4F2EE] hover:bg-app-accent/90 rounded-md flex items-center justify-center gap-2 transition-colors border border-app-accent/20"
              aria-label="Contact us on WhatsApp"
            >
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.457h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>WhatsApp Now</span>
            </a>
          </div>

          {/* Mobile responsive toggle actions */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              id="mobile-theme-toggler"
              onClick={onThemeToggle}
              className="p-2 text-app-sec hover:text-app-accent bg-app-card/40 rounded-md transition-colors"
              aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-app-text hover:text-app-accent bg-app-card/40 rounded-md transition-colors"
              title="Toggle Menu"
              aria-expanded={isOpen}
              aria-controls="mobile-drawer"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer (Absolute Layout Overlay) */}
      <div 
        id="mobile-drawer"
        className={`fixed inset-x-0 top-20 bg-app-bg border-b border-app-border shadow-lg z-30 md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[420px] opacity-100 border-app-border' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="px-4 pt-4 pb-6 space-y-3 bg-app-bg transition-colors duration-500">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`mobile-nav-${item.id}`}
              onClick={() => handleNavItemClick(item.id)}
              className={`block w-full text-left py-2 px-3 text-sm font-mono tracking-wider uppercase rounded-md transition-all ${
                activeSection === item.id 
                  ? 'bg-app-accent/15 text-app-accent font-semibold' 
                  : 'text-app-sec hover:bg-app-card/40'
              }`}
            >
              {item.label}
            </button>
          ))}
          
          <div className="pt-4 border-t border-app-border/40">
            <a
              id="mobile-whatsapp-cta"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-11 text-xs font-mono tracking-wider uppercase font-medium bg-app-accent text-[#F4F2EE] hover:bg-app-accent/90 rounded-md flex items-center justify-center gap-2 transition-colors border border-app-accent/20"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.457h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>WhatsApp Now</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
