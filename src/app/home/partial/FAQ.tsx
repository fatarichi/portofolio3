'use client';

import * as React from 'react';
import { FAQData } from '@/src/app/constant/FAQ-data';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id='faq' className='w-full bg-black py-12 text-white md:py-20'>
      <div className='custom-container'>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className='mb-8 md:mb-12'
        >
          <h2 className='text-center text-2xl font-bold md:text-4xl'>
            Frequently Asked Questions
          </h2>
          <p className='mt-2 text-center text-sm text-neutral-400 md:text-lg'>
            Here are some common questions people often ask me about my work and
            experience.
          </p>
        </motion.div>

        {/* FAQ List */}
        <motion.ul
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.3 }}
          transition={{ staggerChildren: 0.12 }}
          className='mx-auto divide-y divide-neutral-800'
        >
          {FAQData.map((item, index) => (
            <motion.li
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className='py-3 md:py-4'
            >
              {/* Header */}
              <button
                onClick={() => toggleFAQ(index)}
                className='flex w-full items-center gap-2 text-left focus:outline-none md:gap-3'
              >
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-neutral-400 transition-transform duration-300 md:h-5 md:w-5 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
                <h3 className='text-base font-medium text-white md:text-lg'>
                  {item.title}
                </h3>
              </button>

              {/* Content */}
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.p
                    key='content'
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.45, ease: [0.42, 0, 0.58, 1] }}
                    className='mt-2 pl-6 text-sm leading-relaxed text-neutral-400 md:mt-3 md:pl-8 md:text-base'
                  >
                    {item.description}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
