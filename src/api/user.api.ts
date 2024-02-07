import { UserEntity } from "./entities/user.entity.ts";
import { httpClient } from "../core/httpClient.ts";
import { ProjectEntity } from "./entities/project.entity.ts";
import { useQuery } from "@tanstack/react-query";
import { TaskEntity } from "./entities/task.entity.ts";

export async function getUsers() {
    const res = await httpClient.get<UserEntity[]>('user/all')
    console.log(res.data);
    return res.data
}

async function getProjectsCreatedByUser(userId: number): Promise<ProjectEntity[]> {
    const res = await httpClient.get(`projects/created-by/${userId}`)
    return res.data
}

async function getTasksAssignedToUser(userId: number): Promise<TaskEntity[]> {
    const res = await httpClient.get(`tasks/assigned-to/${userId}`)
    return res.data
}

export function useProjectsCreatedByUser(userId: number) {
    return useQuery({
        queryKey: [ 'projects', 'created-by', userId ],
        queryFn: () => getProjectsCreatedByUser(userId),
    })
}

export function useTasksAssignedToUser(userId: number) {
    return useQuery({
        queryKey: [ 'tasks', 'assigned-to', userId ],
        queryFn: () => getTasksAssignedToUser(userId)
    })
}