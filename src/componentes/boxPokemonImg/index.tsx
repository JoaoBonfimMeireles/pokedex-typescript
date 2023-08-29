import React from "react";
import "./style.css";

interface BoxPokemonImgProps {
  id?: number;
  image_url: string;
  background_image_url: string;
}



export function BoxPokemonImg(props: BoxPokemonImgProps) {
  return (
    <header className="box-img-pokemon">
      <div className="box-first-background">
        <img src={props.background_image_url}  alt="Imagem de um Pokemon" />
      </div>
      <div className="box-first-img">
        <img src={props.image_url}alt="Imagem de um Pokemon" />
      </div>
    </header>
  );
}

export default BoxPokemonImg;