import React from 'react'

const PokemonDetail = ({pokemon}) => {
  if (!pokemon) return null
  
  return (
    <div>
    <p>{pokemon.name}</p>
    </div>
  )
}



export default PokemonDetail
