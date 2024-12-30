'use client';

import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';

interface SubmitBtnProps {
  loading: boolean;
}

export default function SubmitBtn({ loading }: SubmitBtnProps) {
  return (
    <button
      type='submit'
      disabled={loading}
      className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 bg-white bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65'
    >
      {loading ? (
        <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>
      ) : (
        <>
          Send{' '}
          <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />
        </>
      )}
    </button>
  );
}
