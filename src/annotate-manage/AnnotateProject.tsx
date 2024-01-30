import { Button, Container, FormControl, FormErrorMessage, FormLabel, Input, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { HttpClient } from "../core/httpClient.ts";
import { useUserState } from "../user/userState.ts";

interface IProjectFormData {
    projectName: string
    model: FileList
}

export function AnnotateProject() {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting }
    } = useForm<IProjectFormData>({
        defaultValues: {
            projectName: ""
        }
    })

    const { currentUserId } = useUserState()

    const onSubmit: SubmitHandler<IProjectFormData> = async (data) => {
        const response = await HttpClient.post("projects/create", {
            ...data,
            model: data.model[0],
            creatorId: currentUserId
        }, { headers: { "Content-Type": 'multipart/form-data' } })
        console.log(response);
    }

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={4}>
                    <FormControl isInvalid={errors.projectName != undefined}>
                        <FormLabel>项目名称</FormLabel>
                        <Input placeholder={'XX 项目'}
                               {...register('projectName', {
                                   required: { value: true, message: '必须填写项目名称' }
                               })}
                        />
                        <FormErrorMessage>
                            {errors.projectName ? errors.projectName.message : ''}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl>
                        <FormLabel>上传模型</FormLabel>
                        <Input
                            {...register('model', {
                                required: '必须提供模型文件'
                            })}
                            type={'file'}
                            multiple={false}
                        />
                    </FormControl>
                </Stack>

                <Button mt={4} colorScheme={'teal'} isLoading={isSubmitting} type={'submit'}>
                    提交
                </Button>
            </form>
        </Container>
    )
}