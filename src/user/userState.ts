import { create } from "zustand";
import { UserEntity } from "./user.entity.ts";

interface UserState {
    currentUserId: number
    currentProjectId?: number
    actions: {
        switchProject: (projectId: number) => void
    }
}

const useUserState = create<UserState>((set) => {
    return {
        currentUserId: 1,
        actions: {
            switchProject: projectId => set({ currentProjectId: projectId })
        }
    }
})

export function useCurrentUser(): UserEntity {
    const currentUserId = useUserState(state => state.currentUserId)
    return {
        userId: currentUserId,
        nickname: 'Jane Doe',
        isAdmin: true,
        phone: '13233333333'
    }
}

export function useCurrentProjectId() {
    return useUserState(state => state.currentProjectId)
}

export const useUserStateActions = () => useUserState(state => state.actions)
