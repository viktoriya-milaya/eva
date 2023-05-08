
import getApiData from './api';
import showMobileMenu from './mobile';
import showModal from './modal';

document.addEventListener('DOMContentLoaded', () => {

  window.navigator?.geolocation.getCurrentPosition(({ coords }) => getApiData(coords));
  showMobileMenu();
  showModal();
  
});
