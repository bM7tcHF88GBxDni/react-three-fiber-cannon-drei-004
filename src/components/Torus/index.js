import React from "react";
import * as THREE from "three";

function Torus({ updateTarget }) {
  function getTarget(event) {
    const position = event.object.position.clone();
    const externalPosition = position
      .clone()
      .add(new THREE.Vector3(0, -10, 10));

    updateTarget(position, externalPosition);
  }

  return (
    <>
      <mesh position={[-8, 0, 0]} onClick={getTarget}>
        <torusBufferGeometry attach="geometry" args={[2, 1.1, 3, 4, 3.4]} />
        <meshPhysicalMaterial attach="material" color="hotpink" />
      </mesh>
    </>
  );
}

export default Torus;
