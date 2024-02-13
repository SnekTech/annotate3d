import { BoneList } from "./UI/BoneList.tsx";
import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import { ToolCanvas } from "./ToolCanvas.tsx";
import { useToolState } from "./ToolState.ts";
import { useParams } from "react-router-dom";
import { useTask } from "../api/task.api.ts";
import { useEffect } from "react";
import { TaskEntity } from "../api/entities/task.entity.ts";
import { FrameNavigationButton } from "./UI/FrameNavigationButton.tsx";

function useInitTargetBoneNames(task?: TaskEntity) {
    const {
        actions: {
            setTargetBoneNames,
            setActiveBoneName
        }
    } = useToolState()

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

    const {
        poseData, targetBoneNames,
        frameIndex,
        actions: {
            setActiveBoneName
        }
    } = useToolState()

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

    function handleCalculatePose() {
        console.log(poseData);
    }


    return (
        <>
            <Box maxWidth="md" height={'400px'}>
                <ToolCanvas taskId={task.taskId} frameIndex={frameIndex}/>

                <ButtonGroup variant={'outlined'} colorScheme={'blue'} isAttached={true} spacing={6}>
                    <Button onClick={handleCalculatePose}>Calc</Button>
                    <Button>Reset Pose</Button>
                </ButtonGroup>

                <FrameNavigationButton task={task}/>

                <BoneList boneNames={targetBoneNames} onChoose={handleChooseBone}/>
            </Box>
        </>
    )
}
