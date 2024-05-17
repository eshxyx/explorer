let btn=document.querySelector('.mobile-menu');
let menu=document.querySelector('.menu');

function changeDisplay(){
    menu.classList.toggle('active');
}

btn.addEventListener('click', changeDisplay);
