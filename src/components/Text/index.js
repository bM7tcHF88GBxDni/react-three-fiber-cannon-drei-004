import React from "react";
import { Text } from "@react-three/drei";
import { useBox } from "@react-three/cannon";

function DroikaText(props) {
  const [ref, api] = useBox(() => ({
    mass: 0,
    position: [-3, 3, 3],
    ...props,
  }));

  function impulse(event) {
    //const rayHit = [event.point.x, event.point.y, event.point.z];

    //add mass to collider and push it
    api.mass.set(1);
    api.applyImpulse([0, 0, -10], [0, 0, 5]);
  }

  return (
    <>
      <mesh static ref={ref} onClick={impulse}>
        <Text
          position={[0, 0, 0]}
          color={"dodgerblue"}
          fontSize={1}
          maxWidth={50}
          lineHeight={1}
          letterSpacing={0.02}
          textAlign={"left"}
          font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
          anchorX="left"
          anchorY="middle"
        >
          TEST WORDS!!!
        </Text>
      </mesh>

      <Text
        position={[-3, 3, 3]}
        color={"deepskyblue"}
        fontSize={1}
        maxWidth={50}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign={"left"}
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorX="left"
        anchorY="middle"
        fillOpacity={0}
        strokeWidth={"1%"}
        strokeColor="#ffffff"
      >
        TEST WORDS
      </Text>
    </>
  );
}

export default DroikaText;
