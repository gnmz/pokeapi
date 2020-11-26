import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage/MainPage';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Route path='/' exact component={MainPage} />
      </div>
    );
  }
}

export default App;