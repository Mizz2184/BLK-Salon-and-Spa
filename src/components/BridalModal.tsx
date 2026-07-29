import React, { useState } from 'react';
import { X, Heart, CheckCircle2, ArrowRight } from 'lucide-react';

interface BridalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BridalModal: React.FC<BridalModalProps> = ({ isOpen, onClose }) => {
  const [brideName, setBrideName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [weddingDate, setWeddingDate] = useState('');
  const [partyCount, setPartyCount] = useState('4-6 People');
  const [venueLocation, setVenueLocation] = useState('');
  const [serviceTypes, setServiceTypes] = useState<string[]>(['Formal Hair Updo', 'Glam Makeup']);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleService = (type: string) => {
    if (serviceTypes.includes(type)) {
      setServiceTypes(serviceTypes.filter((t) => t !== type));
    } else {
      setServiceTypes([...serviceTypes, type]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in font-sans">
      <div className="bg-black border border-neutral-800 rounded-none w-full max-w-2xl overflow-hidden shadow-2xl relative text-white flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-6 border-b border-neutral-800 flex items-center justify-between bg-black">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-white fill-white" />
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-extrabold block">
                YOUR BIG DAY GLAMOUR
              </span>
              <h3 className="font-display text-2xl font-extrabold uppercase text-white">
                WEDDINGS & BRIDAL CONSULTATION
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-neutral-900 border border-neutral-800 text-white hover:bg-white hover:text-black transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 font-sans">
          
          {submitted ? (
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center mx-auto border border-white">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h4 className="font-display text-2xl font-extrabold uppercase text-white">
                  BRIDAL INQUIRY RECEIVED!
                </h4>
                <p className="text-neutral-300 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                  Congratulations on your upcoming wedding, {brideName.toUpperCase()}! Our bridal coordinator will review your details and send a custom trial & package proposal shortly.
                </p>
              </div>

              <button
                onClick={() => { setSubmitted(false); onClose(); }}
                className="px-8 py-3.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition"
              >
                DONE <ArrowRight className="inline w-4 h-4 ml-1" />
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <p className="text-xs text-neutral-300 leading-relaxed bg-neutral-900 p-4 border border-neutral-800 uppercase font-semibold">
                blk. Salon & Spa offers both <strong className="text-white">IN-SALON VIP BRIDAL SUITES</strong> and <strong className="text-white">ON-LOCATION SOUTH JERSEY WEDDING STYLING</strong> for brides and bridal parties!
              </p>

              <div className="space-y-3">
                <label className="text-xs font-extrabold uppercase tracking-wider text-white block">
                  1. BRIDE & CONTACT DETAILS
                </label>
                <input
                  type="text"
                  required
                  placeholder="BRIDE'S FULL NAME *"
                  value={brideName}
                  onChange={(e) => setBrideName(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-none px-4 py-2.5 text-xs text-white uppercase placeholder-neutral-500 focus:outline-none focus:border-white font-sans"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="email"
                    required
                    placeholder="EMAIL ADDRESS *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-none px-4 py-2.5 text-xs text-white uppercase placeholder-neutral-500 focus:outline-none focus:border-white font-sans"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="PHONE NUMBER *"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-none px-4 py-2.5 text-xs text-white uppercase placeholder-neutral-500 focus:outline-none focus:border-white font-sans"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-extrabold uppercase tracking-wider text-white block">
                  2. WEDDING DETAILS
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <span className="text-[10px] text-neutral-400 block mb-1 font-bold uppercase">WEDDING DATE</span>
                    <input
                      type="date"
                      required
                      value={weddingDate}
                      onChange={(e) => setWeddingDate(e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-none px-4 py-2.5 text-xs text-white focus:outline-none focus:border-white font-sans"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-400 block mb-1 font-bold uppercase">BRIDAL PARTY SIZE</span>
                    <select
                      value={partyCount}
                      onChange={(e) => setPartyCount(e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-none px-4 py-2.5 text-xs text-white uppercase focus:outline-none focus:border-white font-sans"
                    >
                      <option>BRIDE ONLY</option>
                      <option>2-3 PEOPLE</option>
                      <option>4-6 PEOPLE</option>
                      <option>7-10 PEOPLE</option>
                      <option>10+ LARGE PARTY</option>
                    </select>
                  </div>
                </div>

                <input
                  type="text"
                  placeholder="VENUE LOCATION OR CITY (E.G. SEWELL, DEPTFORD, PHILADELPHIA...)"
                  value={venueLocation}
                  onChange={(e) => setVenueLocation(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-none px-4 py-2.5 text-xs text-white uppercase placeholder-neutral-500 focus:outline-none focus:border-white font-sans"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-extrabold uppercase tracking-wider text-white block">
                  3. DESIRED SERVICES
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'Formal Hair Updo',
                    'Bridal Hair Extensions',
                    'Full Glam Makeup',
                    'Lash Lift / Extensions',
                    'Bridal Party Styling',
                    'Pre-Wedding Facials & Skin Prep'
                  ].map((srv) => (
                    <button
                      key={srv}
                      type="button"
                      onClick={() => toggleService(srv)}
                      className={`p-2.5 text-xs font-bold uppercase border text-left transition ${
                        serviceTypes.includes(srv)
                          ? 'bg-white text-black border-white'
                          : 'bg-neutral-900 border-neutral-800 text-neutral-400'
                      }`}
                    >
                      {srv}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-full bg-white text-black font-extrabold text-xs uppercase tracking-wider hover:bg-neutral-200 transition flex items-center gap-2 shadow-lg"
                >
                  SEND BRIDAL INQUIRY <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </div>
  );
};
