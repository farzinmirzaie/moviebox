import { API_KEY } from "../../.env";
const BASE_URL = "http://www.omdbapi.com/?apikey=" + API_KEY;

const search = (query: string): Promise<Response> => {
  return fetch(BASE_URL + "&s=" + query);
};

const get = (id: string): Promise<Response> => {
  return fetch(BASE_URL + "&i=" + id);
};

export default { search, get };
