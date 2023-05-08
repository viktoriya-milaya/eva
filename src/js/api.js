
import { API_KEY } from './constants';
import { createCity, createCountry } from './city';


const getApiData = async ({ latitude, longitude }) => {
  try {
    const getData = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    const getDataJson = await getData.json();
    createCity(getDataJson.city);
  }

  catch {
    createCountry()
  }

};

export default getApiData;


