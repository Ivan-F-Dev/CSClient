import {CategoriesNameEnum} from "./Enums";

export type UserEntity = {
    id: string
    name: string
    surname: string
    dateOfBirth: string
    login: string
    password: string
    roles: Array<string>
}
export type CategoryEntity = {
    title: string
    img: string
    categoryName: CategoriesNameEnum
    prefix: string
}
export type OrderEntity = {
    id: string
    clientId: string
    prodsId: string
    date: string
}
export interface ProductEntity  {
    id: string
    category: CategoriesNameEnum
    producer: string
    model: string
    price: string
    img: string
    count: number
    color: string
    rom?: string
    ram?: string
    displayType?: string
    displaySize?: string
    CPU?: string
    GPU?: string
    mainCam?: string
    frontCam?: string
    interfaces?: string
    weight?: string
    screenResolution?: string
    aspectRatio?: string
    matrixType?: string
    videoRecordingQuality?: string
    frameRate?: string
}

export type propNames = keyof ProductEntity

export interface ProductEntityClient extends ProductEntity {
    favorite: boolean
    toCompare: boolean
    toBasket: boolean
    [index:string]:boolean|string|number|undefined
}
