'use client';

import React from 'react';
import { X } from 'lucide-react';
import { withMe, other } from '@/src/app/constant/skill-chooseMe-data';

const ChooseWiselySection = () => {
  return (
    <section id='skill' className='w-full bg-black py-12 text-white md:py-20'>
      <div className='custom-container flex flex-col items-center gap-8 text-center md:gap-12'>
        {/* TITLE */}
        <div>
          <h2 className='mb-2 text-2xl font-bold md:mb-4 md:text-4xl'>
            Choose Wisely, Get Quality Results
          </h2>
          <p className='text-sm text-neutral-400 md:text-lg'>
            Make the right choice for interfaces that are fast, reliable, and
            visually sharp.
          </p>
        </div>

        {/* CONTENT */}
        <div className='flex w-full flex-col gap-6 md:flex-row md:gap-8'>
          {/* LEFT CARD — With Me */}
          <div
            className='flex w-full flex-col rounded-xl border border-neutral-900 bg-cover bg-center p-4 md:w-1/2 md:p-6'
            style={{ backgroundImage: "url('/images/card-background1.png')" }}
          >
            <h3 className='mb-2 text-left text-lg font-semibold md:mb-4 md:text-xl'>
              With Me
            </h3>
            <ul className='flex flex-col gap-2 md:gap-3'>
              {withMe.map((item, i) => (
                <li
                  key={i}
                  className='flex items-center justify-between rounded-lg bg-white/10 px-3 py-2 backdrop-blur-sm transition-transform duration-300 hover:scale-[1.02] md:px-4 md:py-3'
                >
                  <div className='flex items-center gap-2 text-sm text-white md:gap-3 md:text-base'>
                    <span className='text-xl leading-none text-purple-400'>
                      ✦
                    </span>
                    <span>{item}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT CARD — Other */}
          <div className='flex w-full flex-col rounded-xl border border-neutral-900 bg-black/30 p-4 md:w-1/2 md:p-6'>
            <h3 className='mb-2 text-left text-lg font-semibold md:mb-4 md:text-xl'>
              Other
            </h3>
            <ul className='flex flex-col gap-2 md:gap-3'>
              {other.map((item, i) => (
                <li
                  key={i}
                  className='flex items-center justify-between rounded-lg bg-neutral-900/50 px-3 py-2 backdrop-blur-sm md:px-4 md:py-3'
                >
                  <div className='flex items-center gap-2 text-sm text-red-500 md:gap-3 md:text-base'>
                    <X className='h-4 w-4 md:h-5 md:w-5' />
                    <span className='text-neutral-400'>{item}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseWiselySection;
