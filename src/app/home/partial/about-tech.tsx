'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/src/components/ui/button';
import { techData, Tech } from '@/src/app/constant/about-tech-data';
import { motion, useScroll, useTransform } from 'motion/react';

const ExperienceSection = () => {
  // Parallax untuk card
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section className='w-full bg-black py-12 text-white md:py-20'>
      <div className='custom-container flex flex-col gap-12 md:gap-16'>
        {/* Judul */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className='w-full px-4 text-center md:px-0'
        >
          <h3 className='mb-4 text-2xl leading-tight font-extrabold md:text-5xl'>
            Experienced in Web & App Development
          </h3>
          <p className='text-sm text-neutral-400 md:text-lg'>
            I create user-focused websites that look good, work well, and feel
            right.
          </p>
        </motion.div>

        {/* Grid utama */}
        <div className='flex flex-col items-center justify-between gap-8 md:gap-12 lg:flex-row lg:items-center'>
          {/* Grid teknologi */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: false, amount: 0.3 }}
            transition={{ staggerChildren: 0.12 }}
            className='grid w-full max-w-[674px] grid-cols-2 gap-3 sm:grid-cols-3 md:h-[445px]'
          >
            {techData.map((tech: Tech) => (
              <motion.div
                key={tech.title}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                className='group flex h-[150px] w-full flex-col items-center justify-center gap-2 rounded-xl border border-neutral-900 p-3 transition-transform duration-300 hover:scale-105 sm:h-[180px] md:h-[214px]'
              >
                <div className='relative h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16'>
                  <Image
                    src={tech.imageSrc}
                    alt={tech.title}
                    fill
                    className='object-contain'
                  />
                </div>
                <p className='text-xs font-medium text-gray-300 group-hover:text-purple-400 md:text-sm'>
                  {tech.title}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Quote card */}
          <motion.div
            style={{
              y: yParallax,
              backgroundImage: "url('/images/card-background.png')",
            }}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className='flex w-full max-w-[509px] flex-col justify-between rounded-xl border border-neutral-900 bg-cover bg-center p-4 sm:p-6 md:h-[445px] md:p-8'
          >
            <blockquote className='text-sm text-gray-200 italic md:text-xl'>
              “Programming is the art of telling another human what you want the
              computer to do.”
            </blockquote>
            <cite className='text-xs text-gray-400 md:text-sm'>
              — Donald Knuth
            </cite>

            <Button className='hover:bg-primary-200 mt-4 w-full self-center bg-white text-black hover:text-white md:self-start'>
              <Link href='#contact'>Let’s Build Something</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
