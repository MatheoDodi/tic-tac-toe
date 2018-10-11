import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(3,1fr);
    height: 550px;
    width: 550px;
`

const Square = styled.div`
    border: 3px solid black;
    font-size: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

class Board extends React.Component {
    state = {
        tiles: [{id: 1, text: ""}, {id: 2, text: ""}, {id: 3, text: ""}, 
                {id: 4, text: ""}, {id: 5, text: ""}, {id: 6, text: ""}, 
                {id: 7, text: ""}, {id: 8, text: ""}, {id: 9, text: ""}],
        won: false
    }

    checkVictory = () => {
        if ((this.state.tiles[0].text === "X" && this.state.tiles[1].text === "X" && this.state.tiles[2].text === "X") || (this.state.tiles[0].text === "O" && this.state.tiles[1].text === "O" && this.state.tiles[2].text === "O")) {
            this.setState({won: true});
        } else if ((this.state.tiles[3].text === "X" && this.state.tiles[4].text === "X" && this.state.tiles[5].text === "X") || (this.state.tiles[3].text === "O" && this.state.tiles[4].text === "O" && this.state.tiles[5].text === "O")) {
            this.setState({won: true});
        } else if ((this.state.tiles[6].text === "X" && this.state.tiles[7].text === "X" && this.state.tiles[8].text === "X") || (this.state.tiles[6].text === "O" && this.state.tiles[7].text === "O" && this.state.tiles[8].text === "O")) {
            this.setState({won: true});
        } else if ((this.state.tiles[0].text === "X" && this.state.tiles[3].text === "X" && this.state.tiles[6].text === "X") || (this.state.tiles[0].text === "O" && this.state.tiles[3].text === "O" && this.state.tiles[6].text === "O")) {
            this.setState({won: true});
        } else if ((this.state.tiles[1].text === "X" && this.state.tiles[4].text === "X" && this.state.tiles[7].text === "X") || (this.state.tiles[1].text === "O" && this.state.tiles[4].text === "O" && this.state.tiles[7].text === "O")) {
            this.setState({won: true});
        } else if ((this.state.tiles[2].text === "X" && this.state.tiles[5].text === "X" && this.state.tiles[8].text === "X") || (this.state.tiles[2].text === "O" && this.state.tiles[5].text === "O" && this.state.tiles[8].text === "O")) {
            this.setState({won: true});
        } else if ((this.state.tiles[0].text === "X" && this.state.tiles[4].text === "X" && this.state.tiles[8].text === "X") || (this.state.tiles[0].text === "O" && this.state.tiles[4].text === "O" && this.state.tiles[8].text === "O")) {
            this.setState({won: true});
        } else if ((this.state.tiles[2].text === "X" && this.state.tiles[4].text === "X" && this.state.tiles[6].text === "X") || (this.state.tiles[2].text === "O" && this.state.tiles[4].text === "O" && this.state.tiles[6].text === "O")) {
            this.setState({won: true});
        }
    }

    bestMoveHandler = () => {
        const tiles = [...this.state.tiles];
        
    }

    alreadyPlayedHandler = (tiles) => {
        const bool = tiles.every(tile => tile.text === "X" || tile.text === "O");
        if (bool) return;
        const emptySquares = tiles.filter(tile => tile.text === "");
        const index = Math.floor(Math.random() * emptySquares.length);
        const newTiles = tiles.map(tile => {
            if (tile.id === emptySquares[index].id) {
                tile.text = "X"; 
            }
            return tile;
        });
        this.setState({tiles: newTiles});
        this.checkVictory();
    }

    clickHandler = (event) => {
        const key = +event.target.dataset.key;
        const tiles = [...this.state.tiles];
        tiles.forEach(tile => {
            console.log(tile.text);
            if (tile.id === key && (tile.text !== "X" && tile.text !== "O")) {
                tile.text = "O";
                this.setState({ tiles: tiles})
                this.checkVictory();
                this.enemyMoveHandler();
            } else {
                return;
            }
        })
    }

    enemyMoveHandler = () => {
        setTimeout(() => {
            const tiles = [...this.state.tiles];
            
            this.alreadyPlayedHandler(tiles);
        }, 250);
    }

    render() {



        return !this.state.won ? <Grid>{this.state.tiles.map(tile => <Square onClick={this.clickHandler} data-key={tile.id} key={tile.id} >{tile.text}</Square>)}</Grid> : <p style={{fontSize: '5rem'}}>Done!</p>
        }
}

export default Board;