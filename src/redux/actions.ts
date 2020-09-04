import { CLEAR_RESULTS, SEARCH_MOVIES, GET_MOVIE_DETAILS } from "./constants";
import { IActionClear, IActionSearch, IActionDetails } from "./types";
import api from "../api";

const clear = (): IActionClear => {
  return {
    type: CLEAR_RESULTS,
  };
};

const search = (query: string, page: number) => {
  return async (dispatch: (art0: IActionSearch) => IActionSearch) => {
    try {
      const response = await api.search(query, page);
      const json = await response.json();
      dispatch({
        type: SEARCH_MOVIES,
        payload: json,
      });
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
    } catch (error) {
      dispatch({
        type: GET_MOVIE_DETAILS,
        error,
      });
    }
  };
};

export default {
  clear,
  search,
  details,
};
