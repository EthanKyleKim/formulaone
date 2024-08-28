'use client'

import { Canvas } from '@react-three/fiber'
import { useEffect, useState } from 'react'
import * as THREE from 'three'

const fetchData = async () => {
  try {
    const response = await fetch(
      'https://api.openf1.org/v1/location?session_key=9566&driver_number=1',
    )
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Failed to fetch data', error)
    return null
  }
}

const Sphere = ({ position }) => {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.1, 32, 32]} />
      <meshBasicMaterial color="red" />
    </mesh>
  )
}

const Scene = ({ data }) => {
  return (
    <Canvas camera={{ position: [0, 0, 100] }} style={{ background: 'lightblue' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {data &&
        data.map((location, index) => (
          <Sphere key={index} position={[location.x / 100, location.y / 100, location.z / 100]} />
        ))}
    </Canvas>
  )
}

export default function RacePage() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData()
      if (result) {
        setData(result) // 데이터 구조에 맞게 조정
      } else {
        setError('Failed to load data')
      }
      setLoading(false)
    }

    getData()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div style={{ width: '100vw', height: '100vh' }}>{data ? <Scene data={data} /> : <div>No data available</div>}</div>
  )
}
