'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';
import { useTheme } from '@/context/theme-context';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

export default function Contact() {
  const { ref } = useSectionInView('Contact');

  const { theme } = useTheme();

  return (
    <motion.section
      id='contact'
      ref={ref}
      className={`mb-20 sm:mb-28 w-full max-w-xl mx-auto text-center px-4`}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className='text-gray-700 -mt-6 dark:text-white/80 flex justify-center flex-wrap'>
        You can contact me directly via
        <Link
          className='underline'
          href='https://wa.me/201012205020'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaWhatsapp
            size={24}
            className='mx-1'
          />
        </Link>{' '}
        or through this form below.
      </p>

      <form
        className='mt-10 flex flex-col dark:text-black'
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success('Email sent successfully!');
        }}
      >
        <input
          className='h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          name='senderEmail'
          type='email'
          required
          maxLength={500}
          placeholder='Your email'
        />
        <textarea
          className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none resize-none'
          name='message'
          placeholder='Your message'
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
