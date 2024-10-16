const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.1} color="#ffffff" />
      <directionalLight
        position={[10, 20, 15]}
        intensity={1}
        color="#f1f1e8"
        castShadow
        shadow-mapSize={[1024, 1024]} 
      />
      <pointLight
        position={[0, 0, 7]} 
        intensity={1}
        distance={20} 
        decay={2}
        color="#4a90e2"
      />
    </>
  );
};

export default Lights;
