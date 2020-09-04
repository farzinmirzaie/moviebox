import { SEARCH_MOVIES, GET_MOVIE_DETAILS } from "./constants";
import { IState, IActions } from "./types";

const initialState: IState = {
  movies: [],
  queries: [],
};

const reducer = (state: IState = initialState, action: IActions) => {
  const { type, payload, error } = action;

  console.log(action);

  switch (type) {
    case SEARCH_MOVIES:
      if (error) {
        // return { ...state, error };
      }
      // return { ...state, payload };
      return { ...state };
    case GET_MOVIE_DETAILS:
      if (error) {
        // return { ...state, error };
      }
      // return { ...state, payload };
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
