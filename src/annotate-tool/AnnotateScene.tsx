import { Canvas } from "@react-three/fiber";
import { GizmoHelper, GizmoViewport, OrbitControls, TransformControls } from "@react-three/drei";

import { useRef } from "react";
import { Mesh } from "three";
import RotateControl from "./RotateControl";

const AnnotateScene = () => {

    const box = useRef<Mesh>(null!)


    return <Canvas>
        <OrbitControls makeDefault />
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]} />

        <mesh ref={box}>
            <boxGeometry />
            <meshStandardMaterial color={"blue"} opacity={0.5} transparent/>
        </mesh>

        <RotateControl type="transform" target={box} />
        {/* <TransformControls object={box} /> */}

        <GizmoHelper>
            <GizmoViewport />
        </GizmoHelper>
    </Canvas>
}

export default AnnotateScene
