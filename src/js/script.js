import { isWebp } from "./modules/functions.js";

function openMenuBurger() {

    const header = document.querySelector('.header');
    const burgerBtn = document.querySelector('.bugrerWrapper__menu-Btn');

    burgerBtn.addEventListener('click', () => {
        header.classList.toggle('open');
    });
}

openMenuBurger();

