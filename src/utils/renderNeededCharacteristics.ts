import {ProductEntity} from "../types/Entities";
import {ProductEntityPropsRu} from "../types/Enums";

type arrElem = {
    name: ProductEntityPropsRu
    value: string
}

export const renderNeededCharacteristics = (product: ProductEntity):Array<arrElem> => {

    const arrExistingProps = [{name:ProductEntityPropsRu.color,value:product.color}] as Array<arrElem>

    if (product.rom) arrExistingProps.push({name: ProductEntityPropsRu['rom'], value: product.rom})
    if (product.ram) arrExistingProps.push({name: ProductEntityPropsRu['ram'], value: product.ram})
    if (product.displayType) arrExistingProps.push({name: ProductEntityPropsRu['displayType'], value: product.displayType})
    if (product.displaySize) arrExistingProps.push({name: ProductEntityPropsRu['displaySize'], value: product.displaySize})
    if (product.CPU) arrExistingProps.push({name: ProductEntityPropsRu['CPU'], value: product.CPU})
    if (product.GPU) arrExistingProps.push({name: ProductEntityPropsRu['GPU'], value: product.GPU})
    if (product.mainCam) arrExistingProps.push({name: ProductEntityPropsRu['mainCam'], value: product.mainCam})
    if (product.frontCam) arrExistingProps.push({name: ProductEntityPropsRu['frontCam'], value: product.frontCam})
    if (product.interfaces) arrExistingProps.push({name: ProductEntityPropsRu['interfaces'], value: product.interfaces})
    if (product.weight) arrExistingProps.push({name: ProductEntityPropsRu['weight'], value: product.weight})
    if (product.screenResolution) arrExistingProps.push({name: ProductEntityPropsRu['screenResolution'], value: product.screenResolution})
    if (product.aspectRatio) arrExistingProps.push({name: ProductEntityPropsRu['aspectRatio'], value: product.aspectRatio})
    if (product.matrixType) arrExistingProps.push({name: ProductEntityPropsRu['matrixType'], value: product.matrixType})
    if (product.videoRecordingQuality) arrExistingProps.push({name: ProductEntityPropsRu['videoRecordingQuality'], value: product.videoRecordingQuality})
    if (product.frameRate) arrExistingProps.push({name: ProductEntityPropsRu['frameRate'], value: product.frameRate})

    return arrExistingProps

}