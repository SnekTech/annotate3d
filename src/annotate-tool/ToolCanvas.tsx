import { Canvas } from "@react-three/fiber";
import { GizmoHelper, GizmoViewport, OrbitControls } from "@react-three/drei";
import { Model } from "./Model.tsx";
import { Box } from "@chakra-ui/react";
import { ReferenceImage, TestFramePath } from "./ReferenceImage.tsx";
import { useFrameFromTaskAt } from "../api/frame.api.ts";

interface ToolCanvasProps {
    taskId: number
    frameIndex: number
}

export function ToolCanvas({ taskId, frameIndex }: ToolCanvasProps) {


    const { data: frame, isPending, isError } = useFrameFromTaskAt(taskId, frameIndex)

    if (isPending) {
        return <span>loading frame #{frameIndex}</span>
    }
    if (isError) {
        return <span>error on frame {frameIndex}</span>
    }

    return (
        <Box width={600} height={800} bgColor={'lightgray'}>
            <Canvas>
                <ambientLight intensity={0.1}/>
                <directionalLight color={"white"} position={[ 0, 0, 5 ]}/>
                <OrbitControls makeDefault/>

                <ReferenceImage imagePath={TestFramePath}/>

                <Model defaultPose={frame.pose}/>

                <GizmoHelper>
                    <GizmoViewport/>
                </GizmoHelper>
            </Canvas>
        </Box>

    )
}