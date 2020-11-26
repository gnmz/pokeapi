import React, { Component } from 'react';


class MainPage extends Component {
    state = {
        pokemonList:[]
    }
    componentDidMount(){
        this.getPokemonList();
    }

    getPokemonList = () => {
        fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(res => res.json())
        .then(data => this.setState({pokemonList: data.results}))
    }

    render(){
        const { pokemonList } = this.state;
        return(
            <div className='main-page'>
                {pokemonList.map((item) => 
                    <p key={item.name}>{item.name}</p>
                )}
            </div>
        );
    }
}

export default MainPage;