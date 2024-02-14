import { ModelPaths, Pose } from "../core/ModelUtils.ts";
import { create } from "zustand";

interface State {
    modelPath: string // todo: use real URL, later...

    poseData?: Pose
    targetBoneNames: string[]
    activeBoneName?: string
    frameIndex: number
    actions: {
        setFrameIndex(index: number): void,
        setTargetBoneNames(boneNames: string[]): void,
        setActiveBoneName(boneName: string): void,
        setPoseData(newPose: Pose): void,
    }
}

const useToolState = create<State>()(set => {
    return {
        modelPath: ModelPaths.SMPL,
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
                set({ activeBoneName: boneName })
            },
            setPoseData(newPose: Pose) {
                set({ poseData: newPose })
            },
        },
    }
})

export const useModelPath = () => useToolState(state => state.modelPath)
export const usePoseData = () => useToolState(state => state.poseData)
export const useTargetBoneNames = () => useToolState(state => state.targetBoneNames)
export const useActiveBoneName = () => useToolState(state => state.activeBoneName)
export const useFrameIndex = () => useToolState(state => state.frameIndex)
export const useToolStateActions = () => useToolState(state => state.actions)
