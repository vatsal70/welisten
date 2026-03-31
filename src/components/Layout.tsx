import { ReactNode, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Menu, 
  Home, 
  Users, 
  Calendar, 
  BookOpen,
  X,
  Mail,
  Phone,
  Globe
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import Logo from "./Logo";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Our Listeners", path: "/listeners" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  const bottomNavLinks = [
    { name: "Home", path: "/", icon: <Home size={20} /> },
    { name: "Experts", path: "/listeners", icon: <Users size={20} /> },
    { name: "Book", path: "/book", icon: <Calendar size={20} /> },
    { name: "Guide", path: "/how-it-works", icon: <BookOpen size={20} /> },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header 
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled 
            ? "bg-primary shadow-md py-2" 
            : "bg-transparent py-4 md:py-6"
        }`}
      >
        <div className="flex justify-between items-center px-6 md:px-8 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMenuOpen(true)}
              className={`p-2 rounded-full transition-colors md:hidden ${isScrolled ? "hover:bg-white/10 text-white" : "hover:bg-surface-container text-primary"}`}
            >
              <Menu size={24} />
            </button>
            <Link to="/" className="flex items-center gap-2 group">
              <Logo size={isScrolled ? 40 : 48} className={`transition-all duration-300 group-hover:scale-110 ${isScrolled ? "text-white" : "text-primary"}`} />
              <span className={`font-extrabold tracking-tighter font-headline transition-all duration-300 ${isScrolled ? "text-lg md:text-xl text-white" : "text-xl md:text-2xl text-primary"}`}>WeListen</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`font-medium text-sm transition-colors ${
                  location.pathname === link.path 
                    ? (isScrolled ? "text-white font-bold border-b-2 border-white" : "text-primary font-bold border-b-2 border-primary")
                    : (isScrolled ? "text-white/70 hover:text-white" : "text-on-surface-variant hover:text-primary")
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link 
              to="/book" 
              className={`hidden sm:block px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg active:scale-95 ${
                isScrolled 
                  ? "bg-white text-primary hover:bg-white/90 scale-90" 
                  : "bg-primary text-white hover:bg-primary-dim scale-100"
              }`}
            >
              Book Now
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Side Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/20 z-50 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-64 bg-white z-50 shadow-2xl p-6 flex flex-col"
            >
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-2">
                  <Logo size={40} className="text-primary" />
                  <span className="text-xl font-extrabold text-primary font-headline">WeListen</span>
                </div>
                <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-surface-container rounded-full">
                  <X size={24} />
                </button>
              </div>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link 
                    key={link.path}
                    to={link.path} 
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-lg font-medium transition-colors ${
                      location.pathname === link.path 
                        ? "text-primary font-bold" 
                        : "text-on-surface-variant hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto">
                <Link 
                  to="/book" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full bg-primary text-white text-center py-4 rounded-2xl font-bold"
                >
                  Book a Session
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className="pt-24 pb-32 flex-grow overflow-hidden">
        {children}
      </main>

      {/* Footer */}
      <footer className="w-full py-20 px-6 md:px-8 bg-primary text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-6">
              <div>
                <Link to="/" className="flex items-center gap-2 mb-4 group">
                  <Logo size={48} className="text-white group-hover:rotate-12 transition-transform duration-500" />
                  <span className="text-2xl font-extrabold text-white font-headline">WeListen</span>
                </Link>
                <p className="mt-4 text-white/80 leading-relaxed">
                  Compassionate online support. Your mental health matters — we're here to listen.
                </p>
              </div>
              <p className="text-sm font-medium text-white/60 italic">
                Made with care for your wellbeing
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
              <ul className="space-y-4">
                <li><Link to="/about" className="text-white/70 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/services" className="text-white/70 hover:text-white transition-colors">Services</Link></li>
                <li><Link to="/listeners" className="text-white/70 hover:text-white transition-colors">Our Listeners</Link></li>
                <li><Link to="/pricing" className="text-white/70 hover:text-white transition-colors">Pricing</Link></li>
                <li><Link to="/blog" className="text-white/70 hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Support</h4>
              <ul className="space-y-4">
                <li><Link to="/faq" className="text-white/70 hover:text-white transition-colors">FAQ</Link></li>
                <li><Link to="/contact" className="text-white/70 hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link to="/book" className="text-white/70 hover:text-white transition-colors">Book a Session</Link></li>
                <li><Link to="/how-it-works" className="text-white/70 hover:text-white transition-colors">How It Works</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Get In Touch</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-white/70">
                  <Mail size={18} className="text-white" />
                  <a href="mailto:hello@welisten.com" className="hover:text-white transition-colors">hello@welisten.com</a>
                </li>
                <li className="flex items-center gap-3 text-white/70">
                  <Phone size={18} className="text-white" />
                  <a href="tel:+15551234567" className="hover:text-white transition-colors">+1 (555) 123-4567</a>
                </li>
                <li className="flex items-center gap-3 text-white/70">
                  <Globe size={18} className="text-white" />
                  <span>Available worldwide, online</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/50">
              © {new Date().getFullYear()} WeListen. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-xs text-white/50 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-xs text-white/50 hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Navigation (Mobile) */}
      <nav className="md:hidden fixed bottom-0 w-full flex justify-around items-center px-4 pb-6 pt-2 glass shadow-[0_-10px_40px_rgba(0,0,0,0.04)] z-50 rounded-t-3xl">
        {bottomNavLinks.map((link) => (
          <Link 
            key={link.path}
            to={link.path}
            className={`flex flex-col items-center justify-center px-5 py-2 transition-all active:scale-90 duration-300 rounded-2xl ${
              location.pathname === link.path 
                ? 'bg-primary-container/30 text-primary' 
                : 'text-on-surface-variant'
            }`}
          >
            <span className="mb-1">{link.icon}</span>
            <span className="text-[10px] font-bold tracking-wide uppercase">{link.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
