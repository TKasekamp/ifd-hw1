import React, {Component} from 'react';
import {WordGame} from '../WordGame';
import WordGuessForm from '../components/WordGuessForm';
import WordResultList from '../components/WordResultList';
import WordGuessFormContainer from './WordGuessFormContainer';
import WordListContainer from './WordListContainer';

class WordGameContainer extends Component {
    constructor(props) {
        super(props);
        // this.game = new WordGame();
        //
        // this.state = {
        //     lastResultId: 0,
        //     results: [],
        //     gameOver: this.game.getGameOver()
        // };
    }

    // handleGuessSubmit({guess}) {
    //     const id = this.state.lastResultId + 1;
    //     // Calculate game stuff here
    //     const result = this.game.makeGuess(guess);
    //
    //     this.setState({
    //         results: this.state.results.concat({guess, id, result}),
    //         gameOver: this.game.getGameOver(),
    //         lastResultId: id
    //     });
    // }


    render() {
        return (
            <div className='app'>
                <h3>Word game</h3>
                <WordGuessFormContainer id={this.props.id} />
                <WordListContainer />

            </div>
        );
    }
}

export default WordGameContainer;
