import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import SingleRating from '../Rating/SingleRating';
const useStyles = makeStyles({
  inner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
function DernièresRevues() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography>Dernières Revues</Typography>

      <div className={classes.inner}>
        <SingleRating />
        <SingleRating />
        <SingleRating />
        <SingleRating />
        <SingleRating />
      </div>
    </div>
  );
}

export default DernièresRevues;
