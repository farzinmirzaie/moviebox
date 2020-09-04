import { API_KEY } from "../../.env";
const BASE_URL = "http://www.omdbapi.com/?apikey=" + API_KEY;

const search = (query: string, page: number): Promise<Response> =>
  fetch(BASE_URL + "&s=" + query + "&page=" + (page || 1));

const get = (id: string): Promise<Response> => fetch(BASE_URL + "&i=" + id);

export default { search, get };
