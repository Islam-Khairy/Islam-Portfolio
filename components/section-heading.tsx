
import React from 'react';

interface SectionHeadingProps {
  className?: string;
  children: React.ReactNode;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ className, children }) => {
  return <h2 className='text-3xl font-semibold capitalize mb-8 text-center'>{children}</h2>;
};

export default SectionHeading;
