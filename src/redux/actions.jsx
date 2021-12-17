export const setMinutes = (minute) => {
  return (dispatch) => {
    dispatch({
      type: "SET_MINUTES",
      payload: minute,
    });
  };
};
