'use client';

import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Music2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className='relative flex h-screen flex-col items-center justify-center overflow-hidden bg-black text-white'>
      {/* BACKGROUND  */}
      <div className='absolute inset-0'>
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{ backgroundImage: `url('/images/background.png')` }}
        />
        <div className='absolute inset-0 bg-[linear-gradient(to_right,#2E1760_0%,#8E4297_40%,#B36865_100%)] opacity-70' />
        <div
          className='absolute inset-0 opacity-50'
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.25) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.25) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
        <div
          className='absolute inset-0 opacity-10 mix-blend-overlay'
          style={{
            backgroundImage: `
              radial-gradient(circle at 10% 20%, rgba(255,255,255,0.15) 0%, transparent 20%),
              radial-gradient(circle at 80% 60%, rgba(255,255,255,0.1) 0%, transparent 25%),
              radial-gradient(circle at 40% 80%, rgba(255,255,255,0.1) 0%, transparent 20%)
            `,
            backgroundSize: '200px 200px',
          }}
        />
        <div
          className='pointer-events-none absolute inset-0'
          style={{
            background: `radial-gradient(circle at center, rgba(0,0,0,0.4), transparent 70%)`,
            filter: 'blur(60px)',
            opacity: 0.6,
          }}
        />
        <div className='absolute inset-0 bg-[linear-gradient(to_top,black_0%,#2E1760_40%,transparent_100%)]' />
      </div>

      {/* CONTENT  */}
      <div className='relative z-10 flex w-full max-w-302 flex-col items-start justify-between px-6 pt-24 md:flex-row md:items-start md:pt-36'>
        {/* KIRI: NAMA */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1 }}
          className='z-20 order-2 mt-[-60] text-left md:order-1 md:mt-0 md:text-left'
        >
          <h1 className='text-5xl leading-tight font-bold md:text-8xl'>
            EDWIN <br /> ANDERSON
          </h1>
        </motion.div>

        {/* TENGAH: HERO IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.42, 0, 0.58, 1] }}
          className='relative order-1 self-center md:absolute md:inset-0 md:order-2 md:flex md:items-center md:justify-center'
        >
          {/* TEKS BESAR DI BELAKANG HERO */}
          <motion.div
            initial={{ opacity: 0, scale: 1.2 }}
            whileInView={{ opacity: 0.08, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.2 }}
            className='absolute mt-[-30] justify-center text-center text-[64px] font-bold text-[#ffffff14] select-none md:mt-[-550] md:text-center md:text-[120px]'
          >
            PORTOFOLIO
          </motion.div>

          {/* HERO IMAGE */}
          <div
            className='relative z-10 overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.6)]'
            style={{
              width: '383px',
              height: '496.77px',
              borderTopLeftRadius: '1126470.63px',
              borderTopRightRadius: '1126470.63px',
            }}
          >
            <Image
              src='/images/hero-image.png'
              alt='Hero portrait'
              width={383}
              height={496.77}
              className='h-full w-full object-cover'
            />
          </div>

          {/* Efek blur glowing */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
            className='absolute inset-0 -z-10 blur-3xl'
            style={{
              borderRadius: '1126470.63px',
              background:
                'radial-gradient(circle, rgba(142,66,151,0.4) 0%, transparent 70%)',
            }}
          />

          {/* MICRO IMAGES */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, staggerChildren: 0.2 }}
          >
            <Image
              src='/images/cross-star.png'
              alt='Cross Star Accent'
              width={126}
              height={126}
              className='absolute z-30 mt-[-500] ml-[280] h-[126px] w-[126px] md:mt-[-250] md:ml-[-100]'
            />
            <Image
              src='/images/circle-text.png'
              alt='Circle Text Accent'
              width={120}
              height={120}
              className='absolute z-30 mt-[-50] ml-[300] h-[120px] w-[120px] md:mt-[150] md:ml-[-70]'
            />
          </motion.div>
        </motion.div>

        {/* KANAN: ABOUT + SOSIAL */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1 }}
          className='z-20 order-3 mt-8 max-w-80 space-y-6 text-left md:mt-0 md:ml-auto md:text-left'
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className='mb-2 text-xl font-semibold'>About me</h2>
            <p className='text-sm leading-relaxed text-gray-200 md:text-base'>
              Passionate about frontend development, I focus on crafting digital
              products.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='flex justify-start gap-4 md:justify-start'
          >
            {[
              { icon: Facebook, label: 'Facebook' },
              { icon: Instagram, label: 'Instagram' },
              { icon: Linkedin, label: 'LinkedIn' },
              { icon: Music2, label: 'TikTok' },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href='#'
                aria-label={label}
                className='flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#0b0b0b] transition hover:bg-[#1a1a1a]'
              >
                <Icon size={18} color='white' />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
