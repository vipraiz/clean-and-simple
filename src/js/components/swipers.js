if (document.querySelector('.hero__swiper')) {
  const heroSwiper = new Swiper('.hero__swiper', {
    observer: true,
    observeParents: true,
    speed: 800,
    loop: true,
    parallax: true,
    pagination: {
      el: '.swiper-hero__dots',
      clickable: true,
    },
  });
}
