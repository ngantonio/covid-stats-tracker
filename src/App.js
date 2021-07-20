import React,{ useEffect, useState } from 'react';
import { CardContainer, Chart, CountrySelector } from './components'
import { fetchData } from './api'

import styles from './App.module.css'

const App = () => {

  const [worldStats, setWorldStats] = useState({})

  const getWorldStats = async () => {
    const data = await fetchData();
    setWorldStats(data)
  };

  useEffect(() => {
    getWorldStats()
  }, [])

  return (
    <div className={styles.container}>
      <CardContainer worldStats={ worldStats }/>
      <CountrySelector />
      <Chart />
    </div>
  );
}

export default App;
