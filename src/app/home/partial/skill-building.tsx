'use client';

import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/src/components/ui/card';
import {
  JobExperienceData,
  jobExperiences,
} from '@/src/app/constant/skill-building-data';

// --- KOMPONEN ITEM ---
const JobExperienceItem: React.FC<{
  experience: JobExperienceData;
  isFirst?: boolean;
}> = ({ experience, isFirst }) => {
  return (
    <div className='relative flex w-full pt-6 pb-6 first:pt-0 last:pb-0'>
      {/* Timeline Dot & Line */}
      <div className='absolute top-0 bottom-0 left-0 flex w-6 justify-center'>
        <div className='absolute h-full w-px bg-neutral-800' />
        <div className='relative z-10 mt-[calc(1.5rem+1px)] h-3 w-3 rounded-full border-2 border-fuchsia-600 bg-black' />
      </div>

      {/* Card Content */}
      <div className='ml-6 w-full flex-1 sm:ml-12'>
        <Card
          className={`h-full rounded-2xl border p-4 shadow-lg transition-all duration-300 md:p-6 ${
            isFirst
              ? 'relative overflow-hidden border-[#682D9B] bg-black'
              : 'border-[#22252B] bg-black'
          }`}
        >
          {isFirst && (
            <div
              className='absolute top-0 left-0 h-32 w-32 rounded-tr-2xl'
              style={{
                background:
                  'radial-gradient(circle at top left, #34144C 0%, #4A1E68 50%, transparent 100%)',
                zIndex: 0,
              }}
            />
          )}

          <CardContent className='relative z-10 flex flex-col gap-4 md:flex-row md:items-start'>
            {/* Left Column: timeframe + logo */}
            <div className='w-full shrink-0 md:w-48'>
              <p className='mb-2 text-sm font-semibold text-neutral-400 md:text-base'>
                {experience.timeframe}
              </p>
              <div className='flex items-center gap-2'>
                {experience.logoUrl && (
                  <Image
                    src={experience.logoUrl}
                    alt={`${experience.company} Logo`}
                    width={80}
                    height={40}
                    className='object-contain md:h-10 md:w-auto'
                  />
                )}
              </div>
            </div>

            {/* Right Column: Tasks */}
            <ul className='mt-2 w-full flex-1 space-y-3 text-left md:mt-0'>
              {experience.tasks.map((task, i) => (
                <li
                  key={i}
                  className='flex items-start text-sm text-neutral-300 md:text-base'
                >
                  <span className='mt-1 mr-3 shrink-0 text-fuchsia-600'>
                    <span className='text-xl leading-none text-purple-400'>
                      ✦
                    </span>
                  </span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// --- KOMPONEN UTAMA ---
const JobExperience = () => {
  return (
    <section className='w-full bg-black py-12 text-white md:py-20'>
      <div className='custom-container flex w-full flex-col items-center gap-8 text-center md:gap-12'>
        {/* Title */}
        <div className='w-full'>
          <h2 className='text-2xl font-bold md:text-4xl'>
            Years of Building, Learning, and Shipping
          </h2>
          <p className='mt-4 text-sm text-neutral-400 md:text-base'>
            Each role has sharpened my ability to build better digital
            experiences, faster.
          </p>
        </div>

        {/* Job Experiences */}
        <div className='flex w-full flex-col gap-6'>
          {jobExperiences.map((experience, index) => (
            <JobExperienceItem
              key={index}
              experience={experience}
              isFirst={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobExperience;
