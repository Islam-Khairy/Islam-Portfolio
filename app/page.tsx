import Intro from '@/components/home';
import About from '@/components/about';
import SectionDivider from '@/components/section-divider';
import Skills from '@/components/skills';
import Contact from '@/components/contact';
import Experience from '@/components/experience';

export default function Home() {
  return (
    <main className='flex flex-col items-center gap-36'>
      <Intro />
      {/* <div className="flex flex-col items-center px-4">
        <SectionDivider /> */}
      <About />
      {/* <Projects /> */}
      <Experience />
      <Skills />
      <Contact />
      {/* </div> */}
    </main>
  );
}
