import React, { useRef } from "react";
import { useThree } from "react-three-fiber";

function Sphere() {
  const state = useThree();
  const sphere = useRef();

  function moveCamera(event) {
    const initialPosition = state.camera.position;
    const initialQuaternion = state.camera.quaternion;

    const spherePosition = sphere.current.getWorldPosition(); //this is incorrect. look into it.
    state.camera.position = spherePosition;
    const destinationPosition = state.camera.position;

    state.camera.lookAt(sphere);
    const destinationQuaternion = state.camera.quaternion;
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
