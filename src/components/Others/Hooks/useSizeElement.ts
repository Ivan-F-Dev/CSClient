import { useLayoutEffect, useState } from 'react';

export function useSizeElement(elem:HTMLDivElement | null) {



    const [size, setSize] = useState<DOMRect | undefined>(undefined);

    useLayoutEffect(() => {

            function updateSize() {
                setSize(elem?.getBoundingClientRect());
            }
            window.addEventListener('resize', updateSize);
            updateSize();
            return () => window.removeEventListener('resize', updateSize);


    }, []);

    return size;
}