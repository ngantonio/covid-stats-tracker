import { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchCountries } from '../../api'

import styles from './Selector.module.css';

const Selector = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      setCountries(await fetchCountries());
    };

    getCountries();
  }, []);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="global">Global</option>
        {countries.map((country, index) => (
          <option key={index} value={country}>{country}</option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default Selector;