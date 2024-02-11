$('.slider-single').slick({
    slidesToShow: 4,
    // slidesToScroll: 4,
    arrows: false,
    dots:false,
    fade: false,
    adaptiveHeight: true,
    infinite: true,
    useTransform: true,
    speed: 400,
    autoplay:true,
    swipeToSlide: true,
    cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
    responsive: [{
      breakpoint: 1024,
      settings: {
        arrows:false,
        slidesToShow: 3,
        // slidesToScroll: 5,
        autoplay:true,
      }
    }]
  });
$('.slider-single-2').slick({
    slidesToShow: 4,
    // slidesToScroll: 4,
    arrows: false,
    dots:false,
    fade: false,
    adaptiveHeight: true,
    infinite: true,
    speed: 400,
    autoplay:true,
    swipeToSlide: true,
    useTransform: true,
  cssEase: 'linear',
    cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
    responsive: [{
      breakpoint: 1024,
      settings: {
        arrows:false,
        slidesToShow: 3,
        // slidesToScroll: 5,
        autoplay:true,
      }
    }]
  });





  const menuEl = document.querySelector(".menu");
const menutextEl = document.querySelector(".menu p");
const sociallistEl = document.querySelector(".social-list");
const liELs = document.querySelectorAll(".social-list li");

menuEl.addEventListener("click", () => {
    sociallistEl.classList.toggle("hide");
    menuEl.classList.toggle("rotate");
});

liELs.forEach((liEl) => {
    liEl.addEventListener("click", () => {
        menutextEl.innerHTML = liEl.innerHTML;
        sociallistEl.classList.add("hide");
        menuEl.classList.toggle("rotate");
    })
})
