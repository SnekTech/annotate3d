import { Bone, SkinnedMesh } from "three";
import { Pose, updatePose } from "./ModelUtils.ts";
import { create } from "zustand";

interface State {
    currentModel?: SkinnedMesh
    originalPose?: Pose
    pose?: Pose
    bones: Bone[]
    activeBone?: Bone
}

interface Action {
    setCurrentModel(skinnedMesh: SkinnedMesh): void

    setOriginalPose(pose: Pose): void

    setPose(newPose: Pose): void

    resetPose(): void

    setBones(bones: Bone[]): void

    setActiveBone(bone: Bone): void
}

export const useToolState = create<State & Action>()(set => {

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