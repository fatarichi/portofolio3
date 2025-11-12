'use client';

import * as React from 'react';
import { FAQData } from '@/src/app/constant/FAQ-data';
import { Section } from '@/src/components/layout/section';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className='w-full bg-black py-12 text-white md:py-20'>
      <Section
        title='Frequently Asked Questions'
        subtitle='Here are some common questions people often ask me about my work and experience.'
        id='faq'
      >
        <div className='mx-auto divide-y divide-neutral-800'>
          {FAQData.map((item, index) => (
            <div key={index} className='py-3 md:py-4'>
              {/* ===== Header ===== */}
              <button
                onClick={() => toggleFAQ(index)}
                className='flex w-full items-center gap-2 text-left focus:outline-none md:gap-3'
              >
                {/* Icon */}
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-neutral-400 transition-transform duration-300 md:h-5 md:w-5 ${
                    activeIndex === index ? 'rotate-180 text-[#F3B64C]' : ''
                  }`}
                />
                <h3 className='text-base font-medium text-white md:text-lg'>
                  {item.title}
                </h3>
              </button>

              {/* ===== Content ===== */}
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    key='content'
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <p className='mt-2 pl-6 text-sm leading-relaxed text-neutral-400 md:mt-3 md:pl-8 md:text-base'>
                      {item.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Section>
    </section>
  );
}
