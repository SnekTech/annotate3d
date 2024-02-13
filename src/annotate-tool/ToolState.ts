import { Bone } from "three";
import { ModelPaths, Pose } from "../core/ModelUtils.ts";
import { create } from "zustand";


interface State {
    originalPoseData?: Pose
    poseData?: Pose
    bones: Bone[]
    targetBoneNames: string[]
    activeBoneName?: string
    activeBone?: Bone
    modelPath: string
    frameIndex: number
    actions: {
        setFrameIndex(index: number): void,
        setTargetBoneNames(boneNames: string[]): void,
        setActiveBoneName(boneName: string): void,
        setPoseData(newPose: Pose): void,
    }
}

export const useToolState = create<State>()(set => {

    return {
        modelPath: ModelPaths.SMPL,
        bones: [],
        targetBoneNames: [],
        frameIndex: 0,

        actions: {
            setFrameIndex(index: number) {
                set({ frameIndex: index })
            },
            setTargetBoneNames(boneNames: string[]) {
                set({ targetBoneNames: boneNames })
            },
            setActiveBoneName(boneName: string) {
                set({activeBoneName: boneName})
            },
            setPoseData(newPose: Pose) {
                set({ poseData: newPose })
            },
        },
    }
})