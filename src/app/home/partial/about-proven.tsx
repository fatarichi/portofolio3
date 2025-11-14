'use client';

import Image from 'next/image';
import React from 'react';
import { statsData, Statistic } from '@/src/app/constant/abut-proven-data';
import { motion } from 'motion/react';

//  ITEM STATISTIK
interface StatItemProps extends Statistic {
  isLast: boolean;
}

const StatItem: React.FC<StatItemProps> = ({
  data,
  info,
  imageSrc,
  isLast,
}) => {
  return (
    //  MOTION: fade naik halus
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`group grid w-full grid-cols-[1fr_1fr_64px] items-center gap-4 py-4 ${
        !isLast ? 'border-b border-neutral-800' : ''
      }`}
    >
      {/* Angka */}
      <div className='flex items-center space-x-2'>
        <span className='text-xl text-purple-400'>✦</span>
        <p className='text-3xl font-bold text-white transition-colors duration-300 group-hover:text-purple-400 md:text-[80px]'>
          {data}
        </p>
      </div>

      {/* Info */}
      <div className='text-left md:justify-self-start'>
        <p className='text-neutral-25 text-sm md:text-[32px]'>{info}</p>
      </div>

      {/* Gambar */}
      <div className='relative h-16 w-16 overflow-hidden rounded-3xl md:h-30 md:w-30 md:justify-self-end'>
        <Image
          src={imageSrc}
          alt={info}
          fill
          className='object-cover transition-transform duration-300 group-hover:scale-105'
        />
      </div>
    </motion.div>
  );
};

//  LIST STATISTIK
const ProvenStatistics = () => {
  return (
    //  MOTION: stagger list
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: false, amount: 0.3 }}
      className='space-y-0'
    >
      {statsData.map((stat, index) => (
        <StatItem
          key={stat.data}
          data={stat.data}
          info={stat.info}
          imageSrc={stat.imageSrc}
          isLast={index === statsData.length - 1}
        />
      ))}
    </motion.div>
  );
};

//  KOMPONEN UTAMA
const ProvenSection = () => {
  return (
    <section id='about' className='w-full bg-black py-10 text-white md:py-20'>
      <div className='custom-container flex flex-col gap-8 md:gap-20'>
        {/* Judul */}
        {/*  MOTION: fade naik halus untuk judul  */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='flex-1 text-center md:text-left'
        >
          <h2 className='mb-4 text-2xl leading-tight font-bold md:text-5xl'>
            Proven Numbers, Real Impact.
          </h2>
          <p className='text-sm text-neutral-400 md:text-xl'>
            From shipped products to years of experience
          </p>
        </motion.div>

        {/* Statistik List */}
        <div className='w-full'>
          <ProvenStatistics />
        </div>
      </div>
    </section>
  );
};

export default ProvenSection;
