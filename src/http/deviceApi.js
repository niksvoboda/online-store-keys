import {$host, $authHost} from "./index"
import jwt_decode from "jwt-decode"

export const createType = async () => {
    const {data} = await $authHost.post('api/type')
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand')
    return data
}

export const createDevice = async () => {
    const {data} = await $authHost.post('api/device')
    return data
}

export const fetchDevices = async () => {
    const {data} = await $host.get('api/device')
    return data
}

export const fetchOneDevice = async (id) => {
    const {data} = await $host.get('api/device/' + id)
    return data
}
