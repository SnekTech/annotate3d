import { TaskEntity } from "../../api/entities/task.entity.ts";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useTaskFrameCount } from "../../api/task.api.ts";

interface FrameNavigationButtonProps {
    task: TaskEntity
}

export function FrameNavigationButton({ task }: FrameNavigationButtonProps) {
    const { data: frameCount, isPending, isError } = useTaskFrameCount(task.taskId)

    if (isPending) {
        return <span>Counting frames in task {task.taskId} ...</span>
    }
    if (isError) {
        return <span>An error occurred when counting frames in task {task.taskId}</span>
    }

    return (
        <ButtonGroup isAttached={true}>
            <Button>{frameCount}</Button>
        </ButtonGroup>
    )
}