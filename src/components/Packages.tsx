import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { PACKAGES } from '../data/salonData';

interface PackagesProps {
  onOpenBooking: (category?: string, serviceId?: string, packageId?: string) => void;
}

export const Packages: React.FC<PackagesProps> = ({ onOpenBooking }) => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Signature' | 'Bridal' | 'Wellness'>('All');

  const filteredPackages = PACKAGES.filter((pkg) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Signature') return pkg.name.toLowerCase().includes('treat') || pkg.name.toLowerCase().includes('pampered');
    if (selectedFilter === 'Bridal') return pkg.name.toLowerCase().includes('both') || pkg.popular;
    if (selectedFilter === 'Wellness') return pkg.name.toLowerCase().includes('works');
    return true;
  });

  return (
    <section id="packages" className="py-24 bg-[#F7F2F5] text-black relative border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-neutral-300">
          <div>
            <span className="text-xs uppercase tracking-[0.35em] font-extrabold text-neutral-500 block mb-2 font-sans">
              ALL-INCLUSIVE PAMPERING
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-black">
              HAIR PRICES & SPA PACKAGES
            </h2>
          </div>

          <div className="mt-6 md:mt-0 flex items-center gap-2 overflow-x-auto pb-2">
            {(['All', 'Signature', 'Bridal', 'Wellness'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition ${
                  selectedFilter === filter
                    ? 'bg-black text-white shadow-md'
                    : 'bg-white text-black hover:bg-neutral-200 border border-neutral-300'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`bg-white border rounded-none p-8 flex flex-col justify-between transition-all duration-300 group relative ${
                pkg.popular
                  ? 'border-black shadow-xl'
                  : 'border-neutral-200 hover:border-black'
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3.5 left-8 bg-black text-white text-[9px] font-bold uppercase px-3 py-1 rounded-full tracking-widest flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-white" /> MOST POPULAR PACKAGE
                </span>
              )}

              <div>
                <div className="flex items-center justify-between mb-2 font-sans">
                  <span className="text-[10px] uppercase font-extrabold tracking-widest text-neutral-500">
                    SPA & PAMPERING
                  </span>
                  <span className="text-xs font-bold text-black uppercase">
                    {pkg.duration}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-extrabold uppercase text-black mb-3">
                  {pkg.name}
                </h3>

                <div className="mb-6 pb-6 border-b border-neutral-200 flex items-baseline gap-2">
                  <span className="font-display text-4xl font-extrabold text-black">${pkg.price}</span>
                  <span className="text-xs text-neutral-500 font-bold uppercase font-sans">ALL-INCLUSIVE</span>
                </div>

                <p className="text-neutral-600 text-xs leading-relaxed font-sans mb-6">
                  {pkg.description}
                </p>

                {/* Dotted List Features */}
                <div className="space-y-3 mb-8">
                  {pkg.features.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-xs text-neutral-800 font-semibold font-sans pb-2 border-b border-dashed border-neutral-200">
                      <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenBooking('Packages', undefined, pkg.id)}
                className="w-full py-4 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition flex items-center justify-center gap-2 shadow-md"
              >
                RESERVE PACKAGE <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
