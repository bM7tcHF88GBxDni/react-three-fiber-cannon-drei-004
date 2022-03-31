import React, { useState, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useSpring } from "@react-three/cannon";

import css from "./Scene1.module.css";

function Scene1() {
  function CreateBox({ boxColor, boxPosition, animate, boxScale }) {
    const [hovered, setHovered] = useState(false);
    const box = useRef();

    /*     function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }

    const animateSpeed = getRandomArbitrary(0.0044, 0.0066); */

    useFrame(() => {
      if (animate) box.current.rotation.y += 0.005;
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
        scale={boxScale}
      >
        <boxBufferGeometry attach="geometry" />
        <meshPhongMaterial
          attach="material"
          color={hovered ? "cyan" : boxColor}
        />
      </mesh>
    );
  }

  return (
    <>
      {/* 3x3 Cube Grid */}
      <CreateBox
        boxPosition={[0, 0, 0]}
        boxColor="lightsalmon"
        animate={true}
      />
      <CreateBox boxPosition={[1, 0, 0]} boxColor="lightpink" animate={true} />
      <CreateBox boxPosition={[1, 1, 0]} boxColor="lightpink" animate={true} />
      <CreateBox boxPosition={[-1, 0, 0]} boxColor="lightgrey" animate={true} />
      <CreateBox boxPosition={[-1, 1, 0]} boxColor="lightgrey" animate={true} />
      <CreateBox
        boxPosition={[0, 1, 0]}
        boxColor="lightsalmon"
        animate={true}
      />
      <CreateBox
        boxPosition={[0, -1, 0]}
        boxColor="lightsalmon"
        animate={true}
      />
      <CreateBox boxPosition={[1, -1, 0]} boxColor="lightpink" animate={true} />
      <CreateBox
        boxPosition={[-1, -1, 0]}
        boxColor="lightgrey"
        animate={true}
      />

      {/* Border Top */}
      <CreateBox
        boxScale={[1, 1, 3]}
        boxPosition={[-2, 2, 0]}
        boxColor="white"
        animate={false}
      />
      <CreateBox
        boxScale={[1, 1, 3]}
        boxPosition={[-1, 2, 0]}
        boxColor="white"
        animate={false}
      />
      <CreateBox
        boxScale={[1, 1, 3]}
        boxPosition={[0, 2, 0]}
        boxColor="white"
        animate={false}
      />
      <CreateBox
        boxScale={[1, 1, 3]}
        boxPosition={[1, 2, 0]}
        boxColor="white"
        animate={false}
      />
      <CreateBox
        boxScale={[1, 1, 3]}
        boxPosition={[2, 2, 0]}
        boxColor="white"
        animate={false}
      />
      {/* Border Right */}
      <CreateBox
        boxScale={[1, 1, 3]}
        boxPosition={[2, 1, 0]}
        boxColor="white"
        animate={false}
      />
      <CreateBox
        boxScale={[1, 1, 3]}
        boxPosition={[2, 0, 0]}
        boxColor="white"
        animate={false}
      />
      <CreateBox
        boxScale={[1, 1, 3]}
        boxPosition={[2, -1, 0]}
        boxColor="white"
        animate={false}
      />
      {/* Border Bottom */}
      <CreateBox
        boxScale={[1, 1, 3]}
        boxPosition={[-2, -2, 0]}
        boxColor="white"
        animate={false}
      />
      <CreateBox
        boxScale={[1, 1, 3]}
        boxPosition={[-1, -2, 0]}
        boxColor="white"
        animate={false}
      />
      <CreateBox
        boxScale={[1, 1, 3]}
        boxPosition={[0, -2, 0]}
        boxColor="white"
        animate={false}
      />
      <CreateBox
        boxScale={[1, 1, 3]}
        boxPosition={[1, -2, 0]}
        boxColor="white"
        animate={false}
      />
      <CreateBox
        boxScale={[1, 1, 3]}
        boxPosition={[2, -2, 0]}
        boxColor="white"
        animate={false}
      />
      {/* Border Left */}
      <CreateBox
        boxScale={[1, 1, 3]}
        boxPosition={[-2, 1, 0]}
        boxColor="white"
        animate={false}
      />
      <CreateBox
        boxScale={[1, 1, 3]}
        boxPosition={[-2, 0, 0]}
        boxColor="white"
        animate={false}
      />
      <CreateBox
        boxScale={[1, 1, 3]}
        boxPosition={[-2, -1, 0]}
        boxColor="white"
        animate={false}
      />
    </>
  );
}

export default Scene1;
