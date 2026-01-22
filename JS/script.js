// Hamberger 

const hamburger  = document.querySelector('.hamburger');
const navbar = document.querySelector('.nav-menu');


hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');
})

document.querySelectorAll('.menu-item')
.forEach(item => item.addEventListener('click', ()=> {
    hamburger.classList.remove('active');
    navbar.classList.remove('active');
}));
    
