'use client';

import { Canvas } from '@react-three/fiber';
import Stars from '../stars/Stars';
import ErrorBoundary from '../../ErrorBoundary';

export default function MainElement() {
  return (
    <ErrorBoundary>
      <Canvas
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
        camera={{ position: [0, 0, 1] }}
      >
        <Stars />
      </Canvas>
    </ErrorBoundary>
  );
}
