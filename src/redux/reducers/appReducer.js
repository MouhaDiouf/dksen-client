const INITIAL_STATE = {};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'HELLO':
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default appReducer;
