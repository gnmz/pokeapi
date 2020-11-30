import React, { Component } from 'react';
import Navigation from '../../components/Navigation';
import './PokemonPage.css';
import styled from "styled-components";
import Loader from '../../components/Loader';

const InfoStatScale = styled.p`
  width: ${props => props.width}%;
  background-color: rgb(52, 168, 83);
  text-align: center;
  margin-top: 0px;
  box-sizing: border-box;
  max-width: 100%;
`;


class PokemonPage extends Component {
    state = {
        pokemon:[],
        pokemonName: null,
        pokemonImg: null,
        pokemonHeight: null,
        pokemonAbility:[],
        pokemonWeight: null,
        pokemonTypes: [],
        pokemonStats: [],

    }
    
    componentDidMount(){
        const pokemonName = this.props.match.params.name;
        this.getPokemon(pokemonName);
    }

    componentDidUpdate(prevState) {
        const newPokemonId = this.props.match.params.name;
        if (prevState.match.params.name !== newPokemonId) {
            this.getPokemon(newPokemonId);
        }
    }
    getPokemon = (name) => {
        const URL = `https://pokeapi.co/api/v2/pokemon/${name}/`;

        async function fetchData(){
            let response = await getPokemon(URL);
            await loadPokemon(response);
        }
        fetchData();

        async function getPokemon(url) {
            return new Promise((resolve, reject) => {
                fetch(url)
                .then(res => res.json())
                .then(data => resolve(data))
            })
        }
        const loadPokemon = async (data) => {
            this.setState({
                pokemon: data,
                pokemonName: data.name,
                pokemonImg: data.sprites.front_default,
                pokemonHeight: data.height,
                pokemonAbility: data.abilities,
                pokemonWeight: data.weight,
                pokemonTypes: data.types,
                pokemonStats: data.stats
            })
        }
    }
    render() {
        const { pokemon, pokemonName, pokemonImg, pokemonHeight, pokemonAbility, pokemonWeight, pokemonTypes, pokemonStats } = this.state;
        return(
            <div className='pokemon-page'>
                {!pokemon.length ? <Navigation /> : null}
                {!pokemon.length > 0 ?
                <div className='pokemon-page__item'>
                <h2 className='pokemon-page__item-title'>{pokemonName}</h2>
                <img className='pokemon-page__item-img' src={pokemonImg} alt={pokemonName} />
                <h4 className='pokemon-page__info-title'>Basic characteristic</h4>
                <div className='pokemon-page__info'>
                    <p className='pokemon-page__info-item'>Рост: {pokemonHeight}</p>
                    <p className='pokemon-page__info-item'>Вес: {pokemonWeight} </p>
                </div>
                <h4 className='pokemon-page__info-title'>Types</h4>
                <div className='pokemon-page__info-types'>
                    {pokemonTypes.map((item) => 
                        <p key={item.slot} className='pokemon-page__info-types-item'>{item.type.name}</p>
                    )}
                </div>
                <h4 className='pokemon-page__info-title'>Abilitys</h4>
                    <div className='pokemon-page__info-ability'>
                        {pokemonAbility.map((item) => 
                            <p key={item.ability.name} className='pokemon-page__info-ability-item'>{item.ability.name}</p>
                        )}
                    </div>
                <h4 className='pokemon-page__info-title'>Stats</h4>
                    <div className='pokemon-page__stats'>
                        <div className='pokemon-page__stats-info'>
                        {pokemonStats.map((item) => 
                            <p key={item.stat.name} className='pokemon-page__stats-item'>
                                {item.stat.name}
                            </p>
                        )}
                        </div>
                        <div className='pokemon-page__stats-scale'>
                        {pokemonStats.map((item) => 
                            <div className='pokemon-page__stats-scale-item' key={item.stat.name}>
                            <InfoStatScale width={item.base_stat}>
                                {item.base_stat}
                            </InfoStatScale>
                        </div>
                        )}
                        </div>
                    </div>
                </div>
                : <Loader />}
            </div>
        )
    }
}

export default PokemonPage;