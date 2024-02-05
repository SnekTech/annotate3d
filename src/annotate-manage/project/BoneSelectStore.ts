import { create } from "zustand";
import { Bone } from "three";

interface BoneSelectStore {
    bones: Bone[]
    selectedBones: Set<Bone>
    activeBone?: Bone
    actions: {
        initBones: (bones: Bone[]) => void
        setActiveBone: (bone: Bone) => void
    }
}

const useBoneSelectStore = create<BoneSelectStore>()(set => ({
    bones: [],
    selectedBones: new Set<Bone>(),
    actions: {
        initBones: (bones: Bone[]) => set(() => ({ bones, selectedBones: new Set<Bone>() })),
        setActiveBone: (bone: Bone) => set(() => ({ activeBone: bone }))
    }
}))

export const useBones = () => useBoneSelectStore(state => state.bones)
export const useSelectedBones = () => useBoneSelectStore(state => state.selectedBones)
export const useActiveBone = () => useBoneSelectStore(state => state.activeBone)

export const useBoneSelectStoreActions = () => useBoneSelectStore(state => state.actions)