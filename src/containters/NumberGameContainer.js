import React, {Component} from 'react';
import {NumberGame} from '../NumberGame';
import NumberGuessForm from '../components/NumberGuessForm';
import NumberResultList from '../components/NumberResultList';

class NumberGameContainer extends Component {
    constructor(props) {
        super(props);
        this.game = new NumberGame();
        this.state = {
            results: [],
            gameOver: this.game.getGameOver(),
            lastResultId: 0
        };
    }

    handleGuessSubmit({guess}) {
        const id = this.state.lastResultId + 1;
        // Calculate game stuff here
        const result = this.game.makeGuess(guess);


        this.setState({
            results: this.state.results.concat({guess, id, result}),
            gameOver: this.game.getGameOver()
        });
    }

    render() {
        return (
            <div className='app'>
                <h3>Number game</h3>
                <NumberGuessForm onSubmit={this.handleGuessSubmit.bind(this)} gameOver={this.state.gameOver}/>
                <NumberResultList results={this.state.results}/>
            </div>
        );
    }
}

export default NumberGameContainer;
