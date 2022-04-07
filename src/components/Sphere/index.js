import React, { useRef, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Sphere() {
  const state = useThree();
  const sphere = useRef();
  const [data, setData] = useState(null);
  const [animate, setAnimate] = useState(null);

  useFrame((state, dt) => {
    //this is running every frame, doesn't seem ideal.
    if (animate !== null) {
      if (animate) {
        //camera moves to new position.
        state.camera.position.lerp(
          data.targetExternalCamPos,
          THREE.MathUtils.damp(0, 1, 6, dt)
        );
        state.camera.quaternion.slerp(
          data.targetQuaternion,
          THREE.MathUtils.damp(0, 1, 6, dt)
        );
      } else {
        //camera moves back to initial position.
        state.camera.position.lerp(
          data.initialCamPos,
          THREE.MathUtils.damp(0, 1, 6, dt)
        );
        state.camera.quaternion.slerp(
          data.initialCamQuaternion,
          THREE.MathUtils.damp(0, 1, 6, dt)
        );
      }
    }
  });

  function moveCamera(event) {
    event.stopPropagation();

    //need to replace sphere reference with event.object
    //refactor code to remove animate state. useFrame doesn't need a conditional- it should always move towards a target, and we should update these global target variables.
    //drei Text component to place physically in the world
    /*
    refactor the component and behaviour hierarchy so this logic can be reused properly in a personal site
      highest level component
        holds a state of target variables
        the useFrame hook that constantly moves camera toward target
      interactive child components 
        pass in function to update target variables as props
        these components should store their external cam co-ordinates and the lookAt co-ordinates can be passed to prop function above using event.object etc
    */
    const initialCamPos = state.camera.position.clone();
    // console.log("initialCamPos", initialCamPos);

    const initialCamQuaternion = state.camera.quaternion.clone();
    // console.log("initialCamQuaternion", initialCamQuaternion);

    // console.log("sphere", sphere);

    //storing target sphere's position (Vector3)
    const targetPosition = sphere.current.position.clone();

    //move camera from center(inside) of sphere to view sphere from outside
    const targetExternalCamPos = targetPosition.add(new THREE.Vector3(5, 2, 5));
    // console.log("targetExternalCamPos", targetExternalCamPos);

    //move camera to target sphere's external cam location
    state.camera.position.copy(targetExternalCamPos);
    //rotate camera to face target sphere
    state.camera.lookAt(sphere.current.position);

    //store camera quaternion
    const targetQuaternion = state.camera.quaternion.clone();
    // console.log("targetQuaternion", targetQuaternion);

    //if setData is null(first onClick execution) store all values in state
    if (data === null) {
      setData({
        initialCamPos,
        initialCamQuaternion,
        targetPosition,
        targetQuaternion,
        targetExternalCamPos,
      });
    }

    //move camera back
    state.camera.position.copy(initialCamPos);
    //rotate camera back
    state.camera.setRotationFromQuaternion(initialCamQuaternion);

    //flag that useFrame is constantly watching
    setAnimate(!animate);
  }

  return (
    <>
      <mesh ref={sphere} position={[5, 0, 0]} onClick={moveCamera}>
        <sphereBufferGeometry attach="geometry" />
        <meshPhongMaterial attach="material" color="hotpink" />
      </mesh>
    </>
  );
}

export default Sphere;
