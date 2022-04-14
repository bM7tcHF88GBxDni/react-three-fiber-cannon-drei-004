import React from "react";
import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";

import css from "./index.module.css";
import App from "./components/App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <div className={css.appContainer}>
    <Canvas pixelRatio={[1, 2]} camera={{ position: [0, 0, 10] }}>
      {/* frameloop="demand" */}
      <App />
    </Canvas>
  </div>
);
