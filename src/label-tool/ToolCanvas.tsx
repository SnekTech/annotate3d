import { Canvas } from "@react-three/fiber";
import { GizmoHelper, GizmoViewport, OrbitControls, TransformControls } from "@react-three/drei";
import { HandModel, HandModelMethods } from "./Hand.tsx";
import { Bone, SkinnedMesh } from "three";
import { MutableRefObject } from "react";

type ToolCanvasProps = {
    modelSkinnedMesh: SkinnedMesh
    modelMethodsRef: MutableRefObject<HandModelMethods>
    activeBone: Bone
}

export function ToolCanvas(props: ToolCanvasProps) {
    const {modelSkinnedMesh, modelMethodsRef, activeBone} = props



    return (

        <Canvas>
            <ambientLight intensity={0.1}/>
            <directionalLight color={"red"} position={[0, 0, 5]}/>
            <OrbitControls makeDefault/>


            <HandModel skinnedMesh={modelSkinnedMesh} ref={modelMethodsRef}/>

            <TransformControls
                object={activeBone}
                mode={'rotate'}
            />

            <GizmoHelper>
                <GizmoViewport/>
            </GizmoHelper>

        </Canvas>
    )
}