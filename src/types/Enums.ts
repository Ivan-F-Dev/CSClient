export enum RolesEnum {
    USER='USER',
    ADMIN='ADMIN'
}

// export enum ProdPrefixEnum {
//     videoCameras='vc',
//     gameStations='gs',
//     televisors='tv',
//     pads='pd',
//     laptops='lt',
//     photoVideo='pv',
//     smartphones='ph'
// }

export enum CategoriesNameEnum {
    videoCameras='videoCameras',
    gameStations='gameStations',
    televisors='televisors',
    pads='pads',
    laptops='laptops',
    photoVideo='photoVideo',
    smartphones='smartphones'
}

export enum ProductEntityPropsRu {
    id = 'id',
    toCompare = 'toCompare',
    toBasket = 'toBasket',
    favorite = 'favorite',
    category = 'категория',
    producer = 'производитель',
    model = 'модель',
    price = 'цена',
    img = 'адрес картинки',
    count = 'количество',
    color = 'цвет',
    rom = 'память',
    ram = 'оперативная память',
    displayType = 'тип экрана',
    displaySize = 'размер экрана',
    CPU = 'процессор',
    GPU = 'графический процессор',
    mainCam = 'основная камера',
    frontCam = 'фронтальная камера',
    interfaces = 'интерфейсы',
    weight = 'вес',
    screenResolution = 'разрешение',
    aspectRatio = 'cоотношение сторон',
    matrixType = 'тип матрицы',
    videoRecordingQuality = 'качество записи видео',
    frameRate = 'частота кадров'
}

export type indexesOfProductEntityPropsRu = "id"|"category"|"producer"|"model"|"price"|"img"|"count"|"color"|"rom"|"ram"|"displayType"|"displaySize"|"CPU"| "GPU"
    | "mainCam"| "frontCam"| "interfaces"| "weight"| "screenResolution"| "aspectRatio"| "matrixType"| "videoRecordingQuality"| "frameRate"
    |"toCompare"|"toBasket"|"favorite"
//export type propNames = 'color'|'rom'|'ram'|'displayType'|'displaySize'|'rom'|'rom'|'rom'|'rom'|'rom'