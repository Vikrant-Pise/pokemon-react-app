
import { useEffect, useState } from 'react';
import PokemonCard from './components/PokemonCard';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
      const data = await res.json();
      const detailedData = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          return await res.json();
        })
      );
      setPokemonList(detailedData);
      setFilteredList(detailedData);
    };
    fetchPokemon();
  }, []);

  const handleSearch = (query) => {
    const filtered = pokemonList.filter(p =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredList(filtered);
  };

  return (
    <div className="app-container">
      <h1>Pokemon Search By Vikrant Pise</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="card-container">
        {filteredList.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default App;
