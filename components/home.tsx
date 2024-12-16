'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaFileDownload } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import ParticleContainer from './particle-container';
import personalImage from '@/public/images/personal.jpg';
import { useTheme } from '@/context/theme-context';

export default function Home() {
  const { ref } = useSectionInView('Home');
  const { theme } = useTheme();

  return (
    <section
      ref={ref}
      id='home'
      className={`home-section flex flex-col justify-center items-center min-h-screen mb-16 sm:mb-0 text-center scroll-mt-[100rem] particles-section pt-36 pb-18 w-full px-4`}
      style={{ height: 'auto' }}
    >
      {/* <ParticleContainer theme={theme} /> */}
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              src={personalImage}
              alt='Profile Picture'
              width='192'
              height='192'
              quality='100'
              priority={true}
              className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
            />
          </motion.div>

          <motion.span
            className='greeting-icon absolute bottom-0 right-[-15px] text-4xl'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className={`mb-4 mt-4 px-0 sm:px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl max-w-[50rem] mx-auto ${
          theme === 'dark' ? 'text-white' : 'text-black'
        }`}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hi there! I'm <span className='font-bold'>Islam Khairy.</span> a passionate web developer
        who aims to turn ideas into interactive and engaging digital experiences. With a keen eye
        for detail and a love for clean, efficient code.
      </motion.h1>

      <motion.div
        className='flex items-center justify-center gap-2 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          className={`group px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition duration-500 cursor-pointer border-2 ${
            theme === 'dark'
              ? 'border-gray-400 dark:border-gray-500'
              : 'border-gray-700 border-opacity-40'
          } text-gray-950 dark:text-gray-200`}
          href='https://github.com/Islam-Khairy'
          target='_blank'
          rel='noopener noreferrer'
        >
          GitHub <FaGithub className='opacity-70' />
        </a>

        <a
          className={`group px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition duration-500 cursor-pointer border-2 ${
            theme === 'dark'
              ? 'border-gray-400 dark:border-gray-500'
              : 'border-gray-700 border-opacity-40'
          } text-gray-950 dark:text-gray-200`}
          href='https://www.linkedin.com/in/islam-khairy-364793307/'
          target='_blank'
          rel='noopener noreferrer'
        >
          LinkedIn <BsLinkedin className='opacity-70' />
        </a>
      </motion.div>

      <motion.div
        className='flex items-center justify-center mt-4 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
        }}
      >
        <a
          className={`group px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition duration-500 cursor-pointer border-2 ${
            theme === 'dark'
              ? 'border-gray-400 dark:border-gray-500'
              : 'border-gray-700 border-opacity-40'
          } text-gray-950 dark:text-gray-200`}
          href='https://drive.google.com/file/d/1oz3voSkVkvJ9LJqjcQd6SjzR3OVEsPwh/view?usp=drive_link'
          target='_blank'
          rel='noopener noreferrer'
        >
          Download CV <FaFileDownload className='opacity-70' />
        </a>
      </motion.div>
    </section>
  );
}
