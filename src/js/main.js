document.querySelectorAll('.burger').forEach((el) => {
  el.addEventListener('click', (e) => {
    document.body.classList.toggle('_lock');
    e.currentTarget.classList.toggle('_active');
    document.querySelector('.header__nav').classList.toggle('_active');
  });
});

document.querySelector('.footer__up-btn').addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo(0, 0);
});
