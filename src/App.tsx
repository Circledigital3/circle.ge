import React, { useState } from 'react';
import { ArrowRight, Play, Check, Zap, Target, Users } from 'lucide-react';
import Header from './components/Header';
import OrbitalMockup from './components/OrbitalMockup';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import StrategyImpact from './components/StrategyImpact';
import { motion } from 'motion/react';
import { TRANSLATIONS } from './data';
import { Language } from './types';

export default function App() {
  const [lang, setLang] = useState<Language>('ka'); // Default to Georgian, toggleable to English
  const translate = TRANSLATIONS[lang];

  const [selectedPlan, setSelectedPlan] = useState('');
  const [selectedPlanPrice, setSelectedPlanPrice] = useState('');

  const handleSelectTier = (tierName: string, priceWithCurrency: string) => {
    setSelectedPlan(tierName);
    setSelectedPlanPrice(priceWithCurrency);
    // Smooth scroll to contact form with brief timing offset
    setTimeout(() => {
      const target = document.getElementById('contact');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white font-sans selection:bg-[#00F2FE]/30 overflow-x-hidden selection:text-white" id="main-application-view">
      
      {/* Embedded Header */}
      <Header lang={lang} setLang={setLang} translate={translate} />

      {/* 1. HERO SECTION */}
      <section id="home" className="relative pt-10 pb-20 border-b border-[#1E1E24]/50 overflow-hidden">
        
        {/* Dynamic Glow Orbs matching "Circle" */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#00F2FE]/10 via-[#6A00FF]/5 to-transparent rounded-full blur-[120px] pointer-events-none -z-10"></div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#00F2FE]/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-8 text-left" id="hero-content-wrapper">
              
              {/* Display Title */}
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, type: 'spring', stiffness: 55 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extra-black tracking-tight leading-[1.15] text-white"
              >
                {translate.heroHeadingBefore}{' '}
                <span className="inline-block bg-gradient-to-r from-[#00F2FE] via-[#3B82F6] to-[#6A00FF] bg-clip-text text-transparent font-dodger tracking-[0.05em] text-[0.95em] filter drop-shadow-[0_0_8px_rgba(0,242,254,0.25)]">
                  circle
                </span>
                {translate.heroHeadingAfter}
              </motion.h1>

              {/* Subtitle */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.28 }}
                className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed whitespace-pre-line"
              >
                {(() => {
                  const circleParts = translate.heroSub.split('Circle');
                  const result: React.ReactNode[] = [];
                  circleParts.forEach((part, index) => {
                    if (index > 0) {
                      result.push(
                        <span key={`circle-${index}`} className="text-[#00F2FE] font-extrabold filter drop-shadow-[0_0_8px_rgba(0,242,254,0.4)]">
                          Circle
                        </span>
                      );
                    }
                    
                    if (lang === 'ka') {
                      if (part.includes('შენი მარკეტინგის წრე.')) {
                        const subParts = part.split('შენი მარკეტინგის წრე.');
                        result.push(
                          <span key={`group-dot-${index}`}>
                            {subParts[0]}
                            <span className="font-semibold text-white">შენი მარკეტინგის წრე.</span>
                            {subParts[1] || ''}
                          </span>
                        );
                      } else if (part.includes('შენი მარკეტინგის წრე')) {
                        const subParts = part.split('შენი მარკეტინგის წრე');
                        result.push(
                          <span key={`group-${index}`}>
                            {subParts[0]}
                            <span className="font-semibold text-white">შენი მარკეტინგის წრე</span>
                            {subParts[1] || ''}
                          </span>
                        );
                      } else {
                        result.push(<React.Fragment key={`text-${index}`}>{part}</React.Fragment>);
                      }
                    } else {
                      result.push(<React.Fragment key={`text-${index}`}>{part}</React.Fragment>);
                    }
                  });
                  return result;
                })()}
              </motion.p>

              {/* Interactive buttons matching CTA layout */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.42 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
              >
                <button
                  onClick={() => {
                    const target = document.getElementById('contact');
                    if (target) target.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-[#6A00FF] to-[#3B82F6] text-sm font-sans font-bold text-white shadow-[0_5px_20px_rgba(106,0,255,0.3)] hover:shadow-[0_8px_30px_rgba(0,242,254,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{translate.heroButtonPrimary}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                
                <button
                  onClick={() => {
                    const target = document.getElementById('about');
                    if (target) target.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-4 rounded-full border border-[#1E1E24] hover:border-gray-500 text-sm font-sans font-semibold text-gray-300 hover:text-white bg-[#1E1E24]/20 hover:bg-[#1E1E24]/50 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 text-[#00F2FE]" />
                  <span>{translate.heroButtonSecondary}</span>
                </button>
              </motion.div>

            </div>

            {/* Right Graphics/Dashboard Mockup Column (5 cols) */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <OrbitalMockup lang={lang} />
            </div>

          </div>
        </div>
      </section>

      {/* 2. ABOUT CIRCLE STUDIO SECTION */}
      <section className="py-20 border-b border-[#1E1E24]/50 relative" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Column 1: Core Circle Brand Logo Graphics Component */}
            <div className="lg:col-span-5 order-2 lg:order-1 relative flex items-center justify-center py-8">
              
              <div className="flex items-center justify-center select-none max-w-full">
                {/* Glow nested Circle SVG */}
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 flex items-center justify-center animate-pulse duration-[4000ms]">
                  
                  {/* Outer background ambient radial glow for the logo */}
                  <div className="absolute inset-0 bg-[#00F2FE]/5 rounded-full blur-3xl opacity-65"></div>
                  
                  <svg viewBox="0 0 200 200" className="w-full h-full filter drop-shadow-[0_0_20px_rgba(0,242,254,0.4)]">
                    <defs>
                      <linearGradient id="logoOuterGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#6A00FF" /> {/* Purple */}
                        <stop offset="50%" stopColor="#3B82F6" /> {/* Blue */}
                        <stop offset="100%" stopColor="#00F2FE" /> {/* Cyan */}
                      </linearGradient>
                      <linearGradient id="logoInnerGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#00F2FE" />
                      </linearGradient>
                    </defs>
                    
                    {/* Outer Ring Arc (left open for text) */}
                    <path
                      d="M 162 142 A 80 80 0 1 1 162 58"
                      fill="none"
                      stroke="url(#logoOuterGrad)"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    
                    {/* Inner Ring Arc */}
                    <path
                      d="M 148 132 A 64 64 0 1 1 148 68"
                      fill="none"
                      stroke="url(#logoInnerGrad)"
                      strokeWidth="10"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                
                {/* Gradient Styled Dodger ircle Text */}
                <span className="font-dodger text-5xl sm:text-6xl md:text-7xl lg:text-7xl tracking-snug bg-gradient-to-r from-[#00F2FE] via-[#3B82F6] to-[#6A00FF] bg-clip-text text-transparent filter drop-shadow-[0_0_10px_rgba(0,242,254,0.25)] -ml-10 sm:-ml-12 md:-ml-14 z-10">
                  ircle
                </span>
              </div>

            </div>

            {/* Column 2: Pitch & Deliverables Grid (7 cols) */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-8 text-left">
              
              <div>
                <span className="inline-flex items-center gap-1 text-xs font-sans font-bold tracking-widest text-[#00F2FE] uppercase bg-[#00F2FE]/10 px-3 py-1.5 rounded-full border border-[#00F2FE]/25">
                  {translate.aboutBadge}
                </span>
                <p className="text-gray-400 text-sm sm:text-base mt-6 leading-relaxed whitespace-pre-line">
                  {translate.aboutDesc}
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES GRID */}
      <Services lang={lang} translate={translate} />

      {/* BESPOKE STRATEGY & VALUE COMPONENT */}
      <StrategyImpact lang={lang} />

      {/* 6. IMMERSIVE INQUIRY TERMINAL / CONTACT FORM */}
      <ContactForm 
        lang={lang} 
        translate={translate} 
        preselectedService={selectedPlan} 
        preselectedBudget={selectedPlanPrice} 
      />


      {/* FOOTER */}
      <footer className="bg-[#000000] border-t border-[#1E1E24]/60 py-12 relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Center copyrights */}
            <div className="text-xs text-gray-500 font-sans text-center md:text-left">
              &copy; {new Date().getFullYear()} {translate.footerCopyright}. {translate.footerRights}
            </div>

            {/* Right creators */}
            <div className="text-xs text-gray-600 font-sans text-right">
              Created By <span className="text-[#00F2FE] font-medium">Circle</span>
            </div>

          </div>
        </div>
      </footer>

    </div>
  );
}
