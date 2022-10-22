import * as THREE from 'three'
import React, { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, ContactShadows, Plane, Environment } from '@react-three/drei'
import { Box, Sphere, Rat } from '~shapes'

function App() {
  return (
    <div className={'relative w-screen h-screen'}>
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }} shadows>
        <ambientLight intensity={5} />
        <pointLight
          castShadow
          shadow-mapSize-height={512}
          shadow-mapSize-width={512}
          position={[10, 10, 10]}
          intensity={1}
          color={'white'}
        />
        {/* <pointLight
          castShadow
          shadow-mapSize-height={512}
          shadow-mapSize-width={512}
          position={[-10, 10, 10]}
          intensity={1}
          color={'green'}
        /> */}
        {/* <group>
          <Sphere castShadow receiveShadow position={[0, 5, 0]} />
          <Box castShadow receiveShadow position={[-2, 0, 0]} />
          <Box castShadow receiveShadow position={[2, 0, 0]} />
          <ContactShadows scale={20} blur={10} far={20} position={[0, -3.9, 0]} />
        </group> */}
        <Rat castShadow scale={10} />
        {/* <Plane receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]} args={[1000, 1000]}>
          <meshStandardMaterial attach="material" color="grey" />
        </Plane> */}

        <OrbitControls />
        <Environment preset={'warehouse'} background />
      </Canvas>
    </div>
  )
}

export default App
