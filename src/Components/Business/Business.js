import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import RatingDisplay from '../Rating/RatingDisplay';
const useStyles = makeStyles({
  root: {
    maxWidth: 250,
  },
});

export default function ImgMediaCard() {
  const history = useHistory();
  const classes = useStyles();
  function checkBusiness() {
    history.push('/place/chez-allou');
  }

  return (
    <Card className={classes.root} onClick={checkBusiness}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://images.unsplash.com/photo-1519500528352-2d1460418d41?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Chez Alou
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Salon de coiffure et de massage
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <RatingDisplay />
        <Button
          size="small"
          color="primary"
          component={Link}
          to="/place/chez-allou"
        >
          Voir
        </Button>
      </CardActions>
    </Card>
  );
}
