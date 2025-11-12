import React from 'react';

type SectionProps = {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  id?: string;
};

export const Section: React.FC<SectionProps> = ({
  children,
  title,
  subtitle,
  id,
}) => {
  return (
    <div className='custom-container py-10 md:py-20' id={id}>
      {/* heading */}
      <div className='text-center'>
        <h2 className='display-sm-bold md:display-lg-bold text-neutral-25'>
          {title}
        </h2>
        <p className='text-sm-regular md:text-md-regular mt-4 text-neutral-400'>
          {subtitle}
        </p>
      </div>

      {/* content */}
      <div className='mt-6 md:mt-16'>{children}</div>
    </div>
  );
};
