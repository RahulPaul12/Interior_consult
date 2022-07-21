const humburger=document.querySelector('.humburger');
const navmenu= document.querySelector('.nav-menu');
humburger.addEventListener('click',mobilemenu)
function mobilemenu(){
    humburger.classList.toggle('active');
    navmenu.classList.toggle('active');

    
}