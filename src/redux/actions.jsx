export const setMinutes = (minute) => {
  return (dispatch) => {
    dispatch({
      type: "SET_MINUTES",
      payload: minute,
    });
  };
};
export const setGameTime = (gameTime) => {
  return (dispatch) => {
    dispatch({
      type: "SET_GAME_TIME",
      payload: gameTime,
    });
  };
};
