"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Sphere from "./Sphere";
import Lights from "./Lights";
import { usePathname } from "next/navigation";

const Scene: React.FC = () => {
  const router = usePathname();
  const is_home = router === "/";

  return (
    <div
      className={`h-full ${is_home ? "absolute" : "fixed"} w-full top-0`}
      style={{ zIndex: -1 }}
    >
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
