import axios from "axios";

export const baseURL = 'http://localhost:3000'

export const httpClient = axios.create({
    baseURL: baseURL,
})

export const formClient = axios.create({
    baseURL,
    headers: {
        "Content-Type": 'multipart/form-data'
    }
})