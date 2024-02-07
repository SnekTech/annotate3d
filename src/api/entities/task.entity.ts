import { UserEntity } from "./user.entity.ts";
import { ProjectEntity } from "./project.entity.ts";

export interface TaskEntity {
    taskId: number
    name: string
    creator: UserEntity
    executor: UserEntity
    project: ProjectEntity
}