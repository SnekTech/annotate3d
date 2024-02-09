import { UserEntity } from "./entities/user.entity.ts";
import { httpClient } from "../core/httpClient.ts";
import { useQuery } from "@tanstack/react-query";

const users = 'users'
const all = 'all'

async function getAllUsers() {
    const res = await httpClient.get<UserEntity[]>(`${users}/${all}`)
    return res.data
}

export function useAllUsers() {
    return useQuery({
        queryKey: [ users, all ],
        queryFn: getAllUsers
    })
}
