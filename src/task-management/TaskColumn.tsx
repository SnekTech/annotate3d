import { Divider, Paper, Typography } from "@mui/material"
import { Task, TaskStatus, TaskStatusName } from "./misc"
import TaskCard from "./TaskCard"

type TaskColumnProps = {
    status: TaskStatus
    tasks: Task[]
}

const TaskColumn = (props: TaskColumnProps) => {
    const { status, tasks } = props
    return (
        <Paper sx={{padding: 2}}>
            <Typography variant="h6">
                {TaskStatusName[status]}
            </Typography>

            <Divider sx={{mb: 2, mt: 1}} />

            {tasks.map((task, i) => <TaskCard key={i} task={task} />)}
        </Paper>
    )
}

export default TaskColumn
