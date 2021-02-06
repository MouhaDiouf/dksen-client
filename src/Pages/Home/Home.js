import { Typography, TextField, Container } from '@material-ui/core';
import React from 'react';
import Business from '../../Components/Business/Business';
import Hero from '../../Components/Hero/Hero';
import CategoriesSlider from '../../Components/CategoriesSlider/CategoriesSlider';

function Home() {
  return (
    <>
      <div>
        <Hero />

        <TextField />
      </div>
      <Container>
        <CategoriesSlider />
        <div>
          <h3>Dernières places ajoutées</h3>
          <Business />
        </div>
      </Container>
    </>
  );
}

export default Home;
