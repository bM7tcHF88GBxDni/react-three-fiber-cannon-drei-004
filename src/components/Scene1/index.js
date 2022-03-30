import React, { useState, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useSpring } from "@react-three/cannon";

import css from "./Scene1.module.css";

function Scene1() {
  function CreateBox({ boxColor, boxPosition, boxRotation }) {
    const [hovered, setHovered] = useState(false);
    const box = useRef();

    useFrame(() => {
      box.current.rotation.y += 0.005;
    });

    return (
      <mesh
        ref={box}
        position={boxPosition}
        onPointerOver={() => {
          setHovered(true);
        }}
        onPointerOut={() => {
          setHovered(false);
        }}
      >
        <boxGeometry attach="geometry" />
        <meshPhongMaterial
          attach="material"
          color={hovered ? "cyan" : boxColor}
        />
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
