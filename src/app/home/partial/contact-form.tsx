'use client';

import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ClipLoader } from 'react-spinners';
import { z } from 'zod';
import Image from 'next/image';
import { motion } from 'motion/react';

import { Button } from '@/src/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/src/components/ui/form';
import { Input } from '@/src/components/ui/input';
import { Textarea } from '@/src/components/ui/textarea';
import FormStatusDialog from '@/src/components/ui/form-status-dialog';

const contactSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [loading, setLoading] = React.useState(false);
  const [showDialog, setShowDialog] = React.useState(false);
  const [variant, setVariant] = React.useState<'success' | 'error'>('success');

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', message: '' },
  });

  async function onSubmit(data: ContactFormValues) {
    try {
      setLoading(true);
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '',
        data,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ''
      );
      form.reset();
      setVariant('success');
    } catch (error) {
      console.error(error);
      setVariant('error');
    } finally {
      setShowDialog(true);
      setLoading(false);
    }
  }

  const renderLabelWithAsterisk = (label: string) => (
    <>
      {label}
      <span className='ml-1 text-red-500'>*</span>
    </>
  );

  return (
    <section
      id='contact'
      className='w-full px-4 py-12 md:py-20'
      style={{
        background:
          'linear-gradient(317.05deg, rgba(106, 39, 160, 0.5) 14.77%, rgba(174, 66, 166, 0) 51.94%)',
      }}
    >
      <div className='mx-auto flex max-w-[1100px] flex-col overflow-hidden rounded-xl shadow-2xl md:flex-row'>
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className='relative w-full md:w-1/2'
        >
          <Image
            src='/images/contact-image.png'
            alt='Contact'
            width={600}
            height={400}
            className='h-full w-full object-cover md:rounded-l-xl'
          />
        </motion.div>

        {/* Right Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className='w-full bg-black p-6 sm:p-8 md:w-1/2 md:p-10'
        >
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className='text-2xl font-bold text-white md:text-4xl'>
              Start a Conversation
            </h2>
            <p className='mt-2 text-sm text-neutral-400 md:text-base'>
              I’m open to freelance gigs, collaborations, or even just a casual
              chat.
            </p>
          </motion.div>

          {/* Form Fields */}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='mt-6 space-y-5 md:mt-8 md:space-y-6'
            >
              <motion.div
                initial='hidden'
                whileInView='show'
                viewport={{ once: false, amount: 0.3 }}
                transition={{ staggerChildren: 0.12 }}
              >
                {/* Name */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <FormField
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='text-sm text-white md:text-base'>
                          {renderLabelWithAsterisk('Name')}
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            disabled={loading}
                            placeholder='What should I call you?..'
                            className='rounded-none! border-0! border-b! border-neutral-900! bg-transparent! text-sm text-white! placeholder-neutral-500! focus:ring-0! focus:outline-none! md:text-base'
                          />
                        </FormControl>
                        <FormMessage className='text-sm text-white md:text-base' />
                      </FormItem>
                    )}
                  />
                </motion.div>

                {/* Email */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='text-sm text-white md:text-base'>
                          {renderLabelWithAsterisk('Email')}
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            disabled={loading}
                            placeholder='Where can I reach you?..'
                            className='rounded-none! border-0! border-b! border-neutral-900! bg-transparent! text-sm text-white! placeholder-neutral-500! focus:ring-0! focus:outline-none! md:text-base'
                          />
                        </FormControl>
                        <FormMessage className='text-sm text-white md:text-base' />
                      </FormItem>
                    )}
                  />
                </motion.div>

                {/* Message */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <FormField
                    control={form.control}
                    name='message'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='text-sm text-white md:text-base'>
                          {renderLabelWithAsterisk('Message')}
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            disabled={loading}
                            placeholder='Tell me about your project or just say hi :)'
                            className='min-h-[150px] rounded-none! border-0! border-b! border-neutral-900! bg-transparent! text-sm text-white! placeholder-neutral-500! focus:ring-0! focus:outline-none! md:text-base'
                          />
                        </FormControl>
                        <FormMessage className='text-sm text-white md:text-base' />
                      </FormItem>
                    )}
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Button
                    disabled={loading}
                    type='submit'
                    className='hover:bg-primary-200 w-full rounded-lg bg-white text-sm font-semibold text-black hover:text-white md:text-base'
                  >
                    {loading ? (
                      <ClipLoader size={18} color='#000' />
                    ) : (
                      "Let's Build Something"
                    )}
                  </Button>
                </motion.div>
              </motion.div>
            </form>
          </Form>
        </motion.div>
      </div>

      <FormStatusDialog
        open={showDialog}
        variant={variant}
        loading={loading}
        onOpenChange={setShowDialog}
      />
    </section>
  );
}
