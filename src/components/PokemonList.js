import React, {Component} from 'react'
import PokemonDetail from './PokemonDetail'

class PokemonList extends Component{

  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: -1
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log('event.target', event.target.value)
    this.setState({selectedIndex: event.target.value})
    this.props.onPokemonSelected(event.target.value)

  }


  render() {
  const pokemonCards = this.props.pokemons.map((pokemon, index) => {
    return (

      <div className="pokemon-card" value={index} key={index}>

      {/* <p>{index}</p> */}
      <button onClick={this.handleClick} value={index}><h3>{pokemon.name}</h3></button>
      <img src={pokemon.imageUrl} alt="pokemon"/>
      
      </div>
    );
  });

  return (
    <div>{pokemonCards}</div>
  )

}
}








export default PokemonList