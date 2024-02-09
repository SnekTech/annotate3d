import { ProjectEntity } from "./entities/project.entity.ts";
import { httpClient } from "../core/httpClient.ts";
import { useQuery } from "@tanstack/react-query";

const projects = 'projects'
const createdBy = 'created-by'

async function getProjectsCreatedByUser(userId: number): Promise<ProjectEntity[]> {
    const res = await httpClient.get(`${projects}/${createdBy}/${userId}`)
    return res.data
}

export function useProjectsCreatedByUser(userId: number) {
    return useQuery({
        queryKey: [ projects, createdBy, userId ],
        queryFn: () => getProjectsCreatedByUser(userId),
    })
}
