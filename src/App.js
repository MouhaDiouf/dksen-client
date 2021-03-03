import { Container, Typography } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import CatégoriePage from './Pages/CatégoriePage/CatégoriePage';
import Connexion from './Pages/Connexion/Connexion';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import SingleBusinessPage from './Pages/SingleBusinessPage/SingleBusinessPage';
import Inscription from './Pages/Inscription/Inscription';
import MotdePasseOublié from './Pages/MotDePasseOublié/MotdePasseOublié';
import NouveauMotDePasse from './Pages/NouveauMotDePasse/NouveauMotDePasse';
import ResultatsRecherche from './Pages/ResultatsRecherche/ResultatsRecherche';
import Footer from './Components/Footer/Footer';
import { ColorProvider, ColorContext, ThemeContext } from './Context';
import { useContext } from 'react';

function App() {
  const ThemeContext = useContext(ColorContext);
  console.log('xxxxxxxxxxxxxxxxxxxxx ', ThemeContext);
  return (
    <ColorProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/place/:nom">
            <SingleBusinessPage />
          </Route>
          <Route exact path="/catégories/:categorie">
            <CatégoriePage />
          </Route>
          <Route exact path="/connexion">
            <Connexion />
          </Route>
          <Route exact path="/inscription">
            <Inscription />
          </Route>
          <Route exact path="/mot-de-passe-oublié">
            <MotdePasseOublié />
          </Route>
          <Route exact path="/nouveau-mot-de-passe">
            <NouveauMotDePasse />
          </Route>
          <Route exact path="/rechercher/:recherche">
            <ResultatsRecherche />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </ColorProvider>
  );
}

export default App;
