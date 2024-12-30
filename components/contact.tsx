'use client';

import React, { useState } from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import SubmitBtn from './submit-btn';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import { toast } from 'sonner';

export default function Contact() {
  const { ref } = useSectionInView('Contact');
  const [loading, setLoading] = useState(false);
  const [inputsData, setInputsData] = useState({
    email: '',
    message: '',
  });

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/mrbblval', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(inputsData),
      });

      if (response.ok) {
        toast.success('Message sent successfully!');
        setInputsData({ email: '', message: '' }); // Reset form inputs
      } else {
        const errorData = await response.json();
        toast.error(errorData?.error || 'Oops! Something went wrong.');
      }
    } catch (error) {
      toast.error('Error: Unable to send your message.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      id='contact'
      ref={ref}
      className='mb-20 sm:mb-28 w-full max-w-xl mx-auto text-center px-4'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className='-mt-6 text-white/80 flex justify-center flex-wrap'>
        You can contact me directly via{' '}
        <Link
          className='underline'
          href='https://wa.me/201012205020'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaWhatsapp
            size={24}
            className='mx-1 text-gray-300 hover:text-[#25D366] transition-colors duration-200'
          />
        </Link>{' '}
        or through the form below.
      </p>

      <form
        onSubmit={handleSubmit}
        className='mt-10 flex flex-col text-black'
      >
        <input
          type='email'
          name='email'
          placeholder='Your email'
          value={inputsData.email}
          onChange={(e) =>
            setInputsData({ ...inputsData, email: e.target.value })
          }
          required
          className='h-14 px-4 rounded-lg borderBlack bg-white bg-opacity-80 focus:bg-opacity-100 transition-all outline-none'
          maxLength={500}
        />
        <textarea
          name='message'
          placeholder='Your message'
          value={inputsData.message}
          onChange={(e) =>
            setInputsData({ ...inputsData, message: e.target.value })
          }
          required
          className='h-52 my-3 rounded-lg borderBlack p-4 bg-white bg-opacity-80 focus:bg-opacity-100 transition-all outline-none resize-none'
          maxLength={5000}
        ></textarea>
        <SubmitBtn loading={loading} />
      </form>
    </motion.section>
  );
}
