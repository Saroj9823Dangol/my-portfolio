"use client"

import { useRef, useMemo, memo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import * as THREE from "three"
import { PLANETS, SUN_CONFIG, type PlanetConfig } from "@/lib/constants/planets"
import type { PlanetId } from "@/lib/types"

interface SolarSystemProps {
  onPlanetClick: (planetId: PlanetId) => void
  activePlanet: PlanetId
  isPaused: boolean
}

const Sun = memo(function Sun({ onClick }: { onClick: () => void }) {
  const sunRef = useRef<THREE.Mesh>(null)
  const coronaRef = useRef<THREE.Mesh>(null)
  const outerCoronaRef = useRef<THREE.Mesh>(null)
  const surfaceRef = useRef<THREE.Mesh>(null)

  // Procedural sun surface texture
  const sunTexture = useMemo(() => {
    const size = 512
    const canvas = document.createElement("canvas")
    canvas.width = size
    canvas.height = size
    const ctx = canvas.getContext("2d")!

    // Base gradient
    const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
    gradient.addColorStop(0, "#fff8e7")
    gradient.addColorStop(0.3, "#ffd54f")
    gradient.addColorStop(0.6, "#ffb300")
    gradient.addColorStop(0.8, "#ff8f00")
    gradient.addColorStop(1, "#e65100")
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, size, size)

    // Add granulation (convection cells)
    for (let i = 0; i < 2000; i++) {
      const x = Math.random() * size
      const y = Math.random() * size
      const r = Math.random() * 8 + 2
      const brightness = Math.random() * 40 - 20
      ctx.beginPath()
      ctx.arc(x, y, r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${255 + brightness}, ${200 + brightness}, ${100 + brightness}, 0.3)`
      ctx.fill()
    }

    // Add sunspots
    for (let i = 0; i < 8; i++) {
      const x = Math.random() * size
      const y = Math.random() * size
      const r = Math.random() * 20 + 10
      const gradient2 = ctx.createRadialGradient(x, y, 0, x, y, r)
      gradient2.addColorStop(0, "rgba(80, 40, 0, 0.8)")
      gradient2.addColorStop(0.5, "rgba(120, 60, 0, 0.5)")
      gradient2.addColorStop(1, "rgba(180, 100, 0, 0)")
      ctx.fillStyle = gradient2
      ctx.beginPath()
      ctx.arc(x, y, r, 0, Math.PI * 2)
      ctx.fill()
    }

    const texture = new THREE.CanvasTexture(canvas)
    texture.needsUpdate = true
    return texture
  }, [])

  useFrame((state) => {
    const time = state.clock.elapsedTime

    if (sunRef.current) {
      sunRef.current.rotation.y += SUN_CONFIG.rotationSpeed
    }
    if (surfaceRef.current) {
      surfaceRef.current.rotation.y += SUN_CONFIG.rotationSpeed * 0.8
    }
    if (coronaRef.current) {
      const scale = SUN_CONFIG.coronaScale + Math.sin(time * SUN_CONFIG.pulseSpeed) * 0.15
      coronaRef.current.scale.setScalar(scale)
      coronaRef.current.rotation.z += 0.001
    }
    if (outerCoronaRef.current) {
      const scale = SUN_CONFIG.coronaScale * 1.3 + Math.sin(time * SUN_CONFIG.pulseSpeed * 0.7) * 0.2
      outerCoronaRef.current.scale.setScalar(scale)
    }
  })

  return (
    <group onClick={onClick}>
      {/* Outer corona (faint) */}
      <mesh ref={outerCoronaRef}>
        <sphereGeometry args={[SUN_CONFIG.radius, 64, 64]} />
        <meshBasicMaterial color={SUN_CONFIG.coronaColor} transparent opacity={0.02} side={THREE.BackSide} />
      </mesh>

      {/* Inner corona */}
      <mesh ref={coronaRef}>
        <sphereGeometry args={[SUN_CONFIG.radius, 64, 64]} />
        <meshBasicMaterial color={SUN_CONFIG.flareColor} transparent opacity={0.05} side={THREE.BackSide} />
      </mesh>

      {/* Photosphere glow */}
      <mesh scale={1.15}>
        <sphereGeometry args={[SUN_CONFIG.radius, 48, 48]} />
        <meshBasicMaterial color={SUN_CONFIG.surfaceColor} transparent opacity={0.12} />
      </mesh>

      {/* Sun surface with texture */}
      <mesh ref={surfaceRef}>
        <sphereGeometry args={[SUN_CONFIG.radius * 1.02, 64, 64]} />
        <meshBasicMaterial map={sunTexture} transparent opacity={0.6} />
      </mesh>

      {/* Sun core */}
      <mesh ref={sunRef}>
        <sphereGeometry args={[SUN_CONFIG.radius, 64, 64]} />
        <meshStandardMaterial
          color={SUN_CONFIG.coreColor}
          emissive={SUN_CONFIG.surfaceColor}
          emissiveIntensity={2.5}
          roughness={1}
        />
      </mesh>

      {/* Solar prominences */}
      <SolarProminences />

      {/* Point light */}
      <pointLight color={SUN_CONFIG.coreColor} intensity={SUN_CONFIG.intensity} distance={100} decay={2} />
    </group>
  )
})

const SolarProminences = memo(function SolarProminences() {
  const prominencesRef = useRef<THREE.Group>(null)

  const prominences = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => ({
      angle: (i / 6) * Math.PI * 2,
      height: 0.3 + Math.random() * 0.4,
      width: 0.1 + Math.random() * 0.15,
      speed: 0.5 + Math.random() * 0.5,
    }))
  }, [])

  useFrame((state) => {
    if (prominencesRef.current) {
      prominencesRef.current.rotation.y += 0.0003
    }
  })

  return (
    <group ref={prominencesRef}>
      {prominences.map((p, i) => (
        <mesh
          key={i}
          position={[Math.cos(p.angle) * SUN_CONFIG.radius * 1.05, 0, Math.sin(p.angle) * SUN_CONFIG.radius * 1.05]}
          rotation={[0, -p.angle, Math.PI / 2]}
        >
          <coneGeometry args={[p.width, p.height, 8]} />
          <meshBasicMaterial color={SUN_CONFIG.flareColor} transparent opacity={0.4} />
        </mesh>
      ))}
    </group>
  )
})

const Planet = memo(function Planet({
  config,
  onClick,
  isPaused,
}: {
  config: PlanetConfig
  onClick: () => void
  isPaused: boolean
}) {
  const groupRef = useRef<THREE.Group>(null)
  const planetRef = useRef<THREE.Mesh>(null)
  const atmosphereRef = useRef<THREE.Mesh>(null)
  const cloudsRef = useRef<THREE.Mesh>(null)
  const labelRef = useRef<THREE.Group>(null)

  const initialAngle = useMemo(() => Math.random() * Math.PI * 2, [])

  // Generate procedural planet texture based on type
  const planetTexture = useMemo(() => {
    const size = 512
    const canvas = document.createElement("canvas")
    canvas.width = size
    canvas.height = size
    const ctx = canvas.getContext("2d")!

    if (config.surfaceType === "gas-giant") {
      // Gas giant bands
      const bandCount = config.hasBands ? 20 : 10
      for (let y = 0; y < size; y++) {
        const bandIndex = Math.floor((y / size) * bandCount)
        const colors = [config.baseColor, config.secondaryColor, config.tertiaryColor || config.baseColor]
        const color = colors[bandIndex % colors.length]

        // Add variation within bands
        const variation = Math.sin((y / size) * Math.PI * bandCount) * 20
        ctx.fillStyle = color
        ctx.globalAlpha = 0.8 + Math.sin(y * 0.1) * 0.2
        ctx.fillRect(0, y, size, 1)

        // Add turbulence
        for (let x = 0; x < size; x += 4) {
          const noise = Math.random() * 0.1
          ctx.globalAlpha = noise
          ctx.fillStyle = bandIndex % 2 === 0 ? config.secondaryColor : config.baseColor
          ctx.fillRect(x, y, 4, 1)
        }
      }

      // Add storm (Great Red Spot for Jupiter)
      if (config.hasStorm && config.stormColor) {
        const stormX = size * 0.6
        const stormY = size * 0.55
        const stormW = size * 0.15
        const stormH = size * 0.08
        ctx.globalAlpha = 1
        const stormGradient = ctx.createRadialGradient(stormX, stormY, 0, stormX, stormY, stormW)
        stormGradient.addColorStop(0, config.stormColor)
        stormGradient.addColorStop(0.5, config.stormColor)
        stormGradient.addColorStop(1, "transparent")
        ctx.fillStyle = stormGradient
        ctx.beginPath()
        ctx.ellipse(stormX, stormY, stormW, stormH, 0, 0, Math.PI * 2)
        ctx.fill()
      }
    } else if (config.surfaceType === "terrestrial") {
      // Earth-like with continents and oceans
      ctx.fillStyle = config.baseColor // Ocean
      ctx.fillRect(0, 0, size, size)

      // Add continents
      for (let i = 0; i < 15; i++) {
        const x = Math.random() * size
        const y = Math.random() * size
        const w = Math.random() * 150 + 50
        const h = Math.random() * 100 + 30
        ctx.fillStyle = config.secondaryColor
        ctx.beginPath()
        // Irregular continent shapes
        ctx.moveTo(x, y)
        for (let j = 0; j < 8; j++) {
          const angle = (j / 8) * Math.PI * 2
          const r = (w / 2) * (0.6 + Math.random() * 0.4)
          ctx.lineTo(x + Math.cos(angle) * r, y + Math.sin(angle) * r * (h / w))
        }
        ctx.closePath()
        ctx.fill()

        // Add terrain variation
        if (config.tertiaryColor) {
          ctx.fillStyle = config.tertiaryColor
          ctx.globalAlpha = 0.5
          ctx.beginPath()
          ctx.arc(x + w * 0.2, y + h * 0.2, w * 0.3, 0, Math.PI * 2)
          ctx.fill()
          ctx.globalAlpha = 1
        }
      }

      // Add polar caps
      if (config.hasPolarCaps && config.polarCapColor) {
        ctx.fillStyle = config.polarCapColor
        ctx.globalAlpha = 0.9
        ctx.fillRect(0, 0, size, size * 0.08)
        ctx.fillRect(0, size * 0.92, size, size * 0.08)
        ctx.globalAlpha = 1
      }
    } else {
      // Rocky planets (Mercury, Mars-like)
      ctx.fillStyle = config.baseColor
      ctx.fillRect(0, 0, size, size)

      // Add craters and surface features
      for (let i = 0; i < 100; i++) {
        const x = Math.random() * size
        const y = Math.random() * size
        const r = Math.random() * 25 + 5
        const craterGradient = ctx.createRadialGradient(x, y, 0, x, y, r)
        craterGradient.addColorStop(0, config.secondaryColor)
        craterGradient.addColorStop(0.6, config.tertiaryColor || config.secondaryColor)
        craterGradient.addColorStop(1, config.baseColor)
        ctx.fillStyle = craterGradient
        ctx.beginPath()
        ctx.arc(x, y, r, 0, Math.PI * 2)
        ctx.fill()
      }

      // Add highlands/lowlands variation
      for (let i = 0; i < 20; i++) {
        ctx.globalAlpha = 0.2
        ctx.fillStyle = Math.random() > 0.5 ? config.secondaryColor : config.baseColor
        ctx.beginPath()
        ctx.arc(Math.random() * size, Math.random() * size, Math.random() * 80 + 40, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1

      // Polar caps for Mars
      if (config.hasPolarCaps && config.polarCapColor) {
        const gradient = ctx.createRadialGradient(size / 2, 0, 0, size / 2, 0, size * 0.2)
        gradient.addColorStop(0, config.polarCapColor)
        gradient.addColorStop(1, "transparent")
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, size, size * 0.15)

        const gradient2 = ctx.createRadialGradient(size / 2, size, 0, size / 2, size, size * 0.15)
        gradient2.addColorStop(0, config.polarCapColor)
        gradient2.addColorStop(1, "transparent")
        ctx.fillStyle = gradient2
        ctx.fillRect(0, size * 0.88, size, size * 0.12)
      }
    }

    const texture = new THREE.CanvasTexture(canvas)
    texture.needsUpdate = true
    return texture
  }, [config])

  // Cloud layer texture
  const cloudTexture = useMemo(() => {
    if (!config.hasCloudLayer) return null

    const size = 512
    const canvas = document.createElement("canvas")
    canvas.width = size
    canvas.height = size
    const ctx = canvas.getContext("2d")!

    ctx.clearRect(0, 0, size, size)

    // Generate cloud patterns
    for (let i = 0; i < 50; i++) {
      const x = Math.random() * size
      const y = Math.random() * size
      const w = Math.random() * 100 + 30
      const h = Math.random() * 40 + 20

      ctx.globalAlpha = Math.random() * 0.4 + 0.2
      ctx.fillStyle = config.cloudColor || "#ffffff"
      ctx.beginPath()
      ctx.ellipse(x, y, w, h, 0, 0, Math.PI * 2)
      ctx.fill()
    }

    const texture = new THREE.CanvasTexture(canvas)
    texture.needsUpdate = true
    return texture
  }, [config])

  useFrame((state) => {
    const time = state.clock.elapsedTime

    if (groupRef.current && !isPaused) {
      const angle = initialAngle + time * config.orbitSpeed * 0.12
      groupRef.current.position.x = Math.cos(angle) * config.orbitRadius
      groupRef.current.position.z = Math.sin(angle) * config.orbitRadius
      groupRef.current.position.y = Math.sin(angle * 0.5) * 0.15
    }

    if (planetRef.current) {
      planetRef.current.rotation.y += config.rotationSpeed
    }

    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += config.rotationSpeed * 1.15
    }

    if (atmosphereRef.current && config.hasAtmosphere) {
      const pulse = 1 + Math.sin(time * 1.2) * 0.01
      atmosphereRef.current.scale.setScalar(pulse)
    }

    if (labelRef.current) {
      labelRef.current.lookAt(state.camera.position)
    }
  })

  // Label texture with both names
  const labelTexture = useMemo(() => {
    const canvas = document.createElement("canvas")
    canvas.width = 256
    canvas.height = 80
    const ctx = canvas.getContext("2d")!

    // Main name
    ctx.font = "bold 24px Orbitron, sans-serif"
    ctx.fillStyle = "#ffffff"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.shadowColor = config.baseColor
    ctx.shadowBlur = 10
    ctx.fillText(config.name, 128, 28)

    // Real planet name
    ctx.font = "14px Space Mono, monospace"
    ctx.fillStyle = config.atmosphereColor
    ctx.shadowBlur = 5
    ctx.fillText(`[ ${config.realName} ]`, 128, 55)

    return canvas
  }, [config])

  return (
    <group ref={groupRef} rotation={[0, 0, config.axialTilt]}>
      {/* Outer atmosphere glow */}
      {config.hasAtmosphere && (
        <mesh ref={atmosphereRef} scale={1 + config.atmosphereThickness}>
          <sphereGeometry args={[config.size, 48, 48]} />
          <meshBasicMaterial color={config.atmosphereColor} transparent opacity={0.12} side={THREE.BackSide} />
        </mesh>
      )}

      {/* Inner atmosphere rim */}
      {config.hasAtmosphere && (
        <mesh scale={1 + config.atmosphereThickness * 0.5}>
          <sphereGeometry args={[config.size, 48, 48]} />
          <meshBasicMaterial color={config.atmosphereColor} transparent opacity={0.05} />
        </mesh>
      )}

      {/* Cloud layer */}
      {config.hasCloudLayer && cloudTexture && (
        <mesh ref={cloudsRef} scale={1.02}>
          <sphereGeometry args={[config.size, 48, 48]} />
          <meshBasicMaterial map={cloudTexture} transparent opacity={0.5} />
        </mesh>
      )}

      {/* Planet surface */}
      <mesh ref={planetRef} onClick={onClick}>
        <sphereGeometry args={[config.size, 64, 64]} />
        <meshStandardMaterial
          map={planetTexture}
          roughness={config.surfaceType === "gas-giant" ? 1 : 0.8}
          metalness={0.1}
        />
      </mesh>

      {/* Saturn's rings */}
      {config.hasRings && config.ringColors && <SaturnRings size={config.size} colors={config.ringColors} />}

      {/* Moons */}
      {config.hasMoons && <RealisticMoons count={config.hasMoons} planetSize={config.size} isPaused={isPaused} />}

      {/* Label */}
      <group ref={labelRef} position={[0, config.size + 0.6, 0]}>
        <sprite scale={[2.5, 0.8, 1]}>
          <spriteMaterial transparent opacity={0.9}>
            <canvasTexture attach="map" image={labelTexture} />
          </spriteMaterial>
        </sprite>
      </group>
    </group>
  )
})

const SaturnRings = memo(function SaturnRings({ size, colors }: { size: number; colors: string[] }) {
  const ringsRef = useRef<THREE.Group>(null)

  const ringData = useMemo(() => {
    // Realistic Saturn ring structure
    const rings = [
      // D Ring (innermost, faint)
      { inner: size * 1.11, outer: size * 1.24, opacity: 0.15, colorIndex: 4 },
      // C Ring (Crepe Ring)
      { inner: size * 1.24, outer: size * 1.53, opacity: 0.4, colorIndex: 2 },
      // B Ring (brightest)
      { inner: size * 1.53, outer: size * 1.95, opacity: 0.85, colorIndex: 0 },
      // Cassini Division
      { inner: size * 1.95, outer: size * 2.03, opacity: 0.05, colorIndex: 2 },
      // A Ring
      { inner: size * 2.03, outer: size * 2.27, opacity: 0.7, colorIndex: 1 },
      // Encke Gap
      { inner: size * 2.21, outer: size * 2.22, opacity: 0.02, colorIndex: 2 },
      // F Ring (outermost, thin)
      { inner: size * 2.32, outer: size * 2.35, opacity: 0.5, colorIndex: 3 },
    ]
    return rings
  }, [size])

  // Ring texture with radial variation
  const ringTexture = useMemo(() => {
    const canvas = document.createElement("canvas")
    canvas.width = 1024
    canvas.height = 64
    const ctx = canvas.getContext("2d")!

    // Create radial density variation
    for (let x = 0; x < canvas.width; x++) {
      const density = 0.3 + Math.sin(x * 0.05) * 0.2 + Math.random() * 0.3
      ctx.fillStyle = `rgba(255, 255, 255, ${density})`
      ctx.fillRect(x, 0, 1, canvas.height)
    }

    const texture = new THREE.CanvasTexture(canvas)
    texture.wrapS = THREE.RepeatWrapping
    texture.repeat.set(8, 1)
    return texture
  }, [])

  useFrame((state) => {
    if (ringsRef.current) {
      ringsRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.02
    }
  })

  return (
    <group ref={ringsRef} rotation={[Math.PI / 2.2, 0, 0.3]}>
      {ringData.map((ring, i) => (
        <mesh key={i}>
          <ringGeometry args={[ring.inner, ring.outer, 128]} />
          <meshBasicMaterial
            color={colors[ring.colorIndex]}
            side={THREE.DoubleSide}
            transparent
            opacity={ring.opacity}
            alphaMap={ringTexture}
          />
        </mesh>
      ))}
      {/* Ring shadow on planet */}
      <mesh rotation={[0, 0, 0]} position={[0, -0.01, 0]}>
        <ringGeometry args={[size * 1.1, size * 2.4, 64]} />
        <meshBasicMaterial color="#000000" side={THREE.DoubleSide} transparent opacity={0.1} />
      </mesh>
    </group>
  )
})

const RealisticMoons = memo(function RealisticMoons({
  count,
  planetSize,
  isPaused,
}: {
  count: number
  planetSize: number
  isPaused: boolean
}) {
  const moonsData = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      size: 0.03 + Math.random() * 0.05,
      orbitRadius: planetSize * (1.5 + i * 0.4),
      speed: 1.2 + Math.random() * 1,
      initialAngle: Math.random() * Math.PI * 2,
      inclination: (Math.random() - 0.5) * 0.3,
      // Realistic moon colors (gray, slightly brown)
      color: `hsl(${30 + Math.random() * 20}, ${5 + Math.random() * 10}%, ${50 + Math.random() * 20}%)`,
    }))
  }, [count, planetSize])

  return (
    <>
      {moonsData.map((moon, i) => (
        <MoonBody key={i} {...moon} isPaused={isPaused} />
      ))}
    </>
  )
})

const MoonBody = memo(function MoonBody({
  size,
  orbitRadius,
  speed,
  initialAngle,
  inclination,
  color,
  isPaused,
}: {
  size: number
  orbitRadius: number
  speed: number
  initialAngle: number
  inclination: number
  color: string
  isPaused: boolean
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current && !isPaused) {
      const angle = initialAngle + state.clock.elapsedTime * speed
      meshRef.current.position.x = Math.cos(angle) * orbitRadius
      meshRef.current.position.z = Math.sin(angle) * orbitRadius
      meshRef.current.position.y = Math.sin(angle * 2) * inclination * orbitRadius * 0.2
      meshRef.current.rotation.y += 0.008
    }
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial color={color} roughness={0.95} metalness={0} />
    </mesh>
  )
})

const OrbitRing = memo(function OrbitRing({ radius, color }: { radius: number; color: string }) {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[radius - 0.015, radius + 0.015, 180]} />
      <meshBasicMaterial color={color} transparent opacity={0.08} side={THREE.DoubleSide} />
    </mesh>
  )
})

const AsteroidBelt = memo(function AsteroidBelt() {
  const asteroidsRef = useRef<THREE.Points>(null)

  const { positions, sizes } = useMemo(() => {
    const count = 400
    const pos = new Float32Array(count * 3)
    const szs = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2
      // Belt between Mars (8.5) and Jupiter (11.5)
      const radius = 9.8 + (Math.random() - 0.5) * 1.2
      const y = (Math.random() - 0.5) * 0.3

      pos[i * 3] = Math.cos(angle) * radius
      pos[i * 3 + 1] = y
      pos[i * 3 + 2] = Math.sin(angle) * radius
      szs[i] = Math.random() * 0.04 + 0.01
    }

    return { positions: pos, sizes: szs }
  }, [])

  useFrame(() => {
    if (asteroidsRef.current) {
      asteroidsRef.current.rotation.y += 0.0001
    }
  })

  return (
    <points ref={asteroidsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#8b7355" size={0.025} transparent opacity={0.6} sizeAttenuation />
    </points>
  )
})

function Scene({ onPlanetClick, isPaused }: { onPlanetClick: (id: PlanetId) => void; isPaused: boolean }) {
  return (
    <>
      <ambientLight intensity={0.04} />
      <Sun onClick={() => onPlanetClick("sun")} />

      {/* Orbit paths */}
      {PLANETS.map((planet) => (
        <OrbitRing key={`orbit-${planet.id}`} radius={planet.orbitRadius} color={planet.atmosphereColor} />
      ))}

      {/* Asteroid belt */}
      <AsteroidBelt />

      {/* Planets */}
      {PLANETS.map((planet) => (
        <Planet key={planet.id} config={planet} onClick={() => onPlanetClick(planet.id)} isPaused={isPaused} />
      ))}
    </>
  )
}

export function SolarSystem({ onPlanetClick, activePlanet, isPaused }: SolarSystemProps) {
  return (
    <div className="fixed inset-0 z-10">
      <Canvas dpr={[1, 2]} performance={{ min: 0.5 }} gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 12, 28]} fov={55} />
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minDistance={8}
          maxDistance={55}
          maxPolarAngle={Math.PI / 2.1}
          autoRotate={!isPaused && activePlanet === null}
          autoRotateSpeed={0.1}
          enableDamping
          dampingFactor={0.05}
        />
        <Scene onPlanetClick={onPlanetClick} isPaused={isPaused} />
      </Canvas>
    </div>
  )
}
