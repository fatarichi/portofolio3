'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className='border-t border-[#FFFFFF1A]'>
      <div
        style={{
          background:
            'linear-gradient(317.05deg, rgba(106, 39, 160, 0.5) 14.77%, rgba(174, 66, 166, 0) 51.94%)',
        }}
      >
        <p className='py-6 text-center text-sm text-neutral-400 md:py-10 md:text-base'>
          © 2025 Edwin Anderson. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
