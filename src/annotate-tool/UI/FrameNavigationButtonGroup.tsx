import { TaskEntity } from "../../api/entities/task.entity.ts";
import { Button, ButtonGroup, IconButton } from "@chakra-ui/react";
import { useTaskFrameCount } from "../../api/task.api.ts";
import { useFrameIndex, useToolStateActions } from "../ToolState.ts";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";

interface FrameNavigationButtonProps {
    task: TaskEntity
}

export function FrameNavigationButtonGroup({ task }: FrameNavigationButtonProps) {
    const { data: frameCount, isPending, isError } = useTaskFrameCount(task.taskId)
    const frameIndex = useFrameIndex()
    const { setFrameIndex } = useToolStateActions()

    if (isPending) {
        return <span>Counting frames in task {task.taskId} ...</span>
    }
    if (isError) {
        return <span>An error occurred when counting frames in task {task.taskId}</span>
    }

    function skipPreviousFrame(totalFrameCount: number) {
        setFrameIndex(frameIndex == 0 ? totalFrameCount - 1 : frameIndex - 1)
    }

    function skipNextFrame(totalFrameCount: number) {
        setFrameIndex((frameIndex + 1) % totalFrameCount)
    }

    return (
        <ButtonGroup isAttached={true}>
            <IconButton
                aria-label={'prev'}
                icon={<MdSkipPrevious/>}
                onClick={() => skipPreviousFrame(frameCount)}
            />
            <Button disabled={true}>当前帧：{frameIndex}</Button>
            <IconButton
                aria-label={'next'}
                icon={<MdSkipNext/>}
                onClick={() => skipNextFrame(frameCount)}
            />
        </ButtonGroup>
    )
}