import React, { useEffect, useRef } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import gsap from 'gsap';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenGiftCard: () => void;
  onOpenBridal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBooking,
  onOpenGiftCard,
  onOpenBridal
}) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          textRef.current?.children || [],
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: 'power3.out', delay: 0.2 }
        );
      }, heroRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-black text-white">
      
      {/* Background Video with dark overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.1] scale-105"
        >
          <source
            src="https://video.wixstatic.com/video/73f350_f02ef581c4174497b761d45af8838e86/1080p/mp4/file.mp4"
            type="video/mp4"
          />
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=2000"
            alt="blk Salon & Spa Interior Chair"
            className="w-full h-full object-cover object-center filter brightness-[0.42] contrast-[1.1]"
          />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Main Center Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16 my-auto flex flex-col items-center">
        
        <div ref={textRef} className="flex flex-col items-center">
          
          {/* Kicker Eyebrow */}
          <span className="text-xs uppercase tracking-[0.35em] font-extrabold text-neutral-300 mb-4 block">
            THE BEST STUDIO IN SOUTH JERSEY SINCE 2000
          </span>

          {/* H1 Headline */}
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-extrabold uppercase tracking-tight text-white max-w-5xl leading-[0.95] mb-6 drop-shadow-md">
            HAIR EXPERIENCE <br />
            LIKE NO OTHER
          </h1>

          {/* Subtitle Body */}
          <p className="font-sans text-sm sm:text-base text-neutral-300 max-w-xl font-normal leading-relaxed mb-10">
            Voted #1 Salon & Spa in Washington Township & Sewell, NJ. Precision cutting, dimensional balayage, scalp detox, and 1,800sf luxury spa sanctuaries.
          </p>

          {/* Dual Pill Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto mb-8">
            <button
              onClick={onOpenBooking}
              className="px-8 py-3.5 rounded-full bg-white text-black font-bold text-[13px] uppercase tracking-wider hover:bg-neutral-200 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              BOOK APPOINTMENT <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#services"
              className="px-8 py-3.5 rounded-full border border-white text-white font-bold text-[13px] uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              OUR SERVICES <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Bridal Link */}
          <button
            onClick={onOpenBridal}
            className="text-[12px] text-neutral-300 hover:text-white transition flex items-center gap-1.5 uppercase tracking-widest font-semibold"
          >
            PLANNING A WEDDING? BRIDAL SERVICES <ArrowRight className="w-3.5 h-3.5" />
          </button>

        </div>

      </div>

      {/* Outlined Stat Numerals Bar (Bottom) */}
      <div className="relative z-10 bg-black/80 backdrop-blur-md border-t border-neutral-800 py-6 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          
          <div className="border-r border-neutral-800 last:border-0 pr-2">
            <p className="font-display font-extrabold text-4xl sm:text-5xl text-transparent [-webkit-text-stroke:1.5px_#ffffff] leading-none mb-1">
              24
            </p>
            <p className="text-neutral-400 uppercase tracking-widest text-[10px] font-bold font-sans">
              YEARS EXPERIENCE
            </p>
          </div>

          <div className="border-r border-neutral-800 last:border-0 pr-2">
            <p className="font-display font-extrabold text-4xl sm:text-5xl text-transparent [-webkit-text-stroke:1.5px_#ffffff] leading-none mb-1">
              26
            </p>
            <p className="text-neutral-400 uppercase tracking-widest text-[10px] font-bold font-sans">
              MASTER STYLISTS
            </p>
          </div>

          <div className="border-r border-neutral-800 last:border-0 pr-2">
            <p className="font-display font-extrabold text-4xl sm:text-5xl text-transparent [-webkit-text-stroke:1.5px_#ffffff] leading-none mb-1">
              720+
            </p>
            <p className="text-neutral-400 uppercase tracking-widest text-[10px] font-bold font-sans">
              5-STAR REVIEWS
            </p>
          </div>

          <div>
            <p className="font-display font-extrabold text-4xl sm:text-5xl text-white leading-none mb-1">
              3,800
            </p>
            <p className="text-neutral-400 uppercase tracking-widest text-[10px] font-bold font-sans">
              SF SALON & SPA
            </p>
          </div>

        </div>
      </div>

    </section>
  );
};
