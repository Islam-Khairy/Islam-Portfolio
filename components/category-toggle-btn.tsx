'use client';

import React, { useEffect, useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { motion } from 'framer-motion';

interface CategoryToggleButtonProps {
  categories: string[];
  selectedCategory: string;
  onChange: (newCategory: string) => void;
}

const CategoryToggleButton: React.FC<CategoryToggleButtonProps> = ({
  categories,
  selectedCategory,
  onChange,
}) => {
  const [orientation, setOrientation] = useState<'horizontal' | 'vertical'>('horizontal');

  useEffect(() => {
    const handleResize = () => {
      setOrientation(window.innerWidth <= 767 ? 'vertical' : 'horizontal');
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleChange = (event: React.MouseEvent<HTMLElement>, newCategory: string | null) => {
    if (newCategory !== null) {
      onChange(newCategory);
    }
  };

  return (
    <motion.div className='flex justify-center items-center space-x-2 space-y-2 cursor-pointer'>
      <ToggleButtonGroup
        value={selectedCategory}
        exclusive
        orientation={orientation}
        onChange={handleChange}
        aria-label='Category'
        className='w-[90vw] m-auto'
      >
        {categories &&
          Array.isArray(categories) &&
          categories.length > 0 &&
          categories.map((category) => (
            <ToggleButton
              key={category}
              value={category}
              className='toggle-btn flex justify-center items-center border border-gray-700 rounded-md'
              style={{ height: '5rem' }}
            >
              <span
                className={`font-semibold ${
                  category === selectedCategory
                    ? ` text-primary-dark`
                    : ' text-gray-400'
                }`}
              >
                {category}
              </span>
            </ToggleButton>
          ))}
      </ToggleButtonGroup>
    </motion.div>
  );
};

export default CategoryToggleButton;
