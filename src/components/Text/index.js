import React from "react";
import { Text } from "@react-three/drei";

function DroikaText() {
  return (
    <Text
      color={"#EC2D2D"}
      fontSize={8}
      maxWidth={100}
      lineHeight={1}
      letterSpacing={0.02}
      textAlign={"left"}
      font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
      anchorX="center"
      anchorY="middle"
    >
      DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE VELIT ESSE CILLUM
      DOLORE EU FUGIAT NULLA PARIATUR. EXCEPTEUR SINT OCCAECAT CUPIDATAT NON
      PROIDENT, SUNT IN CULPA QUI OFFICIA DESERUNT MOLLIT ANIM ID EST LABORUM.
    </Text>
  );
}

export default DroikaText;
