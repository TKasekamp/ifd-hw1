import React, {Component} from 'react';
import {WordGame} from '../WordGame';
import WordGuessForm from '../components/WordGuessForm';
import WordResultList from '../components/WordResultList';

class WordGameContainer extends Component {
    constructor(props) {
        super(props);
        this.game = new WordGame();

        this.state = {
            lastResultId: 0,
            results: [],
            gameOver: this.game.getGameOver()
        };
    }

    handleGuessSubmit({guess}) {
        const id = this.state.lastResultId + 1;
        // Calculate game stuff here
        const result = this.game.makeGuess(guess);

        this.setState({
            results: this.state.results.concat({guess, id, result}),
            gameOver: this.game.getGameOver(),
            lastResultId: id
        });
    }


    render() {
        return (
            <div className='app'>
                <h3>Word game</h3>
                <WordGuessForm onSubmit={this.handleGuessSubmit.bind(this)} gameOver={this.state.gameOver}/>
                <WordResultList results={this.state.results}/>
            </div>
        );
    }
}

export default WordGameContainer;
