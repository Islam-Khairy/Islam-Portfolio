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
      className={`about-section mb-28 scroll-mt-28 w-full px-6 flex-col items-center hidden lg:flex`}
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

      <div className='about-container flex flex-col lg:flex-row justify-between items-start gap-4'>
        <div className='about-animation w-full lg:w-1/2 flex justify-center items-center lg:items-start max-w-full'>
          <main className='relative w-full h-screen'>
            <Spline
              scene='/animations/spline-animation1.spline'
              className='absolute -top-52 left-0 w-full h-screen'
            />
          </main>
        </div>

        <div className='about-text-container w-full xl:w-1/2 xl:pe-6'>
          <p className='about-text text-lg font-medium leading-relaxed text-left'>
            Greetings! Allow me to introduce myself. My name is Islam Khairy. 👋 I'm a dedicated web
            developer with a passion for crafting exceptional digital experiences. With a solid
            foundation in HTML, CSS, and JavaScript, I thrive on bringing ideas to life through
            clean, efficient code.
            <br /> <br />
            I've refined my skills in front-end technologies like React.js, Next.js, and TypeScript,
            striving to enhance both the visual appeal and functionality of each project I work on.
            I believe web development goes beyond just writing code – it's about understanding user
            needs, solving problems creatively, and delivering solutions that leave a lasting
            impression.
            <br /> <br />
            While I'm currently focused on front-end work, I'm eager to delve deeper into the world
            of web development. Whether it's mastering back-end languages, exploring databases, or
            tackling server-side scripting, I'm always up for a challenge.
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
