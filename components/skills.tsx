'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import SectionHeading from './section-heading';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import CategoryToggleButton from './category-toggle-btn';
import { useTheme } from '@/context/theme-context';
import CategoryTabs from './categoryTabs';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.05 * index,
      ease: 'easeOut',
    },
  }),
};

const growOnHover = {
  scale: 1.2,
};

type Category = (typeof skillsData)[number]['category'];

export default function Skills() {
  const { ref } = useSectionInView('Skills');
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<Category>(skillsData[0].category);

  const categories: Category[] = [...new Set(skillsData.map((skill) => skill.category))];
  const filteredSkills = skillsData.filter((skill) => skill.category === selectedCategory);

  const handleCategoryChange = (newCategory: string) => {
    setSelectedCategory(newCategory as Category);
  };

  return (
    <section
      id='skills'
      ref={ref}
      className={`scroll-mt-28 mb-28 sm:mb-44 max-w-4xl px-4 text-center ${
        theme === 'dark' ? 'dark' : ''
      }`}
      style={{ height: 'auto' }}
    >
      <SectionHeading>My Skills</SectionHeading>
      {/* <CategoryToggleButton
        categories={categories}
        selectedCategory={selectedCategory}
        onChange={handleCategoryChange}
      /> */}
      <CategoryTabs
        categories={categories}
        selectedCategory={selectedCategory}
        onChange={handleCategoryChange}
      />
      <div className='skills-container flex flex-wrap justify-center content-start gap-4 mt-12 h-full text-lg'>
        {filteredSkills.map((skill) => (
          <motion.div
            key={skill.id}
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            whileHover={growOnHover}
            viewport={{
              once: true,
            }}
            className='flex flex-col items-center py-4 px-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-transform duration-300'
          >
            <Icon
              icon={skill.icon}
              className='text-5xl md:text-7xl text-gray-800 dark:text-gray-200'
            />
            <span className='mt-2 text-lg font-medium text-gray-800 dark:text-gray-200'>
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}