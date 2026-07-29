import React, { useState } from 'react';
import { X, Gift, CheckCircle2, Copy, Check, CreditCard, ArrowRight } from 'lucide-react';

interface GiftCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GiftCardModal: React.FC<GiftCardModalProps> = ({ isOpen, onClose }) => {
  const [amount, setAmount] = useState<number>(100);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [recipientName, setRecipientName] = useState<string>('');
  const [recipientEmail, setRecipientEmail] = useState<string>('');
  const [senderName, setSenderName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [purchased, setPurchased] = useState<boolean>(false);
  const [claimCode, setClaimCode] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const amounts = [50, 100, 150, 200, 250];

  const handlePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = 'BLK-GIFT-' + Math.floor(1000 + Math.random() * 9000) + '-' + Math.floor(1000 + Math.random() * 9000);
    setClaimCode(randomCode);
    setPurchased(true);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(claimCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const selectedValue = customAmount ? parseFloat(customAmount) || 0 : amount;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in font-sans">
      <div className="bg-black border border-neutral-800 rounded-none w-full max-w-2xl overflow-hidden shadow-2xl relative text-white flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-6 border-b border-neutral-800 flex items-center justify-between bg-black">
          <div className="flex items-center gap-2">
            <Gift className="w-5 h-5 text-white" />
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-extrabold block">
                THE ULTIMATE PAMPERING PRESENT
              </span>
              <h3 className="font-display text-2xl font-extrabold uppercase text-white">
                BUY A BLK. DIGITAL GIFTCARD
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

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 font-sans">
          
          {purchased ? (
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center mx-auto border border-white">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h4 className="font-display text-2xl font-extrabold uppercase text-white">
                  GIFTCARD GENERATED!
                </h4>
                <p className="text-neutral-300 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                  Your ${selectedValue} blk. Salon & Spa giftcard has been issued and sent to {recipientEmail || 'your email'}.
                </p>
              </div>

              {/* Digital Card Voucher Preview */}
              <div className="bg-neutral-900 border-2 border-white p-6 max-w-md mx-auto text-left relative overflow-hidden shadow-2xl">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="font-display text-3xl font-extrabold text-white tracking-widest block">
                      BLK.
                    </span>
                    <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-400 font-bold">SALON & SPA SEWELL</span>
                  </div>
                  <span className="font-display text-3xl font-extrabold text-white">${selectedValue}</span>
                </div>

                <div className="text-xs space-y-1 mb-6 text-neutral-300 font-sans">
                  <p><strong className="text-neutral-400 uppercase">FOR:</strong> {recipientName.toUpperCase() || 'VALUED GUEST'}</p>
                  <p><strong className="text-neutral-400 uppercase">FROM:</strong> {senderName.toUpperCase() || 'A LOVING FRIEND'}</p>
                  {message && <p className="italic text-neutral-300 mt-2">"{message.toUpperCase()}"</p>}
                </div>

                <div className="pt-4 border-t border-neutral-800 flex items-center justify-between bg-black p-3">
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-neutral-500 block font-bold">REDEMPTION CODE</span>
                    <span className="font-mono text-sm font-bold text-white">{claimCode}</span>
                  </div>
                  <button
                    onClick={handleCopyCode}
                    className="p-2 rounded-full bg-white text-black hover:bg-neutral-200 transition flex items-center gap-1 text-xs font-bold"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                onClick={() => { setPurchased(false); onClose(); }}
                className="px-8 py-3.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition"
              >
                CLOSE WINDOW <ArrowRight className="inline w-4 h-4 ml-1" />
              </button>
            </div>
          ) : (
            <form onSubmit={handlePurchase} className="space-y-6">
              
              {/* Select Amount */}
              <div>
                <label className="text-xs font-extrabold uppercase tracking-wider text-white block mb-3">
                  1. SELECT GIFT AMOUNT
                </label>
                <div className="grid grid-cols-5 gap-2 mb-3">
                  {amounts.map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => { setAmount(val); setCustomAmount(''); }}
                      className={`py-3 rounded-none font-display font-extrabold text-sm transition ${
                        amount === val && !customAmount
                          ? 'bg-white text-black shadow-lg'
                          : 'bg-neutral-900 text-neutral-300 border border-neutral-800 hover:border-neutral-700'
                      }`}
                    >
                      ${val}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  placeholder="OR ENTER CUSTOM AMOUNT ($)..."
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-none px-4 py-2.5 text-xs text-white uppercase placeholder-neutral-500 focus:outline-none focus:border-white font-sans"
                />
              </div>

              {/* Live Preview Card */}
              <div className="bg-neutral-900 border border-neutral-800 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CreditCard className="w-6 h-6 text-white" />
                  <div>
                    <span className="font-display font-extrabold text-base text-white block uppercase">
                      BLK. DIGITAL GIFT CARD (${selectedValue})
                    </span>
                    <span className="text-[11px] text-neutral-400 font-sans uppercase">VALID FOR ALL SALON SERVICES, SPA ROOMS & PRODUCTS</span>
                  </div>
                </div>
              </div>

              {/* Recipient Details */}
              <div className="space-y-3">
                <label className="text-xs font-extrabold uppercase tracking-wider text-white block font-sans">
                  2. PERSONALIZE DELIVERY
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="RECIPIENT'S NAME *"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-none px-4 py-2.5 text-xs text-white uppercase placeholder-neutral-500 focus:outline-none focus:border-white font-sans"
                  />
                  <input
                    type="email"
                    required
                    placeholder="RECIPIENT'S EMAIL *"
                    value={recipientEmail}
                    onChange={(e) => setRecipientEmail(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-none px-4 py-2.5 text-xs text-white uppercase placeholder-neutral-500 focus:outline-none focus:border-white font-sans"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="YOUR NAME (SENDER) *"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-none px-4 py-2.5 text-xs text-white uppercase placeholder-neutral-500 focus:outline-none focus:border-white font-sans"
                  />
                  <input
                    type="text"
                    placeholder="PERSONAL NOTE (OPTIONAL)"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-none px-4 py-2.5 text-xs text-white uppercase placeholder-neutral-500 focus:outline-none focus:border-white font-sans"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase text-neutral-500 block font-bold">TOTAL DUE</span>
                  <span className="font-display font-extrabold text-2xl text-white">${selectedValue}</span>
                </div>
                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-full bg-white text-black font-extrabold text-xs uppercase tracking-wider hover:bg-neutral-200 transition flex items-center gap-2 shadow-lg"
                >
                  <Gift className="w-4 h-4" /> ISSUE GIFTCARD NOW
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </div>
  );
};
