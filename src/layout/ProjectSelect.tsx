import { Container, Select } from "@chakra-ui/react";
import { useCurrentUser, useUserStateActions } from "../user/userState.ts";
import { ChangeEvent, useEffect } from "react";
import { useProjectsCreatedByUser } from "../api/project.api.ts";


export function ProjectSelect() {
    const userId = useCurrentUser().userId
    const { switchProject } = useUserStateActions()

    const { data: projects, isPending, isError } = useProjectsCreatedByUser(userId)

    useEffect(() => {
        if (projects && projects.length > 0) {
            switchProject(projects[0].projectId)
        }
    }, [projects, switchProject]);

    if (isPending) {
        return <span>fetching projects</span>
    }
    if (isError) {
        return <span>an error occurred when fetching projects</span>
    }
    if (projects.length == 0) {
        return <span>No projects found created by user {userId}</span>
    }

    const projectChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        const projectId = parseInt(e.target.value)
        console.log('switching current project')
        switchProject(projectId)
    }

    return (
        <Container>
            <Select onChange={projectChangeHandler} defaultValue={projects[0].projectId}>
                {projects.map(project => (
                    <option key={project.projectId} value={project.projectId}>{project.name}</option>
                ))}
            </Select>
        </Container>
    )
}