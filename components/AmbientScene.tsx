"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

function CoreShape() {
  const mesh = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += delta * 0.08;
    mesh.current.rotation.y += delta * 0.12;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.35}>
      <mesh ref={mesh} position={[1.8, -0.2, -2.2]}>
        <icosahedronGeometry args={[1.9, 3]} />
        <MeshDistortMaterial
          color="#1a2634"
          roughness={0.82}
          metalness={0.55}
          distort={0.18}
          speed={0.55}
        />
      </mesh>
    </Float>
  );
}

export function AmbientScene() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-70">
      <Canvas camera={{ position: [0, 0, 5], fov: 42 }} dpr={[1, 1.35]} frameloop="always" performance={{ min: 0.55 }}>
        <ambientLight intensity={0.55} />
        <directionalLight position={[4, 3, 6]} intensity={1.4} color="#76a9ff" />
        <pointLight position={[-4, -2, 2]} intensity={1.1} color="#c7a35a" />
        <Stars radius={80} depth={32} count={900} factor={2.2} fade speed={0.25} />
        <CoreShape />
      </Canvas>
    </div>
  );
}
