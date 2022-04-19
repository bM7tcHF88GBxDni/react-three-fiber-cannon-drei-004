import React, { useRef } from "react";
import { Float, GradientTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function FloatingComponent() {
  return (
    <Float
      speed={1} // Animation speed, defaults to 1
      rotationIntensity={1} // XYZ rotation intensity, defaults to 1
      floatIntensity={1} // Up/down float intensity, defaults to 1
    >
      <mesh position={[8, 0, -4]} rotation={[0, 0, 0]}>
        <torusKnotBufferGeometry attach="geometry" />
        <meshPhongMaterial attach="material"></meshPhongMaterial>
      </mesh>
    </Float>
  );
}

export default FloatingComponent;
