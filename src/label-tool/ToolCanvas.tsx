import { Canvas } from "@react-three/fiber";
import { GizmoHelper, GizmoViewport, OrbitControls, TransformControls } from "@react-three/drei";
import { HandModel } from "./Hand.tsx";
import { useEffect } from "react";
import { useToolState } from "./ToolState.ts";
import { getPose, useHandModel } from "./ModelUtils.ts";


export function ToolCanvas() {
    const { model, bones, originalPose, } = useHandModel()

    const { activeBone, currentModel, setActiveBone, setCurrentModel, setOriginalPose, setPose, setBones } = useToolState()

    // model-related state can only be initialized in the ThreeJS canvas
    useEffect(() => {
        setActiveBone(bones[0])
        setOriginalPose(originalPose)
        setPose(originalPose)
        setCurrentModel(model)
        setBones(bones)
    }, [ bones, model, originalPose, setActiveBone, setBones, setCurrentModel, setOriginalPose, setPose ])

    function handlePoseChange() {
        if (!currentModel) return

        setPose(getPose(currentModel))
    }

    return (
        <Canvas>
            <ambientLight intensity={0.1}/>
            <directionalLight color={"red"} position={[ 0, 0, 5 ]}/>
            <OrbitControls makeDefault/>


            <HandModel skinnedMesh={model}/>

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