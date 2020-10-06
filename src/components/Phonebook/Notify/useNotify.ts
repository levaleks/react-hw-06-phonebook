import { useEffect, useState } from 'react';

export type UseNotify = { isShowing: boolean; show: () => void };

export const useNotify = (): UseNotify => {
    const [isShowing, setIsShowing] = useState(false);

    const show = (): void => {
        setIsShowing(true);
    };

    useEffect(() => {
        let timer = 0;

        if (isShowing) {
            timer = setTimeout(() => {
                setIsShowing(false);
            }, 3000);
        }

        return (): void => {
            clearTimeout(timer);
        };
    }, [isShowing]);

    return {
        isShowing,
        show,
    };
};
