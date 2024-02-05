import axios from 'axios'

export const http = axios.create({
    baseURL: "",
    headers:{
        "Accept": "application/json",
        "Content-Type": "application/json" 
    }
})
