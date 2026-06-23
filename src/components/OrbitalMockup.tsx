import React, { useState, useEffect } from 'react';
import { Instagram, Youtube, Play, Sparkles, Sliders, ChevronLeft, ChevronRight, Info, Award, Activity, Linkedin, Facebook, Flashlight } from 'lucide-react';
import { Language } from '../types';

interface OrbitalMockupProps {
  lang: Language;
}

interface Dataset {
  platform: string;
  count: string;
  label: string;
  color: string;
  glowColor: string;
  chartPath: string;
  growth: string;
  impressions: string;
}

export default function OrbitalMockup({ lang }: OrbitalMockupProps) {
  const [activePlatform, setActivePlatform] = useState<number>(1); // Default to TikTok
  const [orbitSpeed, setOrbitSpeed] = useState<number>(6); // Speed multiplier
  const [graphPulse, setGraphPulse] = useState(false);
  const [switches, setSwitches] = useState({
    marketing: true,
    strategy: true,
    branding: true,
    creative: true,
    management: true,
  });
  const [isGlowOn, setIsGlowOn] = useState<boolean>(true);

  // Platform dataset supporting both languages with sunset palette colors
  const datasets: Dataset[] = [
    {
      platform: 'Instagram',
      count: '48.2K',
      label: lang === 'en' ? 'Active Followers' : 'აქტიური გამომწერი',
      color: 'from-[#6A00FF] via-[#3B82F6] to-[#00F2FE]',
      glowColor: 'rgba(106, 0, 255, 0.4)',
      chartPath: 'M10 80 C 40 75, 60 40, 90 50 C 120 60, 150 15, 180 30 C 210 45, 230 10, 270 5',
      growth: '+40.8%',
      impressions: '1.2M'
    },
    {
      platform: 'TikTok',
      count: '96.5K',
      label: lang === 'en' ? 'Highly Engaged Followers' : 'მაღალი ჩართულობის ფოლოვერი',
      color: 'from-[#00F2FE] via-[#3B82F6] to-[#6A00FF]',
      glowColor: 'rgba(0, 242, 254, 0.4)',
      chartPath: 'M10 90 C 40 85, 70 65, 100 45 C 130 25, 160 50, 190 35 C 220 20, 240 5, 270 1',
      growth: '+76.3%',
      impressions: '3.4M'
    },
    {
      platform: 'YouTube',
      count: '73.1K',
      label: lang === 'en' ? 'Subscribers' : 'უნიკალური გამომწერი',
      color: 'from-[#6A00FF] via-[#3B82F6] to-[#00F2FE]',
      glowColor: 'rgba(106, 0, 255, 0.4)',
      chartPath: 'M10 85 C 50 85, 80 50, 110 55 C 140 60, 170 30, 200 40 C 230 50, 250 15, 270 12',
      growth: '+24.5%',
      impressions: '980K'
    }
  ];

  const activeData = datasets[activePlatform];

  useEffect(() => {
    setGraphPulse(true);
    const timer = setTimeout(() => setGraphPulse(false), 500);
    return () => clearTimeout(timer);
  }, [activePlatform]);

  const renderOrbitRings = (isMobile: boolean) => {
    const size = isMobile ? "w-[330px] h-[330px]" : "w-[500px] h-[500px]";
    const ringSizeClass = isMobile ? "w-[245px] h-[245px]" : "w-[350px] h-[350px]";
    return (
      <div className={`absolute ${size} rounded-full border border-dashed border-[#1E1E24]/30 pointer-events-none flex items-center justify-center`}>
        
        {/* 1. Marketing Orbit */}
        <div 
          className={`absolute w-full h-full rounded-full transition-opacity duration-300 ${switches.marketing ? 'animate-spin' : 'opacity-30'}`}
          style={{ 
            animationDuration: `${orbitSpeed}s`,
          }}
        >
          <div className="absolute inset-0" style={{ transform: 'rotate(0deg)' }}>
            <div 
              className={`absolute -top-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 md:w-4 md:h-4 rounded-full transition-all duration-300 flex items-center justify-center ${
                switches.marketing 
                  ? 'bg-[#EF4444] shadow-[0_0_14px_#EF4444] scale-110' 
                  : 'bg-gray-800 border border-gray-700 scale-90'
              }`}
            >
              <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
            </div>
          </div>
        </div>

        {/* 2. Strategy Orbit */}
        <div 
          className={`absolute w-full h-full rounded-full transition-opacity duration-300 ${switches.strategy ? 'animate-spin' : 'opacity-30'}`}
          style={{ 
            animationDuration: `${orbitSpeed * 1.2}s`,
          }}
        >
          <div className="absolute inset-0" style={{ transform: 'rotate(72deg)' }}>
            <div 
              className={`absolute -top-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 md:w-4 md:h-4 rounded-full transition-all duration-300 flex items-center justify-center ${
                switches.strategy 
                  ? 'bg-[#22C55E] shadow-[0_0_14px_#22C55E] scale-110' 
                  : 'bg-gray-800 border border-gray-700 scale-90'
              }`}
            >
              <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
            </div>
          </div>
        </div>

        {/* 3. Branding Orbit */}
        <div 
          className={`absolute w-full h-full rounded-full transition-opacity duration-300 ${switches.branding ? 'animate-spin' : 'opacity-30'}`}
          style={{ 
            animationDuration: `${orbitSpeed * 0.8}s`,
          }}
        >
          <div className="absolute inset-0" style={{ transform: 'rotate(144deg)' }}>
            <div 
              className={`absolute -top-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 md:w-4 md:h-4 rounded-full transition-all duration-300 flex items-center justify-center ${
                switches.branding 
                  ? 'bg-[#38BDF8] shadow-[0_0_14px_#38BDF8] scale-110' 
                  : 'bg-gray-800 border border-gray-700 scale-90'
              }`}
            >
              <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
            </div>
          </div>
        </div>

        {/* 4. Creative Orbit */}
        <div 
          className={`absolute w-full h-full rounded-full transition-opacity duration-300 ${switches.creative ? 'animate-spin' : 'opacity-30'}`}
          style={{ 
            animationDuration: `${orbitSpeed * 1.1}s`,
          }}
        >
          <div className="absolute inset-0" style={{ transform: 'rotate(216deg)' }}>
            <div 
              className={`absolute -top-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 md:w-4 md:h-4 rounded-full transition-all duration-300 flex items-center justify-center ${
                switches.creative 
                  ? 'bg-[#A855F7] shadow-[0_0_14px_#A855F7] scale-110' 
                  : 'bg-gray-800 border border-gray-700 scale-90'
              }`}
            >
              <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
            </div>
          </div>
        </div>

        {/* 5. Management Orbit */}
        <div 
          className={`absolute w-full h-full rounded-full transition-opacity duration-300 ${switches.management ? 'animate-spin' : 'opacity-30'}`}
          style={{ 
            animationDuration: `${orbitSpeed * 0.9}s`,
          }}
        >
          <div className="absolute inset-0" style={{ transform: 'rotate(288deg)' }}>
            <div 
              className={`absolute -top-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 md:w-4 md:h-4 rounded-full transition-all duration-300 flex items-center justify-center ${
                switches.management 
                  ? 'bg-[#F97316] shadow-[0_0_14px_#F97316] scale-110' 
                  : 'bg-gray-800 border border-gray-700 scale-90'
              }`}
            >
              <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
            </div>
          </div>
        </div>

        {/* Inner concentric ring */}
        <div className={`absolute ${ringSizeClass} rounded-full border border-[#6A00FF]/15`}>
          {/* Clean concentric aesthetic space */}
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-full py-10 flex flex-col items-center justify-center select-none" id="orbital-mockup-section">
      
      {/* Background Deep Glows */}
      <div className="absolute inset-0 flex items-center justify-center -z-10 bg-radial-[circle_at_center] from-[#1E1E24]/25 via-[#0F0F14]/20 top-20 pointer-events-none">
        <div className="w-[500px] h-[500px] bg-[#00F2FE]/5 rounded-full blur-[80px] animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bg-[#6A00FF]/5 rounded-full blur-[100px]"></div>
      </div>

      {/* Main Grid Wrapper with responsive layout hierarchy */}
      <div className="relative w-full max-w-lg mt-6 flex flex-col md:flex-row justify-center items-center px-4 sm:px-0 gap-10 md:gap-0">
        
        {/* ORBIT + CONTROLLER CONTAINER (Mobile: centered orbit, Desktop: floats float bottom-left) */}
        <div className="relative flex items-center justify-center w-[330px] h-[330px] md:w-auto md:h-auto md:absolute md:-left-20 md:bottom-16 z-20 order-2 md:order-1">
          
          {/* MOBILE Orbit Rings (rendered centered around controller only on smaller screens) */}
          <div className="md:hidden absolute inset-0 flex items-center justify-center pointer-events-none">
            {renderOrbitRings(true)}
          </div>

          {/* ORBIT CONTROLLER WIDGET PANEL */}
          <div className="relative w-[184px] bg-[#0F0F14]/90 p-4 rounded-2xl border border-[#1E1E24] shadow-2xl flex flex-col gap-3 backdrop-blur-md">
            <div className="flex items-center gap-2 text-gray-300 pb-2 border-b border-[#1E1E24]/60">
              <div className="relative flex h-2 w-2 mr-0.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F2FE] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F2FE]"></span>
              </div>
              <span className="text-[10px] font-sans font-bold uppercase tracking-wider">
                {lang === 'en' ? 'Marketing Circle' : 'მარკეტინგული წრე'}
              </span>
            </div>

            {/* Pulsating Hint Badge */}
            <div className="bg-[#00F2FE]/5 border border-[#00F2FE]/30 rounded-xl p-2 text-center animate-pulse select-none">
              <span className="text-[8.5px] font-bold text-[#00F2FE] leading-normal block">
                {lang === 'en' 
                  ? '💡 Use all components for your marketing circle' 
                  : '💡 გამოიყენე ყველა კომპონენტი შენი მარკეტინგული წრისთვის'}
              </span>
            </div>

            <div className="flex flex-col gap-2.5">
              {/* Toggle 1: Marketing */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-sans font-semibold text-gray-400">
                  {lang === 'en' ? '1. Marketing' : '1. მარკეტინგი'}
                </span>
                <button 
                  onClick={() => setSwitches(prev => ({ ...prev, marketing: !prev.marketing }))}
                  className={`w-7 h-4 rounded-full p-[2px] transition-colors duration-200 outline-none relative flex items-center ${switches.marketing ? 'bg-[#EF4444]' : 'bg-gray-800'}`}
                >
                  <div className={`w-3 h-3 rounded-full bg-white transition-transform duration-200 ${switches.marketing ? 'translate-x-3' : 'translate-x-0'}`} />
                </button>
              </div>

              {/* Toggle 2: Strategy */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-sans font-semibold text-gray-400">
                  {lang === 'en' ? '2. Strategy' : '2. სტრატეგია'}
                </span>
                <button 
                  onClick={() => setSwitches(prev => ({ ...prev, strategy: !prev.strategy }))}
                  className={`w-7 h-4 rounded-full p-[2px] transition-colors duration-200 outline-none relative flex items-center ${switches.strategy ? 'bg-[#22C55E]' : 'bg-gray-800'}`}
                >
                  <div className={`w-3 h-3 rounded-full bg-white transition-transform duration-200 ${switches.strategy ? 'translate-x-3' : 'translate-x-0'}`} />
                </button>
              </div>

              {/* Toggle 3: Branding */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-sans font-semibold text-gray-400">
                  {lang === 'en' ? '3. Branding' : '3. ბრენდინგი'}
                </span>
                <button 
                  onClick={() => setSwitches(prev => ({ ...prev, branding: !prev.branding }))}
                  className={`w-7 h-4 rounded-full p-[2px] transition-colors duration-200 outline-none relative flex items-center ${switches.branding ? 'bg-[#38BDF8]' : 'bg-gray-800'}`}
                >
                  <div className={`w-3 h-3 rounded-full bg-white transition-transform duration-200 ${switches.branding ? 'translate-x-3' : 'translate-x-0'}`} />
                </button>
              </div>

              {/* Toggle 4: Creative */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-sans font-semibold text-gray-400">
                  {lang === 'en' ? '4. Creative' : '4. კრეატივი'}
                </span>
                <button 
                  onClick={() => setSwitches(prev => ({ ...prev, creative: !prev.creative }))}
                  className={`w-7 h-4 rounded-full p-[2px] transition-colors duration-200 outline-none relative flex items-center ${switches.creative ? 'bg-[#A855F7]' : 'bg-gray-800'}`}
                >
                  <div className={`w-3 h-3 rounded-full bg-white transition-transform duration-200 ${switches.creative ? 'translate-x-3' : 'translate-x-0'}`} />
                </button>
              </div>

              {/* Toggle 5: Management */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-sans font-semibold text-gray-400">
                  {lang === 'en' ? '5. Management' : '5. მართვა'}
                </span>
                <button 
                  onClick={() => setSwitches(prev => ({ ...prev, management: !prev.management }))}
                  className={`w-7 h-4 rounded-full p-[2px] transition-colors duration-200 outline-none relative flex items-center ${switches.management ? 'bg-[#F97316]' : 'bg-gray-800'}`}
                >
                  <div className={`w-3 h-3 rounded-full bg-white transition-transform duration-200 ${switches.management ? 'translate-x-3' : 'translate-x-0'}`} />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* PHONE MOCKUP WITH DESKTOP ORBITS */}
        <div className="relative flex justify-center items-center z-10 w-[300px] sm:w-[500px] h-[550px] order-1 md:order-2">
          
          {/* DESKTOP Orbit Rings (centered exactly behind the phone only in standard md viewport) */}
          <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none">
            {renderOrbitRings(false)}
          </div>

          {/* PHYSICAL SMARTPHONE CONTAINER (With Beautiful Cyan-Purple Gradient Border) */}
          <div className={`relative z-10 w-[270px] h-[550px] rounded-[44px] p-[5px] flex flex-col overflow-hidden md:translate-x-[45px] transition-all duration-500 ease-in-out ${
            isGlowOn 
              ? 'bg-gradient-to-tr from-[#00F2FE] via-[#6A00FF] to-[#0099FF] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_30px_rgba(106,0,255,0.3)]' 
              : 'bg-[#1E1E24] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] border border-[#2B2B33]/40'
          }`}>
            
            {/* Inner Phone Body Content Holder */}
            <div className="w-full h-full bg-[#0F0F14] rounded-[39px] p-3.5 flex flex-col relative overflow-hidden">
              
              {/* Dynamic Speaker Island */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-[#2A2A33] rounded-full flex items-center justify-center gap-1.5 z-25">
                <div className="w-10 h-1 bg-[#1E1E24] rounded-full"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#15151a] border border-[#2A2A33]"></div>
              </div>
   
              {/* Glowing Side Bezel Highlights */}
              <div className={`absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-[#00F2FE]/20 via-[#6A00FF]/10 to-transparent transition-opacity duration-500 ${isGlowOn ? 'opacity-100' : 'opacity-0'}`}></div>
              <div className={`absolute top-0 bottom-0 right-0 w-[1px] bg-gradient-to-b from-[#6A00FF]/20 via-[#00F2FE]/10 to-transparent transition-opacity duration-500 ${isGlowOn ? 'opacity-100' : 'opacity-0'}`}></div>
   
              {/* Internal Dashboard Screen */}
              <div className="w-full h-full bg-[#07070B] rounded-[30px] pt-8 px-4 flex flex-col justify-start overflow-hidden relative border border-[#1E1E24]/30">
              
              {/* Screen Background Elements (Pure Black deep view) */}
              <div className="absolute inset-0 bg-[#07070B] -z-10 bg-radial-[circle_at_top] from-[#1E1E24]/30 via-transparent"></div>
  
              {/* iPhone-style Flashlight Toggle in bottom-left */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsGlowOn(!isGlowOn);
                }}
                className={`absolute bottom-10 left-3.5 z-50 w-9 h-9 rounded-full flex items-center justify-center transition-all active:scale-95 duration-300 border backdrop-blur-md ${
                  isGlowOn 
                    ? 'bg-amber-400/25 text-amber-300 border-amber-400/40 shadow-[0_0_12px_rgba(251,191,36,0.35)] hover:bg-amber-400/35' 
                    : 'bg-black/60 text-gray-500 border-white/5 hover:bg-black/80 hover:text-gray-300'
                }`}
                title={lang === 'en' ? 'Toggle Bezel Glow' : 'კანტის განათების ჩართვა'}
              >
                <Flashlight className="w-4 h-4" />
              </button>
              
              {/* DEFAULT STATS/MENU SCREEN (PREMIUM SMARTPHONE OS VIEW WITH APP GRID) */}
              <div className="flex-1 flex flex-col justify-between py-1 text-left select-none" id="stats-screen">
                {/* Header mimicking Phone Status Bar */}
                <div className="flex justify-between items-center pb-2 border-b border-[#1E1E24]/60">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00F2FE] animate-ping"></div>
                    <span className="text-[9px] font-sans font-bold tracking-widest uppercase text-gray-400">
                      {lang === 'en' ? 'Circle Mobile' : 'CIRCLE MOBILE'}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[8px] text-gray-500 font-mono">
                    <span>5G</span>
                    <div className="w-4 h-2 border border-gray-600 rounded-sm p-0.5 flex items-center">
                      <div className="w-2.5 h-full bg-emerald-500 rounded-2xs"></div>
                    </div>
                  </div>
                </div>
  
                {/* Main Home Screen Area */}
                <div className="flex-1 flex flex-col justify-start gap-4 pt-4 px-1">
                  {/* Subtle Smart Clock Widget at the top of the home screen */}
                  <div className="text-center bg-white/5 border border-white/5 backdrop-blur-md rounded-xl p-3 shadow-md">
                    <h4 className="text-[18px] font-sans font-extrabold tracking-tight text-white leading-none">
                      {new Date().toLocaleTimeString('ka-GE', { hour: '2-digit', minute: '2-digit' })}
                    </h4>
                    <p className="text-[7.5px] uppercase font-mono tracking-wider text-[#00F2FE] mt-1">
                      {lang === 'en' ? 'OUR PLATFORMS' : 'ჩვენი პლატფორმები'}
                    </p>
                  </div>
  
                  {/* 3x3 Premium Responsive App Grid */}
                  <div className="grid grid-cols-3 gap-x-3 gap-y-4 pt-1">
                    {/* App Icon 1: Instagram */}
                    <a 
                      href="https://www.instagram.com/circle.creative?igsh=MWxyaXQwemtycXFzZg=="
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => { e.stopPropagation(); }}
                      className="flex flex-col items-center gap-1 group cursor-pointer"
                    >
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#f9ce71] via-[#ee2a7b] to-[#6228d7] p-2.5 flex items-center justify-center shadow-lg shadow-[#ee2a7b]/15 hover:shadow-[#ee2a7b]/30 transform active:scale-90 group-hover:scale-105 duration-200 transition-all border border-[#ee2a7b]/20">
                        <Instagram className="w-full h-full text-white filter drop-shadow-sm" />
                      </div>
                      <span className="text-[8.5px] font-semibold text-gray-300 group-hover:text-white transition-colors text-center truncate max-w-full leading-tight">
                        {lang === 'en' ? 'Instagram' : 'ინსტაგრამი'}
                      </span>
                    </a>
  
                    {/* App Icon 2: Facebook */}
                    <a 
                      href="https://www.facebook.com/profile.php?id=61591261134927"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => { e.stopPropagation(); }}
                      className="flex flex-col items-center gap-1 group cursor-pointer"
                    >
                      <div className="w-11 h-11 rounded-xl bg-[#1877F2] p-2.5 flex items-center justify-center shadow-lg shadow-[#1877F2]/15 hover:shadow-[#1877F2]/30 transform active:scale-90 group-hover:scale-105 duration-200 transition-all border border-[#1877F2]/20">
                        <Facebook className="w-full h-full text-white filter drop-shadow-sm" />
                      </div>
                      <span className="text-[8.5px] font-semibold text-gray-300 group-hover:text-white transition-colors text-center truncate max-w-full leading-tight">
                        {lang === 'en' ? 'Facebook' : 'ფეისბუქი'}
                      </span>
                    </a>
  
                    {/* App Icon 3: LinkedIn */}
                    <a 
                      href="https://www.linkedin.com/company/circle-ge/?viewAsMember=true"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => { e.stopPropagation(); }}
                      className="flex flex-col items-center gap-1 group cursor-pointer"
                    >
                      <div className="w-11 h-11 rounded-xl bg-[#0077B5] p-2.5 flex items-center justify-center shadow-lg shadow-[#0077B5]/15 hover:shadow-[#0077B5]/30 transform active:scale-90 group-hover:scale-105 duration-200 transition-all border border-[#0077B5]/20">
                        <Linkedin className="w-full h-full text-white filter drop-shadow-sm" />
                      </div>
                      <span className="text-[8.5px] font-semibold text-gray-300 group-hover:text-white transition-colors text-center truncate max-w-full leading-tight">
                        {lang === 'en' ? 'LinkedIn' : 'ლინკდინი'}
                      </span>
                    </a>
  
                    {/* Placeholder App Icon 4 */}
                    <div className="flex flex-col items-center gap-1 opacity-25">
                      <div className="w-11 h-11 rounded-xl border border-dashed border-gray-700 bg-white/2 flex items-center justify-center">
                        <span className="text-gray-500 font-bold text-[10px]">•</span>
                      </div>
                      <span className="text-[7.5px] font-mono text-gray-600 text-center truncate max-w-full">
                        {lang === 'en' ? 'Empty' : 'ცარიელი'}
                      </span>
                    </div>
  
                    {/* Placeholder App Icon 5 */}
                    <div className="flex flex-col items-center gap-1 opacity-25">
                      <div className="w-11 h-11 rounded-xl border border-dashed border-gray-700 bg-white/2 flex items-center justify-center">
                        <span className="text-gray-500 font-bold text-[10px]">•</span>
                      </div>
                      <span className="text-[7.5px] font-mono text-gray-600 text-center truncate max-w-full">
                        {lang === 'en' ? 'Empty' : 'ცარიელი'}
                      </span>
                    </div>
  
                    {/* Placeholder App Icon 6 */}
                    <div className="flex flex-col items-center gap-1 opacity-25">
                      <div className="w-11 h-11 rounded-xl border border-dashed border-gray-700 bg-white/2 flex items-center justify-center">
                        <span className="text-gray-500 font-bold text-[10px]">•</span>
                      </div>
                      <span className="text-[7.5px] font-mono text-gray-600 text-center truncate max-w-full">
                        {lang === 'en' ? 'Empty' : 'ცარიელი'}
                      </span>
                    </div>
                  </div>
                </div>
  
                {/* Footer Mimicking Phone Dock */}
                <div className="border-t border-[#1E1E24]/60 pt-2.5 pb-0.5 flex items-center justify-center gap-4 bg-white/2 rounded-b-xl px-1">
                  <div className="w-2.5 h-1.5 rounded-full bg-[#00F2FE]/50"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-700"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-700"></div>
                </div>
              </div>
  
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
