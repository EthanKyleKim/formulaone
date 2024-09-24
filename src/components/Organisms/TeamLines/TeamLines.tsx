import React, { useRef } from 'react'
import { Canvas, useFrame, extend } from '@react-three/fiber'
import styled from 'styled-components'
import * as THREE from 'three'
import { Effects, OrbitControls } from '@react-three/drei'
import { UnrealBloomPass } from 'three-stdlib'

extend({ UnrealBloomPass })

const CanvasContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`

const teams = [
  { name: 'Mercedes', color: '#00D2BE' },
  { name: 'Red Bull Racing', color: '#0600EF' },
  { name: 'Ferrari', color: '#DC0000' },
  { name: 'McLaren', color: '#FF8700' },
  { name: 'Alpine', color: '#0090FF' },
  { name: 'AlphaTauri', color: '#2B4562' },
  { name: 'Aston Martin', color: '#006F62' },
  { name: 'Williams', color: '#005AFF' },
  { name: 'Alfa Romeo', color: '#900000' },
  { name: 'Haas', color: '#FFFFFF' },
]

const VerticalBeam = ({ color, index }) => {
  const ref = useRef()

  const speed = 0.02 + Math.random() * 0.01 // 속도 랜덤화
  const offset = index * 2 // 각 빛줄기의 초기 위치 차이

  // 곡선 경로를 정의 (아래에서 위로 올라가며 우측으로 휘어지는 경로)
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, -20, -20 + offset), // 시작점 (아래)
    new THREE.Vector3(5, 0, -10 + offset), // 우측으로 조금 이동
    new THREE.Vector3(10, 20, 0 + offset), // 위로 올라가면서 우측으로 휘어짐
    new THREE.Vector3(15, 40, 10 + offset), // 계속 우측 위로 이동
    new THREE.Vector3(20, 60, 20 + offset), // 위로 계속 올라가며 우측으로
  ])

  useFrame(({ clock }) => {
    const t = (clock.getElapsedTime() * speed) % 1
    const position = curve.getPointAt(t)
    ref.current.position.copy(position)

    // 빛줄기의 회전 방향 조정
    const tangent = curve.getTangentAt(t).normalize()
    const axis = new THREE.Vector3()
    const up = new THREE.Vector3(0, 1, 0)
    axis.crossVectors(up, tangent).normalize()
    const radians = Math.acos(up.dot(tangent))
    ref.current.quaternion.setFromAxisAngle(axis, radians)
  })

  return (
    <mesh ref={ref}>
      <tubeGeometry args={[curve, 64, 0.4, 8, false]} />
      <meshBasicMaterial color={color} transparent opacity={0.9} />
    </mesh>
  )
}

const CenteredLightBeams = () => {
  return (
    <CanvasContainer>
      <Canvas camera={{ position: [40, 20, 20], fov: 45 }}>
        {/* 카메라를 중앙에 위치 */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        {/* 카메라가 선의 중앙을 향해 바라보도록 설정 */}
        <Effects disableGamma>
          <unrealBloomPass threshold={0} strength={2} radius={1} />
        </Effects>
        {/* 각 팀별 빛줄기 생성 */}
        {teams.map((team, index) => (
          <VerticalBeam key={team.name} color={team.color} index={index} />
        ))}
        <OrbitControls target={[0, 20, 0]} enablePan={false} enableZoom={false} enableRotate={false} />
      </Canvas>
    </CanvasContainer>
  )
}

export default CenteredLightBeams
