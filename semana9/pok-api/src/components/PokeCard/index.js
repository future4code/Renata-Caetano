import React, { useEffet, useState } from "react";
import axios from "axios";

export default function PokeCard(props) {
  const [pokemon, setPokemon] = useState([]);
  };

  // método que roda após a montagem do componente
  componentDidMount() {
    setPegaPokemon(this.props.pokemon);

  }
  componentDidUpdate(prevProps) {
       if (prevProps.pokemon !== this.props.pokemon) {
      this.pegaPokemon(this.props.pokemon);
    }
  }
  

  // função que bate na poke API com um nome específico de pokemon
  // Isso permite que consigamos pegar as infos dos pokemons.
  // Nos métodos de ciclo de vida, ela é chamada passando como
  // parâmetro o nome de pokemon que está chegando como props.
  pegaPokemon = pokeName => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((response) => (setPokemon(response.data ));
       .catch((err) => {
        console.log(err);
      });
  };

  useEffet(()=>{
    getPegaPokemon(props.pokemon)

  render() {
    const pokemon = pokemon;

    return (
      <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </div>
    );
  }
}


