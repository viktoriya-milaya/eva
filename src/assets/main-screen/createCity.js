
import { API_KEY } from './constants';

const getApiData = async ({ latitude, longitude }) => {
  const getData = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
  const getDataJson = await getData.json();

  try {
    console.log(getDataJson.city.name);
  }
  catch {
    console.log('bel');
  }
};

export default getCity;






// async function getApiData() {
//   const getData = await fetch(`http://ip-api.com/batch`);
//   const getDataJson = await getData.json();
//   try {
//     console.log(getDataJson);
//   }
//   catch {
//     console.log(bel);
//   }
// };

// export default getApiData;
