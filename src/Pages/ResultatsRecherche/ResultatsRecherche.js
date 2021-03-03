import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Spinner from '../../Images/spinner.svg';
const useStyles = makeStyles({
  spinner: {
    width: '50px',
    height: '50px',
  },
});
function ResultatsRecherche() {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h2">Résultats de recherche</Typography>
      <img src={Spinner} className={classes.spinner} alt="Chargement" />
    </div>
  );
}

export default ResultatsRecherche;
