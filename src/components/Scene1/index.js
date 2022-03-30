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

  function Box2() {
    return (
      <mesh position>
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color="green" />
      </mesh>
    );
  }

  return (
    <>
      <mesh position={[1, 0, 0]}>
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color="lightpink" />
      </mesh>
      <CreateBox boxPosition={[0, 0, 0]} boxColor="lightsalmon" />
      <CreateBox boxPosition={[0, 1, 0]} boxColor="lightcyan" />
      <CreateBox boxPosition={[1, 0, -1]} boxColor="rgba(100,100,100,100)" />
    </>
  );
}

export default Scene1;
