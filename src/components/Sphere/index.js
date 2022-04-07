import React, { useRef, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Sphere() {
  const state = useThree();
  const sphere = useRef();
  const [data, setData] = useState(null);

  useFrame((state, dt) => {
    // if (data) {
    //   state.camera.position.lerp(
    //     data.targetExternalCamPos,
    //     THREE.MathUtils.damp(0, 1, 1, dt)
    //   );
    //   state.camera.quaternion.slerp(
    //     data.targetQuaternion,
    //     THREE.MathUtils.damp(0, 1, 1, dt)
    //   );
    // }
  });

  function moveCamera(event) {
    event.stopPropagation();

    const initialCamPos = state.camera.position.clone();
    console.log("initialCamPos", initialCamPos);

    const initialCamQuaternion = state.camera.quaternion.clone();
    console.log("initialCamQuaternion", initialCamQuaternion);
    // console.log("sphere", sphere);

    //storing the target sphere's global matrix
    const sphereMatrix = sphere.current.matrixWorld;
    // console.log("sphere.current.matrixWorld", sphereMatrix);

    //storing target sphere's position (Vector3)
    const targetPosition = new THREE.Vector3().setFromMatrixPosition(
      sphereMatrix
    );

    //move camera from center(inside) of sphere to view sphere from outside
    const targetExternalCamPos = targetPosition.add(new THREE.Vector3(5, 2, 5));
    // console.log("targetExternalCamPos", targetExternalCamPos);

    //move camera to target sphere's external cam location
    state.camera.position.copy(targetExternalCamPos);
    //rotate camera to face target sphere
    state.camera.lookAt(sphere.current.position);

    //store camera quaternion
    const targetQuaternion = new THREE.Quaternion().setFromRotationMatrix(
      state.camera.matrixWorld
    );
    // console.log("targetQuaternion", targetQuaternion);

    //store all values in state
    //store all values in state
    setData({
      initialCamPos,
      initialCamQuaternion,
      sphereMatrix,
      targetPosition,
      targetExternalCamPos,
      targetQuaternion,
    });
    //initialCamPos seems to use current/updated co-ords, so the camera is not being "reset"
    //this is why lerping position shows no change
    //this is why the quaternion being applied to the rotation is off

    //move camera back
    state.camera.position.copy(initialCamPos);
    //rotate camera back
    state.camera.setRotationFromQuaternion(initialCamQuaternion);
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
