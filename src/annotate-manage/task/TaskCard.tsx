import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Text } from "@chakra-ui/react";
import { TaskEntity } from "../../api/entities/task.entity.ts";
import { Link } from "react-router-dom";

export function TaskCard({task}: {task: TaskEntity}) {
    return (
        <Card maxW={'300'}>
            <CardHeader>
                <Heading size={'md'}>{task.name}</Heading>
            </CardHeader>
            <CardBody>
                <Text>task progress WIP...</Text>
            </CardBody>
            <CardFooter>
                <Button as={Link} to={`/tool/${task.taskId}`}>执行</Button>
            </CardFooter>
        </Card>
    )
}