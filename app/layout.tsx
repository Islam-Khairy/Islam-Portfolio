import Header from '@/components/header';
import './globals.css';
import ActiveSectionContextProvider from '@/context/active-section-context';
import ThemeContextProvider from '@/context/theme-context';
import { Toaster } from 'react-hot-toast';
import MainElement from '@/components/mainElement/MainElement';
import { Suspense } from 'react';

export const metadata = {
  title: 'Islam Khairy | Web Developer',
  description: 'Web Developer.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // const setInitialTheme = `
  //   (function() {
  //     const localTheme = window.localStorage.getItem('theme');

  //     if (!localTheme) {
  //       document.documentElement.classList.add('dark');
  //       window.localStorage.setItem('theme', 'dark');
  //     }
  //     else if (localTheme === 'dark' || (!localTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  //       document.documentElement.classList.add('dark');
  //     }
  //     else {
  //       document.documentElement.classList.remove('dark');
  //     }
  //   })();
  // `;

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
        {/* <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} /> */}
      </head>
      <body className='font-style dark:bg-gradient-to-b from-[#0f172a] to-[#131a28] bg-[radial-gradient(circle, #ffffff, #f9f5f0)] dark:text-gray-50 text-gray-950 dark:text-opacity-90 relative'>
        <ThemeContextProvider>
          <Suspense fallback={<div>...loading</div>}>
            <MainElement />
          </Suspense>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position='top-right' />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
