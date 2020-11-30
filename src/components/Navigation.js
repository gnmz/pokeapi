import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    state = {
        pokemonList: [],
    }
    componentDidMount(){
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(res => res.json())
        .then(data => this.setState({pokemonList: data.results}))
    }
    
    render(){
        const { pokemonList } = this.state;
        return(
            <div className='navigation'>
                {pokemonList.map((item) => 
                    <Link to={'/' + item.name} key={item.name}>
                    <button className='navigation-btn'>{item.name}</button>
                    </Link>
                )}
            </div>
        )
    }
}

export default Navigation;