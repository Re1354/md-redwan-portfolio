import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

type ImageCarouselProps = {
  images: string[];
  alt: string;
  onImageClick?: () => void;
  className?: string;
};

/**
 * Sliding screenshot gallery: arrow controls, dot indicators, and a
 * horizontal slide transition. Falls back to a plain image for one shot.
 */
export function ImageCarousel({
  images,
  alt,
  onImageClick,
  className = ''
}: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = images.length;

  const go = (next: number) => {
    setDirection(next > index ? 1 : -1);
    setIndex((next + total) % total);
  };

  return (
    <div className={`relative ${className}`}>
      <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-mist">
        <AnimatePresence initial={false} mode="popLayout">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt={`${alt} — screenshot ${index + 1} of ${total}`}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -40 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={onImageClick}
            className={`absolute inset-0 h-full w-full object-cover object-top ${
              onImageClick ? 'cursor-pointer' : ''
            }`}
          />
        </AnimatePresence>

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous screenshot"
              className="absolute left-4 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-ink opacity-0 shadow-sm ring-1 ring-ink/5 transition-opacity hover:bg-white focus-visible:opacity-100 group-hover:opacity-100"
            >
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next screenshot"
              className="absolute right-4 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-ink opacity-0 shadow-sm ring-1 ring-ink/5 transition-opacity hover:bg-white focus-visible:opacity-100 group-hover:opacity-100"
            >
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <span className="absolute right-4 top-4 rounded bg-ink/90 px-2.5 py-1 font-mono text-[11px] font-medium tracking-wide text-white backdrop-blur-sm">
              {index + 1} / {total}
            </span>
          </>
        )}
      </div>

      {total > 1 && (
        <div className="mt-4 flex items-center justify-center gap-2">
          {images.map((image, dotIndex) => (
            <button
              key={image}
              type="button"
              onClick={() => go(dotIndex)}
              aria-label={`Go to screenshot ${dotIndex + 1}`}
              aria-current={dotIndex === index}
              className={`h-1.5 w-6 rounded-full transition-colors ${
                dotIndex === index ? 'bg-accent' : 'bg-line hover:bg-muted'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}