import { Box, Grid, Typography } from "@mui/material"
import TaskColumn from "./TaskColumn"
import { Task, TaskStatus } from "./misc"
import TaskCard from "./TaskCard"
import { randInt } from "three/src/math/MathUtils.js"
import TaskCreateBarChart from "./charts/TaskCreateBarChart"
import { FrameProgressPieChart, TaskProgressPieChart } from "./charts/TaskProgressPieChart"

const randProgress = () => randInt(0, 100)

const todoTasks: Task[] = [
    { name: 'jumping-jack', createAt: new Date(), status: TaskStatus.ToDo, progress: 0 },
    { name: 'jumping-jack', createAt: new Date(), status: TaskStatus.ToDo, progress: 0 },
    { name: 'jumping-jack', createAt: new Date(), status: TaskStatus.ToDo, progress: 0 },
    { name: 'jumping-jack', createAt: new Date(), status: TaskStatus.ToDo, progress: 0 },
]


const doingTasks: Task[] = [
    { name: 'jumping-jack', createAt: new Date(), status: TaskStatus.Doing, progress: randProgress() },
    { name: 'jumping-jack', createAt: new Date(), status: TaskStatus.Doing, progress: randProgress() },
    { name: 'jumping-jack', createAt: new Date(), status: TaskStatus.Doing, progress: randProgress() },
    { name: 'jumping-jack', createAt: new Date(), status: TaskStatus.Doing, progress: randProgress() },
]

const submittedTasks: Task[] = [
    { name: 'jumping-jack', createAt: new Date(), status: TaskStatus.Submitted, progress: 100 },
    { name: 'jumping-jack', createAt: new Date(), status: TaskStatus.Submitted, progress: 100 },
    { name: 'jumping-jack', createAt: new Date(), status: TaskStatus.Submitted, progress: 100 },
    { name: 'jumping-jack', createAt: new Date(), status: TaskStatus.Submitted, progress: 100 },
]

const completedTasks: Task[] = [
    { name: 'jumping-jack', createAt: new Date(), status: TaskStatus.Completed, progress: 100 },
    { name: 'jumping-jack', createAt: new Date(), status: TaskStatus.Completed, progress: 100 },
    { name: 'jumping-jack', createAt: new Date(), status: TaskStatus.Completed, progress: 100 },
]

const DashBoard = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <TaskColumn status={TaskStatus.ToDo} tasks={todoTasks} />
            </Grid>
            <Grid item xs={3}>
                <TaskColumn status={TaskStatus.Doing} tasks={doingTasks} />
            </Grid>
            <Grid item xs={3}>
                <TaskColumn status={TaskStatus.Submitted} tasks={submittedTasks} />
            </Grid>
            <Grid item xs={3}>
                <TaskColumn status={TaskStatus.Completed} tasks={completedTasks} />
            </Grid>
        </Grid>
    )
}

export const AdminDashBoard = () => {
    return (
        <Grid container spacing={3} marginTop={3}>
            <Grid item xs={4} height={300}>
                <Typography align="center" variant="h6">标注任务状态分布</Typography>
                <TaskProgressPieChart />
            </Grid>
            <Grid item xs={4} height={300}>
                <Typography align="center" variant="h6">图像帧标注进度</Typography>
                <FrameProgressPieChart />
            </Grid>
            <Grid item xs={8} height={400}>
                <Typography align="center" variant="h6">标注任务创建时间分布</Typography>
                <TaskCreateBarChart />
            </Grid>
        </Grid>
    )
}

export default DashBoard
