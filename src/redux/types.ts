export interface IActionSearch {
  type: string;
  payload: string;
}

export interface IActionDetails {
  type: string;
  payload: number;
}

export type IActions = IActionSearch | IActionDetails;

export interface IState {
  queries: [];
  movies: [];
}
