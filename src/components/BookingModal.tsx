import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, Phone, User, CheckCircle2, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';
import { BookingData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
  prefilledLocality?: string;
  onBookingSuccess: (booking: BookingData) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  prefilledService = 'Split AC Deep Jet Foam Servicing',
  prefilledLocality = '',
  onBookingSuccess
}) => {
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [locality, setLocality] = useState(prefilledLocality || 'Kurla West');
  const [serviceType, setServiceType] = useState(prefilledService);
  const [acType, setAcType] = useState('Split AC');
  const [preferredDate, setPreferredDate] = useState('Today (Express 45-Min)');
  const [preferredSlot, setPreferredSlot] = useState('Immediate / Next Available');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<BookingData | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !phone || !address) {
      alert('Please fill in your name, contact phone, and address in Mumbai.');
      return;
    }

    const booking: BookingData = {
      id: `DR-AC-${Math.floor(1000 + Math.random() * 9000)}`,
      customerName,
      phone,
      address,
      locality,
      serviceType,
      acType,
      preferredDate,
      preferredSlot,
      notes,
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setConfirmedBooking(booking);
    setIsSubmitted(true);
    onBookingSuccess(booking);
  };

  const handleSendToWhatsApp = () => {
    if (!confirmedBooking) return;
    const text = encodeURIComponent(
      `Hello Dr Air Cool Services Mumbai,\nI would like to confirm my AC service booking:\n` +
      `• Booking Ref: ${confirmedBooking.id}\n` +
      `• Name: ${confirmedBooking.customerName}\n` +
      `• Phone: ${confirmedBooking.phone}\n` +
      `• Address: ${confirmedBooking.address}, ${confirmedBooking.locality}, Mumbai\n` +
      `• Service: ${confirmedBooking.serviceType} (${confirmedBooking.acType})\n` +
      `• Preferred Slot: ${confirmedBooking.preferredDate} - ${confirmedBooking.preferredSlot}\n` +
      (confirmedBooking.notes ? `• Notes: ${confirmedBooking.notes}\n` : '') +
      `Please assign a technician for my visit.`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-sky-900 via-slate-900 to-sky-950 text-white p-6">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
                <Sparkles className="w-4 h-4" />
                <span>Doorstep Service Booking</span>
              </div>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                Book Dr Air Cool Technician
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Fast 45-min arrival in Mumbai • 30-Day warranty • Pay after satisfaction
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
              
              {/* Service & AC Type */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    AC Type
                  </label>
                  <select
                    value={acType}
                    onChange={(e) => setAcType(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs text-slate-800 font-medium focus:outline-none focus:border-sky-500"
                  >
                    <option value="Split AC">Split AC</option>
                    <option value="Window AC">Window AC</option>
                    <option value="Cassette AC">Commercial Cassette</option>
                    <option value="Tower AC">Tower AC</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Required Service
                  </label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs text-slate-800 font-medium focus:outline-none focus:border-sky-500"
                  >
                    <option value="Split AC Deep Jet Foam Servicing">Jet Foam Servicing (₹499)</option>
                    <option value="AC Repair & Breakdown Inspection">Repair & Inspection (₹249)</option>
                    <option value="AC Gas Leak Fix & Refill">Gas Leak Fix & Refill (₹1899)</option>
                    <option value="Water Dripping Inside Room">Water Leak Unclogging (₹349)</option>
                    <option value="AC Installation">New AC Installation (₹1199)</option>
                    <option value="AC Uninstallation / Shifting">AC Uninstallation (₹599)</option>
                    <option value="Commercial Office AMC">Commercial AMC Inspection</option>
                  </select>
                </div>
              </div>

              {/* Customer Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 pl-9 pr-3 text-xs text-slate-800 focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 098XXXXXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 pl-9 pr-3 text-xs text-slate-800 focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>
              </div>

              {/* Mumbai Locality & Address */}
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Area / Locality in Mumbai *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kurla West, BKC, Bandra, Andheri, Ghatkopar"
                      value={locality}
                      onChange={(e) => setLocality(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 pl-9 pr-3 text-xs text-slate-800 focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Building, Flat No., Street Address *
                  </label>
                  <textarea
                    rows={2}
                    required
                    placeholder="e.g. Flat 302, Sagar Heights, Near Kamani / Station Road..."
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs text-slate-800 focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              {/* Slot / Timing */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <select
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 pl-9 pr-2 text-xs text-slate-800 focus:outline-none focus:border-sky-500 font-medium"
                    >
                      <option value="Today (Express 45-Min)">Today (Express 45-Min)</option>
                      <option value="Tomorrow">Tomorrow</option>
                      <option value="This Weekend">This Weekend</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Time Slot
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <select
                      value={preferredSlot}
                      onChange={(e) => setPreferredSlot(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 pl-9 pr-2 text-xs text-slate-800 focus:outline-none focus:border-sky-500 font-medium"
                    >
                      <option value="Immediate / Next Available">Immediate (Within 45m)</option>
                      <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                      <option value="Afternoon (12 PM - 3 PM)">Afternoon (12 PM - 3 PM)</option>
                      <option value="Evening (4 PM - 7 PM)">Evening (4 PM - 7 PM)</option>
                      <option value="Night (7 PM - 10 PM)">Night (7 PM - 10 PM)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Special Note */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Specific Issue or Brand (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Daikin Inverter AC not blowing cool air since yesterday"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs text-slate-800 focus:outline-none focus:border-sky-500"
                />
              </div>

              {/* Guarantees strip */}
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center gap-2 text-xs text-emerald-800 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Advance Payment • Pay Technician After Service Verification</span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                id="booking-modal-submit-btn"
                className="w-full py-3.5 bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white font-extrabold rounded-xl shadow-lg shadow-sky-600/30 text-sm transition-all active:scale-95"
              >
                Confirm Appointment & Dispatch Technician
              </button>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="p-8 text-center space-y-5 animate-in fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">
                Booking Successfully Received!
              </span>
              <h3 className="font-heading font-extrabold text-2xl text-slate-900 mt-1">
                Booking ID: {confirmedBooking?.id}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-sm mx-auto">
                Thank you, <span className="font-bold text-slate-800">{confirmedBooking?.customerName}</span>. A technician from Dr Air Cool Services is being assigned for your address in <span className="font-bold text-slate-800">{confirmedBooking?.locality}</span>.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500">Service:</span>
                <span className="font-bold text-slate-800">{confirmedBooking?.serviceType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Scheduled Time:</span>
                <span className="font-bold text-slate-800">{confirmedBooking?.preferredDate} ({confirmedBooking?.preferredSlot})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Technician Contact:</span>
                <span className="font-bold text-sky-700">{BUSINESS_INFO.phone}</span>
              </div>
            </div>

            {/* Direct WhatsApp button */}
            <div className="space-y-2.5 pt-2">
              <button
                onClick={handleSendToWhatsApp}
                id="booking-confirm-whatsapp-btn"
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl shadow-md text-sm transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Booking Slip to WhatsApp</span>
              </button>

              <button
                onClick={onClose}
                className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs transition-colors"
              >
                Close & Return to Website
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
