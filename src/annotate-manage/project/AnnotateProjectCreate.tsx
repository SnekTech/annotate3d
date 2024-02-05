import { Button, Container, FormControl, FormErrorMessage, FormLabel, Input, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { formClient } from "../../core/httpClient.ts";
import { useUserState } from "../../user/userState.ts";
import { AxiosError } from "axios";
import { ModelBonesViewer } from "./ModelBonesViewer.tsx";
import { useSelectedBones } from "./BonesViewerStore.ts";

interface IProjectFormData {
    projectName: string
    model: FileList
}

export function AnnotateProjectCreate() {
    const {
        handleSubmit,
        register,
        resetField,
        formState: { errors, isSubmitting }
    } = useForm<IProjectFormData>({
        defaultValues: {
            projectName: ""
        }
    })

    const { currentUserId } = useUserState()
    const selectedBones = useSelectedBones()

    const onSubmit: SubmitHandler<IProjectFormData> = async (data) => {
        try {
            const boneNames: string[] = []
            for (const bone of selectedBones.values()) {
                boneNames.push(bone.name)
            }

            await formClient.post("projects/create", {
                ...data,
                model: data.model[0],
                creatorId: currentUserId,
                targetBones: boneNames
            })
        } catch (err: unknown) {
            if (err instanceof AxiosError) {
                console.error(err.response?.data)
                resetField('projectName')
            }
        }
    }

    return (
        <Container maxW={'800px'}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={4}>
                    <FormControl isInvalid={errors.projectName != undefined}>
                        <FormLabel>项目名称</FormLabel>
                        <Input placeholder={'XX 项目'}
                               {...register('projectName', {
                                   required: { value: true, message: '必须填写项目名称' },
                               })}
                        />
                        <FormErrorMessage>
                            {errors.projectName?.message}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors.model != undefined}>
                        <FormLabel>上传模型</FormLabel>
                        <Input
                            type={'file'}
                            {...register('model', {
                                required: { value: true, message: '必须提供模型文件' },
                            })}
                        />
                        <FormErrorMessage>
                            {errors.model && errors.model.message}
                        </FormErrorMessage>
                    </FormControl>

                    <ModelBonesViewer/>
                </Stack>

                <Button mt={4} colorScheme={'teal'} isLoading={isSubmitting} type={'submit'}>
                    提交
                </Button>
            </form>
        </Container>
    )
}