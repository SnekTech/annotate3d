import { Canvas } from "@react-three/fiber";
import { GizmoHelper, GizmoViewport, OrbitControls } from "@react-three/drei";
import { css } from "@emotion/react";
import { Xbot } from "./Xbot";

const AnnotateScene = () => {

    const canvasStyle = css({
        backgroundColor: 'lightgray',
    })

    return <Canvas css={canvasStyle} >
        <OrbitControls makeDefault />
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]} />

        <Xbot />

        {/*{showPerformance ?? <Perf position='bottom-left' />}*/}
        <GizmoHelper>
            <GizmoViewport />
        </GizmoHelper>
    </Canvas>
}

export default AnnotateScene
