import css from "./App.module.css";
import Scene1 from "../Scene1";
import { Canvas } from "@react-three/fiber";
import { Html, Scroll, ScrollControls } from "@react-three/drei";
import { Suspense } from "react";
import TestReactComponent from "../TestReactComponent";

function App() {
  return (
    <>
      <div className={css.appContainer}>
        <h1>react-three-fiber-cannon-drei-004</h1>
        <Canvas className={css.scene1} frameloop="demand" pixelRatio={[1, 2]}>
          <ScrollControls
            className={css.scrollControl}
            pages={3} // Each page takes 100% of the height of the canvas
            distance={1} // A factor that increases scroll bar travel (default: 1)
            damping={8} // Friction, higher is faster (default: 4)
            horizontal={false} // Can also scroll horizontally (default: false)
            infinite={false} // Can also scroll infinitely (default: false)
          >
            <Scroll>
              <Scene1></Scene1>
            </Scroll>
            <Scroll>
              <Html>this is between the second Scroll tags</Html>
            </Scroll>
            <Scroll>
              <Html>
                this is between the third Scroll tags
                <TestReactComponent></TestReactComponent>
              </Html>
            </Scroll>
          </ScrollControls>
        </Canvas>
        <h1>after canvas</h1>
      </div>
    </>
  );
}

export default App;
