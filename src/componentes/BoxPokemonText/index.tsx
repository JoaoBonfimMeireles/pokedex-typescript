import React from "react";
import "./style.css";

interface BoxPokemonTextProps {
  name: string;
  category: string;
}

export function BoxPokemonText(props: BoxPokemonTextProps) {
  return (
    <div className="box-pokedex-text">
      <span>{props.name}</span>
      <p>{props.category} type Pokémon.</p>
    </div>
  );
}

export default BoxPokemonText;