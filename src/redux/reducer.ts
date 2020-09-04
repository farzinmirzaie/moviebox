import { SEARCH_MOVIES, GET_MOVIE_DETAILS } from "./constants";
import { IState, IActions } from "./types";

const initialState: IState = {
  error: null,
  results: [],
  movies: [],
};

const reducer = (state: IState = initialState, action: IActions) => {
  const { type, payload, error } = action;

  switch (type) {
    case SEARCH_MOVIES:
      if (error) {
        return { ...state, error: error.Error };
      } else if (payload) {
        return { ...state, results: [...payload.Search] };
      }
    case GET_MOVIE_DETAILS:
      // if (error) {
      //   return { ...state, error: error.Error };
      // } else if (payload) {
      //   return { ...state, results: [...payload.Search] };
      // }
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
