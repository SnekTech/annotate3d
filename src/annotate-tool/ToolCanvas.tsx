import { Canvas } from "@react-three/fiber";
import { GizmoHelper, GizmoViewport, OrbitControls } from "@react-three/drei";
import { Model } from "./Model.tsx";
import { Box } from "@chakra-ui/react";
import { FramePrefix, ImgExtension, ReferenceImage } from "./ReferenceImage.tsx";
import { useFrameFromTaskAt } from "../api/frame.api.ts";
import { baseURL } from "../core/httpClient.ts";
import numeral from "numeral";
import { TaskEntity } from "../api/entities/task.entity.ts";

interface ToolCanvasProps {
    task: TaskEntity
    frameIndex: number
}

export function ToolCanvas({ task, frameIndex }: ToolCanvasProps) {

    const { data: frame, isPending, isError } = useFrameFromTaskAt(task.taskId, frameIndex)

    if (isPending) {
        return <span>loading frame {frameIndex}</span>
    }
    if (isError) {
        return <span>error on frame {frameIndex}</span>
    }

    const projectName = task.project.name
    const taskName = task.name
    const refImagePath = `${baseURL}/public/annotate-projects/${projectName}/${taskName}/${FramePrefix}_${numeral(frameIndex + 1).format('000')}${ImgExtension}`

    return (
        <Box width={600} height={800} bgColor={'lightgray'}>
            <Canvas>
                <ambientLight intensity={0.1}/>
                <directionalLight color={"white"} position={[ 0, 0, 5 ]}/>
                <OrbitControls makeDefault/>

                <ReferenceImage imagePath={refImagePath}/>

                <Model defaultPose={frame.pose}/>

                <GizmoHelper>
                    <GizmoViewport/>
                </GizmoHelper>
            </Canvas>
        </Box>

    )
}