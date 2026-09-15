const menuButtonOpen = document.querySelector('.menu-open');
const menuButtonClose = document.querySelector('.menu-close');
const menuList = document.querySelector('.menu-list');
const hero = document.querySelector('.hero');

menuButtonOpen.addEventListener('click', () =>{
    menuButtonOpen.classList.toggle('menu-open-active');
    menuButtonClose.classList.toggle('menu-close-active');
    menuList.classList.toggle('menu-list-active');
    hero.classList.toggle('hero-active');
});

menuButtonClose.addEventListener('click',() => {
    menuButtonClose.classList.remove('menu-close-active');
    menuButtonOpen.classList.remove('menu-open-active');
    menuList.classList.remove('menu-list-active');
    hero.classList.remove('hero-active');
});