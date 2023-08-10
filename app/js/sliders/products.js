import Swiper, {Autoplay} from "swiper";

export const ProductsSlider = () => {
if(window.matchMedia("(min-width:800px)").matches){
  const slider = new Swiper(`.section-products`, {
    modules: [Autoplay],
    wrapperClass: `section-box`,
    slideClass: `section-box__content`,
    slideActiveClass: `section-box__content--active`,
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    breakpoints:{
      800: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      1000: {
        slidesPerView: 3,
      },
      1300: {
        slidesPerView: 3.5,
      }
    },
    autoplay: {
        delay: 1000
    }
    
  });
};
}

