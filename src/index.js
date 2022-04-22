import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import css from "./index.module.css";
import ShipModel from "./components/ShipModel/index.js";
import App from "./components/App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <div className={css.appContainer}>
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 20] }}>
      <App></App>
    </Canvas>
  </div>
);
