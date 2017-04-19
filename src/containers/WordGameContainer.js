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
                <WordGuessFormContainer id={this.props.game.id} status={this.props.game.status}/>
                <WordResultList moves={this.props.game.moves}/>

            </div>
        );
    }
}

WordGameContainer.propTypes = {
    game: React.PropTypes.shape({
        id: React.PropTypes.string.isRequired,
        type: React.PropTypes.string.isRequired,
        status: React.PropTypes.string.isRequired,
        moves: React.PropTypes.array.isRequired
    }).isRequired
};

export default WordGameContainer;
