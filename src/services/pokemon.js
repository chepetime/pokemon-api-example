import axios from "axios";

const POKEMON_API = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  timeout: 5000,
});

export const fetchPokemon = async (offset = 0, limit = 20) => {
  return await POKEMON_API.get(`pokemon?offset=${offset}&limit=${limit}`).then(
    (res) => res.data
  );
};

const api = { fetchPokemon };

export default api;
