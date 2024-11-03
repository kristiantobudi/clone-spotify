import AxiosInstance from 'axios'

export const axiosIntance = AxiosInstance.create({
    baseURL: 'https://api.spotify.com/',
    timeout: 10000
})