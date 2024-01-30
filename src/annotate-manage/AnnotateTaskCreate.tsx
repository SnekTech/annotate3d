import { Button, Container, FormControl, FormErrorMessage, FormLabel, Input, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";

type TaskFormData = {
    taskName: string
    executorId: number
    video: FileList
}

export function AnnotateTaskCreate() {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting }
    } = useForm<TaskFormData>()

    const onSubmit: SubmitHandler<TaskFormData> = (data) => {
        console.log(data);
    }

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={5}>
                    <FormControl isInvalid={errors.taskName != undefined}>
                        <FormLabel>任务名称</FormLabel>
                        <Input {...register('taskName', {
                            required: { value: true, message: '任务名称不能为空' }
                        })}/>
                        <FormErrorMessage>
                            {errors.taskName && errors.taskName.message}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors.video != undefined}>
                        <FormLabel>上传人体姿态视频</FormLabel>
                        <Input
                            type={'file'}
                            {...register('video', {
                                required: { value: true, message: '请上传视频' }
                            })}
                            />
                        <FormErrorMessage>
                            {errors.video && errors.video.message}
                        </FormErrorMessage>
                    </FormControl>
                </Stack>

                <Button mt={4} colorScheme={'teal'} isLoading={isSubmitting} type={'submit'}>
                    提交
                </Button>
            </form>
        </Container>
    )
}