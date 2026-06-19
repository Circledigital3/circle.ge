import React from 'react';

interface CompanyLogoProps {
  variant?: 'symbol' | 'full';
  className?: string;
}

export default function CompanyLogo({ variant = 'full', className = '' }: CompanyLogoProps) {
  // If variant is "symbol", we crop tightly around the circle
  const viewBox = variant === 'symbol' ? '25 22 115 116' : '25 22 233 116';

  return (
    <svg
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      id={`company-logo-${variant}`}
    >
      <defs>
        {/* Glow Filter for the neon/laser effect */}
        <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Outer thin arc gradient - Indigo/Purple on bottom left to Cyan on top/right */}
        <linearGradient id="outerArcGrad" x1="29" y1="136" x2="131.5" y2="48.6" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#c084fc" /> {/* purple */}
          <stop offset="40%" stopColor="#4f46e5" /> {/* indigo */}
          <stop offset="70%" stopColor="#2563eb" /> {/* blue */}
          <stop offset="100%" stopColor="#00f2fe" /> {/* cyan */}
        </linearGradient>

        {/* Inner thin arc gradient - reversed or offset for contrast */}
        <linearGradient id="innerArcGrad" x1="46" y1="118.8" x2="117.4" y2="58.2" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="60%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>

        {/* Thick neon arc base gradient (cyan-cyan) */}
        <linearGradient id="neonBaseGrad" x1="124" y1="53.7" x2="40" y2="106.3" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00f2fe" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>

        {/* Horizontal text gradient - Cyan to Purple */}
        <linearGradient id="textHorizontalGrad" x1="145.5" y1="0" x2="254" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00f2fe" />     {/* Cyan */}
          <stop offset="40%" stopColor="#2563eb" />    {/* Intense Blue */}
          <stop offset="70%" stopColor="#6366f1" />    {/* Indigo */}
          <stop offset="100%" stopColor="#9d4edd" />   {/* Violet/Purple */}
        </linearGradient>
      </defs>

      {/* SYMBOL PORTION (Centered at cx=85, cy=80) */}
      <g id="logo-circle-group">
        {/* 1. Outer thin sweep arc */}
        {/* R=56. Sweeps counter-clockwise from top-right to bottom-right through left */}
        <path
          d="M 130.5,50 A 55,55 0 1,0 130.5,110"
          stroke="url(#outerArcGrad)"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
          opacity="0.9"
        />

        {/* 2. Middle Thick Glowing Neon Cyan Arc */}
        {/* R=47. The core laser line. */}
        <path
          d="M 124,53.7 A 47,47 0 1,0 124,106.3"
          stroke="url(#neonBaseGrad)"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          filter="url(#neonGlow)"
        />

        {/* 2.1. Laser Arc Hot Highlight Spot (creates the 3D core glow inside the thick arc) */}
        <path
          d="M 124,53.7 A 47,47 0 1,0 124,106.3"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.95"
        />

        {/* 3. Inner-most thin sweep arc */}
        {/* R=39. Sweeps counter-clockwise inside. */}
        <path
          d="M 117.4,58.2 A 39,39 0 1,0 117.4,101.8"
          stroke="url(#innerArcGrad)"
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
          opacity="0.8"
        />
      </g>

      {/* TEXT PORTION ("IRCLE") */}
      {variant === 'full' && (
        <g id="logo-text-group">
          {/* I */}
          <path
            d="M 145.5,71.5 h 4 v 17 h -4 Z"
            fill="url(#textHorizontalGrad)"
          />

          {/* R */}
          <path
            d="M 158.5,71.5 h 4 v 17 h -4 Z"
            fill="url(#textHorizontalGrad)"
          />
          <path
            d="M 162.5,71.5 h 11 c 2.5,0 4.5,1.2 4.5,3.5 v 0.2 c 0,2.3 -2,3.5 -4.5,3.5 h -11 Z M 166.5,74.5 v 2.2 h 7 c 1,0 1.5,-0.3 1.5,-0.9 v -0.1 c 0,-0.6 -0.5,-0.9 -1.5,-0.9 Z"
            fill="url(#textHorizontalGrad)"
            fillRule="evenodd"
          />
          <path
            d="M 166.5,80 h 4 l 7.5,8.5 h -4.8 Z"
            fill="url(#textHorizontalGrad)"
          />

          {/* C */}
          <path
            d="M 185.5,71.5 h 19.5 v 3.2 h -15.5 v 10.6 h 15.5 v 3.2 h -19.5 Z"
            fill="url(#textHorizontalGrad)"
          />

          {/* L */}
          <path
            d="M 211.5,71.5 h 4 v 13.8 h 13 v 3.2 h -17 Z"
            fill="url(#textHorizontalGrad)"
          />

          {/* E */}
          <path
            d="M 234.5,71.5 h 19.5 v 3.2 h -15.5 v 3.4 h 13.5 v 3.2 h -13.5 v 3.7 h 15.5 v 3.2 h -19.5 Z"
            fill="url(#textHorizontalGrad)"
          />
        </g>
      )}
    </svg>
  );
}
