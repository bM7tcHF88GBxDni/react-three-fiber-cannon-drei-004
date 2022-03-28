import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Scene1() {
  function Box() {
    //this function is called as a Component to render it, it's just a React Component?
    return (
      <mesh>
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color="teal" />
      </mesh>
    );
  }

  return (
    <div id="Scene1">
      <Canvas>
        <OrbitControls />
        <Box />
      </Canvas>
    </div>
  );
}

export default Scene1;