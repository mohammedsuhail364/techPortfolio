import { Float, useGLTF } from '@react-three/drei'

const ReactLogo=(props)=> {
  const { nodes, materials } = useGLTF('/models/react_logo.glb')
  return (
    <Float floatIntensity={1} dispose={null}>
      <group  scale={0.01}  {...props}>
        <mesh
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[2000, 401.935, 18.102]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[39.166, 39.166, 52.734]}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('/models/react_logo.glb')
export default ReactLogo;