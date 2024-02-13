import { TaskEntity } from "./task.entity.ts";
import { Pose } from "../../core/ModelUtils.ts";

export interface FrameEntity {
    frameId: number
    index: number
    pose: Pose
    isAnnotated: boolean
    task: TaskEntity
}

export type FrameDTO = Partial<Pick<FrameEntity, 'pose' | 'isAnnotated'>>
