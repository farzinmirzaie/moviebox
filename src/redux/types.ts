import {
  ISearchResponse,
  IMovieResponse,
  IErrorResponse,
  Item,
} from "../api/models";

export interface IActionSearch {
  type: string;
  payload?: ISearchResponse;
  error?: IErrorResponse;
}

export interface IActionDetails {
  type: string;
  payload?: IMovieResponse;
  error?: IErrorResponse;
}

export interface IState {
  error: string | null;
  results: Item[];
  movies: [];
}

export type IActions = IActionSearch | IActionDetails;
