const INITIAL_STATE = {
  businesses: [],
};

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
