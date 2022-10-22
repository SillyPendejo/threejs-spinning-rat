import React, { useRef } from 'react'
import { Group, Mesh } from 'three'
import { Canvas, GroupProps, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

export interface IRatProps extends GroupProps {}

const Rat: React.FC<IRatProps> = props => {
  const ratRef = useRef<Group>(null!)
  const { nodes, materials } = useGLTF('/Rat.gltf')

  useFrame(() => {
    ratRef.current.rotation.x -= 0.05
    ratRef.current.rotation.y -= 0.04
    ratRef.current.rotation.z += 0.03
  })

  return (
    <group {...props} dispose={null} ref={ratRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Mesh_0119 as Mesh).geometry}
        material={materials.Tex_0012_1_png}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Mesh_0118 as Mesh).geometry}
        material={materials.Tex_0012_1_png}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Mesh_0120 as Mesh).geometry}
        material={materials.Tex_0012_1_png}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/Rat.gltf')

export default Rat
