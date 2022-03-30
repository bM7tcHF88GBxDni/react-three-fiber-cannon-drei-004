import React, { useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import css from "./Scene1.module.css";

function Scene1() {
  function CreateBox({ boxColor, boxPosition, boxRotation }) {
    return (
      <mesh position={boxPosition}>
        <boxGeometry attach="geometry" />
        <meshPhongMaterial attach="material" color={boxColor} />
      </mesh>
    );
  }

  return (
    <>
      <CreateBox boxPosition={[0, 0, 0]} boxColor="lightsalmon" />
      <CreateBox boxPosition={[1, 0, 0]} boxColor="lightpink" />
      <CreateBox boxPosition={[-1, 0, 0]} boxColor="lightgrey" />
      <CreateBox boxPosition={[0, 1, 0]} boxColor="lightcyan" />
      <CreateBox boxPosition={[1, 0, -1]} boxColor="rgba(100,100,100,100)" />
    </>
  );
}

export default Scene1;
