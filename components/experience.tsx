'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { useTheme } from '@/context/theme-context';

export default function Experience() {
  const { ref } = useSectionInView('Experience');
  const { theme } = useTheme();

  return (
    <section
      id='experience'
      ref={ref}
      className={`scroll-mt-28 sm:mt-16 md:mt-10 lg:mt-0 mb-28 sm:mb-40 px-4`}
    >
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor={theme === 'light' ? '#d1d5db' : 'rgba(255, 255, 255, 0.3)'}>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
                boxShadow: 'none',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight:
                  theme === 'light'
                    ? '0.4rem solid #9ca3af'
                    : '0.4rem solid rgba(255, 255, 255, 0.5)',
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: theme === 'light' ? 'white' : '#1d2432',
                border: `1px solid ${theme === 'light' ? '#d1d5db' : '#fff'}`,
                fontSize: '1.5rem',
              }}
            >
              <h3 className='font-semibold capitalize'>{item.title}</h3>
              <p className='font-normal !mt-0'>{item.location}</p>
              <p className='!mt-1 !font-normal text-gray-700 dark:text-white/75'>
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
