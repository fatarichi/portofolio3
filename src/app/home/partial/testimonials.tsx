'use client';

import Image from 'next/image';
import * as React from 'react';
import { Card, CardContent } from '@/src/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/src/components/ui/carousel';
import { testimonialsData } from '@/src/app/constant/testimonial-data';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const [current, setCurrent] = React.useState(0);
  const [itemsPerSlide, setItemsPerSlide] = React.useState(1);
  const itemsPerSlideRef = React.useRef(itemsPerSlide);

  React.useEffect(() => {
    itemsPerSlideRef.current = itemsPerSlide;
  }, [itemsPerSlide]);

  React.useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(window.innerWidth >= 768 ? 3 : 1); // md breakpoint = 768px
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => {
        const ips = itemsPerSlideRef.current;
        const next = prev + ips;
        return next >= testimonialsData.length ? 0 : next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const totalIndicators = 3; // tetap 3 titik
  const activeIndicator = Math.floor(current / itemsPerSlide) % totalIndicators;

  return (
    <section className='w-full overflow-hidden bg-black py-12 text-white md:py-20'>
      <div className='mx-auto max-w-[1200px] px-4 text-center'>
        {/* ===== Heading ===== */}
        <h2 className='mb-2 text-2xl font-semibold md:text-4xl'>
          Trusted by Teams, Valued by Clients
        </h2>
        <p className='mx-auto mb-8 text-sm text-gray-400 md:mb-10 md:text-base'>
          A few kind words from the people behind the projects Edwin helped
          bring to life.
        </p>

        {/* ===== Carousel ===== */}
        <div className='relative'>
          <Carousel opts={{ align: 'start', loop: true }} className='w-full'>
            <CarouselContent
              className='flex transition-transform duration-700 ease-in-out'
              style={{
                transform: `translateX(-${current * (100 / itemsPerSlide)}%)`,
              }}
            >
              {testimonialsData.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className='shrink-0 basis-full p-2 md:basis-1/3'
                >
                  <Card className='h-full rounded-2xl border border-[#22252B] bg-[radial-gradient(38.32%_45.14%_at_13.99%_-1.51%,#34144C_0%,#4A1E68_50%,#000000_100%)] text-left shadow-lg transition-all duration-500 hover:scale-[1.02]'>
                    <CardContent className='flex h-full flex-col justify-between p-4 md:p-6'>
                      {/* Logo */}
                      <div className='mb-3 flex items-center gap-2'>
                        <Image
                          src={testimonial.imageSrc}
                          alt={testimonial.profileName}
                          width={80}
                          height={40}
                          className='object-contain md:h-10 md:w-20'
                        />
                      </div>

                      {/* Rating */}
                      <div className='mb-3 flex gap-1'>
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className='h-4 w-4 fill-[#F3B64C] text-[#F3B64C] md:h-5 md:w-5'
                          />
                        ))}
                      </div>

                      {/* Description */}
                      <p className='mb-4 text-xs leading-relaxed text-gray-200 md:text-sm'>
                        {testimonial.description}
                      </p>

                      {/* Profile */}
                      <div>
                        <h4 className='text-sm font-medium text-white md:text-base'>
                          {testimonial.profileName}
                        </h4>
                        <p className='text-xs text-gray-400'>
                          {testimonial.profileOccupation}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* ===== Indicator Dots (Tetap 3 titik) ===== */}
        <div className='mt-4 flex justify-center gap-2 md:mt-6'>
          {[...Array(totalIndicators)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index * itemsPerSlide)}
              className={`h-[6px] rounded-full transition-all duration-300 ${
                activeIndicator === index
                  ? 'w-6 bg-[#682D9B]'
                  : 'w-3 bg-neutral-800 opacity-60 hover:opacity-90'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
