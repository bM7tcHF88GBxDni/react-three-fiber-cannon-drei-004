import React, { useRef } from "react";
import { useThree } from "react-three-fiber";
import * as THREE from "three";

function Sphere() {
  const state = useThree();
  const sphere = useRef();

  function moveCamera(event) {
    const initialPosition = state.camera.position;
    const initialQuaternion = state.camera.quaternion;
    //console.log("sphere", sphere);

    //const spherePosition = sphere.current.matrix.getPosition();
    const sphereWorldPosition = sphere.current.matrixWorld.getPosition();
    //console.log("spherePosition", spherePosition);
    console.log("sphereWorldPosition", sphereWorldPosition);

    const viewSphereFromPosition = sphereWorldPosition.add(
      new THREE.Vector3(2, 3, 3) //view sphere from its top right corner
    );
    console.log("viewSphereFromPosition", viewSphereFromPosition);

    state.camera.position = viewSphereFromPosition;
    const destinationPosition = state.camera.position;

    state.camera.lookAt(sphere);
    const destinationQuaternion = state.camera.quaternion;
    console.log("destinationQuaternion", destinationQuaternion);
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
