const bar1 = document.getElementById('bar1');
const close3 = document.getElementById('close3');
const nav = document.getElementById('navbar');

if (bar1) {
    bar1.addEventListener('click',() => {
        nav.classList.add('active'); 
    })
}

if (close3) {
   close3.addEventListener('click',() => {
        nav.classList.remove('active'); 
    })
}



