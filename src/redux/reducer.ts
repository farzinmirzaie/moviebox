import { SEARCH_MOVIES, GET_MOVIE_DETAILS } from "./constants";
import { IState, IActions } from "./types";

const initialState: IState = {
  movies: [],
  queries: [],
};

const reducer = (state: IState = initialState, action: IActions) => {
  switch (action.type) {
    case SEARCH_MOVIES:
      return { ...state };
    case GET_MOVIE_DETAILS:
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
