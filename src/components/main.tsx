'use client';

import React, { useEffect, useRef, useState } from 'react';
import PageDecider from '@/components/page-decider';
import Logo from '@/components/logo';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import Image from 'next/image';
import { Mouse, ArrowLeft } from 'lucide-react';


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
  const [page, setPage] = useState<'hero' | 'unesco' | 'unhcr' | 'unodc' | 'unsc' | 'unoosa' | 'disec' | 'ecosoc'>("hero");
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const [clickedOnce, setClickedOnce] = useState(false);
  const committeeLineWaitTime = animationPlayed ? 0 : 6000;
  const gradientRef = useRef<HTMLDivElement>(null);

  
  
    useEffect(() => {
    // Only run the hero-specific DOM effects when the hero is visible
    if (page !== 'hero') return;

        const animatedElements = document.querySelectorAll<HTMLElement>(
                '.word, .committee-icon-animation, .custom-button, .highlighted-text'
                );

        // If animation has played, make animated elements visible immediately
        if (animationPlayed) {
            document.querySelectorAll<HTMLElement>('.word, .committee-icon, .committee-icon-animation, .custom-button, .highlighted-text, .icons, .mobile-committee-icon-animation').forEach((element) => {
                element.style.opacity = '1';
            });
        }

        if (!animationPlayed) {
                // Set animation true if committee icons are pressed
                document.querySelectorAll<HTMLElement>('.committee-icon').forEach((icon) => {
                    icon.addEventListener('click', () => {
                        setAnimationPlayed(true);
                    });
                });

                // Animation for animated elements
                animatedElements.forEach((element) => {
                    const delay = parseInt(element.getAttribute('data-delay') || '0', 10);
                    setTimeout(() => {
                        element.style.animation = 'word-appear 0.8s ease-out forwards';
                        setTimeout(() => {
                            element.style.opacity = '1';
                            element.style.animation = 'none';
                        }, 1000);
                    }, delay);
                });

                // Seperate animation for committee icons
                document.querySelectorAll<HTMLElement>('.icons').forEach((element) => {
                    const delay = parseInt(element.getAttribute('data-delay') || '0', 10);
                    setTimeout(() => {
                        element.style.opacity = '1';
                        element.style.animation = 'var(--animate-bounce)';
                    }, delay);
                });
        }

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

    // Hover glow effect
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

    // Mobile committee icon animation
    const mobileCommitteeIconAnimationDone = [false, false, false, false, false, false, false];
    function animateMobileIcons() {
        document.querySelectorAll<HTMLElement>('.mobile-committee-icon-animation').forEach((element, index) => {
            if (window.scrollY > ((window.innerHeight / 15) * (index == 1 || index == 6 ? index - 1: index)) && !mobileCommitteeIconAnimationDone[index] && !animationPlayed) {
                console.log(window.scrollY, index);
                const delay = parseInt(element.getAttribute('data-delay') || '0', 10);
                setTimeout(() => {
                    element.style.animation = 'word-appear 0.8s ease-out forwards';
                    setTimeout(() => {
                        element.style.opacity = '1';
                        element.style.animation = 'none';
                    }, 1000);
                }, delay);
                mobileCommitteeIconAnimationDone[index] = true;
            }
        });
    }
    window.addEventListener('scroll', animateMobileIcons);
        return () => {
            // clear any scheduled animation timeouts to avoid them firing after unmount
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseleave', onMouseLeave);
            document.removeEventListener('click', onClick);
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('scroll', animateMobileIcons);
            document.querySelectorAll<HTMLElement>('.committee-icon').forEach((icon) => {
                icon.removeEventListener('click', () => {
                    setAnimationPlayed(true);
                });
            });
        };
    }, [page, animationPlayed]);

      // Ping animation for expandable card once clicked
    useEffect(() => {
        if (typeof document === 'undefined') return;

        const expandableCards = document.querySelectorAll<HTMLElement>('.eb-unactive');
        const handlers = new Map<HTMLElement, EventListener>();

        if (!clickedOnce) {
            expandableCards.forEach((card) => {
                const ping = document.createElement('span');
                ping.className = "ping absolute inline-flex top-[-3px] right-[-3px] size-3 animate-ping rounded-full bg-sky-400 opacity-75";
                const dot = document.createElement('span');
                dot.className = "dot absolute inline-flex top-[-3px] right-[-3px] size-3 rounded-full bg-sky-500";
                card.appendChild(ping);
                card.appendChild(dot);

                const onClick = () => {
                    setClickedOnce(true); // set clickedOnce to true on first user click
                    // hide pings immediately after click
                    ping.classList.add('hidden');
                    dot.classList.add('hidden');
                };
                card.addEventListener('click', onClick);
                handlers.set(card, onClick);
            });
        } else {
            // hide any remaining pings/dots
            expandableCards.forEach((card) => {
                const ping = card.querySelector('.ping');
                const dot = card.querySelector('.dot');
                if (ping && dot && !ping.classList.contains('hidden') && !dot.classList.contains('hidden')) {
                    ping.classList.add('hidden');
                    dot.classList.add('hidden');
                }
                // still attach a click handler to ensure state remains true if clicked again
                const onClick = () => setClickedOnce(true);
                card.addEventListener('click', onClick);
                handlers.set(card, onClick);
            });
        }

        return () => {
            // cleanup: remove inserted elements and event listeners
            expandableCards.forEach((card) => {
                const ping = card.querySelector('.ping');
                const dot = card.querySelector('.dot');
                if (ping) ping.remove();
                if (dot) dot.remove();

                const handler = handlers.get(card);
                if (handler) card.removeEventListener('click', handler);
            });
            handlers.clear();
        };
    }, [clickedOnce, page]);

  return (
    <div className="font-primary relative min-h-screen w-full overflow-hidden bg-gradient-to-b md:bg-gradient-to-br from-[#1a1d18] via-black to-[#2a2e26] text-[#e6e1d7]">
      {page === 'hero' ? (
        /* Hero Page */
        <>
          {/* Animated committee lines */}
          <div></div>
          <div id='unesco-connector' className='connectors md:inline hidden'></div>
          <div id='unhcr-connector' className='connectors md:inline hidden'></div>
          <div id='unoosa-connector' className='connectors md:inline hidden'></div>
          <div id='ecosoc-connector' className='connectors md:inline hidden'></div>
          <div id='unodc-connector' className='connectors md:inline hidden'></div>
          <div id='unsc-connector' className='connectors md:inline hidden'></div>

          {/* Background SVG grid and dots */}
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
            <line x1="0" y1="20%" x2="100%" y2="20%" className="grid-line" style={{ animationDelay: animationPlayed ? '0' : '0.5s' }} />
            <line x1="0" y1="80%" x2="100%" y2="80%" className="grid-line" style={{ animationDelay: animationPlayed ? '0' : '1s' }} />
            <line x1="20%" y1="0" x2="20%" y2="100%" className="grid-line" style={{ animationDelay: animationPlayed ? '0' : '1.5s' }} />
            <line x1="80%" y1="0" x2="80%" y2="100%" className="grid-line" style={{ animationDelay: animationPlayed ? '0' : '2s' }} />
            <line x1="50%" y1="0" x2="50%" y2="100%" className="grid-line" style={{ animationDelay: animationPlayed ? '0' : '2.5s', opacity: 0.05 }} />
            <line x1="0" y1="50%" x2="100%" y2="50%" className="grid-line" style={{ animationDelay: animationPlayed ? '0' : '3s', opacity: 0.05 }} />
            <circle cx="20%" cy="20%" r="2" className="detail-dot" style={{ animationDelay: animationPlayed ? '0' : '3s' }} />
            <circle cx="80%" cy="20%" r="2" className="detail-dot" style={{ animationDelay: animationPlayed ? '0' : '3.2s' }} />
            <circle cx="20%" cy="80%" r="2" className="detail-dot" style={{ animationDelay: animationPlayed ? '0' : '3.4s' }} />
            <circle cx="80%" cy="80%" r="2" className="detail-dot" style={{ animationDelay: animationPlayed ? '0' : '3.6s' }} />
            <circle cx="50%" cy="50%" r="1.5" className="detail-dot" style={{ animationDelay: animationPlayed ? '0' : '4s' }} />
          </svg>

          {/* Corner elements */}
          <div className="corner-element top-8 left-8" style={{ animationDelay: animationPlayed ? '0' : '4s' }}>
            <div className="absolute top-0 left-0 h-2 w-2 opacity-30" style={{ background: colors[200] }} />
          </div>
          <div className="corner-element top-8 right-8" style={{ animationDelay: animationPlayed ? '0' : '4.2s' }}>
            <div className="absolute top-0 right-0 h-2 w-2 opacity-30" style={{ background: colors[200] }} />
          </div>
          <div className="corner-element bottom-8 left-8" style={{ animationDelay: animationPlayed ? '0' : '4.4s' }}>
            <div className="absolute bottom-0 left-0 h-2 w-2 opacity-30" style={{ background: colors[200] }} />
          </div>
          <div className="corner-element right-8 bottom-8" style={{ animationDelay: animationPlayed ? '0' : '4.6s' }}>
            <div className="absolute right-0 bottom-0 h-2 w-2 opacity-30" style={{ background: colors[200] }} />
          </div>

          {/* Floating elements */}
          <div className="floating-element" style={{ top: '25%', left: '15%', animationDelay: animationPlayed ? '0' : '5s' }} />
          <div className="floating-element" style={{ top: '60%', left: '85%', animationDelay: animationPlayed ? '0' : '5.5s' }} />
          <div className="floating-element" style={{ top: '40%', left: '10%', animationDelay: animationPlayed ? '0' : '6s' }} />
          <div className="floating-element" style={{ top: '75%', left: '90%', animationDelay: animationPlayed ? '0' : '6.5s' }} />

          <Logo />

          <div className='h-full w-full min-h-screen px-4'>
            {/* Hero Text */}
            <div className='relative flex flex-col items-center justify-between w-full min-h-screen'>
                <div className='None h-[110px]'></div>

                {/* Main headline */}
                <div className="relative mx-auto max-w-6xl text-center mt-10 mb-20 md:my-40">
                    <h1
                        className="relative text-decoration text-3xl leading-tight font-extralight tracking-tight md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl 4xl:text-[9rem]"
                        style={{ color: colors[50], animationDelay: animationPlayed ? '0s' : '2s' }}
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
                            className="text-2xl leading-relaxed font-thin md:text-3xl lg:text-4xl 2xl:text-6xl 3xl:text-7xl"
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
                        <div className="absolute custom-button -bottom-[4rem] 2xl:-bottom-[5rem] 3xl:-bottom-[6rem] 4xl:-bottom-[7rem] left-[50%] translate translate-x-[-50%] flex justify-center text-center" data-delay="2500">
                            <HoverBorderGradient
                                className="mono-label text-sm custom-button 2xl:text-xl"
                                onClick={() => window.open("https://forms.gle/Vcmu4Wq2qEURGejk6", "_blank")}
                            >
                                <span style={{ whiteSpace: 'nowrap' }}>Register Now!</span>
                            </HoverBorderGradient>
                        </div>
                    </h1>

                    {/* Left Side Committee Icons */}
                    <div className='absolute left-side-committee-icons md:flex md:flex-col hidden'>
                        {/* UNESCO */}
                        <button
                            onClick={() => setPage('unesco')}
                            className="committee-icon-animation relative flex items-center group"
                            data-delay="3900"
                            ref={el => {
                                if (el) {
                                    // Only run in browser
                                    setTimeout(() => {
                                        const rect = el.getBoundingClientRect();
                                        const container = document.getElementById('unesco-connector');
                                        if (container) {
                                            container.innerHTML = `
                                                <svg
                                                    style="position:absolute;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:40"
                                                    width="100vw" height="100vh"
                                                >

                                                    <defs>
                                                        <linearGradient id="grad2" x1="0%" x2="100%" y1="0%" y2="0%">
                                                            <stop offset="0%" stop-color="rgba(200, 180, 160, 0)" />
                                                            <stop offset="100%" stop-color="rgba(200, 180, 160, 1)" />
                                                        </linearGradient>
                                                    </defs>
                                                    <polyline class="committee-line" points="${rect.left + 10.5},${rect.top + 10.5} ${rect.left - rect.width / 2},${rect.top - rect.height / 2} 0,${rect.top - rect.height / 2}" stroke="url(#grad2)" fill="none" />
                                                </svg>
                                            `;
                                        }
                                    }, committeeLineWaitTime); // Wait for animation
                                }
                            }}
                        >
                            {/* Committee icon */}
                            <Image
                                width={72} height={72}
                                className="committee-icon"
                                src="/his-global-conclave-edition-2/images/un_emblem.png"
                                alt="unesco-icon"
                                style={{ zIndex: 2 }}
                                
                            />
                            <span className='mono-label absolute bottom-0 left-1/2 translate -translate-x-1/2 translate-y-8 2xl:translate-y-10 3xl:translate-y-12'>UNESCO</span>
                        </button>

                        {/* UNHCR */}
                        <button onClick={() => { setPage('unhcr') }}
                            className="committee-icon-animation relative flex items-center group mt-30"
                            data-delay="3700"
                            ref={el => {
                                if (el) {
                                    // Only run in browser
                                    setTimeout(() => {
                                        const rect = el.getBoundingClientRect();
                                        const container = document.getElementById('unhcr-connector');
                                        if (container) {
                                            container.innerHTML = `
                                                <svg
                                                    style="position:absolute;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:40"
                                                    width="100vw" height="100vh"
                                                >

                                                    <defs>
                                                        <linearGradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%">
                                                            <stop offset="0%" stop-color="rgba(200, 180, 160, 0)" />
                                                            <stop offset="100%" stop-color="rgba(200, 180, 160, 1)" />
                                                        </linearGradient>
                                                    </defs>
                                                    <polyline class="committee-line" points="${rect.left + 10.5},${rect.top + rect.height - 10.5} ${rect.left - rect.width / 2},${rect.top + rect.height + rect.height / 2} 0,${rect.top + rect.height + rect.height / 2}" stroke="url(#grad1)" fill="none" />
                                                </svg>
                                            `;
                                        }
                                    }, committeeLineWaitTime); // Wait for animation
                                }
                            }}
                        >
                            {/* Committee icon */}
                            <Image
                                width={72} height={72}
                                className="committee-icon"
                                src="/his-global-conclave-edition-2/images/un_emblem.png"
                                alt="unhcr-icon"
                                style={{ zIndex: 2 }}
                            />
                            <span className='mono-label absolute bottom-0 left-1/2 translate -translate-x-1/2 translate-y-8 2xl:translate-y-10 3xl:translate-y-12'>UNHCR</span>
                        </button>
                    </div>

                    {/* Center Side Committee Icons */}
                    <div className='absolute center-side-committee-icons md:flex w-full flex-row items-center justify-between hidden 2xl:justify-center 2xl:space-x-40 3xl:space-x-60 4xl:space-x-70'>

                        <button onClick={() => setPage('unoosa')}
                            className="committee-icon-animation relative flex items-center group translate -translate-x-10"
                            data-delay="4100"
                            ref={el => {
                                if (el) {
                                    // Only run in browser
                                    setTimeout(() => {
                                        const rect = el.getBoundingClientRect();
                                        const container = document.getElementById('unoosa-connector');
                                        if (container) {
                                            container.innerHTML = `
                                                <svg
                                                    style="position:absolute;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:40"
                                                    width="100vw" height="100vh"
                                                >

                                                    <defs>
                                                        <linearGradient id="grad3" x1="0%" x2="0%" y1="0%" y2="100%">
                                                            <stop offset="0%" stop-color="rgba(200, 180, 160, 0)" />
                                                            <stop offset="100%" stop-color="rgba(200, 180, 160, 1)" />
                                                        </linearGradient>
                                                    </defs>
                                                    <polyline class="committee-line" points="${rect.left + 10.5},${rect.top + 10.5} ${rect.left - rect.width / 2},${rect.top - rect.height / 2} ${rect.left - rect.width / 2},0" stroke="url(#grad3)" fill="none" />
                                                </svg>
                                            `;
                                        }
                                    }, committeeLineWaitTime); // Wait for animation
                                }
                            }}
                            >
                            {/* Committee icon */}
                            <Image
                                width={72} height={72}
                                className="committee-icon"
                                src="/his-global-conclave-edition-2/images/un_emblem.png"
                                alt="unoosa-icon"
                                style={{ zIndex: 2 }}
                            />
                            <span className='mono-label absolute bottom-0 left-1/2 translate -translate-x-1/2 translate-y-8 2xl:translate-y-10 3xl:translate-y-12'>UNOOSA</span>
                        </button>

                        <button onClick={() => setPage('disec')} className="committee-icon-animation relative flex items-center group mb-20" data-delay="4300">
                            {/* Committee icon */}
                            <Image
                                width={72} height={72}
                                className="committee-icon"
                                src="/his-global-conclave-edition-2/images/un_emblem.png"
                                alt="disec-icon"
                                style={{ zIndex: 2 }}
                            />
                            <span className='mono-label absolute bottom-0 left-1/2 translate -translate-x-1/2 translate-y-8 2xl:translate-y-10 3xl:translate-y-12'>DISEC</span>
                        </button>

                        <button onClick={() => setPage('ecosoc')}
                            className="committee-icon-animation relative flex items-center group translate translate-x-10"
                            data-delay="4500"
                            ref={el => {
                                if (el) {
                                    // Only run in browser
                                    setTimeout(() => {
                                        const rect = el.getBoundingClientRect();
                                        const container = document.getElementById('ecosoc-connector');
                                        if (container) {
                                            container.innerHTML = `
                                                <svg
                                                    style="position:absolute;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:40"
                                                    width="100vw" height="100vh"
                                                >

                                                    <defs>
                                                        <linearGradient id="grad4" x1="0%" x2="0%" y1="0%" y2="100%">
                                                            <stop offset="0%" stop-color="rgba(200, 180, 160, 0)" />
                                                            <stop offset="100%" stop-color="rgba(200, 180, 160, 1)" />
                                                        </linearGradient>
                                                    </defs>
                                                    <polyline class="committee-line" points="${rect.left + rect.width - 10.5},${rect.top + 10.5} ${rect.left + rect.width + rect.width / 2},${rect.top - rect.height / 2} ${rect.left + rect.width + rect.width / 2},0" stroke="url(#grad4)" fill="none" />
                                                </svg>
                                            `;
                                        }
                                    }, committeeLineWaitTime); // Wait for animation
                                }
                            }}
                        >
                            {/* Committee icon */}
                            <Image
                                width={72} height={72}
                                className="committee-icon"
                                src="/his-global-conclave-edition-2/images/un_emblem.png"
                                alt="cgsd-icon"
                                style={{ zIndex: 2 }}
                            />
                            <span className='mono-label absolute bottom-0 left-1/2 translate -translate-x-1/2 translate-y-8 2xl:translate-y-10 3xl:translate-y-12'>ECOSOC</span>
                        </button>
                    </div>

                    {/* Right Side Committee Icons */}
                    <div className="absolute right-side-committee-icons md:flex md:flex-col hidden">
                        <button onClick={() => setPage('unodc')}
                            className="committee-icon-animation relative flex items-center group"
                            data-delay="4700"
                            ref={el => {
                                if (el) {
                                    // Only run in browser
                                    setTimeout(() => {
                                        const rect = el.getBoundingClientRect();
                                        const container = document.getElementById('unodc-connector');
                                        if (container) {
                                            container.innerHTML = `
                                                <svg
                                                    style="position:absolute;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:40"
                                                    width="100vw" height="100vh"
                                                >

                                                    <defs>
                                                        <linearGradient id="grad5" x1="0%" x2="100%" y1="0%" y2="0%">
                                                            <stop offset="0%" stop-color="rgba(200, 180, 160, 1)" />
                                                            <stop offset="100%" stop-color="rgba(200, 180, 160, 0)" />
                                                        </linearGradient>
                                                    </defs>
                                                    <polyline class="committee-line" points="${rect.left + rect.width - 10.5},${rect.top + 10.5} ${rect.left + rect.width + rect.width / 2},${rect.top - rect.height / 2} ${window.innerWidth},${rect.top - rect.height / 2}" stroke="url(#grad5)" fill="none" />
                                                </svg>
                                            `;
                                        }
                                    }, committeeLineWaitTime); // Wait for animation
                                }
                            }}
                        >
                            {/* Committee icon */}
                            <Image
                                width={72} height={72}
                                className="committee-icon"
                                src="/his-global-conclave-edition-2/images/un_emblem.png"
                                alt="unodc-icon"
                                style={{ zIndex: 2 }}
                            />
                            <span className='mono-label absolute bottom-0 left-1/2 translate -translate-x-1/2 translate-y-8 2xl:translate-y-10 3xl:translate-y-12'>UNODC</span>
                        </button>
                        <button onClick={() => setPage('unsc')}
                            className="committee-icon-animation relative flex items-center group mt-30"
                            data-delay="4900"
                            ref={el => {
                                if (el) {
                                    // Only run in browser
                                    setTimeout(() => {
                                        const rect = el.getBoundingClientRect();
                                        const container = document.getElementById('unsc-connector');
                                        if (container) {
                                            container.innerHTML = `
                                                <svg
                                                    style="position:absolute;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:40"
                                                    width="100vw" height="100vh"
                                                >

                                                    <defs>
                                                        <linearGradient id="grad6" x1="0%" x2="100%" y1="0%" y2="0%">
                                                            <stop offset="0%" stop-color="rgba(200, 180, 160, 1)" />
                                                            <stop offset="100%" stop-color="rgba(200, 180, 160, 0)" />
                                                        </linearGradient>
                                                    </defs>
                                                    <polyline class="committee-line" points="${rect.left + rect.width - 10.5},${rect.top + rect.height - 10.5} ${rect.left + rect.width + rect.width / 2},${rect.top + rect.height + rect.height / 2} ${window.innerWidth},${rect.top + rect.height + rect.height / 2}" stroke="url(#grad6)" fill="none" />
                                                </svg>
                                            `;
                                        }
                                    }, committeeLineWaitTime); // Wait for animation
                                }
                            }}
                        >
                            {/* Committee icon */}
                            <Image
                                width={72} height={72}
                                className="committee-icon"
                                src="/his-global-conclave-edition-2/images/un_emblem.png"
                                alt="unsc-icon"
                                style={{ zIndex: 2 }}
                            />
                            <span className='mono-label absolute bottom-0 left-1/2 translate -translate-x-1/2 translate-y-8 2xl:translate-y-10 3xl:translate-y-12'>UNSC</span>
                        </button>
                    </div>
                </div>

                {/* Bottom tagline */}
                <div>
                    <div
                        className="word mb-4 h-px w-16 opacity-30"
                        style={{background: `linear-gradient(to right, transparent, ${colors[200]}, transparent)`}}
                        data-delay="2600"
                    ></div>
                    <h2
                        className="font-mono text-xs font-light tracking-[0.2em] uppercase opacity-80 md:text-sm lg:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl"
                        style={{ color: colors[200] }}
                    >
                        <span className="word word-space" data-delay="2650">
                        Fostering
                        </span>
                        <span className="word word-space" data-delay="2800">
                        Global
                        </span>
                        <span className="word word-space" data-delay="2950">
                        Dialogue
                        </span>
                        <span className="word word-space" data-delay="3200">
                        for
                        </span>
                        <span className="word word-space" data-delay="3350">
                        a
                        </span>
                        <span className="word word-space" data-delay="3500">
                        Better
                        </span>
                        <span className="word word-space" data-delay="3650">
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

                {/* Scroll Icon */}
                <Mouse className="icons absolute bottom-4 right-1 animate-bounce md:hidden" data-delay="3650" />
            </div>
          </div>

          {/* Mobile Committee Icons */}
          <div className='flex flex-col justify-between min-h-screen md:hidden'>
            {/* Top Side Committee Icons */}
            <div className='flex justify-between m-10 items-center'>
                <button onClick={() => { setPage('unesco'); window.scrollTo({top: 0, left: 0, behavior: 'smooth',}); }} className="mobile-committee-icon-animation relative flex items-center group" data-delay="300">
                    {/* Committee icon */}
                    <Image
                        width={64} height={64}
                        className="committee-icon"
                        src="/his-global-conclave-edition-2/images/un_emblem.png"
                        alt=""
                        style={{ zIndex: 2 }}
                        
                    />
                    <span className='mono-label absolute bottom-0 left-1/2 translate -translate-x-1/2 translate-y-8'>UNESCO</span>
                </button>
                <button onClick={() => { setPage('unhcr'); window.scrollTo({top: 0, left: 0, behavior: 'smooth',}); }} className="mobile-committee-icon-animation relative flex items-center group" data-delay="600">
                    {/* Committee icon */}
                    <Image
                        width={64} height={64}
                        className="committee-icon"
                        src="/his-global-conclave-edition-2/images/un_emblem.png"
                        alt=""
                        style={{ zIndex: 2 }}
                    />
                    <span className='mono-label absolute bottom-0 left-1/2 translate -translate-x-1/2 translate-y-8'>UNHCR</span>
                </button>
            </div>

            {/* Center Side Committee Icons */}
            <div className='flex flex-col items-center'>

                <button onClick={() => { setPage('unoosa'); window.scrollTo({top: 0, left: 0, behavior: 'smooth',}); }} className="mobile-committee-icon-animation relative flex items-center group" data-delay="900">
                    {/* Committee icon */}
                    <Image
                        width={64} height={64}
                        className="committee-icon"
                        src="/his-global-conclave-edition-2/images/un_emblem.png"
                        alt=""
                        style={{ zIndex: 2 }}
                    />
                    <span className='mono-label absolute bottom-0 left-1/2 translate -translate-x-1/2 translate-y-8'>UNOOSA</span>
                </button>

                <button onClick={() => { setPage('disec'); window.scrollTo({top: 0, left: 0, behavior: 'smooth',}); }} className="mobile-committee-icon-animation relative flex items-center group my-[30%]" data-delay="1200">
                    {/* Committee icon */}
                    <Image
                        width={64} height={64}
                        className="committee-icon"
                        src="/his-global-conclave-edition-2/images/un_emblem.png"
                        alt=""
                        style={{ zIndex: 2 }}
                    />
                    <span className='mono-label absolute bottom-0 left-1/2 translate -translate-x-1/2 translate-y-8'>DISEC</span>
                </button>

                <button onClick={() => { setPage('ecosoc'); window.scrollTo({top: 0, left: 0, behavior: 'smooth',}); }} className="mobile-committee-icon-animation relative flex items-center group" data-delay="1500">
                    {/* Committee icon */}
                    <Image
                        width={64} height={64}
                        className="committee-icon"
                        src="/his-global-conclave-edition-2/images/un_emblem.png"
                        alt=""
                        style={{ zIndex: 2 }}
                    />
                    <span className='mono-label absolute bottom-0 left-1/2 translate -translate-x-1/2 translate-y-8'>ECOSOC</span>
                </button>
            </div>

            {/* Bottom Side Committee Icons */}
            <div className="flex justify-between m-10 mb-30 items-center">
                <button onClick={() => { setPage('unodc'); window.scrollTo({top: 0, left: 0, behavior: 'smooth',}); }} className="mobile-committee-icon-animation relative flex items-center group" data-delay="1800">
                    {/* Committee icon */}
                    <Image
                        width={64} height={64}
                        className="committee-icon"
                        src="/his-global-conclave-edition-2/images/un_emblem.png"
                        alt=""
                        style={{ zIndex: 2 }}
                    />
                    <span className='mono-label absolute bottom-0 left-1/2 translate -translate-x-1/2 translate-y-8'>UNODC</span>
                </button>
                <button onClick={() => { setPage('unsc'); window.scrollTo({top: 0, left: 0, behavior: 'smooth',}); }} className="mobile-committee-icon-animation relative flex items-center group" data-delay="2100">
                    {/* Committee icon */}
                    <Image
                        width={64} height={64}
                        className="committee-icon"
                        src="/his-global-conclave-edition-2/images/un_emblem.png"
                        alt=""
                        style={{ zIndex: 2 }}
                    />
                    <span className='mono-label absolute bottom-0 left-1/2 translate -translate-x-1/2 translate-y-8'>UNSC</span>
                </button>
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
        <div className="font-primary relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#1a1d18] via-black to-[#2a2e26] text-[#e6e1d7]">
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

          <button
            className="mono-label absolute top-8 left-8 border border-[#e6e1d7] px-2 py-2 rounded hover:bg-[#e6e1d7] hover:text-black transition-colors z-50"
              onClick={() => setPage('hero')}
          >
              <ArrowLeft className="inline-block" /> Go Back
          </button>

          <PageDecider renderPage={page} />
        
        </div>
      )}
    </div>
  );
}
