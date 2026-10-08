import React from 'react';

type SectionHeadingProps = {
  label: string;
  title: string;
  accent?: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({
  label,
  title,
  accent,
  description,
  align = 'center'
}: SectionHeadingProps) {
  const isCenter = align === 'center';
  return (
    <div className={isCenter ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <div className={`mb-6 flex items-center gap-4 ${isCenter ? 'justify-center' : ''}`}>
        <span className="h-[2px] w-6 bg-accent"></span>
        <p className="text-xs font-semibold tracking-widest text-accent uppercase">{label}</p>
      </div>
      <h2 className="text-4xl font-semibold tracking-tight text-ink sm:text-[40px] lg:leading-[1.1]">
        {title}
        {accent && (
          <>
            {' '}
            <span className="text-muted">{accent}</span>
          </>
        )}
      </h2>
      {description && (
        <p
          className={`mt-6 text-lg leading-relaxed text-muted ${
            isCenter ? 'mx-auto max-w-xl' : 'max-w-xl'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}