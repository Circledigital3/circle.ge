import React, { useState } from 'react';
import { Menu, X, Globe, Sparkles } from 'lucide-react';
import { Language, TranslationDictionary } from '../types';

const GeorgianFlag = () => (
  <span className="relative flex-shrink-0 w-[21px] h-[21px] rounded-full overflow-hidden border border-[#2E2E38] shadow-[0_0_8px_rgba(255,0,0,0.2)] bg-white flex items-center justify-center">
    <svg viewBox="0 0 100 100" className="w-[83%] h-[83%] select-none">
      <rect width="100" height="100" fill="#FFFFFF"/>
      <path d="M 0 42 h 100 v 16 h -100 Z M 42 0 h 16 v 100 h -16 Z" fill="#E60000"/>
      <g fill="#E60000">
        {/* Top Left */}
        <g transform="translate(20, 20) scale(3.5)">
          <path d="M-0.4 -2.2 C-0.4 -0.4 -0.4 -0.4 -2.2 -0.4 L-2.2 0.4 C-0.4 0.4 -0.4 0.4 -0.4 2.2 L0.4 2.2 C0.4 0.4 0.4 0.4 2.2 0.4 L2.2 -0.4 C0.4 -0.4 0.4 -0.4 0.4 -2.2 Z" />
        </g>
        {/* Top Right */}
        <g transform="translate(80, 20) scale(3.5)">
          <path d="M-0.4 -2.2 C-0.4 -0.4 -0.4 -0.4 -2.2 -0.4 L-2.2 0.4 C-0.4 0.4 -0.4 0.4 -0.4 2.2 L0.4 2.2 C0.4 0.4 0.4 0.4 2.2 0.4 L2.2 -0.4 C0.4 -0.4 0.4 -0.4 0.4 -2.2 Z" />
        </g>
        {/* Bottom Left */}
        <g transform="translate(20, 80) scale(3.5)">
          <path d="M-0.4 -2.2 C-0.4 -0.4 -0.4 -0.4 -2.2 -0.4 L-2.2 0.4 C-0.4 0.4 -0.4 0.4 -0.4 2.2 L0.4 2.2 C0.4 0.4 0.4 0.4 2.2 0.4 L2.2 -0.4 C0.4 -0.4 0.4 -0.4 0.4 -2.2 Z" />
        </g>
        {/* Bottom Right */}
        <g transform="translate(80, 80) scale(3.5)">
          <path d="M-0.4 -2.2 C-0.4 -0.4 -0.4 -0.4 -2.2 -0.4 L-2.2 0.4 C-0.4 0.4 -0.4 0.4 -0.4 2.2 L0.4 2.2 C0.4 0.4 0.4 0.4 2.2 0.4 L2.2 -0.4 C0.4 -0.4 0.4 -0.4 0.4 -2.2 Z" />
        </g>
      </g>
    </svg>
  </span>
);

const BritishFlag = () => (
  <span className="relative flex-shrink-0 w-[21px] h-[21px] rounded-full overflow-hidden border border-[#2E2E38] shadow-[0_0_8px_rgba(59,130,246,0.2)] bg-[#012169] flex items-center justify-center">
    <svg viewBox="0 0 30 20" preserveAspectRatio="xMidYMid slice" className="w-[83%] h-[83%] rounded-full select-none">
      <rect width="30" height="20" fill="#012169" />
      <path d="M0,0 L30,20 M30,0 L0,20" stroke="#FFFFFF" strokeWidth="3" />
      <path d="M0,0 L30,20 M30,0 L0,20" stroke="#C8102E" strokeWidth="1" strokeLinecap="round" />
      <path d="M15,0 L15,20 M0,10 L30,10" stroke="#FFFFFF" strokeWidth="5.5" />
      <path d="M15,0 L15,20 M0,10 L30,10" stroke="#C8102E" strokeWidth="3.2" />
    </svg>
  </span>
);

interface HeaderProps {
  lang: Language;
  setLang: (l: Language) => void;
  translate: TranslationDictionary;
}

