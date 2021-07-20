import React from 'react'
import { Grid, Card, CardContent, Typography } from '@material-ui/core'
import CountUp from 'react-countup'
import CardComponent from './Card/Card'
import styles from './Container.module.css'

const CardContainer = ({ worldStats: { confirmed, recovered, deaths, lastUpdate }}) => {
  
  if (!confirmed) return <p>Loading ...</p>
  console.log(confirmed);

  return (
    <div>
      <Card className={styles.container}>
        <Grid container spacin={3} justifyContent="center">
          <Grid item component={Card}>
            <CardContent>
              <Typography gutterBottom color="textSecondary">Infected</Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={confirmed.value}
                  duration={2.5}
                  separator="."
                />
              </Typography>
              <Typography color="textSecondary">{ new Date(lastUpdate).toDateString() }</Typography>
              <Typography variant="body2" color="textSecondary">Number of active cases of COVID-19</Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </div>
  )
}

export default CardContainer
