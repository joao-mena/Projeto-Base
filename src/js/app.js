import * as flsFunctions from "./modules/functions.js";
import Swiper from "swiper";
import {
  Navigation,
  EffectFade,
  Pagination,
  Thumbs,
  Controller,
  FreeMode,
  Scrollbar,
  A11y,
  Mousewheel,
} from "swiper";

flsFunctions.isWebp();

const swiper = new Swiper(".auctions-slider", {
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1", // Enable arrows
  },
  modules: [Navigation, FreeMode], // Modules to be used
  autoHeight: true, // auto height
  speed: 500, // Slider scroll speed
  slidesPerView: 3, // The number of slides that will be visible
  spaceBetween: 42,
  freeMode: true,
  grabCursor: true,
});

const swiper2 = new Swiper(".popular-slider", {
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2", // Enable arrows
  },
  modules: [Navigation, FreeMode], // Modules to be used
  autoHeight: true, // auto height
  speed: 500, // Slider scroll speed
  slidesPerView: 2.5, // The number of slides that will be visible
  spaceBetween: 42,
  freeMode: true,
  grabCursor: true,
});

const swiper3 = new Swiper(".categories-slider", {
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3", // Enable arrows
  },
  modules: [Navigation, FreeMode], // Modules to be used
  autoHeight: true, // auto height
  speed: 500, // Slider scroll speed
  slidesPerView: 3, // The number of slides that will be visible
  spaceBetween: 42,
  freeMode: true,
  grabCursor: true,
});
