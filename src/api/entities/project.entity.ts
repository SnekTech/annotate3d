import { UserEntity } from "./user.entity.ts";

export interface ProjectEntity {
    projectId: number
    name: string
    modelName: string
    targetBones: string[]
    creator: UserEntity
}