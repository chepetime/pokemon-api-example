import { useQuery } from "react-query";
import { fetchPokemon } from "./../services/pokemon";

export default function QueryPokemon({ offset = 0, limit = 20, children }) {
  const { isLoading, error, data } = useQuery(["pokemon", offset, limit], () =>
    fetchPokemon(offset, limit)
  );

  return typeof children === "function"
    ? children({ isLoading, error, data })
    : children || null;
}
