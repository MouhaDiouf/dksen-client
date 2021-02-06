import React from 'react';
import { useParams } from 'react-router-dom';

function CatégoriePage() {
  const { categorie } = useParams();

  return (
    <div>
      <h1>Catégorie {categorie}</h1>
    </div>
  );
}

export default CatégoriePage;
