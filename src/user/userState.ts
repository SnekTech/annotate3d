import { create } from "zustand";
import { UserEntity } from "../api/entities/user.entity.ts";

interface UserHasProject {
    state: 'has-project'
    currentProjectId: number
}

interface UserNoProject {
    state: 'no-project'
}

type UserProjectState = UserNoProject | UserHasProject


interface UserState {
    currentUserId: number
    projectState: UserProjectState
    actions: {
        switchProject: (projectId: number) => void
    }
}

const useUserState = create<UserState>((set) => {
    return {
        currentUserId: 1,
        projectState: { state: 'no-project' },
        actions: {
            switchProject: projectId => set({
                projectState: {
                    state: 'has-project',
                    currentProjectId: projectId
                }
            })
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

export const useUserProjectState = () => useUserState(state => state.projectState)

export function useCurrentProjectId() {
    const projectState = useUserProjectState()
    if (projectState.state == 'no-project')
        throw new Error('current user has no projects, so no current project id available')

    return projectState.currentProjectId;
}

export const useUserStateActions = () => useUserState(state => state.actions)
