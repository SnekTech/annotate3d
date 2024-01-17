import { Canvas } from "@react-three/fiber";
import { GizmoHelper, GizmoViewport, OrbitControls, TransformControls } from "@react-three/drei";
import { HandModel, HandModelMethods } from "./Hand.tsx";
import { MutableRefObject, useEffect } from "react";
import { useToolState } from "./ToolState.ts";
import { useHandModel } from "./ModelUtils.ts";

type ToolCanvasProps = {
    modelMethodsRef: MutableRefObject<HandModelMethods>
}

export function ToolCanvas(props: ToolCanvasProps) {
    const { modelMethodsRef } = props
    const { model, bones, originalPose, } = useHandModel()

    const { activeBone, setActiveBone, setCurrentModel, setOriginalPose, setPose, setBones } = useToolState()

    // model-related state can only be initialized in the ThreeJS canvas
    useEffect(() => {
        setActiveBone(bones[0])
        setOriginalPose(originalPose)
        setPose(originalPose)
        setCurrentModel(model)
        setBones(bones)
    }, [ bones, model, originalPose, setActiveBone, setBones, setCurrentModel, setOriginalPose, setPose ])

    function handlePoseChange() {
        if (!modelMethodsRef.current) return

        setPose(modelMethodsRef.current.getPose())
    }

    return (
        <Canvas>
            <ambientLight intensity={0.1}/>
            <directionalLight color={"red"} position={[ 0, 0, 5 ]}/>
            <OrbitControls makeDefault/>


            <HandModel skinnedMesh={model} ref={modelMethodsRef}/>

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