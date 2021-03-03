import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link as BrowserLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { inscriptionAction } from '../../redux/actions/userActions';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Typography component={BrowserLink} to="/" color="inherit">
        DakarSen
      </Typography>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const dispatch = useDispatch('');
  const classes = useStyles();
  const [prenom, setprenom] = useState('');
  const [nom, setnom] = useState('');
  const [email, setemail] = useState('');
  const [telephone, settelephone] = useState('');
  const [password, setpassword] = useState('');
  const { inscription_en_cours } = useSelector((state) => state.userReducer);
  const inscriptionHandler = (e) => {
    e.preventDefault();
    const user = {
      prenom,
      nom,
      email,
      telephone,
      password,
    };
    dispatch(inscriptionAction(user));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Inscription
        </Typography>
        <form className={classes.form} noValidate onSubmit={inscriptionHandler}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="Prénom"
                name="Prénom"
                variant="outlined"
                required
                fullWidth
                id="prénom"
                label="Prénom"
                autoFocus
                value={prenom}
                onChange={(e) => setprenom(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="nom"
                label="Nom"
                name="nom"
                autoComplete="nom"
                value={nom}
                onChange={(e) => setnom(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="téléphone"
                label="Téléphone"
                name="téléphone"
                autoComplete="téléphone"
                value={telephone}
                onChange={(e) => settelephone(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Mot de passe"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={inscription_en_cours}
          >
            S'inscrire
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Typography
                component={BrowserLink}
                to="/connexion"
                variant="body2"
              >
                Vous avez déjà un compte? Se connecter{' '}
              </Typography>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
