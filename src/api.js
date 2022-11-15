import cities from './__mocks__/api/citiesList';
import forecast from './__mocks__/api/forecasts';

export const fetchCities = async () => {
  return new Promise((resolve) => {
    resolve(cities);
  })
}

// TODO: Bonues: change the code to handle cases in which the city key doesn't exist in the forecast data.
export const fetchCityForecast = async (key) => {
console.log(key)
   return new Promise((resolve, reject) => {
    if (forecast.hasOwnProperty(key)) {
      resolve(forecast[key]);
    }else {
      resolve(null)
    }
  });
}

