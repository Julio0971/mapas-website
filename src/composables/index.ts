import axios from 'axios'
import { useSnackbarStore } from '../store'
import type { AxiosError, AxiosResponse } from 'axios'

export const useAxiosRequest = async (method: 'get' | 'post' | 'put' | 'delete', url: string, params: object = {}, data: any = {}) => {
    const snackbarStore = useSnackbarStore()
    const response: AxiosResponse = await axios({ method, url, data, params })

    if ((response.data as { message: string }).message) {
        snackbarStore.show = true
        snackbarStore.type = 'success'
        snackbarStore.text = (response.data as { message: string }).message
    }

    return response.data
}

export const useHandleMultipleRequests = async (urls: string[]) => {
    let requests: Promise<AxiosResponse<never>>[] = []

    urls.map(url => requests.push(axios.get(url)))

    return await Promise.all(requests)
}

export const useAxiosErrors = (error: AxiosError) => {
    let errors: any = {}
    const snackbarStore = useSnackbarStore()

    if (error.response) {
        if ((error.response.data as { errors: any }).errors) {
            Object.entries((error.response.data as { errors: any }).errors).map((item: any) => {
                errors[item[0]] = item[1][0]
            })
        } else {
            snackbarStore.show = true
            snackbarStore.type = 'error'
            snackbarStore.text = (error.response.data as { message: string }).message
        }
    } else {
        snackbarStore.show = true
        snackbarStore.type = 'error'
        snackbarStore.text = error.message || 'Error'
    }

    return errors
}