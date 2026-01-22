const hamburger  = document.querySelector('.hamburger');
const navbar = document.querySelector('.nav-menu');


hamburger.addEventListener('click', ()=> {
    hamburger.classList.add('active');
    navbar.classList.add('active');
})