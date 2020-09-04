import { ISearchResponse, IMovieResponse, IErrorResponse } from "../api/models";

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
  queries: [];
  movies: [];
}

export type IActions = IActionSearch | IActionDetails;
