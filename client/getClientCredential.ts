import { axiosInstance } from "../utils/constant"
import { TopTrackEndpoint } from "../utils/network"

export const getAllBrands = async () => {
    return axiosInstance.get(`${TopTrackEndpoint}`, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
}