import { useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Html, Scroll, ScrollControls, OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";

import css from "./App.module.css";
import Lighting from "../Lighting";
import Scene1 from "../Scene1";
import Sphere from "../Sphere";
import TestReactComponent from "../TestReactComponent";
import Torus from "../Torus";
import DroikaText from "../Text";
import RelativeImpulseBox from "../RelativeImpulseBox";

function App() {
  const [target, setTarget] = useState({
    position: new THREE.Vector3(),
    externalPosition: new THREE.Vector3(0, 0, 10),
  });

  useFrame((state, dt) => {
    //camera moves to new position
    state.camera.position.lerp(
      target.externalPosition,
      THREE.MathUtils.damp(0, 1, 6, dt)
    );
    //camera rotates to new position
    state.camera.lookAt(target.position);
  });

  function updateTarget(position, externalPosition) {
    setTarget({
      position,
      externalPosition,
    });
  }

  return (
    <>
      <Lighting />
      {/* <OrbitControls enableZoom={false} /> */}
      <ScrollControls
        className={css.scrollControl}
        pages={3} // Each page takes 100% of the height of the canvas
        distance={1} // A factor that increases scroll bar travel (default: 1)
        damping={8} // Friction, higher is faster (default: 4)
        horizontal={true} // Can also scroll horizontally (default: false)
        infinite={false} // Can also scroll infinitely (default: false)
      >
        <RelativeImpulseBox></RelativeImpulseBox>
        <Physics allowSleep>
          <Scroll>
            <Html>
              <h1>react-three-fiber-cannon-drei-004</h1>
            </Html>
            <DroikaText></DroikaText>
            <Torus updateTarget={updateTarget}></Torus>
            <Scene1></Scene1>
          </Scroll>
          <Scroll></Scroll>
          <Scroll>
            <Html>
              this is between the third Scroll tags
              <TestReactComponent></TestReactComponent>
            </Html>
            {/* <Sphere /> */}
          </Scroll>
        </Physics>
      </ScrollControls>
    </>
  );
}

export default App;
