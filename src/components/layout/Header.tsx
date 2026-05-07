import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { NAV_ITEMS } from '@/src/constants';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-6",
        scrolled ? "py-4 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5 shadow-2xl" : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex flex-col leading-tight group">
          <span className="font-extrabold text-xl tracking-tighter text-white italic">
            ELITE <span className="text-accent not-italic">DIGITAL</span>
          </span>
          <span className="text-[8px] uppercase tracking-[0.4em] font-bold text-muted transition-colors group-hover:text-accent">
            Semantic SEO & Web Architecture
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <Link 
              key={item.href} 
              to={item.href}
              className={cn(
                "text-[10px] uppercase tracking-[0.25em] font-black transition-all hover:text-accent",
                location.pathname === item.href 
                  ? "text-accent" 
                  : "text-muted"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link 
            to="/contact"
            className="flex items-center gap-2 bg-accent text-[#050505] px-6 py-2.5 rounded-lg font-black text-[10px] uppercase tracking-widest hover:brightness-110 transition-all hover:scale-105 shadow-lg shadow-accent/20"
          >
            Audit Request
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 rounded-lg text-white bg-white/5 border border-white/10"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 w-full h-screen bg-[#0a0a0a] z-[60] flex flex-col items-center justify-center gap-8 animate-in fade-in zoom-in duration-300 px-6">
           <button 
            className="absolute top-6 right-6 p-2 text-white bg-white/5 rounded-xl border border-white/10"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="flex flex-col items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.href} 
                to={item.href}
                className={cn(
                  "text-4xl font-black italic tracking-tighter uppercase",
                  location.pathname === item.href ? "text-accent" : "text-white"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              to="/contact"
              className="mt-8 bg-accent text-[#050505] px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-accent/20"
              onClick={() => setIsOpen(false)}
            >
              Initialize Node
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
