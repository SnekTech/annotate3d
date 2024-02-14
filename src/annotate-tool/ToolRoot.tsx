import { BoneList } from "./UI/BoneList.tsx";
import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import { ToolCanvas } from "./ToolCanvas.tsx";
import { useFrameIndex, usePoseData, useTargetBoneNames, useToolStateActions } from "./ToolState.ts";
import { useParams } from "react-router-dom";
import { useTask } from "../api/task.api.ts";
import { useEffect } from "react";
import { TaskEntity } from "../api/entities/task.entity.ts";
import { FrameNavigationButton } from "./UI/FrameNavigationButton.tsx";
import { useFrameMutation } from "../api/frame.api.ts";

function useInitTargetBoneNames(task?: TaskEntity) {
    const { setTargetBoneNames, setActiveBoneName } = useToolStateActions()

    useEffect(() => {
        if (task) {
            const boneNames = task.project.targetBones
            setTargetBoneNames(boneNames)
            setActiveBoneName(boneNames[0])
        }
    }, [ setActiveBoneName, setTargetBoneNames, task ])
}

export function ToolRoot() {

    const { taskId } = useParams()
    const { data: task, isPending, isError, error } = useTask(parseInt(taskId!))
    const { mutate, isPending: isMutateFramePending } = useFrameMutation()

    const poseData = usePoseData()
    const targetBoneNames = useTargetBoneNames()
    const frameIndex = useFrameIndex()
    const { setActiveBoneName } = useToolStateActions()

    useInitTargetBoneNames(task)


    if (isPending) {
        return <span>Fetching task {taskId} ...</span>
    }
    if (isError) {
        return <span>An error occurred when fetching task {taskId}, {error.message}</span>
    }

    const handleChooseBone = (boneName: string) => {
        setActiveBoneName(boneName)
    }

    function handleSavePose() {
        if (!task) return

        console.log(poseData);
        mutate({ taskId: task.taskId, frameIndex, dto: { pose: poseData } })
    }

    return (
        <>
            <Box maxWidth="md" height={'400px'}>
                <ToolCanvas task={task} frameIndex={frameIndex}/>

                <ButtonGroup isAttached={true} spacing={6}>
                    <Button onClick={handleSavePose} disabled={isMutateFramePending}>保存</Button>
                </ButtonGroup>

                <FrameNavigationButton task={task}/>

                <BoneList boneNames={targetBoneNames} onChoose={handleChooseBone}/>
            </Box>
        </>
    )
}
