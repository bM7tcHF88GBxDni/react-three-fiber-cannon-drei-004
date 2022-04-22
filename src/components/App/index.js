import { useState } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
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
import FloatingComponent from "../FloatingComponent";
import ShipModel from "../ShipModel";

function App() {
  const [target, setTarget] = useState({
    initialPosition: new THREE.Vector3(),
    initialQuaternion: new THREE.Quaternion(),
    position: new THREE.Vector3(),
    externalPosition: new THREE.Vector3(0, 0, 10),
    quaternion: new THREE.Quaternion(),
  });

  const state = useThree();

  // useFrame((st, dt) => {
  //   //camera moves to new position
  //   st.camera.position.lerp(
  //     target.externalPosition,
  //     THREE.MathUtils.damp(0, 1, 2, dt)
  //   );
  //   //camera rotates to new position
  //   st.camera.quaternion.slerp(
  //     target.quaternion,
  //     THREE.MathUtils.damp(0, 1, 2, dt)
  //   );
  // });

  function updateTarget(position, externalPosition) {
    const initialPosition = state.camera.position.clone();
    // console.log("initialPosition", initialPosition);

    const initialQuaternion = state.camera.quaternion.clone();
    // console.log("initialQuaternion", initialQuaternion);

    //move camera to target sphere's external cam location
    state.camera.position.copy(externalPosition);
    //rotate camera to face target sphere
    state.camera.lookAt(position);

    //store camera quaternion
    const quaternion = state.camera.quaternion.clone();
    // console.log("quaternion", quaternion);

    //if setData is null(first onClick execution) store all values in state
    setTarget({
      initialPosition,
      initialQuaternion,
      position,
      externalPosition,
      quaternion,
    });

    //move camera back
    state.camera.position.copy(initialPosition);
    //rotate camera back
    state.camera.setRotationFromQuaternion(initialQuaternion);
  }

  return (
    <>
      <Lighting />
      {/* <OrbitControls enableZoom={false} /> */}
      <ShipModel></ShipModel>
      <OrbitControls></OrbitControls>

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
            {/* <Sphere />  */}
            <FloatingComponent></FloatingComponent>
          </Scroll>
        </Physics>
      </ScrollControls>
    </>
  );
}

export default App;
