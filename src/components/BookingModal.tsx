import React, { useState, useEffect } from 'react';
import { X, Calendar, CheckCircle2, ChevronRight, ChevronLeft, Info, ArrowRight } from 'lucide-react';
import { SALON_SERVICES, PACKAGES } from '../data/salonData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
  initialServiceId?: string;
  initialPackageId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialCategory,
  initialServiceId,
  initialPackageId
}) => {
  const [step, setStep] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>('Styling');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('');
  const [selectedStylist, setSelectedStylist] = useState<string>('Any Available Senior Stylist');
  const [hairLength, setHairLength] = useState<string>('Medium (Shoulder Length)');
  const [hairHistory, setHairHistory] = useState<string>('');
  const [bookingDate, setBookingDate] = useState<string>('');
  const [bookingTime, setBookingTime] = useState<string>('10:00 AM');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (initialCategory) setSelectedCategory(initialCategory);
    if (initialServiceId) setSelectedServiceId(initialServiceId);
  }, [initialCategory, initialServiceId]);

  if (!isOpen) return null;

  const stylists = [
    'Any Available Senior Stylist',
    'Alli Wray (Master Colorist & Founder)',
    'Senior Balayage & Extension Specialist',
    'Spa & Skincare Esthetician'
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:30 AM', '01:00 PM', '02:30 PM', '04:00 PM', '05:30 PM'
  ];

  const selectedService = SALON_SERVICES.find((s) => s.id === selectedServiceId);
  const selectedPackage = PACKAGES.find((p) => p.id === initialPackageId);

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-black border border-neutral-800 rounded-none w-full max-w-2xl overflow-hidden shadow-2xl relative text-white flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-6 border-b border-neutral-800 flex items-center justify-between bg-black">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-extrabold block">
              BLK. ONLINE BOOKING
            </span>
            <h3 className="font-display text-2xl font-extrabold uppercase text-white">
              {submitted ? 'APPOINTMENT REQUESTED!' : 'SCHEDULE YOUR VISIT'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-neutral-900 border border-neutral-800 text-white hover:bg-white hover:text-black transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 font-sans">
          
          {submitted ? (
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center mx-auto border border-white">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h4 className="font-display text-2xl font-extrabold uppercase text-white">
                  THANK YOU, {clientName.toUpperCase()}!
                </h4>
                <p className="text-neutral-300 text-xs sm:text-sm max-w-md mx-auto leading-relaxed font-sans">
                  Your appointment request has been submitted to our team at blk. Sewell. Your stylist will review your request and confirm your time slot shortly.
                </p>
              </div>

              <div className="bg-neutral-900 border border-neutral-800 p-6 max-w-md mx-auto text-left text-xs space-y-2 font-sans">
                <div className="flex justify-between border-b border-neutral-800 pb-2">
                  <span className="text-neutral-400 font-bold uppercase">SERVICE REQUESTED:</span>
                  <span className="font-bold text-white uppercase">
                    {selectedPackage ? selectedPackage.name : selectedService ? selectedService.name : selectedCategory}
                  </span>
                </div>
                <div className="flex justify-between border-b border-neutral-800 pb-2">
                  <span className="text-neutral-400 font-bold uppercase">DATE & TIME:</span>
                  <span className="font-bold text-white uppercase">{bookingDate || 'UPCOMING DATE'} AT {bookingTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400 font-bold uppercase">LOCATION:</span>
                  <span className="text-white uppercase">SEWELL, NJ (MANTUA SIDE)</span>
                </div>
              </div>

              <div className="p-4 bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs text-left flex items-start gap-2 font-sans">
                <Info className="w-4 h-4 shrink-0 mt-0.5 text-white" />
                <span>
                  Color services require 24-48 business hours notice for changes. We look forward to pampering you!
                </span>
              </div>

              <button
                onClick={handleReset}
                className="px-8 py-3.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition"
              >
                DONE <ArrowRight className="inline w-4 h-4 ml-1" />
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmitBooking} className="space-y-6">
              
              {/* Step Progress */}
              <div className="flex items-center justify-between text-xs text-neutral-400 pb-4 border-b border-neutral-800 font-sans uppercase font-bold">
                <span className={step >= 1 ? 'text-white' : ''}>1. SERVICE</span>
                <ChevronRight className="w-4 h-4" />
                <span className={step >= 2 ? 'text-white' : ''}>2. HAIR & STYLIST</span>
                <ChevronRight className="w-4 h-4" />
                <span className={step >= 3 ? 'text-white' : ''}>3. DATE & CONTACT</span>
              </div>

              {/* STEP 1: Select Service */}
              {step === 1 && (
                <div className="space-y-4">
                  <label className="text-xs font-extrabold uppercase tracking-wider text-white block font-sans">
                    SELECT CATEGORY & SERVICE
                  </label>

                  <div className="flex items-center gap-2 overflow-x-auto pb-2">
                    {['Styling', 'Color', 'Treatments', 'Extensions', 'Lash & Brow', 'Facials', 'Waxing'].map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2 rounded-full text-xs font-bold uppercase whitespace-nowrap ${
                          selectedCategory === cat ? 'bg-white text-black' : 'bg-neutral-900 text-neutral-400 border border-neutral-800'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-60 overflow-y-auto pr-1">
                    {SALON_SERVICES.filter((s) => s.category === selectedCategory).map((service) => (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => setSelectedServiceId(service.id)}
                        className={`p-3.5 border text-left flex flex-col justify-between transition ${
                          selectedServiceId === service.id
                            ? 'bg-neutral-900 border-white text-white'
                            : 'bg-black border-neutral-800 text-neutral-300 hover:border-neutral-700'
                        }`}
                      >
                        <div className="flex justify-between items-start gap-1">
                          <span className="font-display font-bold text-sm uppercase">{service.name}</span>
                          <span className="font-extrabold text-white text-xs">{service.price}</span>
                        </div>
                        {service.description && (
                          <p className="text-[11px] text-neutral-400 line-clamp-2 mt-1">{service.description}</p>
                        )}
                      </button>
                    ))}
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-6 py-3 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition flex items-center gap-1"
                    >
                      NEXT: HAIR DETAILS <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Stylist & Hair Details */}
              {step === 2 && (
                <div className="space-y-4 font-sans">
                  <div>
                    <label className="text-xs font-extrabold uppercase tracking-wider text-white block mb-2">
                      STYLIST PREFERENCE
                    </label>
                    <select
                      value={selectedStylist}
                      onChange={(e) => setSelectedStylist(e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-none px-4 py-3 text-xs text-white focus:outline-none focus:border-white uppercase"
                    >
                      {stylists.map((st) => (
                        <option key={st} value={st}>{st.toUpperCase()}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-extrabold uppercase tracking-wider text-white block mb-2">
                      HAIR LENGTH / DENSITY
                    </label>
                    <select
                      value={hairLength}
                      onChange={(e) => setHairLength(e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-none px-4 py-3 text-xs text-white focus:outline-none focus:border-white uppercase"
                    >
                      <option>SHORT (PIXIE / ABOVE SHOULDERS)</option>
                      <option>MEDIUM (SHOULDER LENGTH)</option>
                      <option>LONG (MID-BACK)</option>
                      <option>EXTRA LONG / THICK DENSITY</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-extrabold uppercase tracking-wider text-white block mb-2">
                      HAIR HISTORY / DESIRED LOOK NOTES
                    </label>
                    <textarea
                      rows={3}
                      value={hairHistory}
                      onChange={(e) => setHairHistory(e.target.value)}
                      placeholder="MENTION BOX DYE HISTORY, PREVIOUS CHEMICAL TREATMENTS, EXTENSIONS OR DESIRED OUTCOME..."
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-none p-3 text-xs text-white placeholder-neutral-500 uppercase focus:outline-none focus:border-white"
                    />
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-6 py-3 rounded-full border border-neutral-700 text-neutral-300 font-bold text-xs uppercase tracking-wider hover:bg-neutral-800 transition flex items-center gap-1"
                    >
                      <ChevronLeft className="w-4 h-4" /> BACK
                    </button>

                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-6 py-3 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition flex items-center gap-1"
                    >
                      NEXT: DATE & TIME <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Date, Time & Contact */}
              {step === 3 && (
                <div className="space-y-4 font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-extrabold uppercase tracking-wider text-white block mb-2">
                        PREFERRED DATE
                      </label>
                      <input
                        type="date"
                        required
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-none px-4 py-3 text-xs text-white focus:outline-none focus:border-white"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-extrabold uppercase tracking-wider text-white block mb-2">
                        PREFERRED TIME SLOT
                      </label>
                      <select
                        value={bookingTime}
                        onChange={(e) => setBookingTime(e.target.value)}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-none px-4 py-3 text-xs text-white focus:outline-none focus:border-white"
                      >
                        {timeSlots.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <label className="text-xs font-extrabold uppercase tracking-wider text-white block">
                      CLIENT DETAILS
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="FULL NAME *"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-none px-4 py-3 text-xs text-white uppercase placeholder-neutral-500 focus:outline-none focus:border-white"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="tel"
                        required
                        placeholder="PHONE NUMBER *"
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-none px-4 py-3 text-xs text-white uppercase placeholder-neutral-500 focus:outline-none focus:border-white"
                      />
                      <input
                        type="email"
                        required
                        placeholder="EMAIL ADDRESS *"
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-none px-4 py-3 text-xs text-white uppercase placeholder-neutral-500 focus:outline-none focus:border-white"
                      />
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-6 py-3 rounded-full border border-neutral-700 text-neutral-300 font-bold text-xs uppercase tracking-wider hover:bg-neutral-800 transition flex items-center gap-1"
                    >
                      <ChevronLeft className="w-4 h-4" /> BACK
                    </button>

                    <button
                      type="submit"
                      className="px-8 py-3.5 rounded-full bg-white text-black font-extrabold text-xs uppercase tracking-wider hover:bg-neutral-200 transition flex items-center gap-2 shadow-lg"
                    >
                      <Calendar className="w-4 h-4" /> REQUEST APPOINTMENT
                    </button>
                  </div>
                </div>
              )}

            </form>
          )}

        </div>

      </div>
    </div>
  );
};
