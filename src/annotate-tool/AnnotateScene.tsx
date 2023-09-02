import { Canvas } from "@react-three/fiber";
import { GizmoHelper, GizmoViewport, OrbitControls, useTexture } from "@react-three/drei";
import { css } from "@emotion/react";
import { useControls } from "leva"

import { Xbot } from "./Xbot";

function Image() {
    const texture = useTexture('test-assets/frames/image-005.png')
    const {imageScale} = useControls({imageScale: {value: 50, min: 10, max: 100}})

    return (
        <mesh scale={imageScale} position-z={-100}>
            <planeGeometry attach="geometry"/>
            <meshBasicMaterial map={texture}/>
        </mesh>
    )
}

const AnnotateScene = () => {

    const canvasStyle = css({
        backgroundColor: 'lightgray',
    })

    return <Canvas css={canvasStyle}>
        <OrbitControls makeDefault/>
        <ambientLight intensity={0.1}/>
        <directionalLight position={[0, 0, 5]}/>

        <Image/>

        <Xbot/>

        {/*{showPerformance ?? <Perf position='bottom-left' />}*/}
        <GizmoHelper>
            <GizmoViewport/>
        </GizmoHelper>
    </Canvas>
}

export default AnnotateScene
