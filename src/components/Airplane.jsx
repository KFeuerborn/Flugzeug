import { useLayoutEffect, useRef, useState } from 'react';
import { init } from 'src/lib/threejs/planeRender.js';

const style = {
    container: {
        width: '800px',
        height: '600px',
    },
};

export const Airplane = () => {
    const ref = useRef();

    useLayoutEffect(() => {
        const node = ref.current;
        init(node);
        return () => node.textContent = '';
    }, [])

    return (
        <div>
            <div ref={ref} style={style.container} />
        </div>
    )
};
