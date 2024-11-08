"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Sphere from "./CanvasSphere";
import Lights from "./CanvasLights";
import { usePathname } from "next/navigation";

const CanvasScene: React.FC = () => {
  const router = usePathname();
  const is_home = router === "/";

  return (
    <div
      className={`absolute ${is_home ? " h-full" : "h-40"} w-full top-0 left-0`}
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

export default CanvasScene;
