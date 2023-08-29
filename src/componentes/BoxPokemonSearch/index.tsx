import React, { useRef, useState, useEffect } from "react";
import axios from 'axios';
import "./style.css";

interface Pokemon {
  id: number;
  name: string;
  category: string;
  image_url: string;
  background_image_url: string;
  created_at?: number;
}

function BoxPokemonSearch() {
  const [open, setOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [selecNome, setSelectNome] = useState<string | null>(null);
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

  const handleDropDownFocus = (state: boolean) => {
    setOpen(!state);
  };

  const handleClickOutsideDropdown = (e: any) => {
    if (open && !dropdownRef.current?.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  const handleItemClick = (nome: string) => {
    setSelectNome(nome);
    setOpen(false);
  };

  window.addEventListener("click", handleClickOutsideDropdown);

  console.log(open);
  console.log(selecNome);

  return (
    <div className="box-search-text" ref={dropdownRef}>
      <button className="search-pokemons" onClick={(e) => handleDropDownFocus(open)}>Pokemon</button>
      {open && (
        <ul className="list-pokemons">
          {pokemonList.map((pokemon) => (
            <li key={pokemon.id} onClick={() => handleItemClick(pokemon.name)}>
              {pokemon.name}
            </li>
          ))}
        </ul>
      )}
      {selecNome && <p>Você clicou em: {selecNome}</p>}
    </div>
  );
}

export default BoxPokemonSearch;
