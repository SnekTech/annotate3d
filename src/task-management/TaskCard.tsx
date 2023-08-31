import { Button, Card, CardActions, CardContent, Typography, Box, CircularProgress, LinearProgress } from "@mui/material"

import { Task, TaskStatus, lorem } from "./misc"

type TaskCardProps = {
    task: Task
}


const TaskCard = (props: TaskCardProps) => {
    const { task } = props

    return (
        <Card sx={{ minWidth: 180, mb: 2 }}>
            <Box sx={{
                padding: '0 1em 0'
            }}>

                <CardContent>
                    <Typography>
                        {lorem.generateWords(2)}
                    </Typography>
                    <Typography color='text.secondary'>
                        {task.createAt.toLocaleDateString()}
                    </Typography>
                    {task.status == TaskStatus.Doing && <Box>
                        <LinearProgress variant="determinate" value={task.progress} />
                    </Box>}

                    {task.status == TaskStatus.Doing &&
                        <CardActions>
                            <Button size="small" variant="outlined">标注</Button>
                        </CardActions>}
                </CardContent>



            </Box>

        </Card>
    )
}

export default TaskCard
