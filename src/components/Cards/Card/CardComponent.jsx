import React from 'react'
import { Grid, Card, CardContent, Typography } from '@material-ui/core'
import CountUp from 'react-countup'
import styles from './Card.module.css'
import cx from 'classnames';

const CardComponent = ({title, confirmed, lastUpdate, description, className}) => {
  return (
    <Grid item xs={12} md={3} lg component={Card} className={cx(styles.card, className)}>
      <CardContent>
        <Typography gutterBottom color="textSecondary">{title}</Typography>
          <Typography variant="h5">
            <CountUp
            start={0}
            end={confirmed}
            duration={2.5}
            separator="."
            />
          </Typography>
          <Typography color="textSecondary">{ new Date(lastUpdate).toDateString() }</Typography>
          <Typography variant="body2" color="textSecondary">{description}</Typography>
      </CardContent>
    </Grid>
  )
}

export default CardComponent
