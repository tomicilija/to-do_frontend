import axios from 'axios'
import { TaskI, TasksI, UserI, UsersI } from '../interfaces/TaskInterfaces'

const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL })

// API calls related to User

export const signUp = async (user: UserI): Promise<string> => {
  const response = await axiosInstance.post('/signup', user)
  return response.data
}

export const getAllUsers = async (): Promise<UsersI[]> => {
  const response = await axiosInstance.get('/users')
  return response.data
}

export const getUserById = async (id: string): Promise<UsersI> => {
  const response = await axiosInstance.get(`/user/${id}`)
  return response.data
}

// API calls related to Tasks

export const addTask = async (task: TaskI, id: string): Promise<string> => {
  const response = await axiosInstance.post(`/task/${id}`, task)
  return response.data
}

export const getUserTasks = async (id: string): Promise<TasksI[]> => {
  const response = await axiosInstance.get(`/tasks/${id}`)
  return response.data
}

export const setTaskCompleted = async (id: string): Promise<TasksI> => {
  const response = await axiosInstance.patch(`/task/completed/${id}`)
  return response.data
}

export const deleteTask = async (id: string): Promise<TasksI> => {
  const response = await axiosInstance.delete(`/task/${id}`)
  return response.data
}
