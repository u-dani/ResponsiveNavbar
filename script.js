
const navbar = document.querySelector('.js-navbar');
const menu = document.querySelector('.js-icon-menu');

menu.addEventListener('click', toggleMenu);


function toggleMenu() {
    menu.classList.toggle('active');
    navbar.style.display == 'block'
        ? navbar.style.display = 'none'
        : navbar.style.display = 'block'
}


window.onresize = () => {

    const size = document.body.getBoundingClientRect().width;
    if (size <= 650) {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'block';
        menu.classList.remove('active');
    }
}