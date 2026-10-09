import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, Maximize2Icon, XIcon } from 'lucide-react';
import type { ProjectImage } from '../types/portfolio';

type ProjectGalleryProps = {
  images: (string | ProjectImage)[];
  projectTitle: string;
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.98
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.25 },
      scale: { duration: 0.25 }
    }
  },
  exit: (direction: number) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 0,
    scale: 0.98,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 }
    }
  })
};

export function ProjectGallery({ images, projectTitle }: ProjectGalleryProps) {
  const reduce = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Normalize image data
  const normalizedImages: ProjectImage[] = images.map((item, idx) => {
    if (typeof item === 'string') {
      return {
        src: item,
        alt: `${projectTitle} screenshot ${idx + 1}`,
        caption: undefined
      };
    }
    return item;
  });

  const total = normalizedImages.length;
  const currentImage = normalizedImages[currentIndex];

  const paginate = useCallback(
    (newDirection: number) => {
      setDirection(newDirection);
      setCurrentIndex((prev) => {
        let next = prev + newDirection;
        if (next < 0) next = total - 1;
        if (next >= total) next = 0;
        return next;
      });
    },
    [total]
  );

  const goToSlide = (index: number) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        paginate(-1);
      } else if (e.key === 'ArrowRight') {
        paginate(1);
      } else if (e.key === 'Escape' && lightboxOpen) {
        setLightboxOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [paginate, lightboxOpen]);

  if (total === 0) return null;

  return (
    <div className="relative flex flex-col">
      {/* Main Slider Viewport */}
      <div className="group relative aspect-[16/10] sm:aspect-[1.65/1] w-full overflow-hidden bg-bone/30 select-none">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={reduce ? undefined : slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            drag={total > 1 ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={(_, { offset, velocity }) => {
              if (total <= 1) return;
              const swipe = offset.x;
              if (swipe < -40 || velocity.x < -300) {
                paginate(1);
              } else if (swipe > 40 || velocity.x > 300) {
                paginate(-1);
              }
            }}
            className="absolute inset-0 flex items-center justify-center p-0"
          >
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              loading="lazy"
              decoding="async"
              onClick={() => setLightboxOpen(true)}
              className="h-full w-full object-contain cursor-zoom-in"
            />
          </motion.div>
        </AnimatePresence>

        {/* Slide navigation button: Left */}
        {total > 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              paginate(-1);
            }}
            aria-label="Previous image"
            className="absolute left-2.5 sm:left-3.5 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-line/70 bg-white/85 text-ink/75 shadow-sm backdrop-blur-md transition-all duration-150 hover:bg-white hover:text-ink hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <ChevronLeftIcon className="h-4 w-4 sm:h-4.5 sm:w-4.5" strokeWidth={2.25} />
          </button>
        )}

        {/* Slide navigation button: Right */}
        {total > 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              paginate(1);
            }}
            aria-label="Next image"
            className="absolute right-2.5 sm:right-3.5 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-line/70 bg-white/85 text-ink/75 shadow-sm backdrop-blur-md transition-all duration-150 hover:bg-white hover:text-ink hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <ChevronRightIcon className="h-4 w-4 sm:h-4.5 sm:w-4.5" strokeWidth={2.25} />
          </button>
        )}

        {/* Top-Right Fullscreen Zoom Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setLightboxOpen(true);
          }}
          aria-label="View full size image"
          className="absolute top-2.5 right-2.5 z-20 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-line/70 bg-white/85 text-muted shadow-sm backdrop-blur-md transition-all hover:bg-white hover:text-ink hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent"
        >
          <Maximize2Icon className="h-3.5 w-3.5" strokeWidth={2} />
        </button>
      </div>

      {/* Integrated Bottom Toolbar: Caption & Dots */}
      <div className="flex items-center justify-between border-t border-line bg-mist/35 px-3.5 py-2 sm:px-4 sm:py-2.5">
        {/* Left: Slide Counter & Caption */}
        <div className="flex items-center gap-2 min-w-0 pr-3">
          {total > 1 && (
            <>
              <span className="text-[11px] font-semibold text-ink/75 shrink-0">
                {currentIndex + 1} / {total}
              </span>
              <span className="text-subtle/60 text-[11px] shrink-0">·</span>
            </>
          )}
          <p className="truncate text-[12px] font-medium text-muted">
            {currentImage.caption || currentImage.alt}
          </p>
        </div>

        {/* Right: Small Clickable Pagination Dots with Clear Active State */}
        {total > 1 && (
          <div className="flex items-center gap-1.5 shrink-0" role="tablist" aria-label="Image gallery pagination">
            {normalizedImages.map((img, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={img.src}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Go to slide ${idx + 1}`}
                  onClick={() => goToSlide(idx)}
                  className={`h-1.5 transition-all duration-200 rounded-full ${
                    isActive
                      ? 'w-4 sm:w-5 bg-accent shadow-sm'
                      : 'w-1.5 bg-line hover:bg-subtle'
                  }`}
                />
              );
            })}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
            onClick={() => setLightboxOpen(false)}
          >
            <div
              className="relative max-h-[90vh] max-w-[95vw] overflow-hidden rounded-2xl bg-white/5 p-2 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                className="max-h-[82vh] w-auto max-w-full rounded-xl object-contain select-none"
              />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                aria-label="Close fullscreen view"
                className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-all hover:bg-black/90 hover:scale-105"
              >
                <XIcon className="h-5 w-5" strokeWidth={2.5} />
              </button>

              {/* Lightbox Nav: Left */}
              <button
                type="button"
                onClick={() => paginate(-1)}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-all hover:bg-black/90 hover:scale-105"
              >
                <ChevronLeftIcon className="h-7 w-7" strokeWidth={2.5} />
              </button>

              {/* Lightbox Nav: Right */}
              <button
                type="button"
                onClick={() => paginate(1)}
                aria-label="Next image"
                className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-all hover:bg-black/90 hover:scale-105"
              >
                <ChevronRightIcon className="h-7 w-7" strokeWidth={2.5} />
              </button>

              {/* Caption */}
              <div className="mt-2 text-center text-[13.5px] font-medium text-white/90">
                {currentImage.caption || currentImage.alt} ({currentIndex + 1} of {total})
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
