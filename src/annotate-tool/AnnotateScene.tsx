import { Canvas, useThree } from "@react-three/fiber";
import { GizmoHelper, GizmoViewport, OrbitControls, TransformControls, useCamera } from "@react-three/drei";

import { useRef, useEffect } from "react";
import { Mesh, Color } from "three";
import RotateControl from "./RotateControl";
import { css } from "@emotion/react";

const AnnotateScene = () => {

    const box = useRef<Mesh>(null!)

    const canvasStyle = css({
        backgroundColor: 'lightgray',
    })

    return <Canvas css={canvasStyle} >
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
