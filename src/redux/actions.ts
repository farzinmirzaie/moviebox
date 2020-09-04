import { SEARCH_MOVIES, GET_MOVIE_DETAILS } from "./constants";
import { IActionSearch, IActionDetails } from "./types";
import api from "../api";

const search = (query: string) => {
  return async (dispatch: (art0: IActionSearch) => IActionSearch) => {
    try {
      const response = await api.search(query);
      const json = await response.json();
      dispatch({
        type: SEARCH_MOVIES,
        payload: json,
      });
      return json.movies;
    } catch (error) {
      dispatch({
        type: SEARCH_MOVIES,
        error,
      });
    }
  };
};

const details = (id: string) => {
  return async (dispatch: (art0: IActionDetails) => IActionDetails) => {
    try {
      const response = await api.get(id);
      const json = await response.json();
      dispatch({
        type: GET_MOVIE_DETAILS,
        payload: json,
      });
      return json.movies;
    } catch (error) {
      dispatch({
        type: GET_MOVIE_DETAILS,
        error,
      });
    }
  };
};

export default {
  search,
  details,
};
