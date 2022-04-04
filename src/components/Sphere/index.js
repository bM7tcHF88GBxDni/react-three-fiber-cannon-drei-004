import React, { useRef } from "react";
import { useThree } from "react-three-fiber";
import * as THREE from "three";

function Sphere() {
  const state = useThree();
  const sphere = useRef();

  function moveCamera(event) {
    const initialPosition = state.camera.position;
    const initialQuaternion = state.camera.quaternion;
    console.log("sphere", sphere); //store the camera's matrix in the future

    //const spherePosition = sphere.current.matrix.getPosition();

    //storing the target sphere's global matrix
    const sphereMatrix = sphere.current.matrixWorld;
    console.log("sphere.current.matrixWorld", sphereMatrix);

    //storing sphere's position (Vector3)
    const positionFromSphereMatrix = new THREE.Vector3().setFromMatrixPosition(
      sphereMatrix
    );
    //storing sphere's rotation (Quaternion)
    const quaternionFromSphereMatrix =
      new THREE.Quaternion().setFromRotationMatrix(sphereMatrix);

    //console.log("spherePosition", spherePosition);
    console.log("positionFromSphereMatrix", positionFromSphereMatrix);
    console.log("quaternionFromSphereMatrix", quaternionFromSphereMatrix);

    const sphereExternalCamPos = positionFromSphereMatrix.add(
      new THREE.Vector3(2, 3, 3) //view sphere from its top right corner
    );
    console.log("sphereExternalCamPos", sphereExternalCamPos);

    /*     state.camera.position = viewSphereFromPosition;
    const destinationPosition = state.camera.position;

    state.camera.lookAt(sphere);
    const destinationQuaternion = state.camera.quaternion;
    console.log("destinationQuaternion", destinationQuaternion); */
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
