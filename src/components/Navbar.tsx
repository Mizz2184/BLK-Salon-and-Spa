import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, Gift, Phone, MapPin, ChevronRight } from 'lucide-react';
import gsap from 'gsap';

interface NavbarProps {
  onOpenBooking: (category?: string) => void;
  onOpenGiftCard: () => void;
  onOpenBridal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenGiftCard,
  onOpenBridal
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileLinksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen && mobileMenuRef.current && mobileLinksRef.current) {
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }
      );
      gsap.fromTo(
        mobileLinksRef.current.children,
        { opacity: 0, x: -15 },
        { opacity: 1, x: 0, duration: 0.3, stagger: 0.05, delay: 0.1, ease: 'power2.out' }
      );
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'SERVICES', href: '#services' },
    { label: 'PACKAGES', href: '#packages' },
    { label: 'MEMBERSHIPS', href: '#memberships' },
    { label: 'LUXURY ROOMS', href: '#rooms' },
    { label: 'SHOP', href: '#shop' },
    { label: 'CONTACT', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Bar Announcement */}
      <div className="bg-black border-b border-neutral-800 text-[11px] uppercase tracking-widest text-neutral-300 py-2 px-4 font-sans">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="hidden sm:inline-block font-semibold text-neutral-300">
            THE BEST SALON & BARBERSHOP IN SOUTH JERSEY SINCE 2000
          </span>
          <span className="text-center w-full sm:w-auto font-medium text-neutral-400">
            SEWELL, NJ &nbsp;|&nbsp; 2,000SF SALON & 1,800SF SPA
          </span>
          <a
            href="tel:8565550199"
            className="hidden lg:flex items-center gap-1.5 text-neutral-300 hover:text-white transition font-semibold"
          >
            <Phone className="w-3 h-3 text-white" /> (856) 555-0199
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 bg-black text-white ${
          scrolled ? 'py-3 border-b border-neutral-800 shadow-2xl' : 'py-4 border-b border-neutral-900'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Left Nav (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-6 text-[13px] font-bold uppercase tracking-wider text-neutral-300">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition">HOME</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('#about'); }} className="hover:text-white transition">ABOUT</a>
            <a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick('#services'); }} className="hover:text-white transition">SERVICES</a>
          </nav>

          {/* Logo Center */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex flex-col items-center group cursor-pointer"
          >
            <span className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase group-hover:scale-105 transition-transform">
              blk.
            </span>
            <span className="text-[9px] tracking-[0.4em] text-neutral-400 font-sans uppercase -mt-1 font-bold">
              SALON & SPA
            </span>
          </a>

          {/* Right Nav (Desktop) */}
          <div className="hidden lg:flex items-center space-x-6 text-[13px] font-bold uppercase tracking-wider text-neutral-300">
            <a href="#packages" onClick={(e) => { e.preventDefault(); handleNavClick('#packages'); }} className="hover:text-white transition">PACKAGES</a>
            <a href="#shop" onClick={(e) => { e.preventDefault(); handleNavClick('#shop'); }} className="hover:text-white transition">SHOP</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }} className="hover:text-white transition">CONTACT</a>
            
            {/* Buttons */}
            <div className="flex items-center space-x-3 pl-4 border-l border-neutral-800">
              <button
                onClick={() => onOpenGiftCard()}
                className="px-4 py-2 rounded-full border border-white/30 text-white text-[12px] font-bold uppercase tracking-wider hover:bg-white hover:text-black transition flex items-center gap-1.5"
              >
                GIFT CARDS <ArrowRight className="w-3 h-3" />
              </button>

              <button
                onClick={() => onOpenBooking()}
                className="px-5 py-2 rounded-full bg-white text-black text-[12px] font-bold uppercase tracking-wider hover:bg-neutral-200 transition flex items-center gap-1.5 shadow-md"
              >
                BOOK NOW <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Mobile Action Controls */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => onOpenBooking()}
              className="px-4 py-1.5 rounded-full bg-white text-black text-[11px] font-bold uppercase tracking-wider hover:bg-neutral-200 transition flex items-center gap-1"
            >
              BOOK <ArrowRight className="w-3 h-3" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="p-2 rounded-md bg-neutral-900 border border-neutral-800 text-white hover:bg-neutral-800 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Panel */}
        {mobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="lg:hidden absolute top-full left-0 right-0 bg-black border-b border-neutral-800 shadow-2xl px-6 py-8"
          >
            <div ref={mobileLinksRef} className="flex flex-col space-y-4 mb-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-lg font-display uppercase tracking-widest text-neutral-200 hover:text-white flex items-center justify-between py-1 border-b border-neutral-900"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-neutral-500" />
                </a>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenGiftCard();
                }}
                className="w-full py-3 rounded-full border border-neutral-700 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 bg-neutral-900"
              >
                GIFT CARDS <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                BOOK NOW <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBridal();
              }}
              className="w-full mt-3 py-2.5 rounded-full border border-neutral-700 text-neutral-300 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-neutral-900"
            >
              BRIDAL CONSULTATION <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <div className="mt-6 pt-6 border-t border-neutral-900 flex items-center justify-between text-xs text-neutral-400 font-sans">
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-white" /> SEWELL, NJ</span>
              <a href="tel:8565550199" className="text-white flex items-center gap-1 font-medium">
                <Phone className="w-3.5 h-3.5 text-white" /> (856) 555-0199
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
