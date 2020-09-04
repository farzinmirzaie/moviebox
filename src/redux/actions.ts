import { SEARCH_MOVIES, GET_MOVIE_DETAILS } from "./constants";
import { IActionSearch, IActionDetails } from "./types";

const search = (query: string): IActionSearch => {
  return {
    type: SEARCH_MOVIES,
    payload: query,
  };
};

const details = (id: number): IActionDetails => {
  return {
    type: GET_MOVIE_DETAILS,
    payload: id,
  };
};

export default {
  search,
  details,
};
