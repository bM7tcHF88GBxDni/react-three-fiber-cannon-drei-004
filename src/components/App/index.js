import css from "./App.module.css";
import Scene1 from "../Scene1";
import { Canvas } from "@react-three/fiber";
import { Html, Scroll, ScrollControls } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import TestReactComponent from "../TestReactComponent";
import Lighting from "../Lighting";

function App() {
  return (
    <>
      <div className={css.appContainer}>
        <Canvas className={css.scene1} pixelRatio={[1, 2]}>
          {/* frameloop="demand" */}
          <Lighting />
          <ScrollControls
            className={css.scrollControl}
            pages={3} // Each page takes 100% of the height of the canvas
            distance={1} // A factor that increases scroll bar travel (default: 1)
            damping={8} // Friction, higher is faster (default: 4)
            horizontal={true} // Can also scroll horizontally (default: false)
            infinite={false} // Can also scroll infinitely (default: false)
          >
            <Scroll>
              <Html>
                <h1>react-three-fiber-cannon-drei-004</h1>
              </Html>
              <Scene1></Scene1>
            </Scroll>
            <Scroll>
              <mesh position={[1, -1, 0]}>
                <boxBufferGeometry attach="geometry" />
                <meshLambertMaterial attach="material" color="lightpink" />
              </mesh>
              <mesh position={[-1, -1, 0]}>
                <boxBufferGeometry attach="geometry" />
                <meshLambertMaterial attach="material" color="lightgrey" />
              </mesh>
            </Scroll>
            <Scroll>
              <Html>
                this is between the third Scroll tags
                <TestReactComponent></TestReactComponent>
              </Html>
            </Scroll>
          </ScrollControls>
        </Canvas>
      </div>
    </>
  );
}

export default App;
