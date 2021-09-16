import { useHookWithRefCallback } from 'src/hooks/useHookWithRefCallback.js';
import { init } from 'src/lib/threejs/planeRender.js';

const style = {
    container: {
        width: '800px',
        height: '600px',
    },
};

export const Airplane = () => {
    const ref = useHookWithRefCallback(init);

    return (
        <div ref={ref} style={style.container} />
    )
};
