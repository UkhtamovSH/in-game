import { LOADING } from "./type";

const INITIAL_STATE = {
  loading: false,
};

const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
};

export default reducers;
