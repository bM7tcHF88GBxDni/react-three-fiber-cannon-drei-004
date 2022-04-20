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
          args={[
            10, //radius
            2, //tube
            30, //tubularSegments
            8, //radialSegments
            1, //p
            6, //q
          ]}
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
