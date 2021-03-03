import { INSCRIPTION_EN_COURS } from '../actions/userActions';

const INITIAL_STATE = {};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INSCRIPTION_EN_COURS:
      return {
        ...state,
        inscription_en_cours: true,
      };

    default:
      return state;
  }
};

export default userReducer;
