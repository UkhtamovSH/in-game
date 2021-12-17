const INITIAL_STATE = {
  minutes: 0,
  gameActive: false,
};

const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_MINUTES":
      return {
        ...state,
        minutes: action.payload,
        gameActive: true,
      };
    default:
      return state;
  }
};

export default reducers;
