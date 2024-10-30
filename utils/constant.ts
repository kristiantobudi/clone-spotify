import AxiosInstance  from "axios";

export const axiosInstance = AxiosInstance.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL_PRODUCT,
    timeout: 10000
})