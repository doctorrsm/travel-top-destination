import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'

const swiper = new Swiper('.services__cards', {
    slidesPerView: 'auto',
    spaceBetween: 21,
    pagination: true,
})

const destinationSlider = new Swiper('.destination__slider', {
    slidesPerView: 3,
    loop: true,
    navigation: {
        nextEl: '.destination__slider-button-next',
        prevEl: '.destination__slider-button-prev',
    },
    spaceBetween: 31,
})

const testimonialsSlider = new Swiper('.clients-slider', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.clients-slider__button-next',
        prevEl: '.clients-slider__button-prev',
    },
    pagination: {
        el: '.clients-slider__pagination',
        clickable: true
    },
})