import React,{ useEffect, useState } from 'react';
import { CardContainer, Chart, CountrySelector } from './components'
import { fetchData } from './api'

import styles from './App.module.css'

const App = () => {

  const [stats, setStats] = useState({
    country: '',
    statsObject: {}
  })


  const getWorldStats = async () => {
    const data = await fetchData();
    setStats({country:'global', statsObject:data})
  };

  useEffect(() => {
    getWorldStats()
  }, [])

  const handleCountryChange = async (country) => {
    // get stats data for the country selected
    const countryStats = await fetchData(country);
    // set selected country
    setStats({country, statsObject:countryStats})
  };
  
  

  return (
    <div className={styles.container}>
      <CardContainer stats={stats.statsObject} />
      <CountrySelector handleCountryChange={handleCountryChange} />
      <Chart stats={stats.statsObject} country={ stats.country }/> 
     
      
    </div>
  );
}
export default App;
