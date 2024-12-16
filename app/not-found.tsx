"use client"

import MainElement from '@/components/mainElement/MainElement';

export default function NotFound() {
  return (
    <div className='flex items-center justify-center h-screen '>
      <MainElement />
      <h1 className='text-4xl text-white'>404 - Page Not Found</h1>
    </div>
  );
}