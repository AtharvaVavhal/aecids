'use client';

import React, { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduce) {
      setEnabled(false);
      return;
    }

    const wrapper = wrapperRef.current || undefined;
    const content = wrapperRef.current?.querySelector('.lenis__scroll') || undefined;

    let lenis: any;
    try {
      lenis = new Lenis({
      wrapper,
      content,
      duration: 1.0,
      easing: (t: number) => 1 - Math.pow(1 - t, 4), // soft expo-out like feel
      wheelMultiplier: 1.05,
      smooth: true,
      smoothTouch: true,
    } as any);
    } catch (err) {
      // initialization failed; leave Lenis disabled
      setEnabled(false);
      return;
    }

    setEnabled(true);

    function raf(time: number) {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }

    rafRef.current = requestAnimationFrame(raf);
    let rafId: number | null = null;

    // Retry initialization until wrapper and content are available (max attempts)
    let attempts = 0;
    const maxAttempts = 30;

    const tryInit = () => {
      attempts += 1;
      const wrapper = wrapperRef.current;
      const content = wrapperRef.current?.querySelector('.lenis__scroll') || undefined;

      if (!wrapper || !content) {
        if (attempts < maxAttempts) {
          rafId = requestAnimationFrame(tryInit);
        } else {
          setEnabled(false);
        }
        return;
      }

      try {
        lenis = new Lenis({
          wrapper,
          content,
          duration: 1.0,
          easing: (t: number) => 1 - Math.pow(1 - t, 4), // soft expo-out like feel
          wheelMultiplier: 1.05,
          smooth: true,
          smoothTouch: true,
        } as any);
      } catch (err) {
        setEnabled(false);
        return;
      }

      setEnabled(true);

      function raf(time: number) {
        lenis.raf(time);
        rafRef.current = requestAnimationFrame(raf);
      }

      rafRef.current = requestAnimationFrame(raf);
    };

    // kick off init loop
    rafId = requestAnimationFrame(tryInit);

    // Intercept anchor clicks and use lenis.scrollTo
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element).closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!el) return;
      const href = el.getAttribute('href') || '';
      const hash = href.replace(/^#/, '');
      if (!hash) return;
      const target = document.getElementById(hash);
      if (target) {
        e.preventDefault();
        const navH = document.querySelector('header')?.clientHeight ?? 0;
        lenis.scrollTo(target, { offset: -navH - 8 });
      }
    };
    document.addEventListener('click', onClick);

    const onHash = () => {
      const hash = location.hash.slice(1);
      if (!hash) return;
      const target = document.getElementById(hash);
      if (target) {
        const navH = document.querySelector('header')?.clientHeight ?? 0;
        lenis.scrollTo(target, { offset: -navH - 8 });
      }
    };
    window.addEventListener('hashchange', onHash);

    return () => {
      document.removeEventListener('click', onClick);
      window.removeEventListener('hashchange', onHash);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (rafId) cancelAnimationFrame(rafId);
      try {
        if (lenis) lenis.destroy();
      } catch (err) {
        // ignore destroy errors
      }
      setEnabled(false);
    };
  }, []);

  const wrapperStyle: React.CSSProperties = enabled
    ? { overflow: 'hidden', position: 'fixed', inset: 0, height: '100%', width: '100%' }
    : { overflow: 'auto', position: 'static', height: 'auto' };

  return (
    <div className="lenis" ref={wrapperRef} style={wrapperStyle}>
      <div className="lenis__scroll">{children}</div>
    </div>
  );
}

export default LenisProvider;
