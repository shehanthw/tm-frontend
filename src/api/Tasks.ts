import axios from "axios"
import type { AxiosResponse } from "axios"

const API_BASE = "http://localhost:8000/api/tasks"

export const getTasks = (): Promise<any[]> => {
    return axios.get(API_BASE) 
        .then((res) => {
            console.log(res.data.message)
            return res.data.message
        })
        .catch((error) => {
            console.log(error)
            throw error;
        })
}

export const updateTask = (id: number, status: string): Promise<any[]> => {
    return axios.put(`${API_BASE}/update-status/${id}/${status}`) 
        .then((res) => {
            console.log(res.data.message)
            return res.data.message
        })
        .catch((error) => {
            console.log(error)
            throw error;
        })
}

export const storeTask = (data: any): Promise<any[]> => {
    return axios.post(`${API_BASE}`, data) 
        .then((res) => {
            return res.data.message
        })
        .catch((error) => {
            throw error;
        })
}

export const showTasks = (): Promise<any[]> => {
    const user_id = localStorage.getItem('userId')
    console.log(user_id)
    return axios.get(`${API_BASE}/show/${user_id}`) 
        .then((res) => {
            console.log(res)
            return res.data.message
        })
        .catch((error) => {
            throw error;
        })
}

export const getTaskById = (id: number): Promise<any[]> => {
    return axios.get(`${API_BASE}/${id}`) 
        .then((res) => {
            return res.data.message
        })
        .catch((error) => {
            throw error;
        })
}

export const updateTaskById = (id: number, data: any): Promise<any[]> => {
    return axios.put(`${API_BASE}/${id}`, data) 
        .then((res) => {
            return res.data.message
        })
        .catch((error) => {
            throw error;
        })
}

export const deleteTaskById = (id: number): Promise<any[]> => {
    return axios.delete(`${API_BASE}/${id}`) 
        .then((res) => {
            return res.data.message
        })
        .catch((error) => {
            throw error;
        })
}