const header__menubtn = document.querySelector('.header__menu-btn');
const burger__menu = document.querySelector('.sidebar-menu-body');
const button__close = document.querySelector('.sidebar-menu-btn');
header__menubtn.addEventListener('click', function (){
burger__menu.classList.toggle('sidebar-menu-body--hidden');
});
button__close.addEventListener('click',function(){
burger__menu.classList.toggle('sidebar-menu-body--hidden');
});
