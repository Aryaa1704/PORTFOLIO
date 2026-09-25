import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { ArrowRight, Cpu, Sparkles, RefreshCw } from 'lucide-react';

interface HeroSceneProps {
  onNavigate: (sectionId: string) => void;
}

export default function HeroScene({ onNavigate }: HeroSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ping, setPing] = useState(18);
  const [fps, setFps] = useState('60.0');
  const [viewportDim, setViewportDim] = useState('1920x1080');
  const [isWireframeOnly, setIsWireframeOnly] = useState(false);
  const [speedMultiplier, setSpeedMultiplier] = useState(1);

  useEffect(() => {
    // Update simulated telemetry
    const interval = setInterval(() => {
      setPing(Math.floor(14 + Math.random() * 8));
      setFps((59.4 + Math.random() * 0.6).toFixed(1));
    }, 2000);

    const updateDimensions = () => {
      setViewportDim(`${window.innerWidth}x${window.innerHeight}`);
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  // Three.js 3D Neural Generative Sculpture
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.replaceChildren(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0x1a1a24, 1.5);
    scene.add(ambientLight);

    const pointLightViolet = new THREE.PointLight(0x8b5cf6, 3.5, 60);
    pointLightViolet.position.set(12, 10, 10);
    scene.add(pointLightViolet);

    const pointLightBlue = new THREE.PointLight(0x3b82f6, 3.5, 60);
    pointLightBlue.position.set(-12, -10, 8);
    scene.add(pointLightBlue);

    // Sculpture Group
    const sculptureGroup = new THREE.Group();
    scene.add(sculptureGroup);

    // 1. Core deformed icosahedron (Liquid Metal Brain)
    const coreGeo = new THREE.IcosahedronGeometry(5.2, 32);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x111116,
      emissive: 0x1e1035,
      roughness: 0.18,
      metalness: 0.85,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      wireframe: isWireframeOnly,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    sculptureGroup.add(coreMesh);

    // Initial positions for vertex deformation
    const pos = coreGeo.attributes.position;
    const originalPositions = new Float32Array(pos.count * 3);
    for (let i = 0; i < pos.count * 3; i++) {
      originalPositions[i] = pos.array[i];
    }

    // 2. Wireframe Lattice Overlay
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const wireMesh = new THREE.Mesh(coreGeo.clone(), wireMat);
    wireMesh.scale.set(1.025, 1.025, 1.025);
    sculptureGroup.add(wireMesh);

    // 3. Neural Cloud Particles
    const particleCount = 2800;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 6.0 + Math.random() * 6.8;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      particlePos[i * 3] = x;
      particlePos[i * 3 + 1] = y;
      particlePos[i * 3 + 2] = z;

      // Violet to cyan/blue gradient
      const mixFactor = Math.random();
      particleColors[i * 3] = 0.5 + mixFactor * 0.4;
      particleColors[i * 3 + 1] = 0.28 + mixFactor * 0.35;
      particleColors[i * 3 + 2] = 0.98;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.085,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    sculptureGroup.add(particleSystem);

    // Mouse interaction with physical inertia
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };
    window.addEventListener('mousemove', onMouseMove);

    const onResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', onResize);

    const clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime() * speedMultiplier;

      // Smooth inertia
      targetX += (mouseX - targetX) * 0.045;
      targetY += (mouseY - targetY) * 0.045;

      sculptureGroup.rotation.y = elapsedTime * 0.16 + targetX * 0.85;
      sculptureGroup.rotation.x = elapsedTime * 0.09 + targetY * 0.55;

      particleSystem.rotation.y = -elapsedTime * 0.08;
      particleSystem.rotation.z = elapsedTime * 0.045;

      // Organic wave deformation
      const positionAttr = coreGeo.attributes.position;
      for (let i = 0; i < positionAttr.count; i++) {
        const ox = originalPositions[i * 3];
        const oy = originalPositions[i * 3 + 1];
        const oz = originalPositions[i * 3 + 2];

        const wave =
          Math.sin(elapsedTime * 1.8 + ox * 0.8 + oy * 0.8) * 0.35 +
          Math.cos(elapsedTime * 1.2 + oz * 0.9) * 0.25;

        positionAttr.setXYZ(
          i,
          ox * (1 + wave * 0.12),
          oy * (1 + wave * 0.12),
          oz * (1 + wave * 0.12)
        );
      }
      positionAttr.needsUpdate = true;

      // Lights follow cursor coordinates
      pointLightViolet.position.x = 10 + targetX * 8;
      pointLightViolet.position.y = 8 + targetY * 8;
      pointLightBlue.position.x = -10 - targetX * 8;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      coreGeo.dispose();
      particleGeo.dispose();
      coreMat.dispose();
      wireMat.dispose();
      particleMat.dispose();
    };
  }, [isWireframeOnly, speedMultiplier]);

  return (
    <section
      id="hero"
      className="relative w-full min-h-[92vh] flex flex-col justify-between px-4 sm:px-10 py-10 overflow-hidden bg-[#0e0e0e]"
    >
      {/* Micro-Coordinate Dot Overlay & Structural Hairline Grids */}
      <div className="pointer-events-none absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0e0e0e]/40 to-[#0e0e0e]"></div>

      {/* 3D Generative AI sculpture element */}
      <div className="absolute inset-0 w-full h-full z-10 opacity-80 mix-blend-screen pointer-events-auto">
        <div ref={containerRef} className="w-full h-full" />
      </div>

      {/* Interactive 3D Control Pill (Top Right on Canvas) */}
      <div className="absolute right-4 top-20 sm:right-10 sm:top-20 z-30 flex items-center gap-2 bg-[#1c1b1b]/80 backdrop-blur-md px-3 py-1.5 border border-[#2a2a2a] text-[10px] font-mono">
        <span className="text-[#c4c7c8] hidden sm:inline">// 3D_SCULPTURE</span>
        <button
          type="button"
          onClick={() => setIsWireframeOnly(!isWireframeOnly)}
          className={`px-2 py-0.5 transition-colors ${
            isWireframeOnly ? 'bg-[#d2bbff] text-[#3f008e] font-bold' : 'text-[#8e9192] hover:text-white'
          }`}
          title="Toggle Wireframe Shader"
        >
          WIREFRAME
        </button>
        <span className="text-[#444748]">|</span>
        <button
          type="button"
          onClick={() => setSpeedMultiplier((prev) => (prev === 1 ? 2 : prev === 2 ? 0.5 : 1))}
          className="text-[#8e9192] hover:text-white px-1"
          title="Adjust rotational warp speed"
        >
          SPEED: {speedMultiplier}x
        </button>
      </div>

      {/* Hero Header / Telemetry Metadata Bar */}
      <div className="relative z-20 flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping"></span>
          <span className="font-mono text-xs text-white tracking-widest uppercase">
            [AI / SOFTWARE / SYSTEMS]
          </span>
          <span className="font-mono text-xs text-[#8e9192] hidden sm:inline">
            // SYSTEM PROTOCOL 2025
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="font-mono text-[11px] text-[#c4c7c8] tracking-wider uppercase hidden sm:inline">
            [ENGINEERING STUDENT • BUILDER • CREATIVE TECHNOLOGY]
          </span>
          <div className="px-2 py-0.5 bg-[#2a2a2a] font-mono text-[11px] text-[#d2bbff] border border-[#353534]">
            SYS_LATENCY: <span id="telemetry-ping">{ping}ms</span>
          </div>
        </div>
      </div>

      {/* Massive Central Editorial Typography */}
      <div className="relative z-20 my-auto py-10 select-none">
        <div className="relative">
          <p className="font-mono text-xs text-[#d2bbff] tracking-widest uppercase mb-1">
            // CORE_ARCHITECT_IDENTITY
          </p>
          <h1 className="font-['Space_Grotesk'] text-display-xl font-bold tracking-tighter text-white uppercase mix-blend-difference drop-shadow-2xl -ml-1 sm:-ml-2">
            ARYAN
            <br />
            <span className="text-[#444748] hover:text-white transition-colors duration-500 cursor-default">
              SHARMA
            </span>
          </h1>
        </div>

        <div className="mt-6 max-w-2xl bg-[#0e0e0e]/85 backdrop-blur-md p-4 sm:p-6 border-l-2 border-[#d2bbff]">
          <p className="text-body-lg text-[#e5e2e1] font-light leading-relaxed">
            “I build intelligent software, AI systems and interactive digital experiences.”
          </p>
          <div className="flex flex-wrap gap-1.5 mt-3 font-mono text-[11px] text-[#c4c7c8] uppercase">
            <span className="px-2.5 py-1 bg-[#1c1b1b] border border-[#2a2a2a]">Machine Learning</span>
            <span className="px-2.5 py-1 bg-[#1c1b1b] border border-[#2a2a2a]">Computer Vision</span>
            <span className="px-2.5 py-1 bg-[#1c1b1b] border border-[#2a2a2a]">Distributed Backend</span>
            <span className="px-2.5 py-1 bg-[#1c1b1b] border border-[#2a2a2a]">Automation</span>
          </div>
        </div>
      </div>

      {/* Hero Base Anchors & Direct Actions */}
      <div className="relative z-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('work');
            }}
            data-cursor-action="EXPLORE"
            className="group relative px-6 py-3 bg-white text-[#2f3131] font-mono text-xs uppercase font-bold tracking-wider transition-all duration-200 hover:bg-[#d2bbff] hover:text-[#3f008e] shadow-xl flex items-center gap-2"
          >
            <span>EXPLORE ARCHIVES</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#blueprint"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('blueprint');
            }}
            data-cursor-action="DIAGRAM"
            className="font-mono text-xs text-[#c4c7c8] hover:text-[#d2bbff] transition-colors uppercase tracking-widest flex items-center gap-1.5 py-3"
          >
            <Cpu size={15} />
            <span>ARCHITECTURE BLUEPRINT</span>
          </a>
        </div>

        <div className="flex items-center gap-4 sm:gap-6 font-mono text-[11px] text-[#8e9192]">
          <span>
            FPS: <span className="text-white font-mono">{fps}</span>
          </span>
          <span className="hidden sm:inline">VIEWPORT: {viewportDim}</span>
          <span className="text-[#d2bbff] font-mono">INITIALIZED_OK</span>
        </div>
      </div>
    </section>
  );
}
