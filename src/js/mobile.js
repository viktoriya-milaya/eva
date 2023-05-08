
const showMobileMenu = () => {

  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.mobile-nav');

  const addClassVisible = () => mobileMenu.classList.toggle('mobile-nav_visible');
  const removeClassVisible = () => mobileMenu.classList.remove('mobile-nav_visible');;
  const getViewport = () => window.innerWidth;


  burger.addEventListener(`click`, addClassVisible);


  window.addEventListener('resize', () => {
    getViewport();

    if (getViewport() > 1020) {
      removeClassVisible();
    }
  });

};


export default showMobileMenu;

