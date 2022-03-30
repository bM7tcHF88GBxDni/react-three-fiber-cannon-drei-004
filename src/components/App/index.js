import css from "./App.module.css";
import Scene1 from "../Scene1";
import { Canvas } from "@react-three/fiber";
import { Html, Scroll, ScrollControls } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import TestReactComponent from "../TestReactComponent";

function App() {
  return (
    <>
      <div className={css.appContainer}>
        <Canvas className={css.scene1} frameloop="demand" pixelRatio={[1, 2]}>
          <ScrollControls
            className={css.scrollControl}
            pages={2} // Each page takes 100% of the height of the canvas
            distance={10} // A factor that increases scroll bar travel (default: 1)
            damping={8} // Friction, higher is faster (default: 4)
            horizontal={false} // Can also scroll horizontally (default: false)
            infinite={false} // Can also scroll infinitely (default: false)
          >
            <Scroll>
              {/*               <Html>
                <h1>react-three-fiber-cannon-drei-004</h1>
              </Html> */}
              <Scene1></Scene1>
              <mesh position={[-1, 0, 0]}>
                <boxBufferGeometry attach="geometry" />
                <meshLambertMaterial attach="material" color="lightgrey" />
              </mesh>
              <ambientLight intensity={0.5} />
              <directionalLight position={[5, 10, 4]} intensity={0.3} />
              <OrbitControls enableZoom={false} />
            </Scroll>
            {/*             <Scroll>
              <Html>this is between the second Scroll tags</Html>
            </Scroll>
            <Scroll>
              <Html>
                this is between the third Scroll tags
                <TestReactComponent></TestReactComponent>
              </Html>
            </Scroll> */}
          </ScrollControls>
        </Canvas>
      </div>
    </>
  );
}

export default App;
