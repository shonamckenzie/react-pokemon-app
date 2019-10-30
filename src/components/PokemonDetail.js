import React from 'react'

const PokemonDetail = ({pokemon}) => {
  if (!pokemon) return null

  return (
    <div>
    <p>Rarity: {pokemon.rarity}</p>
    <p>Artist: {pokemon.artist}</p>
    <p>Series: {pokemon.series}</p>
    </div>
  )
}



export default PokemonDetail
