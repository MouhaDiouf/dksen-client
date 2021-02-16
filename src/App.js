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

function App() {
  return (
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
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
