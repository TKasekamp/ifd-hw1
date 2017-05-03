import React, {Component} from 'react';
import NumberResultList from './NumberResultList';
import NumberGuessForm from './NumberGuessForm';
import WordGuessForm from './WordGuessForm';
import WordResultList from './WordResultList';
import PropTypes from 'prop-types';

class Game extends Component {
    constructor(props) {
        super(props);
    }

    getReadableName() {
        let gameName = 'Number';
        if (this.props.game.type === 'guess_word') {
            gameName = 'Word';
        }
        return gameName;
    }

    getForm() {
        if (this.props.game.type === 'guess_number') {
            return <NumberGuessForm id={this.props.game.id} status={this.props.game.status}
                                    onSubmit={this.props.makeGuess}/>;
        } else {
            return <WordGuessForm id={this.props.game.id} status={this.props.game.status}
                                  onSubmit={this.props.makeGuess}/>;
        }
    }

    getList() {
        if (this.props.game.type === 'guess_number') {
            return <NumberResultList moves={this.props.game.moves}/>;
        } else {
            return <WordResultList moves={this.props.game.moves}/>;
        }
    }

    render() {
        if (this.props.game.inFlight === 'inFlight') {
            return (<h3>{this.getReadableName()} game being created...</h3>);
        } else if (this.props.game.inFlight === 'failed') {
            return (<h3>Game creation failed. Server error :(</h3>);
        } else {
            return (
                <div className='app'>
                    <h3>{this.getReadableName()} game</h3>
                    {this.getForm()}
                    {this.getList()}
                </div>
            );
        }
    }
}

Game.propTypes = {
    game: PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        moves: PropTypes.array.isRequired,
        inFlight: PropTypes.string.isRequired
    }).isRequired,
    makeGuess: PropTypes.func.isRequired,
};

export default Game;
