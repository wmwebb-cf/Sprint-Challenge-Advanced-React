export const useDarker = (key) => {

    const body = document.querySelector('body');
    const btn = document.querySelector('button');
    //body.style.color = 'red';
    if(key === true){
        body.classList.add('dark-mode');
        btn.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
        btn.classList.remove('dark-mode');
    }

} 