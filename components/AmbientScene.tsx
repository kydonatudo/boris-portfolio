"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function AmbientScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0, 6);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.35));
    mount.appendChild(renderer.domElement);

    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.85, 2),
      new THREE.MeshStandardMaterial({
        color: 0x1a2634,
        roughness: 0.78,
        metalness: 0.58,
        emissive: 0x08101b,
        emissiveIntensity: 0.45,
      }),
    );
    core.position.set(1.8, -0.2, -2.2);
    scene.add(core);

    const edge = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.92, 2),
      new THREE.MeshBasicMaterial({
        color: 0x6f8fb8,
        wireframe: true,
        transparent: true,
        opacity: 0.08,
      }),
    );
    edge.position.copy(core.position);
    scene.add(edge);

    const particleCount = 700;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i += 1) {
      const radius = 18 + Math.random() * 56;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(THREE.MathUtils.randFloatSpread(2));
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({
        color: 0x9db7d8,
        size: 0.045,
        transparent: true,
        opacity: 0.34,
        depthWrite: false,
      }),
    );
    scene.add(particles);

    scene.add(new THREE.AmbientLight(0x9fb9d8, 0.55));
    const coldLight = new THREE.DirectionalLight(0x76a9ff, 1.35);
    coldLight.position.set(4, 3, 6);
    scene.add(coldLight);
    const warmLight = new THREE.PointLight(0xc7a35a, 1.1, 14);
    warmLight.position.set(-4, -2, 2);
    scene.add(warmLight);

    let frameId = 0;
    const clock = new THREE.Clock();

    const resize = () => {
      const { width, height } = mount.getBoundingClientRect();
      renderer.setSize(width, height, false);
      camera.aspect = Math.max(width, 1) / Math.max(height, 1);
      camera.updateProjectionMatrix();
    };

    const animate = () => {
      const delta = clock.getDelta();
      const elapsed = clock.elapsedTime;
      core.rotation.x += delta * 0.08;
      core.rotation.y += delta * 0.12;
      edge.rotation.copy(core.rotation);
      particles.rotation.y = elapsed * 0.018;
      particles.rotation.x = Math.sin(elapsed * 0.14) * 0.018;
      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(frameId);
      mount.removeChild(renderer.domElement);
      core.geometry.dispose();
      edge.geometry.dispose();
      particleGeometry.dispose();
      (core.material as THREE.Material).dispose();
      (edge.material as THREE.Material).dispose();
      (particles.material as THREE.Material).dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />;
}
