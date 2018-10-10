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
`

class Board extends React.Component {
    state = {
        tiles: [{id: 1, text: ""}, {id: 2, text: ""}, {id: 3, text: ""}, 
                {id: 4, text: ""}, {id: 5, text: ""}, {id: 6, text: ""}, 
                {id: 7, text: ""}, {id: 8, text: ""}, {id: 9, text: ""}]
    }

    clickHandler = (event) => {
        const key = +event.target.dataset.key;
        const tiles = [...this.state.tiles];
        tiles.forEach(tile => {
            if (tile.id === key) {
                tile.text = "X";
            }
        })

        this.setState({ tiles: tiles})
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