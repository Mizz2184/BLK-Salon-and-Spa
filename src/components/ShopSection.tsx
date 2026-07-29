import React, { useState } from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/salonData';
import { ProductItem } from '../types';

export const ShopSection: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState<string>('All');
  const [cartItems, setCartItems] = useState<string[]>([]);
  const [addedNotice, setAddedNotice] = useState<string | null>(null);

  const brands = ['All', 'Kevin Murphy', 'Wella', 'Pulp Riot', 'Briogeo'];

  const filteredProducts = PRODUCTS.filter(
    (p) => selectedBrand === 'All' || p.brand === selectedBrand
  );

  const handleAddToCart = (product: ProductItem) => {
    setCartItems((prev) => [...prev, product.id]);
    setAddedNotice(product.name);
    setTimeout(() => setAddedNotice(null), 2500);
  };

  return (
    <section id="shop" className="py-24 bg-white text-black relative border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-8 border-b border-neutral-200">
          <div>
            <span className="text-xs uppercase tracking-[0.35em] font-extrabold text-neutral-500 block mb-2 font-sans">
              CLEAN BEAUTY & HAIR INTEGRITY
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-black">
              OFFICIAL PRODUCT SHOP
            </h2>
          </div>

          <div className="mt-6 md:mt-0 flex items-center gap-2 overflow-x-auto pb-1">
            <span className="text-xs text-neutral-500 font-bold uppercase tracking-wider font-sans shrink-0 mr-2">BRAND:</span>
            {brands.map((b) => (
              <button
                key={b}
                onClick={() => setSelectedBrand(b)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition ${
                  selectedBrand === b
                    ? 'bg-black text-white shadow-md'
                    : 'bg-[#F5F5F5] text-black hover:bg-neutral-200 border border-neutral-200'
                }`}
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        {addedNotice && (
          <div className="mb-8 p-4 bg-black text-white text-xs font-bold uppercase tracking-wider flex items-center justify-between">
            <span>ADDED "{addedNotice.toUpperCase()}" TO YOUR BAG!</span>
            <span className="text-neutral-400 text-[10px]">TOTAL ITEMS: {cartItems.length}</span>
          </div>
        )}

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#F5F5F5] border border-neutral-200 rounded-none overflow-hidden flex flex-col justify-between hover:border-black transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden bg-neutral-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-black text-white text-[9px] font-bold uppercase px-3 py-1 rounded-full">
                  {product.brand}
                </span>
                <span className="absolute bottom-3 right-3 bg-white text-black font-display text-xs font-extrabold uppercase px-3 py-1 rounded-full border border-neutral-200">
                  ${product.price}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider block mb-1 font-sans">
                    {product.category}
                  </span>
                  <h3 className="font-display text-lg font-extrabold uppercase text-black mb-2 leading-snug">
                    {product.name}
                  </h3>
                  <p className="text-neutral-600 text-xs leading-relaxed font-sans mb-4">
                    {product.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {product.benefits.map((b) => (
                      <span key={b} className="text-[9px] text-black bg-white px-2 py-0.5 rounded-none border border-neutral-200 font-sans font-semibold uppercase">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-200 flex items-center justify-between">
                  <span className="font-display font-extrabold text-xl text-black">${product.price}</span>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="px-4 py-2 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition flex items-center gap-1.5"
                  >
                    ADD TO BAG <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
