import { connexionApiHandler, inscriptionApiHandler } from './api/userApi';
export const INSCRIPTION_EN_COURS = 'INSCRIPTION_EN_COURS';

export const connexionAction = (user) => async (dispatch) => {
  const result = await connexionApiHandler(user);
  console.log(result);
};

export const inscriptionAction = (user) => async (dispatch) => {
  dispatch({
    type: INSCRIPTION_EN_COURS,
  });
  const data = await inscriptionApiHandler(user);
  console.log(data);
};
