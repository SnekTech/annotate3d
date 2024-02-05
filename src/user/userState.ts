import { create } from "zustand";
import { UserEntity } from "./user.entity.ts";

interface UserState {
    currentUserId: number
}

const useUserState = create<UserState>(() => {
    return {
        currentUserId: 1
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