import { create } from "zustand";

interface UserState {
    currentUserId: number
}

export const useUserState = create<UserState>(() => {
    return {
        currentUserId: 1
    }
})