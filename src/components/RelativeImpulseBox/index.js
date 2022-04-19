import React from "react";
import * as THREE from "three";
import { Box, Plane } from "@react-three/drei";
import { Physics, useBox, usePlane } from "@react-three/cannon";

function PhyPlane({ color, ...props }) {
  const [ref] = usePlane(() => ({ ...props }));

  return (
    <Plane args={[1000, 1000]} ref={ref}>
      <meshStandardMaterial color={color} />
    </Plane>
  );
}

function PhyBox(props) {
  const [ref, api] = useBox(() => ({ args: [1, 1, 1], mass: 1, ...props }));

  return (
    <Box
      args={[1, 1, 1]}
      ref={ref}
      onClick={(event) => {
        //figuring out the position of the click in relation to the center of
        //the object so we can add impulse force here

        //get the world position of click (raycast hit, right?) on Box object
        const worldPoint = event.point.clone();
        //get the center position of the Box object
        const center = new THREE.Vector3(...props.position);
        //get the difference from world position and center position
        const deltaPosition = worldPoint.sub(center);
        //add delta to center position to get the click position relative to center of object
        const relativeClickPos = center.add(deltaPosition).toArray();
        // convert toArray so we can use in api.applyForce

        // console.log("worldPoint", worldPoint);
        // console.log("props.position", props.position);
        // console.log("center", center);
        // console.log("deltaPosition", deltaPosition);
        // console.log("relativeClickPos", relativeClickPos);

        api.applyImpulse([0, 5, 0], relativeClickPos);
      }}
    >
      <meshNormalMaterial />
    </Box>
  );
}

function RelativeImpulseBox() {
  return (
    <>
      {/* <Canvas camera={{ position: [0, 5, 5], near: 0.1, far: 1000 }}> */}
      <Physics gravity={[0, -5, 0]}>
        <PhyPlane
          color="hotpink"
          position={[0, -2, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <PhyPlane color="lightblue" position={[0, 0, -10]} />
        {/* <PhyBox position={[2, 0, -5]} /> */}
        <PhyBox position={[0, 0, 0]} />
        {/* <PhyBox position={[-2, 0, -5]} /> */}
      </Physics>
      <ambientLight intensity={0.3} />
      <pointLight intensity={0.8} position={[5, 0, 5]} />
      {/* </Canvas> */}
    </>
  );
}

export default RelativeImpulseBox;
