'use client';

import React, { useEffect, useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/theme-context';

interface CategoryTabsProps {
  categories: string[];
  selectedCategory: string;
  onChange: (newCategory: string) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ categories, selectedCategory, onChange }) => {
  const { theme } = useTheme();
  const [orientation, setOrientation] = useState<'horizontal' | 'vertical'>('horizontal');

  const handleChange = (event: React.SyntheticEvent, newCategory: string) => {
    onChange(newCategory);
  };

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

  return (
    <motion.div className='flex justify-center items-center cursor-pointer'>
      <div className='w-full'>
        <Tabs
          orientation={orientation}
          value={selectedCategory}
          onChange={handleChange}
          centered
          aria-label='skill category tabs'
          variant='scrollable'
          scrollButtons='auto'
          textColor={theme === 'dark' ? 'primary' : 'secondary'}
          indicatorColor={theme === 'dark' ? 'primary' : 'secondary'}
          TabIndicatorProps={{
            sx: {
              backgroundColor: theme === 'dark' ? '#ffffff' : '#000000',
              transition: '0.3s',
            },
          }}
        >
          {(categories &&
          Array.isArray(categories) &&
          categories.length > 0) && categories.map((category) => (
            <Tab
              key={category}
              value={category}
              label={category}
              sx={{
                textTransform: 'none',
                borderRadius: '8px',
                color:
                  category === selectedCategory
                    ? theme === 'dark'
                      ? '#ffffff'
                      : '#000000'
                    : theme === 'dark'
                    ? '#9ca3af'
                    : '#6b7280',
                '&.Mui-selected': {
                  color: theme === 'dark' ? '#ffffff' : '#000000',
                },
              }}
            />
          ))}
        </Tabs>
      </div>
    </motion.div>
  );
};

export default CategoryTabs;
