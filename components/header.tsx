'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useTheme } from '@/context/theme-context';

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const { theme } = useTheme();

  return (
    <header className='header z-[999] relative'>
      <nav
        className={`w-full flex fixed top-6 sm:top-[1.7rem] sm:h-auto sm:py-0   sm:w-fit sm:rounded-full sm:-translate-x-1/2 sm:left-1/2 sm:px-6 justify-center items-center shadow-lg backdrop-blur-[0.5rem] `}
        style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)' }}
      >
        <ul className='flex flex-wrap items-center justify-center text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5 py-4'>
          {links &&
            Array.isArray(links) &&
            links.length > 0 &&
            links.map((link) => (
              <motion.li
                className='flex items-center justify-center relative'
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  className={clsx(
                    'px-4 py-2 hover:text-gray-950 transition dark:text-gray-300 dark:hover:text-gray-300',
                    {
                      'text-gray-950 dark:text-white': activeSection === link.name,
                      'hidden lg:block': link.name === 'About',
                    },
                  )}
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}

                  {link.name === activeSection && (
                    <motion.span
                      className='bg-gray-200 bg-opacity-80 rounded-full absolute inset-0 -z-10 dark:bg-gray-800'
                      layoutId='activeSection'
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    ></motion.span>
                  )}
                </Link>
              </motion.li>
            ))}
        </ul>
      </nav>
    </header>
  );
}
