import React, {Component} from 'react'
// import ReactPaginate from 'react-paginate';
import PokemonList from '../components/PokemonList'
import PokemonDetail from '../components/PokemonDetail'

class PokemonContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      pokemonArray: [],
      currentPokemon: null
      // currentPage: 1,
      // PokemonArrayPerPage: 5
      // pageCount: Math.ceil(data.meta.total_count / data.meta.limit)
    }
    this.handlePokemonSelected = this.handlePokemonSelected.bind(this);
  }

  componentDidMount(){
    fetch('https://api.pokemontcg.io/v1/cards')
      .then(res => res.json())
      .then(apidata => this.setState({pokemonArray: apidata.cards}))
      .catch(err => console.error(err))
  }

  handlePokemonSelected(index) {
    const selectedPokemon = this.state.pokemonArray[index]
    this.setState({currentPokemon: selectedPokemon})
  }

  render(){
    return(
      <div>
        <h1>Pokemon Cards</h1>
        <PokemonList pokemons={this.state.pokemonArray} onPokemonSelected={this.handlePokemonSelected}/>
        <PokemonDetail pokemon={this.state.currentPokemon}/>
        {/* <ReactPaginate 
              previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          // pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          // onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        /> */}
      </div>
    )
  }

}



export default PokemonContainer