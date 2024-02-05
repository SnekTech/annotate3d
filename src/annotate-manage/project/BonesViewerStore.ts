import { create } from "zustand";
import { Bone } from "three";

interface BonesViewerStore {
    bones: Bone[]
    selectedBones: Set<Bone>
    hoveredBone?: Bone
    actions: {
        initBones: (bones: Bone[]) => void
        setActiveBone: (bone: Bone) => void
    }
}

const useBonesViewerStore = create<BonesViewerStore>()(set => ({
    bones: [],
    selectedBones: new Set<Bone>(),
    actions: {
        initBones: (bones: Bone[]) => set(() => ({ bones, selectedBones: new Set<Bone>() })),
        setActiveBone: (bone: Bone) => set(() => ({ hoveredBone: bone }))
    }
}))

export const useBones = () => useBonesViewerStore(state => state.bones)
export const useSelectedBones = () => useBonesViewerStore(state => state.selectedBones)
export const useHoveredBone = () => useBonesViewerStore(state => state.hoveredBone)

export const useBoneSelectStoreActions = () => useBonesViewerStore(state => state.actions)