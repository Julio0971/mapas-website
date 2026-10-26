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

export const getMinTempColor = (temp: string) => {
    const temps = [
        {
            temp: 'Menor de -4° C',
            color: '#caf0f8'
        },
        {
            temp: 'de -4° a 0° C',
            color: '#ade8f4'
        },
        {
            temp: 'de 0° a 4° C',
            color: '#90e0ef'
        },
        {
            temp: 'de 4° a 8° C',
            color: '#48cae4'
        },
        {
            temp: 'de 8° a 12° C',
            color: '#00b4d8'
        },
        {
            temp: 'de 12° a 16° C',
            color: '#0096c7'
        },
        {
            temp: 'de 16° a 20° C',
            color: '#0077b6'
        },
        {
            temp: 'Más de 20° C',
            color: '#023e8a'
        },
    ]
    
    const temp_color = temps.find(t => t.temp == temp)

    if (temp_color) {
        return temp_color.color
    }

    return 'transparent'
}

export const getMaxTempColor = (temp: string) => {
    const temps = [
        {
            temp: 'Menos de 8° C',
            color: '#ffba08'
        },
        {
            temp: 'de 8° a 12° C',
            color: '#faa307'
        },
        {
            temp: 'de 12° a 16° C',
            color: '#f48c06'
        },
        {
            temp: 'de 16° a 20° C',
            color: '#e85d04'
        },
        {
            temp: 'de 20° a 24° C',
            color: '#dc2f02'
        },
        {
            temp: 'de 24° a 28° C',
            color: '#d00000'
        },
        {
            temp: 'de 28° a 32° C',
            color: '#9d0208'
        },
        {
            temp: 'de 32° a 36° C',
            color: '#6a040f'
        },
        {
            temp: 'de 36° a 40° C',
            color: '#370617'
        },
        {
            temp: 'Más de 40° C',
            color: '#03071e'
        },
    ]
    
    const temp_color = temps.find(t => t.temp == temp)

    if (temp_color) {
        return temp_color.color
    }

    return 'transparent'
}