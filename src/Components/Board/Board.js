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
                {id: 7, text: ""}, {id: 8, text: ""}, {id: 9, text: ""}]
    }

    checkVictory = () => {
        if ((this.state.tiles[0].text === "X" && this.state.tiles[1].text === "X" && this.state.tiles[2].text === "X") || (this.state.tiles[0].text === "O" && this.state.tiles[1].text === "O" && this.state.tiles[2].text === "O")) {
            console.log("YOU WIN");
        } else if ((this.state.tiles[3].text === "X" && this.state.tiles[4].text === "X" && this.state.tiles[5].text === "X") || (this.state.tiles[3].text === "O" && this.state.tiles[4].text === "O" && this.state.tiles[5].text === "O")) {
            console.log("YOU WIN");
        } else if ((this.state.tiles[6].text === "X" && this.state.tiles[7].text === "X" && this.state.tiles[8].text === "X") || (this.state.tiles[6].text === "O" && this.state.tiles[7].text === "O" && this.state.tiles[8].text === "O")) {
            console.log("YOU WIN");
        } else if ((this.state.tiles[0].text === "X" && this.state.tiles[3].text === "X" && this.state.tiles[6].text === "X") || (this.state.tiles[0].text === "O" && this.state.tiles[3].text === "O" && this.state.tiles[6].text === "O")) {
            console.log("YOU WIN");
        } else if ((this.state.tiles[1].text === "X" && this.state.tiles[4].text === "X" && this.state.tiles[7].text === "X") || (this.state.tiles[1].text === "O" && this.state.tiles[4].text === "O" && this.state.tiles[7].text === "O")) {
            console.log("YOU WIN");
        } else if ((this.state.tiles[2].text === "X" && this.state.tiles[5].text === "X" && this.state.tiles[8].text === "X") || (this.state.tiles[2].text === "O" && this.state.tiles[5].text === "O" && this.state.tiles[8].text === "O")) {
            console.log("YOU WIN");
        } else if ((this.state.tiles[0].text === "X" && this.state.tiles[4].text === "X" && this.state.tiles[8].text === "X") || (this.state.tiles[0].text === "O" && this.state.tiles[4].text === "O" && this.state.tiles[8].text === "O")) {
            console.log("YOU WIN");
        } else if ((this.state.tiles[2].text === "X" && this.state.tiles[4].text === "X" && this.state.tiles[6].text === "X") || (this.state.tiles[2].text === "O" && this.state.tiles[4].text === "O" && this.state.tiles[6].text === "O")) {
            console.log("YOU WIN");
        }
    }

    clickHandler = (event) => {
        const key = +event.target.dataset.key;
        const tiles = [...this.state.tiles];
        tiles.forEach(tile => {
            if (tile.id === key) {
                tile.text = "O";
            }
        })

        this.setState({ tiles: tiles})
        this.checkVictory();
    }

    render() {



        return (
            <Grid>
                {this.state.tiles.map(tile => <Square onClick={this.clickHandler} data-key={tile.id} key={tile.id} >{tile.text}</Square>)}
            </Grid>
        )
    }
}

export default Board;