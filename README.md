# ThreeJS with React

This project is currently a testing ground for features to be used for my personal/portfolio website:

# Features overview:
Basics:
- Using normal React components within a 3D ThreeJS Canvas
- Creating meshes declaratively, controlling properties with useState
- Lighting scenes
- Scrolling the 3D Canvas horizontally or vertically
- Droika's 3D Text

More advanced:
- Animating a camera transition from one location in the scene to another depending on user interaction
- Animating meshes with useFrame and useState (transformations, rotations, other changes)
- Animating meshes with Float built in Float
- Animating meshes with React Three Spring
- Interactivity with 3D assets:
  - using Events such as onClick and onPointerOver to e.g. highlight an object, or make an object larger on hover
  - applying force to push/pull 3D assets on click
- Importing models from external sources (GLTF v2 files from Blender etc)

I have also tested and/or explored:
- Standalone ThreeJS
- React Three Flex

## Dependencies
```js
react 18
react-dom 18
react-scripts 5.0.1

three 0.139.2
@react-three/fiber 8.0.11
@react-three/drei 9.4.2
@react-three/cannon 6.2.0
```
