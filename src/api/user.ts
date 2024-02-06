import { UserEntity } from "./entities/user.entity.ts";
import { httpClient } from "../core/httpClient.ts";
import { ProjectEntity } from "./entities/project.entity.ts";

export async function getUsers() {
    const res = await httpClient.get<UserEntity[]>('user/all')
    console.log(res.data);
    return res.data
}

export function getProjectsCreatedByUser(userId: number): Promise<ProjectEntity[]> {
    return httpClient.get(`projects/createdBy/${userId}`)
}