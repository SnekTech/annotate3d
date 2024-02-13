import { httpClient } from "../core/httpClient.ts";
import { FrameDTO, FrameEntity } from "./entities/frame.entity.ts";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const frames = 'frames'
const task = 'task'
const at = 'at'

async function getFrameFromTaskAt(taskId: number, frameIndex: number): Promise<FrameEntity> {
    const res = await httpClient.get(`${frames}/${task}/${taskId}/${at}/${frameIndex}`)
    return res.data
}



async function updateFrame(frameId: number, dto: FrameDTO) {
    await httpClient.post(`${frames}/${frameId}`, dto)
}

export function useFrameFromTaskAt(taskId: number, frameIndex: number) {
    return useQuery({
        queryKey: [ frames, task, taskId, at, frameIndex ],
        queryFn: () => getFrameFromTaskAt(taskId, frameIndex)
    })
}

export function useFrameMutation(frameId: number, dto: FrameDTO) {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: () => updateFrame(frameId, dto),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [frames]
            }).then(() => console.log('mutate frames'))
        }
    })
}