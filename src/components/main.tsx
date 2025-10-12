'use client';

import React, { useEffect, useRef, useState } from 'react';
import PageDecider from '@/components/page-decider';
import Logo from '@/components/logo';
import Image from 'next/image';


const colors = {
  50: '#f8f7f5',
  100: '#e6e1d7',
  200: '#c8b4a0',
  300: '#a89080',
  400: '#8a7060',
  500: '#6b5545',
  600: '#544237',
  700: '#3c4237',
  800: '#2a2e26',
  900: '#1a1d18',
};

export default function MinimalHero() {
  const [page, setPage] = useState<'hero' | 'uneso' | 'unhcr' | 'unodc' | 'unsc' | 'unoosa' | 'disec' | 'cgsd'>("hero");
  const gradientRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Only run the hero-specific DOM effects when the hero is visible
    if (page !== 'hero') return;
    // Animate words
    const animatedElements = document.querySelectorAll<HTMLElement>('.word, .committee-icon-animation');
    animatedElements.forEach((element) => {
      const delay = parseInt(element.getAttribute('data-delay') || '0', 10);
      setTimeout(() => {
        element.style.animation = 'word-appear 0.8s ease-out forwards';
      }, delay);
    });

    // Mouse gradient
    const gradient = gradientRef.current;
    function onMouseMove(e: MouseEvent) {
      if (gradient) {
        gradient.style.left = e.clientX - 192 + 'px';
        gradient.style.top = e.clientY - 192 + 'px';
        gradient.style.opacity = '1';
      }
    }
    function onMouseLeave() {
      if (gradient) gradient.style.opacity = '0';
    }
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    // Word hover effects
    animatedElements.forEach((element) => {
      element.addEventListener('mouseenter', () => {
        element.style.textShadow = '0 0 20px rgba(200, 180, 160, 0.5)';
      });
      element.addEventListener('mouseleave', () => {
        element.style.textShadow = 'none';
      });
    });

    // Click ripple effect
    function onClick(e: MouseEvent) {
      const ripple = document.createElement('div');
      ripple.style.position = 'fixed';
      ripple.style.left = e.clientX + 'px';
      ripple.style.top = e.clientY + 'px';
      ripple.style.width = '4px';
      ripple.style.height = '4px';
      ripple.style.background = 'rgba(200, 180, 160, 0.6)';
      ripple.style.borderRadius = '50%';
      ripple.style.transform = 'translate(-50%, -50%)';
      ripple.style.pointerEvents = 'none';
      ripple.style.animation = 'pulse-glow 1s ease-out forwards';
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 1000);
    }
    document.addEventListener('click', onClick);

    // Floating elements on scroll
    let scrolled = false;
    function onScroll() {
      if (!scrolled) {
        scrolled = true;
        document
          .querySelectorAll<HTMLElement>('.floating-element')
          .forEach((el, index) => {
            setTimeout(() => {
              el.style.animationPlayState = 'running';
            }, index * 200);
          });
      }
    }
    window.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('click', onClick);
      window.removeEventListener('scroll', onScroll);
    };
  }, [page]);

  return (
    <div className="font-primary relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#1a1d18] via-black to-[#2a2e26] text-[#e6e1d7]">
      {page === 'hero' ? (
        <>
            {/* Background SVG grid and animated lines/dots */}
          <svg
            className="absolute inset-0 h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(200,180,160,0.08)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <line x1="0" y1="20%" x2="100%" y2="20%" className="grid-line" style={{ animationDelay: '0.5s' }} />
            <line x1="0" y1="80%" x2="100%" y2="80%" className="grid-line" style={{ animationDelay: '1s' }} />
            <line x1="20%" y1="0" x2="20%" y2="100%" className="grid-line" style={{ animationDelay: '1.5s' }} />
            <line x1="80%" y1="0" x2="80%" y2="100%" className="grid-line" style={{ animationDelay: '2s' }} />
            <line x1="50%" y1="0" x2="50%" y2="100%" className="grid-line" style={{ animationDelay: '2.5s', opacity: 0.05 }} />
            <line x1="0" y1="50%" x2="100%" y2="50%" className="grid-line" style={{ animationDelay: '3s', opacity: 0.05 }} />
            <circle cx="20%" cy="20%" r="2" className="detail-dot" style={{ animationDelay: '3s' }} />
            <circle cx="80%" cy="20%" r="2" className="detail-dot" style={{ animationDelay: '3.2s' }} />
            <circle cx="20%" cy="80%" r="2" className="detail-dot" style={{ animationDelay: '3.4s' }} />
            <circle cx="80%" cy="80%" r="2" className="detail-dot" style={{ animationDelay: '3.6s' }} />
            <circle cx="50%" cy="50%" r="1.5" className="detail-dot" style={{ animationDelay: '4s' }} />
          </svg>

          {/* Corner elements */}
          <div className="corner-element top-8 left-8" style={{ animationDelay: '4s' }}>
            <div className="absolute top-0 left-0 h-2 w-2 opacity-30" style={{ background: colors[200] }} />
          </div>
          <div className="corner-element top-8 right-8" style={{ animationDelay: '4.2s' }}>
            <div className="absolute top-0 right-0 h-2 w-2 opacity-30" style={{ background: colors[200] }} />
          </div>
          <div className="corner-element bottom-8 left-8" style={{ animationDelay: '4.4s' }}>
            <div className="absolute bottom-0 left-0 h-2 w-2 opacity-30" style={{ background: colors[200] }} />
          </div>
          <div className="corner-element right-8 bottom-8" style={{ animationDelay: '4.6s' }}>
            <div className="absolute right-0 bottom-0 h-2 w-2 opacity-30" style={{ background: colors[200] }} />
          </div>

          {/* Floating elements */}
          <div className="floating-element" style={{ top: '25%', left: '15%', animationDelay: '5s' }} />
          <div className="floating-element" style={{ top: '60%', left: '85%', animationDelay: '5.5s' }} />
          <div className="floating-element" style={{ top: '40%', left: '10%', animationDelay: '6s' }} />
          <div className="floating-element" style={{ top: '75%', left: '90%', animationDelay: '6.5s' }} />

          <Logo />

          <div className='h-full w-full min-h-screen px-4'>
            

            {/* Hero Text */}
            <div className='flex flex-col items-center justify-between w-full h-screen'>
                <div className='None h-[110px]'></div>

                {/* Main headline */}
                <div className="relative mx-auto max-w-5xl text-center mt-50 md:mt-0 md:mb-20">
                    <h1
                        className="text-decoration text-3xl leading-tight font-extralight tracking-tight md:text-5xl lg:text-6xl"
                        style={{ color: colors[50] }}
                    >
                        <div className="mb-4 md:mb-6">
                            <div className='block'>
                                <span className="word" data-delay="1150">
                                    HIS
                                </span>
                                <span className="word" data-delay="1300">
                                    Global
                                </span>
                            </div>
                            <div className='block'>
                                <span className="word" data-delay="1450">
                                    Conclave
                                </span>
                                <span className="word" data-delay="1700">
                                    Edition
                                </span>
                                <span className="word" data-delay="1850">
                                    2
                                </span>
                            </div>
                        </div>
                        <div
                            className="text-2xl leading-relaxed font-thin md:text-3xl lg:text-4xl"
                            style={{ color: colors[200] }}
                        >
                            <span className="word" data-delay="2100">
                                Model
                            </span>
                            <span className="word" data-delay="2250">
                                United
                            </span>
                            <span className="word" data-delay="2400">
                                Nations
                            </span>
                        </div>
                    </h1>

                    {/* Left Side Committee Icons */}
                    <div className='absolute left-side-committee-icons md:flex md:flex-col hidden'>
                        
                        {/* Animated SVG line */}
                        {/* <svg
                            width="500px"
                            height="60"
                            className="absolute left-0 top-0"
                            style={{ pointerEvents: 'none', zIndex: 1 }}
                        >
                            <polyline
                                points="50,30 20,0 0,0"
                                stroke="#ffffff"
                                strokeWidth="4"
                                fill="none"
                            />
                        </svg>    */} 
                        <button onClick={() => setPage('uneso')} className="committee-icon-animation relative flex items-center group" data-delay="4100">
                            {/* Committee icon */}
                            <Image
                                className="committee-icon"
                                src="/his-global-conclave-edition-2/images/un_emblem_blue.webp"
                                alt=""
                                style={{ zIndex: 2 }}
                                
                            />
                            <span className='mono-label absolute bottom-0 left-1/2 translate -translate-x-1/2 translate-y-8'>UNESO</span>
                        </button>
                        <button onClick={() => setPage('unhcr')} className="committee-icon-animation relative flex items-center group mt-30" data-delay="3800">
                            {/* Committee icon */}
                            <Image
                                className="committee-icon"
                                src="/his-global-conclave-edition-2/images/un_emblem_blue.webp"
                                alt=""
                                style={{ zIndex: 2 }}
                            />
                            <span className='mono-label absolute bottom-0 left-1/2 translate -translate-x-1/2 translate-y-8'>UNHCR</span>
                        </button>
                    </div>

                    {/* Center Side Committee Icons */}
                    <div className='absolute center-side-committee-icons md:flex w-full flex-row items-center justify-between hidden'>

                        <button onClick={() => setPage('unoosa')} className="committee-icon-animation relative flex items-center group translate -translate-x-10" data-delay="4500">
                            {/* Committee icon */}
                            <Image
                                className="committee-icon"
                                src="/his-global-conclave-edition-2/images/un_emblem_blue.webp"
                                alt=""
                                style={{ zIndex: 2 }}
                            />
                            <span className='mono-label absolute bottom-0 left-1/2 translate -translate-x-1/2 translate-y-8'>UNOOSA</span>
                        </button>

                        <button onClick={() => setPage('disec')} className="committee-icon-animation relative flex items-center group pb-20" data-delay="4800">
                            {/* Committee icon */}
                            <Image
                                className="committee-icon"
                                src="/his-global-conclave-edition-2/images/un_emblem_blue.webp"
                                alt=""
                                style={{ zIndex: 2 }}
                            />
                            <span className='mono-label absolute bottom-0 left-1/2 translate -translate-x-1/2 translate-y-8 pb-20'>DISEC</span>
                        </button>

                        <button onClick={() => setPage('cgsd')} className="committee-icon-animation relative flex items-center group translate translate-x-10" data-delay="5100">
                            {/* Committee icon */}
                            <Image
                                className="committee-icon"
                                src="/his-global-conclave-edition-2/images/un_emblem_blue.webp"
                                alt=""
                                style={{ zIndex: 2 }}
                            />
                            <span className='mono-label absolute bottom-0 left-1/2 translate -translate-x-1/2 translate-y-8'>CGSD</span>
                        </button>
                    </div>

                    {/* Right Side Committee Icons */}
                    <div className="absolute right-side-committee-icons md:flex md:flex-col hidden">
                        <button onClick={() => setPage('unodc')} className="committee-icon-animation relative flex items-center group" data-delay="5400">
                            {/* Committee icon */}
                            <Image
                                className="committee-icon"
                                src="/his-global-conclave-edition-2/images/un_emblem_blue.webp"
                                alt=""
                                style={{ zIndex: 2 }}
                            />
                            <span className='mono-label absolute bottom-0 left-1/2 translate -translate-x-1/2 translate-y-8'>UNODC</span>
                        </button>
                        <button onClick={() => setPage('unsc')} className="committee-icon-animation relative flex items-center group mt-30" data-delay="5700">
                            {/* Committee icon */}
                            <Image
                                className="committee-icon"
                                src="/his-global-conclave-edition-2/images/un_emblem_blue.webp"
                                alt=""
                                style={{ zIndex: 2 }}
                            />
                            <span className='mono-label absolute bottom-0 left-1/2 translate -translate-x-1/2 translate-y-8'>UNSC</span>
                        </button>
                    </div>

                    <div
                        className="absolute top-1/2 -left-8 h-px w-4 opacity-20"
                        style={{
                        background: colors[200],
                        animation: 'word-appear 1s ease-out forwards',
                        animationDelay: '3.5s',
                        }}
                    ></div>
                    <div
                        className="absolute top-1/2 -right-8 h-px w-4 opacity-20"
                        style={{
                        background: colors[200],
                        animation: 'word-appear 1s ease-out forwards',
                        animationDelay: '3.7s',
                        }}
                    ></div>
                </div>

                {/* Bottom tagline */}
                <div className="text-center mt-50 md:mt-0">
                    <div
                        className="mb-4 h-px w-16 opacity-30"
                        style={{
                        background: `linear-gradient(to right, transparent, ${colors[200]}, transparent)`,
                        }}
                    ></div>
                    <h2
                        className="font-mono text-xs font-light tracking-[0.2em] uppercase opacity-80 md:text-sm"
                        style={{ color: colors[200] }}
                    >
                        <span className="word" data-delay="2650">
                        Fostering
                        </span>
                        <span className="word" data-delay="2800">
                        Global
                        </span>
                        <span className="word" data-delay="2950">
                        Dialogue
                        </span>
                        <span className="word" data-delay="3200">
                        for
                        </span>
                        <span className="word" data-delay="3350">
                        a
                        </span>
                        <span className="word" data-delay="3500">
                        Better
                        </span>
                        <span className="word" data-delay="3650">
                        Future
                        </span>
                    </h2>
                    <div
                        className="mt-6 flex justify-center pb-10 space-x-4 opacity-0"
                        style={{
                        animation: 'word-appear 1s ease-out forwards',
                        animationDelay: '4.5s',
                        }}
                    >
                        <div
                        className="h-1 w-1 rounded-full opacity-40"
                        style={{ background: colors[200] }}
                        ></div>
                        <div
                        className="h-1 w-1 rounded-full opacity-60"
                        style={{ background: colors[200] }}
                        ></div>
                        <div
                        className="h-1 w-1 rounded-full opacity-40"
                        style={{ background: colors[200] }}
                        ></div>
                    </div>
                </div>
            </div>
          </div>

          <div
            id="mouse-gradient"
            ref={gradientRef}
            className="pointer-events-none fixed h-96 w-96 rounded-full opacity-0 blur-3xl transition-all duration-500 ease-out"
            style={{
              background: `radial-gradient(circle, ${colors[500]}0D 0%, transparent 100%)`,
            }}
          />
        </>
      ) : (
        // Committee page view replaces the hero when a committee is selected
        <div className="min-h-screen w-full p-6">
          <button
            onClick={() => setPage('hero')}
            className="mb-6 px-4 py-2 rounded bg-neutral-800 text-neutral-100"
          >
            ← Back
          </button>

          <div className="w-full">
            <PageDecider renderPage={page} />
          </div>
        </div>
      )}
    </div>
  );
}
