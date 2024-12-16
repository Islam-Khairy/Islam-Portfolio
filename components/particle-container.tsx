
'use client';

import React, { useCallback, useMemo } from 'react';
import Particles from 'react-particles';
import type { Container, Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

interface ParticleContainerProps {
  theme: string; 
}

const ParticleContainer: React.FC<ParticleContainerProps> = ({ theme }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
  }, []);

  const particlesOptions = useMemo(() => ({
    background: {
      color: {
        value: theme === 'dark' ? '#111827' : '#f7fafc',
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'grab',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 150,
          line_linked: {
            opacity: 1,
          },
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nd: 2,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    fullScreen: { enable: false },
    particles: {
      color: {
        value: [
          '#FF0000',
          '#00FF00',
          '#0000FF',
          '#FFFF00',
          '#FF00FF',
          '#00FFFF',
          '#FFA500',
          '#800080',
          '#008000',
          '#FFC0CB',
          '#FFFFF0',
          '#008080',
          '#FFD700',
        ],
      },
      links: {
        color: theme === 'dark' ? '#ffffff' : '#000000', 
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: false,
        speed: 2,
        straight: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 100,
      },
      opacity: {
        value: 0.3,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#000000',
        },
        polygon: {
          nb_sides: 5,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
    },
    detectRetina: true,
  }), [theme]);

  return (
    <Particles
      id='tsparticles'
      init={particlesInit}
      loaded={particlesLoaded}
      //@ts-ignore
      options={particlesOptions}
    />
  );
};

export default ParticleContainer;
