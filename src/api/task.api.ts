import { TaskEntity } from "./entities/task.entity.ts";
import { httpClient } from "../core/httpClient.ts";
import { useQuery } from "@tanstack/react-query";

const tasks = 'tasks'
const assignedTo = 'assigned-to'

async function getTasksAssignedToUser(userId: number): Promise<TaskEntity[]> {
    const res = await httpClient.get(`${tasks}/${assignedTo}/${userId}`)
    return res.data
}

export function useTasksAssignedToUser(userId: number) {
    return useQuery({
        queryKey: [ tasks, assignedTo, userId ],
        queryFn: () => getTasksAssignedToUser(userId)
    })
}

async function getTask(taskId: number): Promise<TaskEntity> {
    const res = await httpClient.get(`${tasks}/${taskId}`)
    return res.data
}

export function useTask(taskId: number) {
    return useQuery({
        queryKey: [ tasks, taskId ],
        queryFn: () => getTask(taskId)
    })
}
