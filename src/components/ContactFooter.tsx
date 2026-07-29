import React, { useState } from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ContactFooterProps {
  onOpenBooking: () => void;
  onOpenGiftCard: () => void;
  onOpenBridal: () => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({
  onOpenBooking,
  onOpenGiftCard,
  onOpenBridal
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <footer id="contact" className="bg-black text-white pt-20 pb-12 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Massive "CONTACT US →" Heading from HAIRY Style Guide */}
        <div className="mb-16 pb-12 border-b border-neutral-800">
          <button
            onClick={onOpenBooking}
            className="group flex items-center gap-4 text-left cursor-pointer"
          >
            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold uppercase tracking-tight text-white group-hover:text-neutral-300 transition-colors leading-none">
              CONTACT US
            </h2>
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all shrink-0">
              <ArrowRight className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
          </button>
        </div>

        {/* 4 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-neutral-800 font-sans">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#" className="inline-block">
              <span className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
                blk.
              </span>
              <span className="text-[10px] tracking-[0.4em] text-neutral-400 font-sans uppercase block font-bold">
                SALON & SPA
              </span>
            </a>

            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-sans">
              South Jersey's premier 5-star hair salon and luxury spa in Sewell, NJ. Precision cutting, balayage, extensions, facials, and Himalayan salt therapies.
            </p>

            {/* Circular Icon Social Buttons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-black border border-neutral-800 flex items-center justify-center text-white hover:bg-white hover:text-black transition"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-black border border-neutral-800 flex items-center justify-center text-white hover:bg-white hover:text-black transition"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-black border border-neutral-800 flex items-center justify-center text-xs font-bold text-white hover:bg-white hover:text-black transition"
                aria-label="TikTok"
              >
                TT
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display text-base uppercase tracking-widest font-extrabold text-white">
              PAGES
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-300 uppercase font-semibold tracking-wider font-sans">
              <li><a href="#about" className="hover:text-white transition">ABOUT US</a></li>
              <li><a href="#services" className="hover:text-white transition">SALON MENU</a></li>
              <li><a href="#services" className="hover:text-white transition">SPA MENU</a></li>
              <li><a href="#packages" className="hover:text-white transition">PACKAGES</a></li>
              <li><a href="#memberships" className="hover:text-white transition">MEMBERSHIPS</a></li>
              <li><a href="#shop" className="hover:text-white transition">PRODUCT SHOP</a></li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display text-base uppercase tracking-widest font-extrabold text-white">
              LOCATION
            </h4>
            
            <div className="space-y-3 text-xs text-neutral-300 font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>
                  MANTUA / SEWELL BORDER <br />
                  SEWELL, NJ 08080 <br />
                  <span className="text-neutral-500 text-[10px] uppercase block mt-1">(10 MINS FROM WASHINGTON TWP, DEPTFORD & GLASSBORO)</span>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-white shrink-0" />
                <a href="tel:8565550199" className="hover:text-white transition">(856) 555-0199</a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-white shrink-0" />
                <a href="mailto:ali@salonblk.com" className="hover:text-white transition">ALI@SALONBLK.COM</a>
              </div>
            </div>
          </div>

          {/* Newsletter Signup with Circular Arrow Submit */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display text-base uppercase tracking-widest font-extrabold text-white">
              NEWSLETTER
            </h4>
            <p className="text-neutral-400 text-xs leading-relaxed font-sans">
              Subscribe for exclusive updates, flash sales, and seasonal makeover specials.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative flex items-center">
                <input
                  type="email"
                  required
                  placeholder="ENTER YOUR EMAIL..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-full pl-4 pr-12 py-3 text-xs text-white uppercase placeholder-neutral-500 focus:outline-none focus:border-white font-sans"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1 w-9 h-9 rounded-full bg-white text-black hover:bg-neutral-200 transition flex items-center justify-center cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              {subscribed && (
                <p className="text-neutral-300 text-xs flex items-center gap-1 font-sans">
                  <CheckCircle2 className="w-3.5 h-3.5 text-white" /> THANK YOU FOR SUBSCRIBING!
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Copyright & Footer Links */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500 gap-4 font-sans uppercase">
          <p>© {new Date().getFullYear()} BLK. SALON & SPA. ALL RIGHTS RESERVED. SEWELL, NJ.</p>
          
          <div className="flex items-center space-x-4 font-bold text-[11px] tracking-wider">
            <button
              onClick={onOpenBridal}
              className="hover:text-white transition"
            >
              BRIDAL
            </button>
            <span>•</span>
            <button
              onClick={onOpenGiftCard}
              className="hover:text-white transition"
            >
              GIFT CARDS
            </button>
            <span>•</span>
            <button
              onClick={onOpenBooking}
              className="text-white hover:text-neutral-300 transition"
            >
              BOOK NOW →
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
