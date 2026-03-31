'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { useScroll, useTransform, useSpring } from 'framer-motion';

const TOTAL_FRAMES = 120;

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);
  const currentFrameRef = useRef(-1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
    restDelta: 0.001,
  });

  const frameIndex = useTransform(smoothProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

  useEffect(() => {
    const promises: Promise<void>[] = [];

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `/sequence/frame_${String(i).padStart(3, '0')}.webp`;
      imagesRef.current[i] = img;
      promises.push(
        new Promise<void>((resolve) => {
          img.onload = () => resolve();
          img.onerror = () => resolve();
        })
      );
    }

    Promise.all(promises).then(() => setLoaded(true));
  }, []);

  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const img = imagesRef.current[index];
    if (!canvas || !ctx || !img?.complete || !img.naturalWidth) return;

    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    const imgAspect = img.naturalWidth / img.naturalHeight;
    const canvasAspect = w / h;
    let sx = 0, sy = 0, sw = img.naturalWidth, sh = img.naturalHeight;

    if (imgAspect > canvasAspect) {
      sw = img.naturalHeight * canvasAspect;
      sx = (img.naturalWidth - sw) / 2;
    } else {
      sh = img.naturalWidth / canvasAspect;
      sy = (img.naturalHeight - sh) / 2;
    }

    ctx.clearRect(0, 0, w, h);
    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, w, h);
  }, []);

  useEffect(() => {
    if (!loaded) return;

    const unsub = frameIndex.on('change', (v) => {
      const idx = Math.round(Math.max(0, Math.min(TOTAL_FRAMES - 1, v)));
      if (idx !== currentFrameRef.current) {
        currentFrameRef.current = idx;
        drawFrame(idx);
      }
    });

    return () => unsub();
  }, [loaded, frameIndex, drawFrame]);

  useEffect(() => {
    const handleResize = () => {
      if (currentFrameRef.current >= 0) {
        drawFrame(currentFrameRef.current);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [drawFrame]);

  return (
    <div ref={containerRef} className="relative" style={{ height: '500vh' }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#0a0a0a]">
        <canvas
          ref={canvasRef}
          className="h-full w-full"
          style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.6s ease' }}
        />
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white/40 text-sm tracking-widest uppercase font-display">
              Loading
              <span className="animate-pulse">...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
