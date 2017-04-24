import React from 'react';
import WordResultList from '../components/WordResultList';
import WordGuessForm from '../components/WordGuessForm';

const WordGameContainer = (props) => {
    if (props.game.inFlight === 'inFlight') {
        return (<h3>Word game being created...</h3>);
    } else if (props.game.inFlight === 'failed') {
        return (<h3>Game creation failed. Server error :(</h3>);
    } else {
        return (
            <div className='app'>
                <h3>Word game</h3>
                <WordGuessForm id={props.game.id} status={props.game.status} onSubmit={props.wordGuess}/>
                <WordResultList moves={props.game.moves}/>

            </div>
        );
    }
};

WordGameContainer.propTypes = {
    game: React.PropTypes.shape({
        id: React.PropTypes.string.isRequired,
        type: React.PropTypes.string.isRequired,
        status: React.PropTypes.string.isRequired,
        moves: React.PropTypes.array.isRequired,
        inFlight: React.PropTypes.string.isRequired
    }).isRequired,
    wordGuess: React.PropTypes.func.isRequired,
};

export default WordGameContainer;
