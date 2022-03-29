import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import css from "./Scene1.module.css";

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
    <>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 10, 4]} color="white" intensity={0.5} />
      <Box />
    </>
  );
}

export default Scene1;
