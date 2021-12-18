import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://api.instantwebtools.net/v1/'
})

axiosInstance.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        return Promise.reject(error)
    } 
)

export default axiosInstance