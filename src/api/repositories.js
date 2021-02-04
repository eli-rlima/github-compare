import axios from "axios";

export const searchRepository = term => {
  return axios.get(`https://api.github.com/search/repositories?q=${term}`);
}
