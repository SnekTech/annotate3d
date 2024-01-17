import { Bone, SkinnedMesh } from "three";
import { Pose, updatePose } from "./ModelUtils.ts";
import { create } from "zustand";

interface ToolState {
    currentModel?: SkinnedMesh

    setCurrentModel(skinnedMesh: SkinnedMesh): void

    originalPose?: Pose

    setOriginalPose(pose: Pose): void

    pose?: Pose

    setPose(newPose: Pose): void
    resetPose(): void

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
        resetPose() {
            set(state => {
                const [ model, originalPose ] = [ state.currentModel, state.originalPose ]
                if (!model || !originalPose) return {}
                updatePose(model, originalPose)
                return { pose: originalPose }
            })
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