'use client';

import { Menu } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/src/components/ui/button';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from '@/src/components/ui/sheet';

import { navigationData } from '@/src/app/constant/navigation-data';

const Navbar = () => {
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ['rgba(12,13,13,0', 'rgba(12,13,13,0.5)']
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(10px)']
  );

  return (
    <motion.header
      style={{
        background,
        backdropFilter: backdropBlur,
      }}
      className='fixed top-0 z-50 w-full'
    >
      <div className='flex-between custom-container h-16 md:h-21'>
        {/* LOGO DESKTOP */}
        <Link href='#home'>
          <Image
            src='/images/logo.png'
            alt='logo'
            width={158}
            height={56}
            className='max-md:h-8 max-md:w-35.25'
          />
        </Link>

        {/* NAVIGATION DESKTOP */}
        <nav className='hidden lg:block'>
          <ul className='flex-start gap-3'>
            {navigationData.map((data) => (
              <li key={data.label}>
                <Link href={data.href} className='hover:text-primary-200 p-4'>
                  {data.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Button
          asChild
          className='hover:bg-primary-200 hidden bg-white text-black hover:text-white lg:flex'
        >
          <Link href='#contact'>Get Started</Link>
        </Button>

        {/* MOBILE SHEET */}
        <Sheet>
          <SheetTrigger asChild>
            <Menu className='cursor-pointer text-white lg:hidden' />
          </SheetTrigger>

          <SheetContent className='h-screen w-full bg-black p-6 text-white'>
            {/* HEADER & LOGO */}
            <SheetHeader>
              <SheetTitle className='sr-only'>Navigation Menu</SheetTitle>

              <div className='flex items-center justify-between border-b border-neutral-800 pb-4'>
                <Image
                  src='/images/logo.png'
                  alt='Logo'
                  width={158}
                  height={56}
                  className='h-14 w-auto'
                />
                <SheetClose asChild>
                  <button
                    aria-label='Close Menu'
                    className='text-xl text-white'
                  >
                    ✕
                  </button>
                </SheetClose>
              </div>
            </SheetHeader>

            {/* NAVIGATION */}
            <nav className='z-100 mt-6'>
              <ul className='flex flex-col gap-4'>
                {navigationData.map((data) => (
                  <li key={data.label}>
                    <SheetClose asChild>
                      <Link
                        href={data.href}
                        className='hover:text-primary-200 block py-4'
                      >
                        {data.label}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA BUTTON */}
            <Button
              asChild
              className='hover:bg-primary-200 mt-6 w-full bg-white text-black hover:text-white'
            >
              <SheetClose asChild>
                <Link href='#contact'>Get Started</Link>
              </SheetClose>
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
};

export default Navbar;