export default function Header({ lang, setLang, translate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: translate.navHome, href: '#home' },
    { label: translate.navServices, href: '#services' },
    { label: translate.navAbout, href: '#about' },
    { label: translate.navContact, href: '#contact' },
    { label: translate.navFaq, href: '#faq' }
  ];

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'ka' : 'en');
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#000000]/80 backdrop-blur-md border-b border-[#1E1E24]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20" id="header-container">
          
          {/* Logo - Miniature Circle Brand Text */}
          <div 
            className="flex items-center cursor-pointer select-none group py-2" 
            onClick={() => scrollToSection('#home')} 
            id="logo-wrapper"
          >
            {/* Directly write circle in Dodger font */}
            <span className="font-dodger text-2xl sm:text-3xl tracking-[0.05em] bg-gradient-to-r from-[#00F2FE] via-[#6A00FF] to-[#0099FF] bg-clip-text text-transparent transition-all duration-500 group-hover:scale-[1.06] group-hover:tracking-[0.07em] animate-gradient-only">
              circle
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-sm font-sans font-medium text-gray-400 hover:text-[#00F2FE] transition-colors relative group py-2"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#6A00FF] to-[#00F2FE] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4" id="header-actions">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-[#1E1E24] hover:border-[#00F2FE] text-xs font-sans font-bold text-gray-400 hover:text-white transition-all bg-[#1E1E24]/30"
              title="Switch Language"
            >
              {lang === 'en' ? <GeorgianFlag /> : <BritishFlag />}
              <span>{lang === 'en' ? 'ქარ' : 'EN'}</span>
            </button>

            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('#contact')}
              className="relative overflow-hidden group px-5 py-2.5 rounded-full bg-gradient-to-r from-[#6A00FF] to-[#3B82F6] text-sm font-sans font-semibold text-white shadow-[0_4px_14px_rgba(106,0,255,0.4)] hover:shadow-[0_6px_20px_rgba(106,0,255,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span className="relative z-10 flex items-center gap-1">
                {translate.navStartProject}
                <Sparkles className="w-3.5 h-3.5" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] to-[#00F2FE] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile switcher and hamburger button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-2.5 py-1.5 rounded-full border border-[#1E1E24] hover:border-[#00F2FE] text-xs font-sans font-bold text-gray-400 hover:text-white transition-all bg-[#1E1E24]/30"
            >
              {lang === 'en' ? <GeorgianFlag /> : <BritishFlag />}
              <span className="font-sans font-bold">{lang === 'en' ? 'ქარ' : 'EN'}</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-400 hover:text-[#00F2FE] transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Backdrop & Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 top-20 bg-black/50 border-t border-white/5 backdrop-blur-xl animate-fade-in">
          {/* Interactive colored glass highlights inside the backdrop */}
          <div className="absolute top-16 left-1/4 w-32 h-32 bg-[#6A00FF]/15 rounded-full blur-[40px] pointer-events-none -z-10" />
          <div className="absolute top-36 right-1/4 w-32 h-32 bg-[#00F2FE]/15 rounded-full blur-[40px] pointer-events-none -z-10" />

          {/* Elevated Glassmorphic Card Container */}
          <div className="m-5 p-5 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] relative z-50">
            <div className="space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="group block px-5 py-3.5 rounded-xl text-base font-sans font-bold text-[#00F2FE] hover:text-white bg-white/[0.03] border border-white/5 hover:border-[#00F2FE]/40 hover:bg-[#00F2FE]/5 active:bg-[#00F2FE]/10 transition-all duration-300 flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="text-[#00F2FE]/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 font-mono">→</span>
                </a>
              ))}
              
              <div className="pt-5 mt-4 border-t border-white/10">
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-gradient-to-r from-[#6A00FF] to-[#3B82F6] text-base font-sans font-bold text-white shadow-[0_4px_14px_rgba(106,0,255,0.4)] hover:shadow-[0_6px_20px_rgba(106,0,255,0.6)] hover:scale-[1.01] active:scale-[0.99] transition-all"
                >
                  {translate.navStartProject}
                  <Sparkles className="w-4 h-4 text-[#00F2FE]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
