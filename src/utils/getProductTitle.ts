import {CategoriesNameEnum} from "../types/Enums";

const relationCatTitle = {
    videoCameras:'Видеокамера',
    gameStations:'Игровая консоль',
    televisors:'Телевизор',
    pads:'Планшет',
    laptops:'Ноутбук',
    photoVideo:'Фотоаппарат',
    smartphones:'Смартфон'
}


export const getProductTitle = (catName:CategoriesNameEnum):string => {
    return relationCatTitle[catName]
}