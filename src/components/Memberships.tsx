import React, { useState } from 'react';
import { CheckCircle2, Shield, Gift, Users, RefreshCw, ArrowRight } from 'lucide-react';
import { MEMBERSHIPS } from '../data/salonData';

interface MembershipsProps {
  onOpenBooking: () => void;
}

export const Memberships: React.FC<MembershipsProps> = ({ onOpenBooking }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section id="memberships" className="py-24 bg-[#F7F2F5] text-black relative border-t border-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.35em] font-extrabold text-neutral-500 block mb-3 font-sans">
            VIP SELF-CARE SAVINGS
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-black mb-4">
            BLK. VIP MEMBERSHIPS
          </h2>
          <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-sans mb-8">
            Experience recurring pampering starting at just $69/month. Enjoy exclusive discounts on retail, add-ons, and transferable spa treatments.
          </p>

          {/* Monthly vs Annual Toggle */}
          <div className="inline-flex items-center p-1.5 rounded-full bg-white border border-neutral-300 shadow-sm">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                billingCycle === 'monthly'
                  ? 'bg-black text-white shadow-md'
                  : 'text-neutral-600 hover:text-black'
              }`}
            >
              MONTHLY BILLING
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 ${
                billingCycle === 'annual'
                  ? 'bg-black text-white shadow-md'
                  : 'text-neutral-600 hover:text-black'
              }`}
            >
              <span>ANNUAL BILLING</span>
              <span className="bg-neutral-200 text-black text-[9px] px-2 py-0.5 rounded-full font-extrabold">SAVE 10%</span>
            </button>
          </div>
        </div>

        {/* Memberships Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {MEMBERSHIPS.map((tier) => {
            const priceDisplay = billingCycle === 'monthly' ? `$${tier.monthlyPrice}` : `$${tier.annualPrice}`;
            const subtext = billingCycle === 'monthly' ? '/MONTH' : '/YEAR (10% SAVINGS)';

            return (
              <div
                key={tier.id}
                className={`bg-white border rounded-none p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  tier.popular
                    ? 'border-black shadow-xl'
                    : 'border-neutral-200 hover:border-black'
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-black text-white text-[9px] font-bold uppercase px-4 py-1 rounded-full tracking-widest shadow-md">
                    MOST POPULAR VIP
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-2xl font-extrabold uppercase text-black">
                      {tier.name}
                    </h3>
                    <span className="text-[10px] uppercase font-bold text-neutral-500 bg-[#F5F5F5] px-2.5 py-1 rounded-full border border-neutral-200">
                      VALUED AT ${tier.value}
                    </span>
                  </div>

                  <div className="mb-6 pb-6 border-b border-neutral-200">
                    <div className="flex items-baseline gap-1">
                      <span className="font-display text-5xl font-extrabold text-black">{priceDisplay}</span>
                      <span className="text-xs text-neutral-500 font-bold uppercase font-sans">{subtext}</span>
                    </div>
                  </div>

                  {/* Monthly Choices */}
                  <div className="mb-6 space-y-2">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-500 block font-sans">
                      INCLUDED MONTHLY CHOICE:
                    </span>
                    {tier.choices.map((choice) => (
                      <p key={choice} className="text-black text-xs leading-relaxed font-sans font-semibold bg-[#F5F5F5] p-3 rounded-none border border-neutral-200">
                        {choice}
                      </p>
                    ))}
                  </div>

                  {/* VIP Perks */}
                  <div className="mb-8 space-y-2">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-500 block font-sans">
                      EXCLUSIVE PERKS:
                    </span>
                    {tier.perks.map((perk) => (
                      <div key={perk} className="flex items-start gap-2 text-xs text-neutral-800 font-semibold font-sans">
                        <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="w-full py-4 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition flex items-center justify-center gap-2 shadow-md"
                >
                  JOIN {tier.name.toUpperCase()} <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            );
          })}
        </div>

        {/* Membership Guarantees & Policy Box */}
        <div className="bg-white border border-neutral-300 rounded-none p-8 sm:p-10">
          <h3 className="font-display text-xl uppercase font-extrabold text-black mb-6 flex items-center gap-2">
            <Shield className="w-5 h-5 text-black" />
            TRANSPARENT MEMBERSHIP GUARANTEES
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-neutral-600 font-sans">
            <div className="flex items-start gap-3">
              <RefreshCw className="w-5 h-5 text-black shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display text-sm font-extrabold uppercase text-black mb-1">UNUSED CREDITS ROLLOVER</h4>
                <p>Unused monthly credits automatically roll over into subsequent months for up to 90 days.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Gift className="w-5 h-5 text-black shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display text-sm font-extrabold uppercase text-black mb-1">TRANSFERABLE TO FRIENDS</h4>
                <p>Gift your monthly credit to a friend or family member at zero additional fee anytime.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-black shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display text-sm font-extrabold uppercase text-black mb-1">CANCEL ANY TIME</h4>
                <p>No long term commitments! Simply provide a 30-day notice to pause or cancel your recurring membership.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
