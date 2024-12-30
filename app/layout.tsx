import Header from '@/components/header';
import './globals.css';
import ActiveSectionContextProvider from '@/context/active-section-context';
import MainElement from '@/components/mainElement/MainElement';
import { Suspense } from 'react';
import { Toaster } from 'sonner'

export const metadata = {
  title: 'Islam Khairy | Web Developer',
  description: 'Web Developer.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html
      lang='en'
      className='!scroll-smooth'
    >
      <head>
        <meta
          name='google-site-verification'
          content='YMyU0ORs8KhU7srb9dRv7N-io1dxaXqajvhKRdxcWGU'
        />
      </head>
      <body className='font-style bg-gradient-to-b from-[#0f172a] to-[#131a28] text-gray-50 text-opacity-90 relative'>
          <Suspense fallback={<div>...loading</div>}>
            <MainElement />
          </Suspense>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position='top-right' />
          </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
