'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import Spline from '@splinetool/react-spline';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      id='about'
      ref={ref}
      className={`scroll-mt-32 lg:scroll-mt-28 w-full px-6 flex flex-col items-center`}
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
      <SectionHeading>About Me</SectionHeading>

      <div className='about-container flex flex-col lg:flex-row items-start'>
        <div className='about-animation w-full lg:w-1/2 hidden lg:flex justify-center items-center lg:items-start max-w-full'>
          <main className='relative w-full h-screen'>
            <Spline
              scene='/animations/spline-animation1.spline'
              className='absolute -top-52 left-0 w-full h-full'
            />
          </main>
        </div>

        <div className='about-text-container w-full lg:w-1/2 lg:pe-6'>
          <p className='about-text text-lg font-medium leading-relaxed text-left'>
            Greetings! Allow me to introduce myself. My name is Islam Khairy. 👋 I'm a dedicated web
            developer with a passion for crafting exceptional digital experiences. With a solid
            foundation in HTML, CSS, and JavaScript, I excel at bringing ideas to life through
            clean, efficient code.
            <br /> <br />
            I've refined my skills in front-end technologies like React, Next.js, and TypeScript,
            dedicated to enhancing both the design and functionality of each project I work on. I
            believe web development goes beyond just writing code – it's about understanding user
            needs, solving problems creatively, and delivering solutions that leave a lasting
            impression.
            <br /> <br />
            While my current focus is on front-end development, I'm keen to broaden my knowledge in
            various aspects of web development. From gaining proficiency in back-end technologies
            and delving into databases to engaging in server-side programming, I am passionate about
            taking on new challenges and continuously learning.
            <br /> <br />
            I'm excited to connect with like-minded developers, collaborate on exciting projects,
            and continue growing as a developer.
            <br />
            Let's build something awesome together! 💻✨
          </p>
        </div>
      </div>
    </motion.section>
  );
}
