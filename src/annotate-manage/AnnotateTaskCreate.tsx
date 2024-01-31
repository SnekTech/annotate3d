import { Button, Container, FormControl, FormErrorMessage, FormLabel, Input, Select, Stack } from "@chakra-ui/react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { formClient, getUsers } from "../core/httpClient.ts";
import { useUserState } from "../user/userState.ts";
import { useQuery } from "@tanstack/react-query";

type TaskFormData = {
    taskName: string
    executorId: number
    video: FileList
}

export function AnnotateTaskCreate() {
    const { data: users, isPending, isError, error } = useQuery({ queryKey: [ 'users' ], queryFn: getUsers,
    })
    const { currentUserId } = useUserState()
    const {
        handleSubmit,
        register,
        control,
        formState: { errors, isSubmitting }
    } = useForm<TaskFormData>()


    if (isPending)
        return 'fetching users'

    if (isError)
        throw error


    const onSubmit: SubmitHandler<TaskFormData> = async (data) => {
        console.log(data);

        const response = await formClient.post('tasks/create', {
            ...data,
            video: data.video[0],
            creatorId: currentUserId,
        })

        console.log(response);
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
                    <Controller
                        name={'executorId'}
                        control={control}
                        rules={{ required: { value: true, message: '选择执行者' } }}
                        defaultValue={users[0].userId}
                        render={({
                                     field: { onChange, value },
                                     fieldState: { error }
                                 }) => (
                            <FormControl isInvalid={error != undefined}>
                                <FormLabel>执行者</FormLabel>
                                <Select
                                    onChange={onChange}
                                    value={value}
                                >
                                    {users?.map(({ userId, nickname }) => (
                                        <option key={userId} value={userId}>{nickname}</option>
                                    ))}
                                </Select>
                                <FormErrorMessage>{error?.message}</FormErrorMessage>
                            </FormControl>
                        )}
                    />
                </Stack>

                <Button mt={4} colorScheme={'teal'} isLoading={isSubmitting} type={'submit'}>
                    提交
                </Button>
            </form>
        </Container>
    )
}