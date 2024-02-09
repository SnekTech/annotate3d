import { UserEntity } from "./entities/user.entity.ts";
import { httpClient } from "../core/httpClient.ts";
import { ProjectEntity } from "./entities/project.entity.ts";
import { useQuery } from "@tanstack/react-query";

export async function getUsers() {
    const res = await httpClient.get<UserEntity[]>('user/all')
    console.log(res.data);
    return res.data
}

async function getProjectsCreatedByUser(userId: number): Promise<ProjectEntity[]> {
    const res = await httpClient.get(`projects/created-by/${userId}`)
    return res.data
}


export function useProjectsCreatedByUser(userId: number) {
    return useQuery({
        queryKey: [ 'projects', 'created-by', userId ],
        queryFn: () => getProjectsCreatedByUser(userId),
    })
}
