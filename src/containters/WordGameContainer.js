import React, {Component} from 'react';
import WordGuessFormContainer from './WordGuessFormContainer';
import WordListContainer from './WordListContainer';

class WordGameContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='app'>
                <h3>Word game</h3>
                <WordGuessFormContainer id={this.props.game.id} gameOver={this.props.game.gameOver}/>
                <WordListContainer results={this.props.game.results}/>

            </div>
        );
    }
}

export default WordGameContainer;
