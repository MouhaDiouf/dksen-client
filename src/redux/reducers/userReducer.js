const INITIAL_STATE = {};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'HELLO':
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default userReducer;
