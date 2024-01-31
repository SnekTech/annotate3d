import axios from "axios";
import { UserEntity } from "../user/user.entity.ts";

const baseURL = 'http://localhost:3000'

export const httpClient = axios.create({
    baseURL: baseURL,
})

export const formClient = axios.create({
    baseURL,
    headers: {
        "Content-Type": 'multipart/form-data'
    }
})

export async function getUsers() {
    const res = await httpClient.get<UserEntity[]>('user/all')
    console.log(res.data);
    return res.data
}