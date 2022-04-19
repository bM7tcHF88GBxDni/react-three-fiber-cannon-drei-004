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
      <mesh position={[8, 0, -4]}>
        <torusKnotGeometry
          radius={10}
          tube={2.5}
          tubularSegments={30}
          radialSegments={8}
          p={1}
          q={6}
        />
        <meshPhongMaterial attach="material">
          <GradientTexture
            stops={[0, 0.25, 0.5, 0.75, 1]} // As many stops as you want
            colors={["white", "blue", "grey", "cyan", "darkred"]} // Colors need to match the number of stops
            size={1024} // Size is optional, default = 1024
          />
        </meshPhongMaterial>
      </mesh>
    </Float>
  );
}

export default FloatingComponent;
