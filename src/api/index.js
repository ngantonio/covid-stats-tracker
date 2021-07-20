import axios from 'axios';

const urlBase = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
  let changeableUrl = urlBase;
  if (country) changeableUrl = `${urlBase}/countries/${country}`;

  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(urlBase);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};

/*// export const fetchDailyData = async () => {
//   try {
//     const { data } = await axios.get(`${urlBase}/daily`);

//     return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
//   } catch (error) {
//     return error;
//   }
// };

// Instead of Global, it fetches the daily data for the US
export const fetchDailyData = async () => {
    try {
      const { data } = await axios.get('https://api.covidtracking.com/v1/us/daily.json');
  
      return data.map(({ positive, recovered, death, dateChecked: date }) => ({ confirmed: positive, recovered, deaths: death, date }));
    } catch (error) {
      return error;
    }
  };

export const fetchCountries = async () => {
  try {
    const { data: { countries } } = await axios.get(`${urlBase}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    return error;
  }
};*/