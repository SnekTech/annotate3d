import { Bone } from "three";
import { ModelPaths, Pose, updatePose } from "./ModelUtils.ts";
import { create } from "zustand";


interface State {
    originalPoseData?: Pose
    poseData?: Pose
    bones: Bone[]
    activeBone?: Bone
    modelPath: string
}

interface Action {
    setOriginalPoseData(pose: Pose): void

    setPoseData(newPose: Pose): void

    updateModelPose(pose: Pose): void

    resetModelPose(): void

    setBones(bones: Bone[]): void

    setActiveBone(bone: Bone): void
}

export const useToolState = create<State & Action>()(set => {

    return {
        modelPath: ModelPaths.SMPL,
        bones: [],

        setOriginalPoseData(pose: Pose) {
            set({ originalPoseData: pose })
        },
        setPoseData(newPose: Pose) {
            set({ poseData: newPose })
        },
        updateModelPose(pose: Pose) {
            set(state => {
                updatePose(state.bones, pose)
                return {}
            })
        },
        resetModelPose() {
            set(state => {
                const originalPoseData = state.originalPoseData
                if (!originalPoseData) return {}

                updatePose(state.bones, originalPoseData)
                return {}
            })
        },
        setBones(bones: Bone[]) {
            set({ bones })
        },
        setActiveBone(bone: Bone) {
            set({ activeBone: bone })
        },
    }
})