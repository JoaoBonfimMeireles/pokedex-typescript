import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import BoxPokemonSearch from '../BoxPokemonSearch';

interface Pokemon {
  id: number;
  name: string;
  category: string;
  image_url: string;
  background_image_url: string;
  created_at?: number;
}

export function PokemonList() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://dev-api-teste.mandarin.com.br/pokemons');
        const data: Pokemon[] = response.data;

        setPokemonList(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="pokemon-list">
      {pokemonList.map((pokemon) => (
        <div key={pokemon.id}>
        </div>
      ))}
    </div>
  );
}
