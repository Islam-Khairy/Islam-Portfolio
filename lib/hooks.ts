import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  
  const aboutSectionSettings = sectionName === 'About' ? {
    threshold: 0.1,             
    rootMargin: '0px 0px -30% 0px' 
  } : {};
  
  const { ref, inView } = useInView({
    threshold: isMobile ? 0.2 : threshold, 
    rootMargin: isMobile ? "0px 0px -40% 0px" : "0px",
    ...aboutSectionSettings,
  });
  
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return { ref };
}
