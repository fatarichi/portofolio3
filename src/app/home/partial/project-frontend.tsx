'use client';
import Image from 'next/image';
import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { projectsData } from '../../constant/project-data';

const Projects = () => {
  // Parallax untuk judul
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section
      id='projects'
      className='w-full bg-black py-12 text-white md:py-20'
    >
      <div className='custom-container flex flex-col gap-8 md:gap-12'>
        {/* Title & subtitle dengan motion */}
        <motion.div
          style={{ y: yParallax }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className='w-full px-4 text-center md:px-0'
        >
          <h2 className='mb-2 text-2xl font-bold md:mb-4 md:text-4xl'>
            Frontend in Action
          </h2>
          <p className='text-sm text-neutral-400 md:text-lg'>
            These are hands-on projects where I delivered clean, responsive user
            interfaces.
          </p>
        </motion.div>

        {/* Cards grid dengan motion */}
        <Cards>
          {projectsData.map((project, i) => (
            <Card
              key={project.name}
              imageSrc={project.imageSrc}
              name={project.name}
              description={project.description}
              index={i}
            />
          ))}
        </Cards>
      </div>
    </section>
  );
};

export default Projects;

// Cards wrapper
type CardsProps = { children: React.ReactNode };
const Cards: React.FC<CardsProps> = ({ children }) => (
  <div className='flex flex-wrap justify-center gap-4 md:gap-6'>{children}</div>
);

// Single card
type CardProps = {
  imageSrc: string;
  name: string;
  description: string;
  index?: number;
};
const Card: React.FC<CardProps> = ({ imageSrc, name, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 0.7, delay: index ? index * 0.1 : 0 }}
    className='flex-1 basis-[90%] sm:basis-[48%] md:basis-[31%]'
  >
    <div className='relative aspect-square overflow-hidden rounded-xl'>
      <Image src={imageSrc} alt={name} fill className='object-cover' />
    </div>
    <h4 className='text-neutral-25 mt-4 text-base font-semibold md:text-lg'>
      {name}
    </h4>
    <p className='mt-2 text-sm text-neutral-400 md:text-base'>{description}</p>
  </motion.div>
);
