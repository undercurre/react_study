# 3D 开发

## 使用`react-three-fiber`

```tsx
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";

interface BoxProps {
  position: [number, number, number];
}

const Box: React.FC<BoxProps> = ({ position }) => {
  const ref = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((state, delta) => {
    if (ref.current) ref.current.rotation.x += delta;
  });

  return (
    <mesh
      position={position}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={() => setClicked(!clicked)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
};

const Tpp: React.FC = () => {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  );
};

export default Tpp;
```
