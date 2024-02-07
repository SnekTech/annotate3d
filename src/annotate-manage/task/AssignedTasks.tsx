import { useCurrentUser } from "../../user/userState.ts";
import { useTasksAssignedToUser } from "../../api/user.api.ts";
import { List, ListItem } from "@chakra-ui/react";

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
        <List>
            {tasks.map(task => (
                <ListItem key={task.taskId}>{task.name}</ListItem>
            ))}
        </List>
    )
}