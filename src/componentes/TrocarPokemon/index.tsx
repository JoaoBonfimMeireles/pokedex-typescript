import "./style.css";

export default function TrocarPokemon(props:any) {
  return (
    <div className="button-trocar-pokemon">
        <button onClick={props.alterarState}>Mudar Animal</button>
    </div>
  );
}