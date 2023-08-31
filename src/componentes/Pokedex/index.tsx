import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import "./style.css";
import BoxPokemonSearch from "../BoxPokemonSearch";
import TrocarPokemon from "../TrocarPokemon";
import BoxPokemonText from "../BoxPokemonText";
import BoxPokemonButton from '../boxPokemonButton';
import BoxPokemonImg from '../boxPokemonImg';


interface Pokemon {
  id: number;
  name: string;
  category: string;
  image_url: string;
  background_image_url: string;
  created_at?: number;
}

export function Pokedex() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://dev-api-teste.mandarin.com.br/pokemons');
        const data: Pokemon[] = response.data;

        setPokemonList(data);

        const firePokemon = data.filter(pokemon => pokemon.category === "Fire");
        setFilteredPokemonList(firePokemon);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="card-pokedex">
      {filteredPokemonList.map(pokemon => (
        <div key={pokemon.id}>
          <BoxPokemonSearch alterarPokemon={TrocarPokemon}/>
          <TrocarPokemon />
          <BoxPokemonImg background_image_url={pokemon.background_image_url} image_url={pokemon.image_url}/>
          <BoxPokemonText name={pokemon.name} category={pokemon.category} />
          <BoxPokemonButton />
        </div>
      ))}
    </div>
  );
}

export default Pokedex;
