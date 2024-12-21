import axios from "axios"
import SummaryApi, { baseURL } from '../common/SummaryApi'

const Axios = axios.create({
    baseURL: baseURL,
    withCredentials: true
})

/* Sending Access Token in header  */
Axios.interceptors.request.use(
    async (config) => {
        const accesstoken = localStorage.getItem('accesstoken')

        if (accesstoken) {
            config.headers.Authorization = `Bearer ${accesstoken}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

/* Update Access Token Useing Refresh Token*/
Axios.interceptors.request.use(
    (response) => {
        return response
    },
    async (error) => {
        let originRequest = error.config

        if (error.response.status === 401 && !originRequest.retry) {
            originRequest.retry = true
            const refreshToken = localStorage.getItem('refreshToken')

            if (refreshToken) {
                const newAccessToken = await refreshAccessToken(refreshToken)

                if (newAccessToken) {
                    originRequest.headers.Authorization = `Bearer ${newAccessToken}`
                    return Axios(originRequest)
                }

            }
        }

        return Promise.reject(error)
    }
)


const refreshAccessToken = async (refreshToken) => {
    try {
        const response = await Axios({
            ...SummaryApi.refreshToken,
            headers: {
                Authorization: `Bearer ${refreshToken}`
            }
        })
        console.log(response);

        const accessToken = response.data.data.accessToken
        localStorage.setItem('accesstoken', accessToken)
        return accessToken

    } catch (error) {
        console.log(error);
    }
}

export default Axios