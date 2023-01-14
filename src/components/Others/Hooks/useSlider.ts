import {useEffect, useRef, useState} from 'react';
import {ProductEntityClient} from "../../../types/Entities";

export function useSlider(favProds: ProductEntityClient[]) {


    const ref = useRef<HTMLDivElement | null>(null)
    const [stackSize,setStackSize] = useState(4)
    const maxXShift = -(favProds.length>stackSize? favProds.length - stackSize: 0) * 300
    const [XShift,setXShift] = useState(0)
    const [delay,setDelay] = useState(false)
    const setX = (num:number) => {
        if (delay) {
            return
        }
        setDelay(true)
        setTimeout (() => setDelay(false), 250)
        setXShift(prev => prev + num)
    }

    useEffect( () => {

            if (ref.current) {
                const width = ref.current?.getBoundingClientRect().width
                if (width >=1200) setStackSize(4)
                if (width >=900 && width <= 1199) setStackSize(3)
                if (width >=600 && width < 900) setStackSize(2)
                if (width >=300 && width < 600) setStackSize(1)
            }
        }
    )
    return {ref,maxXShift, XShift,setX}
}