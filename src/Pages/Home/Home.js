import {
  Typography,
  TextField,
  Container,
  makeStyles,
} from '@material-ui/core';
import React from 'react';
import Business from '../../Components/Business/Business';
import Hero from '../../Components/Hero/Hero';
import CategoriesSlider from '../../Components/CategoriesSlider/CategoriesSlider';
import DernièresRevues from '../../Components/DernièresRevues/DernièresRevues';
const useStyles = makeStyles({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});
function Home() {
  const classes = useStyles();
  return (
    <>
      <div>
        <Hero />

        <TextField />
      </div>
      <Container>
        <CategoriesSlider />
        <Container>
          <h3>Dernières places ajoutées</h3>
          <div className={classes.inner}>
            <Business />
            <Business />
            <Business />
            <Business />
            <Business />
          </div>
        </Container>
        <div>
          <Typography variant="h5">Découverte</Typography>
        </div>
        <div>
          <Typography variant="h5">Favoris</Typography>
        </div>
        <DernièresRevues />
      </Container>
    </>
  );
}

export default Home;
