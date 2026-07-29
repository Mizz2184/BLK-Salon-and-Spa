import React from 'react';
import { Leaf, Sparkles, Gem, Droplets, ShieldCheck, ArrowRight } from 'lucide-react';
import { LUXURY_ROOMS } from '../data/salonData';

interface LuxuryRoomsProps {
  onOpenBooking: (category?: string) => void;
}

export const LuxuryRooms: React.FC<LuxuryRoomsProps> = ({ onOpenBooking }) => {
  const getRoomIcon = (iconName: string) => {
    switch (iconName) {
      case 'Leaf': return <Leaf className="w-5 h-5 text-black" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-black" />;
      case 'Gem': return <Gem className="w-5 h-5 text-black" />;
      default: return <Droplets className="w-5 h-5 text-black" />;
    }
  };

  return (
    <section id="rooms" className="py-24 bg-[#F5F5F5] text-black relative border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-neutral-200">
          <div>
            <span className="text-xs uppercase tracking-[0.35em] font-extrabold text-neutral-500 block mb-2 font-sans">
              1,800 SF SPA & WELLNESS CENTER
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-black">
              LUXURY THERAPEUTIC ROOMS
            </h2>
          </div>
          <p className="mt-4 md:mt-0 max-w-md text-neutral-600 text-xs sm:text-sm font-sans">
            Sensory sanctuaries built to restore your mind, balance your energy, and detoxify your body in absolute privacy.
          </p>
        </div>

        {/* 3 Luxury Rooms Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {LUXURY_ROOMS.map((room) => (
            <div
              key={room.id}
              className="bg-white border border-neutral-200 rounded-none overflow-hidden flex flex-col justify-between hover:border-black transition-all duration-300 group"
            >
              {/* Image Header */}
              <div className="relative h-64 overflow-hidden bg-neutral-100">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.9]"
                />
                <div className="absolute top-4 left-4 p-3 bg-white border border-neutral-200 shadow-sm">
                  {getRoomIcon(room.iconName)}
                </div>
              </div>

              {/* Room Details */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl font-extrabold uppercase text-black mb-1">
                    {room.name}
                  </h3>
                  <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest block mb-4 font-sans">
                    {room.subtitle}
                  </span>

                  <p className="text-neutral-600 text-xs leading-relaxed mb-6 font-sans">
                    {room.description}
                  </p>

                  <div className="space-y-2 mb-8">
                    {room.highlights.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-neutral-800 font-semibold font-sans">
                        <ShieldCheck className="w-4 h-4 text-black shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onOpenBooking('Facials')}
                  className="w-full py-3.5 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition flex items-center justify-center gap-2 shadow-sm"
                >
                  RESERVE EXPERIENCE <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
