import {useEffect, useState} from 'react';

export function useViewMode() {


    const [isDesktop,setIsDesktop] = useState(true)

    const resizeListener = () => {
        if (window.innerWidth > 715 && localStorage.isDesktop === 'false') {
            localStorage.isDesktop = 'true'
            setIsDesktop(true)
        }
        if (window.innerWidth <= 715 && localStorage.isDesktop === 'true') {
            localStorage.isDesktop = 'false'
            setIsDesktop(false)
        }
    }
    useEffect(() => {
        window.innerWidth > 715 ? localStorage.isDesktop = 'true' : localStorage.isDesktop = 'false'
        window.addEventListener("resize", resizeListener)
        return () => window.removeEventListener('resize',resizeListener)
    },[])
    return isDesktop
}