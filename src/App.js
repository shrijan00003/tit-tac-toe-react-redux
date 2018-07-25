import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Game from './views/Game'

class App extends Component {
  render() {
    return (
      <Provider store ={store}>
      <div className="App">
        <h1> Tic Tac Toe In React-Redux </h1>
        <Game />
      </div>
      </Provider>
    );
  }
}

export default App;
