import { Float, useGLTF } from '@react-three/drei'
import React from 'react'

const Tv = ({
  rotation = [0, Math.PI / 5, 0],
  scale = 1,
  floatSpeed = 2.2,
  floatIntensity = 0.6,
  rotationIntensity = 0.6,
  ...rest
}) => {
  const { scene } = useGLTF('/models/desk.gltf')

  return (
    <Float
      speed={floatSpeed}
      floatIntensity={floatIntensity}
      rotationIntensity={rotationIntensity}
      {...rest}
    >
      <primitive object={scene} rotation={rotation} scale={scale} />
    </Float>
  )
}

useGLTF.preload('/models/desk.gltf')
export default Tv