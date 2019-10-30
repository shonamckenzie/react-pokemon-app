import React, {Component} from 'react'
import PokemonList from '../components/PokemonList'

class PokemonContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      pokemonArray: []
    }
  }

  componentDidMount(){
    fetch('https://api.pokemontcg.io/v1/cards')
      .then(res => res.json())
      .then(apidata => this.setState({pokemonArray: apidata.cards}))
      .catch(err => console.error(err))
  }

  render(){
    return(
      <div>
        <h1>Pokemon Cards</h1>
        <PokemonList pokemon={this.state.pokemonArray}/>
      </div>
    )
  }

}



export default PokemonContainer