import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { DURATION, EASE_OUT } from '../utils/motion';

type PortraitOrbitProps = {src: string;alt: string;};

/*
 * The orbit ring and green dot are part of the portrait image (1024 × 768).
 * This traces that existing ellipse in image coordinates, masks the baked-in dot,
 * and moves a matching dot along the same path. Fine-tune here if the dot drifts off the line.
 */
const ORBIT = {
  cx: 579,
  cy: 486,
  rx: 450,
  ry: 110,
  rotationDeg: -28.8,
  startT: -0.2321, // parameter where the original dot sits (950, 253)
  periodMs: 28000,
  dot: { x: 950, y: 253, r: 5.5 }
};

// Region of the portrait that sits in front of the orbit (head + shoulders).
const OCCLUDER: [number, number][] = [
[452, 105], [722, 105], [722, 300], [895, 400], [905, 640], [948, 768],
[272, 768], [298, 640], [330, 560], [420, 472], [492, 445], [468, 300]];


const PAPER = '#f9f9f8';
const DOT_COLOR = '#1f8a65';

export function PortraitOrbit({ src, alt }: PortraitOrbitProps) {
  const reduce = useReducedMotion();
  const [loaded, setLoaded] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (reduce || !loaded) return;
    const wrap = wrapRef.current;
    const dot = dotRef.current;
    if (!wrap || !dot) return;

    let raf = 0;
    let last = 0;
    let t = ORBIT.startT;
    let opacity = 1;

    const tick = (now: number) => {
      const dt = last ? Math.min(now - last, 64) : 16;
      last = now;
      t += dt / ORBIT.periodMs * Math.PI * 2;
      const { x, y } = orbitPoint(t);
      const target = isInside(x, y, OCCLUDER) ? 0 : 1;
      opacity += (target - opacity) * Math.min(1, dt / 90);
      dot.setAttribute('cx', x.toFixed(2));
      dot.setAttribute('cy', y.toFixed(2));
      dot.setAttribute('opacity', opacity.toFixed(3));
      raf = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(([entry]) => {
      cancelAnimationFrame(raf);
      if (entry.isIntersecting) {
        last = 0;
        raf = requestAnimationFrame(tick);
      }
    });
    observer.observe(wrap);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [reduce, loaded]);

  return (
    <motion.div
      ref={wrapRef}
      className="relative aspect-[4/3] w-full"
      initial={{ opacity: 0, scale: reduce ? 1 : 0.985 }}
      animate={loaded ? { opacity: 1, scale: 1 } : undefined}
      transition={{ duration: DURATION.slow, ease: EASE_OUT, delay: 0.1 }}>
      
      <img
        src={src}
        alt={alt}
        width={1024}
        height={768}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className="absolute inset-0 h-full w-full select-none object-contain mix-blend-multiply"
        draggable={false} />
      
      {loaded && !reduce &&
      <svg viewBox="0 0 1024 768" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
          {/* Mask the static dot and restore the orbit line beneath it */}
          <circle cx={ORBIT.dot.x} cy={ORBIT.dot.y} r={8.5} fill={PAPER} />
          <line x1={941.5} y1={250.7} x2={958.5} y2={256.3} stroke="#4f9f84" strokeWidth={1.1} strokeOpacity={0.85} />
          <circle ref={dotRef} cx={ORBIT.dot.x} cy={ORBIT.dot.y} r={ORBIT.dot.r} fill={DOT_COLOR} />
        </svg>
      }
    </motion.div>);

}

function orbitPoint(t: number) {
  const rad = ORBIT.rotationDeg * Math.PI / 180;
  const cr = Math.cos(rad);
  const sr = Math.sin(rad);
  const ct = Math.cos(t);
  const st = Math.sin(t);
  return {
    x: ORBIT.cx + ORBIT.rx * ct * cr - ORBIT.ry * st * sr,
    y: ORBIT.cy + ORBIT.rx * ct * sr + ORBIT.ry * st * cr
  };
}

function isInside(x: number, y: number, poly: [number, number][]) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i];
    const [xj, yj] = poly[j];
    if (yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}