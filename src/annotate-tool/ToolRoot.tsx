import { BonesTable } from "./UI/BonesTable.tsx";
import { Button, ButtonGroup, Center, Flex, IconButton, Stack } from "@chakra-ui/react";
import { ToolCanvas } from "./ToolCanvas.tsx";
import { useFrameIndex, usePoseData, useToolStateActions } from "./ToolState.ts";
import { useParams } from "react-router-dom";
import { useTask } from "../api/task.api.ts";
import { useEffect } from "react";
import { TaskEntity } from "../api/entities/task.entity.ts";
import { FrameNavigationButtonGroup } from "./UI/FrameNavigationButtonGroup.tsx";
import { useFrameMutation } from "../api/frame.api.ts";
import { MdRedo, MdUndo } from "react-icons/md";

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
    const frameIndex = useFrameIndex()

    useInitTargetBoneNames(task)

    if (isPending) {
        return <span>Fetching task {taskId} ...</span>
    }
    if (isError) {
        return <span>An error occurred when fetching task {taskId}, {error.message}</span>
    }

    function handleSavePose() {
        if (!task) return

        console.log(poseData);
        mutate({ taskId: task.taskId, frameIndex, dto: { pose: poseData } })
    }

    return (
        <Center>
            <Flex>
                <Stack>
                    <ToolCanvas task={task} frameIndex={frameIndex}/>

                    <Flex>
                        <FrameNavigationButtonGroup task={task}/>
                        <ButtonGroup marginLeft={'auto'} isAttached={true}>
                            <IconButton aria-label={'undo'} icon={<MdUndo/>}/>
                            <IconButton aria-label={'redo'} icon={<MdRedo/>}/>
                            <Button>重置</Button>
                            <Button onClick={handleSavePose} disabled={isMutateFramePending}>保存</Button>
                        </ButtonGroup>
                    </Flex>
                </Stack>

                <BonesTable/>
            </Flex>
        </Center>
    )
}
