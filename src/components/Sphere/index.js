import React, { useRef } from "react";
import { useThree } from "react-three-fiber";
import * as THREE from "three";

function Sphere() {
  const state = useThree();
  const sphere = useRef();

  function moveCamera(event) {
    const initialCamPos = state.camera.position;
    const initialCamQuaternion = state.camera.quaternion;
    console.log("sphere", sphere); //store the camera's matrix in the future instead

    //storing the target sphere's global matrix
    const sphereMatrix = sphere.current.matrixWorld;
    console.log("sphere.current.matrixWorld", sphereMatrix);

    //storing target sphere's position (Vector3)
    const targetPosition = new THREE.Vector3().setFromMatrixPosition(
      sphereMatrix
    );
    //storing sphere's rotation (Quaternion)
    const targetQuaternion = new THREE.Quaternion().setFromRotationMatrix(
      sphereMatrix
    );
    console.log("targetPosition", targetPosition);
    console.log("targetQuaternion", targetQuaternion);

    //move camera from center(inside) of sphere to view sphere from outside
    const targetExternalCamPos = targetPosition.add(
      new THREE.Vector3(0, 0, -15)
    );
    console.log("targetExternalCamPos", targetExternalCamPos);

    //move camera to target sphere's external cam location
    state.camera.position.set(targetExternalCamPos);
    //rotate camera to face target sphere
    state.camera.lookAt(sphere);

    //store camera quaternion
    const destinationQuaternion = new THREE.Quaternion().setFromRotationMatrix(
      state.camera.matrixWorld
    );
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
