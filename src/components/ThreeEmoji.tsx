
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Float } from '@react-three/drei';
import * as THREE from 'three';

const FloatingEmoji = ({ position, color, scale = 1 }: { position: [number, number, number], color: string, scale?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} position={position} scale={scale} args={[1, 32, 32]}>
        <meshStandardMaterial 
          color={color} 
          metalness={0.1} 
          roughness={0.2}
          emissive={color}
          emissiveIntensity={0.1}
        />
      </Sphere>
    </Float>
  );
};

const ThreeEmoji = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <FloatingEmoji position={[-3, 2, 0]} color="#ff6b9d" scale={0.8} />
        <FloatingEmoji position={[3, -1, 0]} color="#4ecdc4" scale={1.2} />
        <FloatingEmoji position={[0, 3, -2]} color="#ffd93d" scale={0.6} />
        <FloatingEmoji position={[-2, -2, 1]} color="#a8e6cf" scale={0.9} />
        <FloatingEmoji position={[2.5, 1.5, -1]} color="#ff8b94" scale={0.7} />
      </Canvas>
    </div>
  );
};

export default ThreeEmoji;
