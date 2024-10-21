"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Sphere from "./Sphere";
import Lights from "./Lights";

const Scene: React.FC = () => {
  return (
    <div className="h-full fixed w-full top-0" style={{ zIndex: -1 }}>
      <Canvas>
        <OrbitControls autoRotate autoRotateSpeed={4} />
        <Lights />
        <Environment
          files="/images/bg.hdr"
          background
          backgroundBlurriness={0.8}
        />
        <Sphere />
      </Canvas>
    </div>
  );
};

export default Scene;
