import * as THREE from 'three'
import React, { useState, useRef, useCallback } from 'react'
import { useFrame, MeshProps } from '@react-three/fiber'

export interface IBoxProps extends MeshProps {}

const Box: React.FC<IBoxProps> = props => {
  const mesh = useRef<THREE.Mesh>(null!)

  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  const [isUp, setIsUp] = useState(false)

  useFrame(() => {
    mesh.current.rotation.x += 0.01
    mesh.current.rotation.z += 0.02
    mesh.current.rotation.y += 0.01

    if (mesh.current.position.y > 5) {
      setIsUp(true)
    } else if (mesh.current.position.y < 1) {
      setIsUp(false)
    }
    if (!isUp) {
      mesh.current.position.y += 0.01
    } else {
      mesh.current.position.y -= 0.01
    }
  })

  const handleClick = () => setActive(!active)
  const handlePointerOver = () => setHover(true)
  const handlePointerOut = () => setHover(false)

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={handleClick}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'gray'} />
    </mesh>
  )
}

export default Box
