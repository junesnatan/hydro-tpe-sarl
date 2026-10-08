import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Droplets, Menu, X, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const Header = ({ onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'À Propos', path: '/a-propos' },
    { name: 'Services', path: '/services' },
    { name: 'Projets', path: '/projets' },
    { name: 'Méthodologie', path: '/methodologie' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200">
      {/* Main Navbar */}
      <nav className={`w-full bg-white transition-all duration-200 ${
        isScrolled ? 'shadow-lg py-3' : 'shadow-sm py-3.5 sm:py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo (Exact Built Right Style) */}
          <Link to="/" className="flex items-center space-x-3 group" onClick={() => setMobileMenuOpen(false)}>
            <div className="w-10 h-10 rounded-lg bg-[#0B1B2B] flex items-center justify-center text-brand-gold shadow-md group-hover:scale-105 transition-transform">
              <Droplets className="w-5 h-5 text-brand-gold" />
            </div>

            <div className="flex flex-col">
              <span className="font-heading font-black text-xl sm:text-2xl tracking-tight text-[#0B1B2B] leading-none">
                HYDRO TPE <span className="text-brand-gold">SARL</span>
              </span>
              <span className="text-[9px] uppercase font-bold tracking-wider text-slate-500 mt-1">
                Ingénierie Hydraulique & BTP • Bénin
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links with Active Bottom Underline */}
          <div className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative py-2 text-sm font-semibold transition-colors duration-150 group ${
                    isActive ? 'text-[#0B1B2B] font-bold' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span>{link.name}</span>
                  {/* Trait en bas actif */}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-[2.5px] rounded-full transition-all duration-200 ${
                      isActive ? 'bg-brand-gold opacity-100 scale-x-100' : 'bg-brand-gold opacity-0 scale-x-0 group-hover:opacity-40 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Right Action: Get a Quote Button */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={() => onOpenQuoteModal()}
              className="inline-flex items-center justify-center px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0B1B2B] bg-brand-gold hover:bg-amber-400 rounded-md shadow-sm hover:shadow transition-all group"
            >
              <span>Demander un Devis</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => onOpenQuoteModal()}
              className="px-3 py-1.5 text-xs font-bold text-[#0B1B2B] bg-brand-gold rounded-md"
            >
              Devis
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-semibold rounded-lg transition-colors border-l-4 ${
                    isActive
                      ? 'border-brand-gold text-[#0B1B2B] bg-amber-50/60 font-bold'
                      : 'border-transparent text-slate-800 hover:text-brand-gold hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 text-xs font-bold uppercase tracking-wider text-[#0B1B2B] bg-brand-gold rounded-md shadow-sm"
              >
                Demander un Devis Gratuit
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
