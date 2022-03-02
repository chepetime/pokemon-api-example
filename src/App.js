import { useState } from "react";

import "./App.css";

import QueryPokemon from "./components/QueryPokemon";
import Loading from "./components/Loading";
import Error from "./components/Error";
import Pokemon from "./components/Pokemon";
import PageControl from "./components/PageControl";

function App() {
  const QUERY_LENGTH = 30;
  const [page, setPage] = useState(0);

  return (
    <div className="App">
      <PageControl page={page} setPage={setPage} />

      <QueryPokemon limit={QUERY_LENGTH} offset={QUERY_LENGTH * page}>
        {({ isLoading, error, data }) => {
          if (isLoading) return <Loading />;
          if (error) return <Error />;
          return data.results.map((pokemon, index) => (
            <Pokemon key={`pokemon-${index}`} {...pokemon} />
          ));
        }}
      </QueryPokemon>
    </div>
  );
}

export default App;
