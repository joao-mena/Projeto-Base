import * as header from "./modules/header.js";
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
header.header();

const swiper = new Swiper(".slider", {
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
