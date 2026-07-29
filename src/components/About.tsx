import React, { useState } from 'react';
import { Scissors, Droplets, Sparkles, ChevronLeft, ChevronRight, Award, Trophy, Star, Medal, Crown } from 'lucide-react';
import { AWARDS } from '../data/salonData';

export const About: React.FC = () => {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);

  const testimonials = [
    {
      quote: "BLK. TRANSFORMED MY HAIR COMPLETELY. THE ATMOSPHERE, ATTENTION TO DETAIL, AND EXPERT STYLISTS ARE UNMATCHED IN SOUTH JERSEY.",
      name: "SARAH JENNINGS",
      role: "CLIENT OF 4+ YEARS"
    },
    {
      quote: "BEST BALAYAGE & EXTENSIONS EXPERIENCES I'VE EVER HAD! ALLI AND HER TEAM ARE ABSOLUTE MASTERS AT HAIR INTEGRITY.",
      name: "MICHELLE ROSS",
      role: "WASHINGTON TWP RESIDENT"
    },
    {
      quote: "THE HIMALAYAN SALT ROOM AND SCALP FACIAL WAS PURE BLISS. I WOULD RECOMMEND BLK. SALON & SPA TO EVERYONE!",
      name: "AMANDA D'AMICO",
      role: "BRIDAL CLIENT"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="about" className="py-24 bg-black text-white relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-8 border-b border-neutral-800">
          <div>
            <span className="text-xs uppercase tracking-[0.35em] font-extrabold text-neutral-400 block mb-2 font-sans">
              THE BEST STUDIO SINCE 2000
            </span>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight text-white leading-tight">
              WE WILL CHANGE <br className="hidden sm:inline" /> YOUR OUTLOOK
            </h2>
          </div>
          <div className="mt-6 md:mt-0 max-w-md">
            <p className="text-neutral-400 text-sm leading-relaxed font-sans mb-6">
              blk. Salon & Spa is South Jersey's premier beauty destination in Sewell, NJ. Featuring a newly renovated 2,000sf salon and 1,800sf spa center.
            </p>

            {/* Outlined Stat Numerals */}
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-neutral-800">
              <div>
                <p className="font-display font-extrabold text-5xl text-transparent [-webkit-text-stroke:1.5px_#ffffff] leading-none mb-1">
                  24
                </p>
                <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold font-sans">
                  COMBINED YEARS
                </p>
              </div>
              <div>
                <p className="font-display font-extrabold text-5xl text-transparent [-webkit-text-stroke:1.5px_#ffffff] leading-none mb-1">
                  26
                </p>
                <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold font-sans">
                  MASTER STYLISTS
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid & Editorial Imagery */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left 2x2 Feature Cards */}
            <div className="lg:col-span-7">
              <h3 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-white mb-8">
                WHAT WE PROVIDE <br />
                <span className="text-neutral-400">TO OUR CUSTOMERS</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Feature 1 */}
                <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-none flex flex-col items-start hover:border-white transition duration-300">
                  <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center mb-4">
                    <Scissors className="w-5 h-5" />
                  </div>
                  <h4 className="font-display text-lg font-extrabold uppercase text-white mb-2">PRECISION CUTTING</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                    Personalized cuts, long layers, custom shaping, and specialized texturizing designed for your features.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-none flex flex-col items-start hover:border-white transition duration-300">
                  <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center mb-4">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h4 className="font-display text-lg font-extrabold uppercase text-white mb-2">COLOR & EXTENSIONS</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                    Dimensional balayage, babylights, fashion shades, and invisible bead extensions (IBE).
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-none flex flex-col items-start hover:border-white transition duration-300">
                  <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center mb-4">
                    <Droplets className="w-5 h-5" />
                  </div>
                  <h4 className="font-display text-lg font-extrabold uppercase text-white mb-2">SCALP & SPA RITUALS</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                    Exfoliating scalp detox, deep bond repair rituals, keratin blowouts, and aromatherapy washes.
                  </p>
                </div>

                {/* Feature 4 */}
                <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-none flex flex-col items-start hover:border-white transition duration-300">
                  <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center mb-4">
                    <Award className="w-5 h-5" />
                  </div>
                  <h4 className="font-display text-lg font-extrabold uppercase text-white mb-2">SKIN & AESTHETICS</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                    Signature facials, microdermabrasion, chemical peels, eyebrow laminations, and lash lifts.
                  </p>
                </div>

              </div>
            </div>

            {/* Right Editorial Photography */}
            <div className="lg:col-span-5">
              <div className="relative border border-neutral-800 group h-[480px]">
                <img
                  src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1000"
                  alt="Stylist at work"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8">
                  <span className="text-neutral-400 text-xs font-bold uppercase tracking-widest mb-1">HAIR INTEGRITY</span>
                  <p className="font-display text-2xl uppercase font-extrabold text-white">MASTER CRAFTSMANSHIP</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4-Column Photo Gallery Mosaic */}
        <div className="mb-24">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-[0.35em] font-extrabold text-neutral-400 block mb-2 font-sans">
              THE BLK. ATMOSPHERE
            </span>
            <h3 className="font-display text-3xl font-extrabold uppercase text-white">
              GALLERY SHOWCASE
            </h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative border border-neutral-800 h-64 group overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800"
                alt="Salon Work"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                <span className="font-display text-sm uppercase font-extrabold text-white">STYLING SUITES</span>
              </div>
            </div>

            <div className="relative border border-neutral-800 h-64 group overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800"
                alt="Salt Room"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                <span className="font-display text-sm uppercase font-extrabold text-white">SALT SPA</span>
              </div>
            </div>

            <div className="relative border border-neutral-800 h-64 group overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800"
                alt="Color Studio"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                <span className="font-display text-sm uppercase font-extrabold text-white">COLOR BAR</span>
              </div>
            </div>

            <div className="relative border border-neutral-800 h-64 group overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800"
                alt="Bridal Lounge"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                <span className="font-display text-sm uppercase font-extrabold text-white">BRIDAL GLAM LOUNGE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Quote */}
        <div className="mb-24 bg-neutral-900 border border-neutral-800 p-8 sm:p-12">
          <div className="max-w-4xl space-y-6">
            <span className="text-xs uppercase tracking-[0.35em] font-extrabold text-neutral-400 block font-sans">
              HEAR FROM OUR CLIENTS
            </span>

            <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase text-white leading-tight">
              "{testimonials[activeTestimonialIndex].quote}"
            </blockquote>

            <div className="flex items-center justify-between pt-4 border-t border-neutral-800">
              <div>
                <p className="font-display text-lg font-extrabold uppercase text-white">
                  {testimonials[activeTestimonialIndex].name}
                </p>
                <p className="text-xs text-neutral-400 uppercase tracking-wider font-bold font-sans">
                  {testimonials[activeTestimonialIndex].role}
                </p>
              </div>

              {/* Carousel Arrows */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prevTestimonial}
                  aria-label="Previous Testimonial"
                  className="w-10 h-10 rounded-full border border-neutral-700 bg-black text-white hover:bg-white hover:text-black transition flex items-center justify-center cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  aria-label="Next Testimonial"
                  className="w-10 h-10 rounded-full border border-neutral-700 bg-black text-white hover:bg-white hover:text-black transition flex items-center justify-center cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Honors & Awards */}
        <div>
          <div className="text-center mb-8">
            <h3 className="font-display text-xl uppercase font-extrabold tracking-widest text-neutral-300">
              HONORS & INDUSTRY RECOGNITION
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {AWARDS.map((award) => (
              <div
                key={award.id}
                className="bg-neutral-900 border border-neutral-800 p-6 text-center flex flex-col items-center justify-center hover:border-white transition-all duration-300"
              >
                <Award className="w-6 h-6 text-white mb-2" />
                <h4 className="font-display text-sm font-extrabold uppercase text-white mb-1">
                  {award.title}
                </h4>
                <p className="text-[11px] text-neutral-400 font-sans">
                  {award.organization}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
