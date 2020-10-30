const header__menubtn = document.querySelector('.header__menu-btn');
const burger__menu = document.querySelector('.sidebar-menu-body');
const button__close = document.querySelector('.sidebar-menu-btn');
const sidebar__menu__blur = document.querySelector('.sidebar-menu--blur');
header__menubtn.addEventListener('click', function (){
burger__menu.classList.remove('sidebar-menu-body--hidden');
sidebar__menu__blur.classList.add('visible');
});

button__close.addEventListener('click',function(){
burger__menu.classList.toggle('sidebar-menu-body--hidden');
sidebar__menu__blur.classList.remove('visible');
});

const closeSidebar = function () {
    let sidebar__menu__blurVisible;
    sidebar__menu__blurVisible = document.querySelector('.visible');
    if (sidebar__menu__blurVisible !== null){
    sidebar__menu__blurVisible.addEventListener('click',function(){
    if (sidebar__menu__blur.classList.contains('visible')){
    sidebar__menu__blur.classList.remove('visible')
    console.log(sidebar__menu__blurVisible)
    burger__menu.classList.add('sidebar-menu-body--hidden');
}
});
}
}
