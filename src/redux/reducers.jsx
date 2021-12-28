const INITIAL_STATE = {
  minutes: 0,
  gameTime: 0,
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
    case "SET_GAME_TIME":
      return {
        ...state,
        gameTime: action.payload,
      };
    default:
      return state;
  }
};

export default reducers;
