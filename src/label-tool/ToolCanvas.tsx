import { Canvas } from "@react-three/fiber";
import { GizmoHelper, GizmoViewport, OrbitControls, TransformControls } from "@react-three/drei";
import { Model } from "./Model.tsx";
import { useToolState } from "./ToolState.ts";
import { getPose } from "./ModelUtils.ts";

export function ToolCanvas() {

    const {
        activeBone,
        setPoseData,
        bones,
    } = useToolState()

    function handlePoseChange() {
        const newPose = getPose(bones)
        setPoseData(newPose)
    }

    return (
        <Canvas>
            <ambientLight intensity={0.1}/>
            <directionalLight color={"white"} position={[ 0, 0, 5 ]}/>
            <OrbitControls makeDefault/>


            <Model/>

            <TransformControls
                object={activeBone}
                mode={'rotate'}
                onChange={handlePoseChange}
            />

            <GizmoHelper>
                <GizmoViewport/>
            </GizmoHelper>
        </Canvas>
    )
}