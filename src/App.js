import React,{ useEffect, useState } from 'react';
import { CardContainer, Chart, CountrySelector } from './components'
import { fetchData } from './api'

import styles from './App.module.css'
import image from './assets/app_logo.png'

const App = () => {

  const [stats, setStats] = useState({
    country: 'global',
    statsObject: {}
  })


  const getWorldStats = async () => {
    const data = await fetchData(stats.country);
    setStats({country:'global', statsObject:data})
  };

  useEffect(() => {
    getWorldStats()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleCountryChange = async (country) => {
    // get stats data for the country selected
    const countryStats = await fetchData(country);
    // set selected country
    setStats({country, statsObject:countryStats})
  };
  
  

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="covid stats"/>
      <CardContainer stats={stats.statsObject} />
      <CountrySelector handleCountryChange={handleCountryChange} />
      <Chart stats={stats.statsObject} country={ stats.country }/> 
     
      
    </div>
  );
}
export default App;
