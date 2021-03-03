import { makeStyles, Chip, Container, Paper } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RatingDisplay from '../../Components/Rating/RatingDisplay';
import NoterModal from './NoterModal';
import styled from 'styled-components';
const useStyles = makeStyles({
  title: {
    fontSize: 50,
  },
});

const Header = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)),
    url('https://images.unsplash.com/photo-1519500528352-2d1460418d41?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

function SingleBusinessPage() {
  const { nom } = useParams();
  const classNamees = useStyles();
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div>
      <Header>
        <h2 classNameName={classNamees.title}>Chez Allou</h2>
        <div>
          <Chip label="coiffeur" />
          <p>Heures</p>
        </div>
        <RatingDisplay />
      </Header>
      <Container component={Paper}>
        <h2>Services Proposés</h2>
      </Container>
      <Container>
        <h2>Tous les avis</h2>
        <NoterModal />
      </Container>
    </div>
  );
}

export default SingleBusinessPage;
