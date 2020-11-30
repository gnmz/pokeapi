import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MainPage from './pages/MainPage/MainPage';
import PokemonPage from './pages/PokemonPage/PokemonPage';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Route path='/' exact component={MainPage} />
        <Route path='/:name' exact component={PokemonPage} />
      </div>
    );
  }
}

export default App;