import { useState } from "react";
import * as THREE from "three";
import { useThree, useFrame } from "@react-three/fiber";
import { Html, Scroll, ScrollControls, OrbitControls } from "@react-three/drei";

import css from "./App.module.css";
import Lighting from "../Lighting";
import Scene1 from "../Scene1";
import Sphere from "../Sphere";
import TestReactComponent from "../TestReactComponent";

function App() {
  const [target, setTarget] = useState({
    position: new THREE.Vector3(0, 0, 10),
    quaternion: new THREE.Quaternion(),
  });

  // const state = useThree();

  // useFrame((state, dt) => {
  //   //camera moves to new position
  //   state.camera.position.lerp(
  //     target.position,
  //     THREE.MathUtils.damp(0, 1, 6, dt)
  //   );
  //   //camera rotates to new position
  //   state.camera.quaternion.slerp(
  //     target.quaternion,
  //     THREE.MathUtils.damp(0, 1, 6, dt)
  //   );
  // });

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
        <Scroll>
          <Html>
            <h1>react-three-fiber-cannon-drei-004</h1>
          </Html>
          <Scene1></Scene1>
        </Scroll>
        <Scroll></Scroll>
        <Scroll>
          <Html>
            this is between the third Scroll tags
            <TestReactComponent></TestReactComponent>
          </Html>
          <Sphere />
        </Scroll>
      </ScrollControls>
    </>
  );
}

export default App;
