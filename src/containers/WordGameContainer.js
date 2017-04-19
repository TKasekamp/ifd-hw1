import React, {Component} from 'react';
import WordGuessFormContainer from './WordGuessFormContainer';
import WordResultList from '../components/WordResultList';

class WordGameContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.game.inFlight === 'inFlight') {
            return (<h3>Number game being created...</h3>);
        } else if (this.props.game.inFlight === 'failed') {
            return (<h3>Game creation failed. Server error :(</h3>);
        } else {
            return (
                <div className='app'>
                    <h3>Word game</h3>
                    <WordGuessFormContainer id={this.props.game.id} status={this.props.game.status}/>
                    <WordResultList moves={this.props.game.moves}/>

                </div>
            );
        }
    }
}

WordGameContainer.propTypes = {
    game: React.PropTypes.shape({
        id: React.PropTypes.string.isRequired,
        type: React.PropTypes.string.isRequired,
        status: React.PropTypes.string.isRequired,
        moves: React.PropTypes.array.isRequired,
        inFlight: React.PropTypes.string.isRequired
    }).isRequired
};

export default WordGameContainer;
