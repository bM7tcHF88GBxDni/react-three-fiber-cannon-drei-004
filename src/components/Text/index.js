import React from "react";
import { Text } from "@react-three/drei";
import { Physics, usePlane, useBox } from "@react-three/cannon";

function DroikaText(props) {
  const [ref, api] = useBox(() => ({ mass: 0, position: [0, 0, 0], ...props }));

  function impulse(event) {
    console.log(event);
    console.log(event.point);
    api.applyImpulse([0, 0, -10], event.point);
  }

  return (
    <>
      <mesh static ref={ref} onClick={impulse}>
        <Text
          position={[0, 3, 3]}
          color={"dodgerblue"}
          fontSize={1}
          maxWidth={50}
          lineHeight={1}
          letterSpacing={0.02}
          textAlign={"left"}
          font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
          anchorX="center"
          anchorY="middle"
        >
          TEST WORDS
        </Text>
      </mesh>

      <Text
        position={[0, 3, 3]}
        color={"deepskyblue"}
        fontSize={1}
        maxWidth={50}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign={"left"}
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorX="center"
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
