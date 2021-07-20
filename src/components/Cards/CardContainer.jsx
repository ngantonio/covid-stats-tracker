import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import CardComponent from './Card/CardComponent'
import styles from './Container.module.css'

const CardContainer = ({ worldStats: { confirmed, recovered, deaths, lastUpdate }}) => {
  
  if (!confirmed) return <p>Loading Stats...</p>

  return (
    <div className={styles.container}>
      <Typography gutterBottom variant="h4" component="h2">Global Stats</Typography>
      <Grid container spacin={3} justifyContent="center">
        
        <CardComponent
          title="Infected"
          confirmed={ confirmed.value }
          lastUpdate={ lastUpdate }
          description="Number of active cases from COVID-19."
          className={styles.infected}
        />

        <CardComponent
          title="Recovered"
          confirmed={ recovered.value }
          lastUpdate={ lastUpdate }
          description="Number of recoveries from COVID-19."
          className={styles.recovered}
        />

        <CardComponent
          title="Deaths"
          confirmed={ deaths.value }
          lastUpdate={ lastUpdate }
          description="Number of deaths caused by COVID-19."
          className={styles.deaths}
        />
        </Grid>
    </div>
  )
}

export default CardContainer
