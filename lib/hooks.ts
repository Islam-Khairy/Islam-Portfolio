import { useActiveSectionContext } from '@/context/active-section-context';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import type { SectionName } from './types';

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const isTablet =
    typeof window !== 'undefined' && window.innerWidth >= 768 && window.innerWidth < 1024;
  const isLargeScreen = typeof window !== 'undefined' && window.innerWidth >= 1024;

  const aboutSectionSettings =
    sectionName === 'About' && isTablet
      ? {
          threshold: 0.2,
          rootMargin: '0px 0px -60% 0px',
        }
      : {};

  const skillsSectionSettings =
    sectionName === 'Skills'
      ? {
          threshold: 0.2,
          rootMargin: isMobile
            ? '0px 0px -60% 0px'
            : isTablet
            ? '0px 0px -65% 0px'
            : isLargeScreen
            ? '0px 0px -70% 0px'
            : '0px',
        }
      : {};

  const contactSectionSettings =
    sectionName === 'Contact'
      ? {
          threshold: 0.3,
          rootMargin: isTablet ? '0px 0px -30% 0px' : '0px 0px -55% 0px',
        }
      : sectionName === 'Experience' && !isMobile
      ? {
          threshold: 0.3,
          rootMargin: '0px 0px -55% 0px',
        }
      : {};

  const { ref, inView } = useInView({
    threshold: isMobile ? 0.2 : threshold,
    rootMargin: isMobile ? '0px 0px -50% 0px' : '0px',
    ...aboutSectionSettings,
    ...skillsSectionSettings,
    ...contactSectionSettings,
  });

  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return { ref };
}
