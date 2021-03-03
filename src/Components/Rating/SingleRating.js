import { Avatar, makeStyles, Paper, Typography } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import RatingDisplay from '../Rating/RatingDisplay';
import React from 'react';
const useStyles = makeStyles({
  root: {
    width: '200px',
    height: '200px',
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  orange: {
    background: 'orange',
  },
});
function SingleRating() {
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={3}>
      <Avatar className={classes.orange}>N</Avatar>
      <Typography variant="body2">J'ai bien aimé le border</Typography>
      <RatingDisplay />
    </Paper>
  );
}

export default SingleRating;
