import React, {Component} from 'react';
import {NumberGame} from '../NumberGame';
import NumberGuessForm from '../components/NumberGuessForm';
import NumberResultList from '../components/NumberResultList';

class App extends Component {
    constructor(props) {
        super(props);
        this.game = new NumberGame();

        this.state = {
            results: [],
            gameOver: this.game.getGameOver()
        };
    }

    handleGuessSubmit({guess}) {
        const id = this.getLastResultId();
        // Calculate game stuff here
        const result = this.game.makeGuess(guess);

        this.setState({
            results: this.state.results.concat({guess, id: id + 1, result}),
            gameOver: this.game.getGameOver()
        });
    }

    getLastResultId() {
        let lastResult = this.state.results[this.state.results.length - 1];
        if (lastResult === undefined) {
            return 0;
        } else {
            return lastResult.id;
        }
    }

    render() {
        return (
            <div className='app'>
                <h1>Game lobby</h1>
                <NumberGuessForm onSubmit={this.handleGuessSubmit.bind(this)} gameOver={this.state.gameOver}/>
                <NumberResultList results={this.state.results}/>
            </div>
        );
    }
}

export default App;
