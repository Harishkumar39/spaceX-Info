import axios,{AxiosResponse} from "axios"

const URL = "https://api.spacexdata.com/v4";

export interface NumRockets{
    id: string,
    name: string,
    description: string,
    flickr_images: string[]
}

export interface SingleRocket{
    id: string,
    name: string,
    description: string,
    flickr_images: string[]
    height: any,
    mass: any,
    wikipedia: string
}

export interface Launch{
    id: string,
    name: string,
    details: string,
    date_utc: string,
    links: []
}

export interface Historys{
    title: string,
    event_date_utc: string,
    details: string,
    links: string[]
}

export const getRockets = (): Promise<AxiosResponse<NumRockets[]>> =>{
    return axios.get<NumRockets[]>(`${URL}/rockets`);
}

export const getLaunches = (): Promise<AxiosResponse<Launch[]>> =>{
    return axios.get<Launch[]>(`${URL}/launches`);
}

export const getHistory = (): Promise<AxiosResponse<Historys[]>> =>{
    return axios.get<Historys[]>(`${URL}/history`);
}

export const getRocketById = (rocketid : string): Promise<AxiosResponse<SingleRocket>> =>{
    return axios.get<SingleRocket>(`${URL}/rockets/${rocketid}`)
}
