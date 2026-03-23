import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Phone, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Academics', path: '/academics' },
  { name: 'Admissions', path: '/admissions' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-[#f6f9ff]/85 backdrop-blur-xl">
      <div className="border-b border-brand-navy/10 bg-brand-navy text-white">
        <div className="container flex items-center justify-between px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/76">
          <p>MLM Public School | Trusted academics with values</p>
          <div className="hidden items-center gap-2 sm:flex">
            <Phone className="h-3.5 w-3.5 text-brand-gold" />
            <span>Admissions Helpline: +91 8004438000</span>
          </div>
        </div>
      </div>

      <nav className="container px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="group flex items-center gap-4">
            <div className="flex h-auto w-60 items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <img src="/MLMLogoBG.png" alt="MLM Public School full logo" className="h-full w-full object-cover" />
            </div>
          </Link>

          <div className="hidden items-center gap-1 rounded-full border border-white/70 bg-[#f8fbff] p-1.5 shadow-neumo-soft md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  isActive(link.path)
                    ? 'bg-brand-navy text-white shadow-[inset_2px_2px_8px_rgba(255,255,255,0.08),0_10px_20px_-14px_rgba(11,44,111,0.9)]'
                    : 'text-brand-muted hover:bg-white hover:text-brand-navy'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link to="/admissions" className="button-secondary px-5 py-2.5 text-sm font-bold">
              Apply Now
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen((open) => !open)}
            className="button-outline p-2.5 md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28 }}
              className="mt-4 overflow-hidden rounded-[2rem] border border-white/80 bg-[#f8fbff] p-4 shadow-neumo md:hidden"
            >
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block rounded-2xl px-4 py-3 font-semibold transition-all ${
                      isActive(link.path)
                        ? 'bg-brand-navy text-white'
                        : 'text-brand-muted hover:bg-white hover:text-brand-navy'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <Link
                to="/admissions"
                onClick={() => setIsMenuOpen(false)}
                className="button-secondary mt-4 w-full px-5 py-3 text-center text-sm font-bold"
              >
                Begin Admission Inquiry
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
