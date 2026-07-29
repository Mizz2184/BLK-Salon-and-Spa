import React, { useState } from 'react';
import { Search, ArrowRight, Info, Sparkles, Filter } from 'lucide-react';
import { SALON_SERVICES, FACIAL_ADDONS } from '../data/salonData';

interface ServicesMenuProps {
  onOpenBooking: (category?: string, serviceId?: string) => void;
  onOpenBridal: () => void;
}

export const ServicesMenu: React.FC<ServicesMenuProps> = ({
  onOpenBooking,
  onOpenBridal
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'ALL',
    'STYLING',
    'COLOR',
    'TREATMENTS',
    'EXTENSIONS',
    'LASH & BROW',
    'FACIALS',
    'WAXING'
  ];

  // Map category button names to data categories
  const getCategoryMatch = (catName: string, serviceCat: string) => {
    if (catName === 'ALL') return true;
    return serviceCat.toUpperCase() === catName;
  };

  const filteredServices = SALON_SERVICES.filter((service) => {
    const matchesCategory = getCategoryMatch(activeCategory, service.category);
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="py-20 bg-white text-black relative border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-8 border-b border-neutral-200">
          <div>
            <span className="text-xs uppercase tracking-[0.35em] font-extrabold text-neutral-500 block mb-2 font-sans">
              PRECISION CRAFTSMANSHIP & BEAUTY
            </span>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight text-black leading-tight">
              SERVICES MENU
            </h2>
          </div>

          <div className="mt-6 md:mt-0 flex items-center gap-3">
            <button
              onClick={() => { setActiveCategory('ALL'); setSearchQuery(''); }}
              className="px-6 py-2.5 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition shadow-sm flex items-center gap-2 font-sans"
            >
              VIEW ALL SERVICES <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onOpenBridal}
              className="px-6 py-2.5 rounded-full border border-neutral-300 text-black text-xs font-bold uppercase tracking-wider hover:bg-black hover:text-white transition flex items-center gap-2 font-sans"
            >
              BRIDAL SERVICES <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Filter Tabs & Search Bar Row (Matches Screenshot) */}
        <div className="flex flex-col lg:flex-row gap-6 items-stretch lg:items-center justify-between mb-10">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 lg:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all duration-200 font-sans ${
                  activeCategory === cat
                    ? 'bg-black text-white shadow-md'
                    : 'bg-[#F5F5F5] text-black hover:bg-neutral-200 border border-neutral-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-72 shrink-0">
            <Search className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="SEARCH SERVICES..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#F5F5F5] border border-neutral-200 rounded-full pl-11 pr-4 py-2.5 text-xs text-black uppercase tracking-wider placeholder-neutral-400 focus:outline-none focus:border-black focus:bg-white transition font-sans font-semibold"
            />
          </div>

        </div>

        {/* Services Cards Grid (Matches Screenshot 3x3 Cards) */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-[#F5F5F5] border border-neutral-200/80 rounded-none p-7 flex flex-col justify-between hover:border-black transition-all duration-300 group relative"
              >
                {/* Category Header & Popular Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] uppercase font-extrabold tracking-widest text-neutral-500 font-sans">
                    {service.category}
                  </span>
                  {service.popular && (
                    <span className="bg-black text-white text-[9px] font-extrabold uppercase px-3 py-1 rounded-full tracking-widest font-sans">
                      POPULAR
                    </span>
                  )}
                </div>

                {/* Title, Price & Description */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-baseline justify-between gap-2 mb-2">
                      <h3 className="font-display text-2xl font-black uppercase text-black tracking-tight leading-tight group-hover:text-neutral-700 transition-colors">
                        {service.name}
                      </h3>
                      <span className="font-display font-black text-2xl text-black shrink-0">
                        {service.price}
                      </span>
                    </div>

                    {service.description && (
                      <p className="text-neutral-600 text-xs sm:text-[13px] leading-relaxed font-sans font-normal mb-6">
                        {service.description}
                      </p>
                    )}

                    {service.notes && (
                      <div className="mb-6 text-[11px] text-neutral-800 bg-white border border-neutral-200 p-3 rounded-none flex items-start gap-2 font-sans font-medium">
                        <Info className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
                        <span>{service.notes}</span>
                      </div>
                    )}
                  </div>

                  {/* Bottom Action Row */}
                  <div className="pt-4 border-t border-neutral-200/80 flex items-center justify-between mt-auto">
                    <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-extrabold font-sans">
                      STARTING PRICE
                    </span>
                    <button
                      onClick={() => onOpenBooking(service.category, service.id)}
                      className="px-5 py-2 rounded-full bg-black text-white text-xs font-extrabold uppercase tracking-wider hover:bg-neutral-800 transition flex items-center gap-1.5 shadow-sm font-sans"
                    >
                      BOOK <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="bg-[#F5F5F5] border border-neutral-200 p-12 text-center my-12">
            <p className="text-neutral-500 font-display font-extrabold text-xl uppercase mb-2">
              NO SERVICES MATCHED "{searchQuery.toUpperCase()}"
            </p>
            <p className="text-neutral-400 text-xs font-sans uppercase mb-6">
              Try adjusting your category filter or search keywords.
            </p>
            <button
              onClick={() => { setActiveCategory('ALL'); setSearchQuery(''); }}
              className="px-6 py-2.5 rounded-full bg-black text-white text-xs font-extrabold uppercase tracking-wider hover:bg-neutral-800 transition"
            >
              CLEAR FILTERS
            </button>
          </div>
        )}

        {/* Facial Add-ons Box */}
        {(activeCategory === 'ALL' || activeCategory === 'FACIALS') && (
          <div className="bg-[#F5F5F5] border border-neutral-200 rounded-none p-8 sm:p-10 mb-16">
            <span className="text-neutral-500 text-xs font-extrabold uppercase tracking-widest block mb-2 font-sans">
              SKINCARE ENHANCEMENTS
            </span>
            <h3 className="font-display text-3xl sm:text-4xl uppercase font-black text-black mb-4">
              CUSTOM FACIAL ADD-ONS
            </h3>
            <p className="text-neutral-600 text-xs sm:text-sm mb-6 max-w-2xl font-sans">
              Elevate any facial or spa service with our specialized therapeutic add-on treatments:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {FACIAL_ADDONS.map((addon) => (
                <div
                  key={addon.name}
                  className="bg-white border border-neutral-200 rounded-none p-4 flex items-center justify-between text-xs font-sans"
                >
                  <span className="text-black font-extrabold uppercase">{addon.name}</span>
                  <span className="text-black font-black font-display text-sm">{addon.price}</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
