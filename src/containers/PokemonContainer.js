import React, {Component} from 'react'

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
  }

  render(){
    return(
      <h1>Pokemon Cards</h1>
    )
  }

}



export default PokemonContainer