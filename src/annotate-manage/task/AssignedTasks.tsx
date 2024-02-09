import { useCurrentUser } from "../../user/userState.ts";
import { Box, Flex } from "@chakra-ui/react";
import { TaskCard } from "./TaskCard.tsx";
import { useTasksAssignedToUser } from "../../api/task.api.ts";

export function AssignedTasks() {

    const currentUserId = useCurrentUser().userId
    const { data: tasks, isError, isPending, error } = useTasksAssignedToUser(currentUserId)

    if (isPending) {
        return <span>loading tasks assigned to current user</span>
    }
    if (isError) {
        return <span>Error occurred when loading tasks, {error.message}</span>
    }


    return (
        <Flex>
            {tasks.map(task => (
                <Box key={task.taskId} marginLeft={'1em'}>

                    <TaskCard task={task}/>
                </Box>
            ))}
        </Flex>
    )
}