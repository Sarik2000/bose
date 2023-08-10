import Swiper, {Navigation} from "swiper";

export const NewsSlider = () => {
  const slider = new Swiper(`.slideshow-products`, {
    modules: [Navigation],
    wrapperClass: `slideshow-slider`,
    slideClass: `slideshow-aggregate`,
    slideActiveClass: `slideshow-aggregate--active`,
    speed: 1000,
    spaceBetween: 30,
    slidesPerView: 2,
    breakpoints: {
      600: {
        slidesPerView: 3,
      },
      900:{
        slidesPerView: 4,
      },
      1600: {
        slidesPerView: 5,
      }

    },
    navigation: {
      enabled: true,
      nextEl: ".slideshow-button__next",
      prevEl: ".slideshow-button__prev",
    }
  });
};


