import React from "react";
import { Canvas } from "@react-three/fiber";

function Scene1() {
  function Box() {
    //this function is called as a Component to render it, is just a React Component?
    return (
      <mesh>
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color="teal" />
      </mesh>
    );
  }

  return (
    <>
      <div>Scene1</div>
      <Canvas>
        <Box />
      </Canvas>
    </>
  );
}

export default Scene1;
