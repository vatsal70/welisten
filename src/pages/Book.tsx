import { motion, AnimatePresence } from "motion/react";
import { Calendar, ChevronDown, ArrowRight, Check, ShieldCheck, User, Clock, MessageSquare } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

interface CustomDropdownProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  icon?: React.ReactNode;
}

function CustomDropdown({ label, options, value, onChange, placeholder, icon }: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="space-y-2 relative" ref={dropdownRef}>
      <label className="text-sm font-bold text-on-surface ml-1">{label}</label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-surface-container-low border-2 transition-all rounded-xl py-4 px-6 flex items-center justify-between group ${isOpen ? 'border-primary ring-2 ring-primary/10' : 'border-transparent hover:border-surface-container-high'}`}
      >
        <div className="flex items-center gap-3">
          {icon && <div className="text-on-surface-variant/60">{icon}</div>}
          <span className={value ? "text-on-surface font-medium" : "text-on-surface-variant/50"}>
            {value || placeholder}
          </span>
        </div>
        <ChevronDown 
          size={20} 
          className={`text-on-surface-variant transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute z-50 w-full mt-2 bg-white border border-surface-container rounded-2xl shadow-2xl overflow-hidden max-h-64 overflow-y-auto"
          >
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-6 py-4 hover:bg-surface-container-low transition-colors flex items-center justify-between group ${value === option ? 'bg-primary/5 text-primary font-bold' : 'text-on-surface'}`}
              >
                <span>{option}</span>
                {value === option && <Check size={18} className="text-primary" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Book() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    listener: "",
    sessionType: "",
    date: "",
    time: "",
    notes: ""
  });

  const listeners = [
    "Sarah Mitchell — Anxiety & Stress",
    "James Chen — Couples Support",
    "Amara Osei — Trauma Support",
    "Elena Rossi — Family Support",
    "Michael Brown — Self-Esteem & Identity",
    "Priya Sharma — Grief & Loss",
    "David Kim — Stress Management",
    "Lisa Thompson — Youth Support",
    "No preference — Connect me with someone"
  ];

  const sessionTypes = [
    "One-on-One Session",
    "Couples Support",
    "Family Support",
    "Free Consultation (15 min)"
  ];

  const times = [
    "Morning (8am – 12pm)",
    "Afternoon (12pm – 5pm)",
    "Evening (5pm – 9pm)",
    "I'm flexible"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.listener || !formData.sessionType) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-4xl mx-auto px-6 md:px-8 py-16 md:py-24 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white border border-surface-container rounded-[3rem] p-12 shadow-xl"
        >
          <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-8">
            <Check size={40} />
          </div>
          <h1 className="font-headline text-4xl font-bold text-primary mb-4">Booking Confirmed!</h1>
          <p className="text-on-surface-variant text-lg mb-10 max-w-md mx-auto">
            Thank you, {formData.firstName}. Your session request has been received. We'll send a confirmation email to {formData.email} shortly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary-dim transition-all">
              Add to Calendar
            </button>
            <Link 
              to="/" 
              className="bg-surface-container-low text-primary px-8 py-4 rounded-2xl font-bold hover:bg-surface-container transition-all"
            >
              Return Home
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 md:px-8 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white border border-surface-container rounded-[2rem] shadow-2xl overflow-hidden"
      >
        <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-12">
          {/* Personal Information */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <User size={20} />
              </div>
              <h2 className="font-headline text-2xl font-bold text-primary">Personal Information</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface ml-1">First Name *</label>
                <input 
                  required
                  type="text"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  className="w-full bg-surface-container-low border-2 border-transparent rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary focus:border-primary transition-all placeholder:text-on-surface-variant/50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface ml-1">Last Name</label>
                <input 
                  type="text"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  className="w-full bg-surface-container-low border-2 border-transparent rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary focus:border-primary transition-all placeholder:text-on-surface-variant/50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface ml-1">Email *</label>
                <input 
                  required
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-surface-container-low border-2 border-transparent rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary focus:border-primary transition-all placeholder:text-on-surface-variant/50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface ml-1">Phone</label>
                <input 
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-surface-container-low border-2 border-transparent rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary focus:border-primary transition-all placeholder:text-on-surface-variant/50"
                />
              </div>
            </div>
          </section>

          {/* Session Details */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                <Calendar size={20} />
              </div>
              <h2 className="font-headline text-2xl font-bold text-primary">Session Details</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <CustomDropdown 
                label="Preferred Listener *"
                options={listeners}
                value={formData.listener}
                onChange={(val) => setFormData({...formData, listener: val})}
                placeholder="Select a listener"
                icon={<User size={18} />}
              />
              <CustomDropdown 
                label="Session Type *"
                options={sessionTypes}
                value={formData.sessionType}
                onChange={(val) => setFormData({...formData, sessionType: val})}
                placeholder="Select type"
                icon={<MessageSquare size={18} />}
              />
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface ml-1">Preferred Date</label>
                <div className="relative group">
                  <input 
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full bg-surface-container-low border-2 border-transparent rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary focus:border-primary transition-all appearance-none cursor-pointer"
                  />
                  <Calendar size={20} className="absolute right-6 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none group-hover:text-primary transition-colors" />
                </div>
              </div>
              <CustomDropdown 
                label="Preferred Time"
                options={times}
                value={formData.time}
                onChange={(val) => setFormData({...formData, time: val})}
                placeholder="Select time"
                icon={<Clock size={18} />}
              />
            </div>
            <div className="mt-6 space-y-2">
              <label className="text-sm font-bold text-on-surface ml-1">Additional Notes</label>
              <textarea 
                placeholder="Anything you'd like us to know before your session..."
                value={formData.notes}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
                rows={4}
                className="w-full bg-surface-container-low border-2 border-transparent rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary focus:border-primary transition-all placeholder:text-on-surface-variant/50 resize-none"
              />
            </div>
          </section>

          <div className="pt-6">
            <button 
              type="submit"
              className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg hover:bg-primary-dim transition-all shadow-lg flex items-center justify-center gap-2 group active:scale-[0.98]"
            >
              Book My Session 
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-center text-xs text-on-surface-variant mt-8 flex items-center justify-center gap-2">
              <ShieldCheck size={14} className="text-secondary" />
              By booking, you agree to our privacy policy. Your information is secure and confidential.
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
