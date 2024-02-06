import { Control, Controller } from "react-hook-form";
import { FormControl, FormErrorMessage, FormLabel, Select } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { TaskFormData } from "../AnnotateTaskCreate.tsx";
import { getUsers } from "../../../api/user.ts";


export function SelectUser(props: { control: Control<TaskFormData> }) {

    const { data: users, isPending, isError, error } = useQuery({
        queryKey: [ 'users' ], queryFn: getUsers,
    })

    if (isPending)
        return 'fetching users'

    if (isError)
        throw error

    return (

        <Controller
            name={'executorId'}
            control={props.control}
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
                        {users.map(({ userId, nickname }) => (
                            <option key={userId} value={userId}>{nickname}</option>
                        ))}
                    </Select>
                    <FormErrorMessage>{error?.message}</FormErrorMessage>
                </FormControl>
            )}
        />
    )
}