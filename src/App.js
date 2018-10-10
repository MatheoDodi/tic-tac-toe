import React, { Component } from 'react';
import styled from 'styled-components';
import Board from './Components/Board/Board';
import './App.css';

const CenterBoard = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

class App extends Component {
  render() {
    return (
      <CenterBoard>
        <Board />
      </CenterBoard>
    );
  }
}

export default App;
