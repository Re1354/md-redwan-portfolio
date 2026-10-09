import React from 'react';

type RotatingBadgeProps = {text: string;className?: string;};

export function RotatingBadge({ text, className = '' }: RotatingBadgeProps) {
  return (
    <div
      aria-hidden="true"
      className={`relative rounded-full border border-line/70 bg-white shadow-soft-lg ${className}`}>
      
      <svg viewBox="0 0 120 120" className="h-full w-full animate-[spin_30s_linear_infinite] motion-reduce:animate-none">
        <defs>
          <path id="badge-circle" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
        </defs>
        <text fontSize="9" fontWeight={600} letterSpacing="1.4" fill="#1b2340" fontFamily="Montserrat, sans-serif">
          <textPath href="#badge-circle" textLength="274" lengthAdjust="spacing">
            {text}
          </textPath>
        </text>
      </svg>
      <span className="absolute inset-0 m-auto h-3 w-3 rounded-full bg-accent" />
      <span className="absolute inset-0 m-auto h-7 w-7 rounded-full border border-accent/25" />
    </div>);

}