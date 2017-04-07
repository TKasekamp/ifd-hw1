import React, {Component} from 'react';
import WordGuessFormContainer from './WordGuessFormContainer';
import WordResultList from '../components/WordResultList';

class WordGameContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='app'>
                <h3>Word game</h3>
                <WordGuessFormContainer id={this.props.game.id} gameOver={this.props.game.gameOver}/>
                <WordResultList results={this.props.game.results}/>

            </div>
        );
    }
}

WordGameContainer.propTypes = {
    game: React.PropTypes.shape({
        id: React.PropTypes.number,
        name: React.PropTypes.string,
        gameOver: React.PropTypes.bool,
        results: React.PropTypes.array,
        targetWord: React.PropTypes.string
    }).isRequired
};

export default WordGameContainer;
