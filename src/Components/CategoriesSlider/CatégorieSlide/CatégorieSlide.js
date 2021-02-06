import styled from 'styled-components';
import React from 'react';
import { Card } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
function CatégorieSlide({ nom, img }) {
  const history = useHistory();
  const Container = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(100, 20, 0, 0.5)),
      url(${img});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    cursor: pointer;
    margin: 0 5px;
  `;

  function checkCategory() {
    history.push(`/catégories/${nom}`);
  }
  return (
    <Card onClick={checkCategory}>
      <Container>
        <h3>{nom}</h3>
      </Container>
    </Card>
  );
}

export default CatégorieSlide;
