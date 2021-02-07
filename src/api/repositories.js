import axios from "axios";

export const search = async term => {
  const hasUser = term.includes('/');
  const splitedTerm = hasUser ? term.split('/') : [];
  const queryString = hasUser ? `${term}+user:${splitedTerm[0]}` : term;

  const { data } = await axios.get(`https://api.github.com/search/repositories?q=${queryString}`)

  return data;
}
