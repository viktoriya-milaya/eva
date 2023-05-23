
import getApiData from './api';
import showMobileMenu from './mobile';
import showForm  from './modal';
import createProductsList from './products';
import showSlider from './slider';
import sendRequest from './form';

document.addEventListener('DOMContentLoaded', () => {

  window.navigator?.geolocation.getCurrentPosition(({ coords }) => getApiData(coords));
  
  showMobileMenu();
  showForm ();
  createProductsList();
  showSlider();
  sendRequest();
  });
