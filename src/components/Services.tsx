import React, { useState } from 'react';
import { Compass, PenTool, TrendingUp, Globe, ArrowRight, X, Check, Target, BarChart3, ChevronRight } from 'lucide-react';
import { Language, TranslationDictionary, ServiceDetail } from '../types';
import { SERVICES_DATA } from '../data';

interface ServicesProps {
  lang: Language;
  translate: TranslationDictionary;
}

export default function Services({ lang, translate }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  // Dynamic Icon selector with beautiful cyan and purple styles
  const renderIcon = (iconName: string, isWhite = false) => {
    const iconClass = `w-6 h-6 ${isWhite ? 'text-white' : 'text-[#00F2FE]'}`;
    switch (iconName) {
      case 'PenTool':
        return <PenTool className={iconClass} />;
      case 'Globe':
        return <Globe className={iconClass} />;
      case 'Compass':
        return <Compass className={iconClass} />;
      case 'TrendingUp':
        return <TrendingUp className={iconClass} />;
      default:
        return <Compass className={iconClass} />;
    }
  };

  const services = SERVICES_DATA[lang];

  return (
    <section id="services" className="py-20 border-b border-[#1E1E24]/50 relative">
      
      {/* Ambient background blur */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#6A00FF]/5 rounded-full blur-[90px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-sans font-bold tracking-widest text-[#00F2FE] uppercase bg-[#00F2FE]/10 px-3 py-1.5 rounded-full">
            {translate.servicesBadge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-white mt-4">
            {translate.servicesTitle}
          </h2>
          {lang === 'en' && (
            <p className="text-gray-400 text-sm mt-2 max-w-xl">
              Multi-layered digital structures engineered to increase visibility and customer conversion rates.
            </p>
          )}
        </div>

        {/* 2x2 Services Grid exactly like mock photo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((svc) => (
            <div 
              key={svc.id}
              onClick={() => setSelectedService(svc)}
              className="group relative cursor-pointer bg-[#1E1E24]/10 hover:bg-[#1E1E24]/30 border border-[#1E1E24]/60 hover:border-[#00F2FE]/40 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_10px_30px_rgba(0,242,254,0.05)]"
            >
              {/* Radial gradient glow in background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00F2FE]/5 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity"></div>

              {/* Card Header */}
              <div>
                <div className="flex justify-between items-center mb-6">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-[#00F2FE]/10 border border-[#00F2FE]/20 flex items-center justify-center">
                    {renderIcon(svc.iconName)}
                  </div>
                  {/* Number */}
                  <span className="text-sm font-sans font-bold text-gray-700 group-hover:text-[#00F2FE] transition-colors">{svc.num}</span>
                </div>

                <h3 className="text-2xl font-sans font-bold text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400">
                  {svc.title}
                </h3>
                
                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                  {svc.tagline}
                </p>
              </div>

              {/* Card Action Link */}
              <div className="mt-8 pt-6 border-t border-[#1E1E24]/60 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-sans font-bold tracking-wider text-gray-500 group-hover:text-[#00F2FE] duration-200 uppercase">
                  {translate.servicesLearnMore}
                  <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>

                {/* Micro Stat pills */}
                {svc.metricValue && (
                  <span className="text-xs font-sans px-3 py-1 rounded bg-[#6A00FF]/15 text-[#6A00FF] font-bold border border-[#6A00FF]/25">
                    {svc.metricValue}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* OVERLAY MODAL FOR SERVICES INFORMATION */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl bg-[#0F0F14] border border-[#1E1E24] rounded-[2.5rem] shadow-[0_15px_50px_rgba(106,0,255,0.15)] overflow-hidden">
            
            {/* Top decorative gradient bar */}
            <div className="h-2.5 bg-gradient-to-r from-[#6A00FF] via-[#3B82F6] to-[#00F2FE]"></div>

            <div className="p-8">
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#00F2FE]/10 border border-[#00F2FE]/20 flex items-center justify-center">
                    {renderIcon(selectedService.iconName)}
                  </div>
                  <div>
                    <span className="text-[10px] font-sans font-bold text-[#00F2FE] tracking-widest block uppercase">
                      SERVICE TIER {selectedService.num}
                    </span>
                    <h3 className="text-2xl font-sans font-bold text-white tracking-tight">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>
                
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedService(null)}
                  className="p-2.5 rounded-full hover:bg-[#1E1E24] border border-[#1E1E24] hover:border-gray-700 text-gray-400 hover:text-white transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Detailed Specs */}
              <div className="space-y-6">
                {selectedService.description && (
                  <div>
                    <p className="text-gray-300 text-sm leading-relaxed bg-[#1E1E24]/30 border border-[#1E1E24]/50 p-4 rounded-2xl">
                      {selectedService.description}
                    </p>
                  </div>
                )}

                {/* Key Deliverables Bullet Points */}
                <div>
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-sans font-bold tracking-widest text-[#00F2FE] uppercase bg-[#00F2FE]/10 px-3 py-1.5 rounded-full">
                      <Target className="w-3.5 h-3.5" />
                      {translate.servicesIncluded.replace(/:$/, '')}
                    </span>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedService.detailedPoints.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-400">
                        <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Highlight Performance Metrics */}
                <div className="pt-4 border-t border-[#1E1E24]/60 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  {selectedService.metricValue ? (
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-full bg-[#6A00FF]/15 flex items-center justify-center">
                        <BarChart3 className="w-4.5 h-4.5 text-[#6A00FF]" />
                      </div>
                      <div>
                        <span className="text-[10px] text-gray-500 block leading-none font-sans uppercase tracking-wider">
                          {selectedService.metricLabel}
                        </span>
                        <span className="text-lg font-sans font-black text-white mt-1 block">
                          {selectedService.metricValue}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div />
                  )}

                  <button
                    onClick={() => {
                      setSelectedService(null);
                      const target = document.getElementById('contact');
                      if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="w-full sm:w-auto px-5 py-3 rounded-full bg-gradient-to-r from-[#6A00FF] to-[#3B82F6] hover:scale-[1.02] text-xs font-sans font-bold text-white transition-all flex items-center justify-center gap-1.5 shadow-[0_4px_14px_rgba(106,0,255,0.4)]"
                  >
                    <span>{translate.navStartProject}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
