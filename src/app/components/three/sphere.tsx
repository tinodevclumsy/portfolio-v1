import { Center } from '@react-three/drei'

const Sphere = () => {
    return (
        <Center>
          <mesh castShadow>
            <sphereGeometry args={[2, 64, 64]} />
            <meshStandardMaterial metalness={1} roughness={0} />
          </mesh>
        </Center>
      )
}

export default Sphere