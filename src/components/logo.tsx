'use client';
import Image from 'next/image';

export default function Logo() {
    return (
        <>
            {/* Top tagline */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center pt-10">
          <div
            className="font-mono text-xs font-light tracking-[0.2em] uppercase opacity-80 md:text-sm 2xl:text-xl flex flex-row items-center justify-center"
            style={{ color: '#c8b4a0' }}
          >
            <div className='block text-center'>
                <Image width={64} height={64} className='h-[64px] w-[64px] word' data-delay="0" src="/his-global-conclave-edition-2/images/logo.svg" alt="Logo" />
            </div>
            <div className='flex flex-col'>
                <div className="flex">
                    <span className="word" data-delay="200">
                    Hindustan
                    </span>
                    <span className="word" data-delay="400">
                    International
                    </span>
                </div>
                <div className="flex">
                    <span className="word" data-delay="600">
                    School
                    </span>
                    <span className="word" data-delay="800">
                    -
                    </span>
                    <span className="word" data-delay="1000">
                    Karapakkam
                    </span>
                </div>
            </div>
          </div>
            <div
                className="word mt-4 h-px w-16 opacity-30 absolute left-1/2 transform -translate-x-1/2"
                style={{
                background: `linear-gradient(to right, transparent, #c8b4a0, transparent)`,
                }}
                data-delay="1200"
            >
            </div>
          
        </div>
        </>
    );
} 