import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarker = (key) => {
    const [darkened, setDarkened] = useLocalStorage('darkened', key);
    useEffect(() => {
        const body = document.querySelector('body');
        if(darkened === true){
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    }, [darkened]
    )

    return [darkened, setDarkened];
}