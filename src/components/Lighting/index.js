import React from "react";

function Lighting() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 4]} intensity={0.2} />
      <directionalLight position={[5, -10, -4]} intensity={0.1} />
    </>
  );
}

export default Lighting;
