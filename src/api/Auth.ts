import axios from "axios"
import type { AxiosResponse } from "axios"
import { createRouter, createWebHistory } from 'vue-router';

const API_LOGIN = "http://localhost:8000/api/login"
const API_REGISTER = "http://localhost:8000/api/register"
const API_LOGOUT = "http://localhost:8000/api/logout"

export const login = (data: any): any => {
    return axios.post(`${API_LOGIN}`, data) 
        .then((res) => {
            console.log(res.data.user)
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('userId', res.data.user.id)
            localStorage.setItem('name', res.data.user.name)
            return res.data.message
        })
        .catch((error) => {
            throw error;
        })
}

export const register = (data: any): Promise<any[]> => {
    return axios.post(`${API_REGISTER}`, data) 
        .then((res) => {
            console.log(res.data.user)
            return res.data.message
        })
        .catch((error) => {
            throw error;
        })
}

export const logout = (): Promise<any[]> => {
    return axios.post(`${API_LOGOUT}`) 
        .then((res) => {
            return res.data.message
        })
        .catch((error) => {
            throw error;
        })
}