import { DEFAULT_COUNTRY } from './constants';

const nodeListCity = document.querySelectorAll('.city');


export const createCity = (city) => {
  
  const { name, country } = city;

   nodeListCity.forEach((e) => e.innerHTML = `${name} ${country}`);
  
};

export const createCountry = nodeListCity.forEach((e) => e.innerHTML = `${DEFAULT_COUNTRY}`);



