import { Container } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function CatégoriePage() {
  const { categorie } = useParams();
  const CatégorieHero = styled.div`
    width: 100%;
    height: 300px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(100, 20, 0, 0.5)),
      url('https://images.unsplash.com/photo-1503507739298-dce173d09653?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1499&q=80');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 250px;
  `;

  return (
    <Container>
      <CatégorieHero>
        <h1>{categorie}</h1>
      </CatégorieHero>
      <div>
        <h2>Liste des places disponibles</h2>
      </div>
    </Container>
  );
}

export default CatégoriePage;
