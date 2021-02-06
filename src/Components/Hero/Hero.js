import React from 'react';
import { makeStyles, Typography, TextField, Button } from '@material-ui/core';
import bgImg from '../../Images/bg.jpg';
const useStyles = makeStyles({
  root: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.9)), url(${bgImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: 400,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  text: {
    background: 'white',
    margin: '10px',
  },

  title: {
    color: 'white',
    margin: '10px',
  },
  btnAndText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});
function Hero() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.textButton}>
        <Typography className={classes.title} variant="h5">
          Trouvez un business à Dakar
        </Typography>
        <form>
          <div className={classes.btnAndText}>
            <TextField type="text" className={classes.text} />
            <Button type="submit" color="secondary" variant="contained">
              Rechercher
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Hero;
