import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Mail, MapPin, Phone } from 'lucide-react';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Academics', path: '/academics' },
  { name: 'Admissions', path: '/admissions' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="section-navy text-white">
      <div className="container px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.75fr_0.95fr]">
          <div className="max-w-xl">
            <div className="flex items-center gap-4">
              <div className="rounded-[1.5rem] bg-white p-3 shadow-[0_20px_40px_-28px_rgba(255,255,255,0.5)]">
                <div className="flex h-10 w-60 items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
                  <img src="/MLMLogoBG.png" alt="MLM Public School full logo" className="h-full w-full object-cover" />
                </div>
              </div>
            </div>

            <p className="mt-6 max-w-lg text-base leading-7 text-white/72">
              MLM Public School is dedicated to academic growth, disciplined learning, and the all-round development of every child in a caring school environment.
            </p>

            <div className="mt-6 inline-flex rounded-full border border-brand-gold/40 bg-white/10 px-4 py-2 text-sm font-semibold text-brand-gold">
              Education with integrity, structure, and care.
            </div>

            <p className="mt-6 max-w-lg text-sm italic leading-7 text-white/68">
              “Thousands of candles can be lighted from a single candle.”
            </p>
          </div>

          <div>
            <p className="school-divider pb-4 text-xl font-bold">Quick Links</p>
            <div className="mt-8 space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="flex items-center gap-2 text-sm font-semibold text-white/72 transition-colors hover:text-brand-gold"
                >
                  <ChevronRight className="h-4 w-4" />
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="school-divider pb-4 text-xl font-bold">Contact</p>
            <div className="mt-8 space-y-5 text-sm text-white/72">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-brand-gold" />
                <span>Sultanpur Ghosh, Khaga, Fatehpur, Uttar Pradesh</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-gold" />
                <span>+91 8004438000</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand-gold" />
                <span>info@mlmpublicschool.edu</span>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/10 px-5 py-4 text-white/78">
                Admissions support available during school office hours.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/52 md:flex-row md:items-center md:justify-between">
          <p>&copy; {year} MLM Public School. All rights reserved.</p>
          <p>Education with values, discipline, and opportunity.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
