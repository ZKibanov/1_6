const btnMore = document.querySelector('.brands__btn-more ');
let minimizer = document.querySelector('.brands-list_minimizer');
const mediaQueryList = window.matchMedia('(min-width: 768px)');
let mySwiper;
import Swiper, { Pagination } from 'swiper';
Swiper.use([Pagination]);
 btnMore.addEventListener('click', function () {
    btnMore.classList.toggle('btn-more_opened');
    minimizer.classList.toggle('brands-list_minimized');

    if (minimizer.classList.contains('brands-list_minimized')) {
        btnMore.textContent = 'Показать все';
    } else {
        btnMore.textContent = 'Скрыть';
    }
})

const enableSwiper = function() {
    mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 2,
        spaceBetween: 16,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    });
    mySwiper.init();  
}

let swiperRequest = function (a) {
    if (( a.matches ) && (mySwiper!==undefined)) {
        mySwiper.destroy(true, true);
        console.log('lkj;lkjl;k');
    } else if (a.matches) {
        console.log(mySwiper)
        return ;
    } else {
        enableSwiper();
    }
}

swiperRequest(mediaQueryList);

mediaQueryList.onchange = function (mediaQueryList) {
    swiperRequest(mediaQueryList);
}



