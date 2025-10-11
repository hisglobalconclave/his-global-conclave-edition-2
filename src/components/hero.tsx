'use client';

import React, { useEffect, useRef } from 'react';

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
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate words
    const words = document.querySelectorAll<HTMLElement>('.word');
    words.forEach((word) => {
      const delay = parseInt(word.getAttribute('data-delay') || '0', 10);
      setTimeout(() => {
        word.style.animation = 'word-appear 0.8s ease-out forwards';
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
    words.forEach((word) => {
      word.addEventListener('mouseenter', () => {
        word.style.textShadow = '0 0 20px rgba(200, 180, 160, 0.5)';
      });
      word.addEventListener('mouseleave', () => {
        word.style.textShadow = 'none';
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
  }, []);

  return (
    <>
       {/* Top tagline */}
        <div className="text-center">
          <h2
            className="font-mono text-xs font-light tracking-[0.2em] uppercase opacity-80 md:text-sm flex flex-row items-center justify-center"
            style={{ color: colors[200] }}
          >
            <div className='block text-center'>
                <img className='h-[64px] w-[64px]' src="/his-global-conclave-edition-2/images/logo.svg" alt="Logo" />
            </div>
            <div className='flex flex-col'>
                <div>
                    <span className="word" data-delay="0">
                    Hindustan
                    </span>
                    <span className="word" data-delay="200">
                    International
                    </span>
                </div>
                <div className="flex">
                    <span className="word" data-delay="400">
                    School
                    </span>
                    <span className="word" data-delay="600">
                    -
                    </span>
                    <span className="word" data-delay="800">
                    Karapakkam
                    </span>
                </div>
            </div>
          </h2>
          <div
            className="mt-4 h-px w-16 opacity-30"
            style={{
              background: `linear-gradient(to right, transparent, ${colors[200]}, transparent)`,
            }}
          ></div>
        </div>

        {/* Main headline */}
        <div className="mx-auto max-w-5xl text-center">
          <h1
            className="text-decoration text-3xl leading-tight font-extralight tracking-tight md:text-5xl lg:text-6xl"
            style={{ color: colors[50] }}
          >
            <div className="mb-4 md:mb-6">
              <span className="word" data-delay="1600">
                HIS
              </span>
              <span className="word" data-delay="1750">
                Global
              </span>
              <span className="word" data-delay="1900">
                Conclave
              </span>
              <span className="word" data-delay="2050">
                Edition
              </span>
              <span className="word" data-delay="2200">
                2
              </span>
            </div>
            <div
              className="text-2xl leading-relaxed font-thin md:text-3xl lg:text-4xl"
              style={{ color: colors[200] }}
            >
              <span className="word" data-delay="2600">
                Model
              </span>
              <span className="word" data-delay="2750">
                United
              </span>
              <span className="word" data-delay="2900">
                Nations
              </span>
            </div>
          </h1>
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
        <div className="text-center">
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
            <span className="word" data-delay="3150">
              Fostering
            </span>
            <span className="word" data-delay="3300">
              Global
            </span>
            <span className="word" data-delay="3450">
              Dialogue
            </span>
            <span className="word" data-delay="3600">
              for
            </span>
            <span className="word" data-delay="3750">
              a
            </span>
            <span className="word" data-delay="3900">
              Better
            </span>
            <span className="word" data-delay="4050">
              Future
            </span>
          </h2>
          <div
            className="mt-6 flex justify-center space-x-4 opacity-0"
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
    </>
  );
}
