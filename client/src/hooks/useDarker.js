export const useDarker = (key) => {

    const body = document.querySelector('body');
    //body.style.color = 'red';
    if(key === true){
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }

} 