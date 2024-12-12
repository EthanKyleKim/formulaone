import { OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import styled from 'styled-components'
import HomeMessage from '../../Organisms/HomeMessage/HomeMessage'
import { Mesh } from 'three'

// Canvas를 감싸는 컨테이너
const CanvasContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background-color: #900;
`

interface ModelProps {
  url: string
  metalness: number
}

function Model({ url, metalness }: ModelProps) {
  const { scene } = useGLTF(url)

  scene.traverse((child) => {
    if (child instanceof Mesh) {
      child.material.metalness = metalness
    }
  })

  return <primitive object={scene} castShadow receiveShadow />
}

function ThreeJsRender() {
  return (
    <CanvasContainer>
      <Canvas
        shadows
        camera={{ position: [-1.3, 0.5, 8.1], fov: 15 }}
        onCreated={({ camera }) => {
          camera.lookAt(0, 0, 0)
          camera.updateProjectionMatrix()
        }}
      >
        {/* 조명 */}
        <directionalLight position={[5, 5, 5]} intensity={4.0} />
        <ambientLight intensity={1.5} />
        <spotLight position={[-5, 5, -5]} angle={0.3} penumbra={1} intensity={3.0} castShadow />
        <pointLight position={[0, 2, 3]} intensity={3.0} castShadow />
        <pointLight position={[-3, 2, 1]} intensity={2.5} castShadow />
        <pointLight position={[3, 2, 1]} intensity={2.5} castShadow />

        {/* 3D 모델 */}
        <Suspense fallback={null}>
          <Model url="./GraphicModel/scene.gltf" metalness={1} />
        </Suspense>

        {/* 카메라 컨트롤 */}
        <OrbitControls
          target={[0, 0.5, 0]} // 카메라 중심점
          minPolarAngle={Math.PI / 4} // 제한 설정 (선택 사항)
          maxPolarAngle={Math.PI / 2}
          enableZoom={true}
          enablePan={true}
        />
      </Canvas>
    </CanvasContainer>
  )
}

export default function Home() {
  return (
    <>
      <ThreeJsRender />
      <HomeMessage />
    </>
  )
}
