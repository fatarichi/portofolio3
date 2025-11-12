'use client';
import Image from 'next/image';
import React from 'react';
import { Section } from '@/src/components/layout/section';
import { projectsData } from '../../constant/project-data';
const Projects = () => {
  return (
    <Section
      title='Frontend in Action'
      subtitle='These are hands-on projects where I delivered clean, responsive user interfaces.'
      id='projects'
    >
      {' '}
      <Cards>
        {' '}
        {projectsData.map((project) => (
          <Card
            key={project.name}
            imageSrc={project.imageSrc}
            name={project.name}
            description={project.description}
          />
        ))}{' '}
      </Cards>{' '}
    </Section>
  );
};
export default Projects;
type CardsProps = { children: React.ReactNode };
const Cards: React.FC<CardsProps> = ({ children }) => {
  return (
    <div className='flex flex-wrap justify-center gap-4 md:gap-6'>
      {' '}
      {children}{' '}
    </div>
  );
};
type CardProps = { imageSrc: string; name: string; description: string };
const Card: React.FC<CardProps> = ({ imageSrc, name, description }) => {
  return (
    <div className='flex-1 basis-[90%] sm:basis-[48%] md:basis-[31%]'>
      {' '}
      <div className='relative aspect-square overflow-hidden rounded-xl'>
        {' '}
        <Image src={imageSrc} alt={name} fill className='object-cover' />{' '}
      </div>{' '}
      <h4 className='text-neutral-25 mt-4 text-base font-semibold md:text-lg'>
        {' '}
        {name}{' '}
      </h4>{' '}
      <p className='mt-2 text-sm text-neutral-400 md:text-base'>
        {' '}
        {description}{' '}
      </p>{' '}
    </div>
  );
};
