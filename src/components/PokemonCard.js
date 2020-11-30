import React, { Component } from 'react';

class PokemonCard extends Component {
    render(){
        const { pokemonName, pokemonImg } = this.props;
        return(
            <div className='pokemon-card' >
                <h3 className='pokemon-card__title'>{pokemonName}</h3>
                <img src={pokemonImg} alt={pokemonName} />
            </div>
        )
    }
}

export default PokemonCard;