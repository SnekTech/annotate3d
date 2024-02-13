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

async function updateFrame(taskId: number, frameIndex: number, dto: FrameDTO) {
    await httpClient.post(`${frames}/${task}/${taskId}/${at}/${frameIndex}`, dto)
}

export function useFrameFromTaskAt(taskId: number, frameIndex: number) {
    return useQuery({
        queryKey: [ frames, task, taskId, at, frameIndex ],
        queryFn: () => getFrameFromTaskAt(taskId, frameIndex)
    })
}

export function useFrameMutation() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: ({ taskId, frameIndex, dto }: {
            taskId: number,
            frameIndex: number,
            dto: FrameDTO
        }) => updateFrame(taskId, frameIndex, dto),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [ frames, task ]
            }).then(() => console.log('mutate frames'))
        }
    })
}