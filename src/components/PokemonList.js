import React from 'react'

const PokemonList = ({ pokemon }) => {
  const pokemonCards = pokemon.map((pmon, index) => {
    return (
      <div class="pokemon-card">
      <h3> {pmon.name} </h3>
      <img src={pmon.imageUrl} />
      </div>
    );
  });


  return (
    <div><ul>{pokemonCards}</ul></div>
  )
}








export default PokemonList