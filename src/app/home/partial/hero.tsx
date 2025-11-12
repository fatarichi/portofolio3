'use client';

import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Music2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className='relative flex h-screen flex-col items-center justify-center overflow-hidden bg-black text-white'>
      {/* ================= BACKGROUND ================= */}
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

      {/* ================= CONTENT ================= */}
      <div className='relative z-10 flex w-full max-w-[1100px] flex-col items-start justify-between px-6 pt-24 md:flex-row md:items-start md:pt-36'>
        {/* KIRI: NAMA */}
        <div className='z-20 order-2 mt-8 text-left md:order-1 md:mt-0 md:text-left'>
          <h1 className='text-5xl leading-tight font-bold sm:text-6xl md:text-8xl'>
            EDWIN <br /> ANDERSON
          </h1>
        </div>

        {/* TENGAH: HERO IMAGE */}
        <div className='relative order-1 self-center md:absolute md:inset-0 md:order-2 md:flex md:items-center md:justify-center'>
          {/* TEKS BESAR DI BELAKANG HERO */}
          <div
            className='absolute hidden uppercase select-none md:block'
            style={{
              top: '-20%',
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 700,
              fontSize: '142px',
              lineHeight: '179.31px',
              letterSpacing: '-5%',
              color: 'rgba(255,255,255,0.08)',
              zIndex: 0,
            }}
          >
            PORTFOLIO
          </div>

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
          <div
            className='absolute inset-0 -z-10 blur-3xl'
            style={{
              borderRadius: '1126470.63px',
              background:
                'radial-gradient(circle, rgba(142,66,151,0.4) 0%, transparent 70%)',
            }}
          />
        </div>

        {/* KANAN: ABOUT + SOSIAL */}
        <div className='z-20 order-3 mt-8 max-w-80 space-y-6 text-left md:mt-0 md:ml-auto md:text-left'>
          <div>
            <h2 className='mb-2 text-xl font-semibold'>About me</h2>
            <p className='text-sm leading-relaxed text-gray-200 md:text-base'>
              Passionate about frontend development, I focus on crafting digital
              products.
            </p>
          </div>

          <div className='flex justify-start gap-4 md:justify-start'>
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
          </div>
        </div>
      </div>

      {/* --- MICRO IMAGES (inline style positioning) ================= */}
      <Image
        src='/images/cross-star.png'
        alt='Cross Star Accent'
        width={126}
        height={126}
        className='absolute z-9999 h-[126px] w-[126px]'
        style={{
          top: '35%',
          right: '32%',
        }}
      />
      <Image
        src='/images/circle-text.png'
        alt='Circle Text Accent'
        width={120}
        height={120}
        className='absolute z-9999 h-[120px] w-[120px]'
        style={{
          bottom: '22%',
          right: '32%',
        }}
      />
    </section>
  );
}
