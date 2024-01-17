import { Bone, SkinnedMesh } from "three";
import { Pose } from "./ModelUtils.ts";
import { create } from "zustand";

interface ToolState {
    currentModel?: SkinnedMesh

    setCurrentModel(skinnedMesh: SkinnedMesh): void

    originalPose?: Pose

    setOriginalPose(pose: Pose): void

    pose?: Pose

    setPose(newPose: Pose): void

    bones: Bone[]

    setBones(bones: Bone[]): void

    activeBone?: Bone

    setActiveBone(bone: Bone): void


}

export const useToolState = create<ToolState>()(set => {

    return {
        setCurrentModel(model: SkinnedMesh) {
            set({ currentModel: model })
        },
        setOriginalPose(pose: Pose) {
            set({ originalPose: pose })
        },
        setPose(newPose: Pose) {
            set({ pose: newPose })
        },
        bones: [],
        setBones(bones: Bone[]) {
            set({ bones })
        },
        setActiveBone(bone: Bone) {
            set({ activeBone: bone })
        },
    }
})