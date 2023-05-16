
import getApiData from './api';
import showMobileMenu from './mobile';
import showForm  from './modal';
import sendRequest from './form';

// import createProductsList from './products';



document.addEventListener('DOMContentLoaded', () => {

  window.navigator?.geolocation.getCurrentPosition(({ coords }) => getApiData(coords));
  showMobileMenu();
  showForm ();
  sendRequest();

  // createProductsList();
});
