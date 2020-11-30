import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader';
import Navigation from '../../components/Navigation';
import PokemonCard from '../../components/PokemonCard';
import './MainPage.css';

class MainPage extends Component {
    state = {
        pokemonList: [],
        pokemons: []
    }
    componentDidMount(){
        const URL = 'https://pokeapi.co/api/v2/pokemon';

        async function fetchData() {
            let response = await getAllPokemon(URL)
            await loadPokemon(response.results);
          }

        fetchData();

          async function getAllPokemon(url) {
            return new Promise((resolve, reject) => {
                fetch(url)
                .then(res => res.json())
                .then(data => resolve(data))
            })
        }

        function getPokemon({ url }) {
            return new Promise((resolve, reject) => {
                fetch(url)
                .then(res => res.json())
                .then(data => resolve(data))
            })
        }

        const loadPokemon = async (data) => {
            let pokemonData = await Promise.all(data.map(async pokemon => {
              let pokemonRecord = await getPokemon(pokemon)
              return pokemonRecord
            }))
            this.setState({pokemons: pokemonData});
          }
    }

    render(){
        const { pokemons } = this.state;
        return(
            <div className='main-page'>
                {pokemons.length > 0 ? <Navigation /> : null}
                {pokemons.length > 0 ?
                <div className='main-page__pokemon-list'>
                    {pokemons.map((item) => 
                        <Link to={'/'+item.name} key={item.name} >
                            <PokemonCard
                                pokemonName={item.name}
                                pokemonImg={item.sprites.front_default}
                            />
                        </Link>
                    )} 
                </div>
            : <Loader />}
            </div>
        );
    }
}

export default MainPage;