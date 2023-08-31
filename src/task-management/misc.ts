import { LoremIpsum } from "lorem-ipsum"

export enum TaskStatus {
    ToDo,
    Doing,
    Submitted,
    Completed,
}

export const TaskStatusName = {
    [TaskStatus.ToDo]: '待标注',
    [TaskStatus.Doing]: '进行中',
    [TaskStatus.Submitted]: '已提交',
    [TaskStatus.Completed]: '已完成',
}

export type Task = {
    status: TaskStatus
    name: string
    createAt: Date 
    progress: number
}

export const lorem = new LoremIpsum({
    wordsPerSentence: {
        min: 1,
        max: 3
    }
})

export const projectNames = [
    '标注项目1',
    '标注项目2',
    '标注项目3',
    '标注项目4',
    '标注项目5',
]
