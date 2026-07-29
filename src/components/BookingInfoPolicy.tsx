import React from 'react';
import { Calendar, Clock, AlertTriangle } from 'lucide-react';
import { SALON_FAQS } from '../data/salonData';

interface BookingInfoPolicyProps {
  onOpenBooking: () => void;
}

export const BookingInfoPolicy: React.FC<BookingInfoPolicyProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-24 bg-[#F5F5F5] text-black relative border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Policy & Booking Info 2-Column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Booking Info Box */}
          <div className="bg-white border border-neutral-200 rounded-none p-8 sm:p-10 space-y-4">
            <div className="flex items-center gap-2 text-neutral-500 text-xs font-bold uppercase tracking-widest font-sans">
              <Calendar className="w-4 h-4 text-black" />
              APPOINTMENT GUIDELINES
            </div>
            <h3 className="font-display text-2xl uppercase font-extrabold text-black">
              BOOKING INFORMATION
            </h3>
            <div className="text-neutral-600 text-xs sm:text-sm leading-relaxed space-y-3 font-sans">
              <p>
                Appointments can be requested online, by phone, or social channels. Online booking requests will be reviewed and confirmed by your stylist.
              </p>
              <p>
                During booking, you will answer a few brief questions about your hair history to determine time and technical requirements. A complimentary consultation may be requested before major color services.
              </p>
              <div className="p-3 bg-[#F5F5F5] border border-neutral-300 text-black text-xs font-bold uppercase tracking-wide flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-black shrink-0" />
                <span>ALL COLOR CORRECTIONS REQUIRE A MANDATORY IN-SALON CONSULTATION!</span>
              </div>
            </div>
          </div>

          {/* Cancellation Policy Box */}
          <div className="bg-white border border-neutral-200 rounded-none p-8 sm:p-10 space-y-4">
            <div className="flex items-center gap-2 text-neutral-500 text-xs font-bold uppercase tracking-widest font-sans">
              <Clock className="w-4 h-4 text-black" />
              CANCELLATION & DEPOSIT TERMS
            </div>
            <h3 className="font-display text-2xl uppercase font-extrabold text-black">
              CANCELLATION POLICY
            </h3>
            <div className="text-neutral-600 text-xs sm:text-sm leading-relaxed space-y-3 font-sans">
              <p>
                Out of respect for our team and waitlisted clients, we require a minimum of <strong className="text-black">24 business hours (48 calendar hours)</strong> for cancellations or rescheduling.
              </p>
              <p className="p-3 bg-[#F5F5F5] border border-neutral-200 text-xs text-black font-semibold">
                EXAMPLE: If your appointment is Friday, please contact us before closing on Wednesday!
              </p>
              <p>
                Color service deposits start at <strong className="text-black">$50+</strong> and apply towards your final total service balance.
              </p>
            </div>
          </div>

        </div>

        {/* FAQs Accordion Grid */}
        <div className="bg-white border border-neutral-200 rounded-none p-8 sm:p-10">
          <h3 className="font-display text-3xl uppercase font-extrabold text-black mb-8">
            FREQUENTLY ASKED QUESTIONS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SALON_FAQS.map((faq) => (
              <div key={faq.q} className="bg-[#F5F5F5] p-6 border border-neutral-200 space-y-2">
                <h4 className="font-display text-base font-extrabold uppercase text-black">
                  {faq.q}
                </h4>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-sans">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
