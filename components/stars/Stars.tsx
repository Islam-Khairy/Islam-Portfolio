'use client';

import { useMemo, useRef } from 'react';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useTheme } from '@/context/theme-context';

export default function Stars() {
  const count = 1000
  const radius = 2.5
  const { theme } = useTheme();
  const ref = useRef<THREE.Points>(null);

  const sphere = useMemo(() => {
    const points = random.inSphere(new Float32Array(count * 3), { radius });

    for (let i = 0; i < points.length; i++) {
      if (isNaN(points[i])) {
        console.error(`Found NaN at index ${i}, replacing with 0`);
        points[i] = 0;
      }
    }

    return points;
  }, [count, radius]);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <>
      <group rotation={[0, 0, Math.PI / 4]}>
        <Points
          ref={ref}
          positions={sphere}
          stride={3}
          frustumCulled={false}
        >
          <PointMaterial
            transparent
            color={`${theme === 'dark' ? '#8b9cdf' : '#6b7280'}`}
            size={0.005}
            sizeAttenuation={true}
            depthWrite={false}
            opacity={theme === 'dark' ? 0.8 : 0.6}
          />
        </Points>
      </group>
    </>
  );
}
