import React from 'react';
import NumberResultList from '../components/NumberResultList';
import NumberGuessForm from '../components/NumberGuessForm';

const NumberGameContainer = (props) => {
    if (props.game.inFlight === 'inFlight') {
        return (<h3>Number game being created...</h3>);
    } else if (props.game.inFlight === 'failed') {
        return (<h3>Game creation failed. Server error :(</h3>);
    } else {
        return (
            <div className='app'>
                <h3>Number game</h3>
                <NumberGuessForm id={props.game.id} status={props.game.status} onSubmit={props.numberGuess}/>
                <NumberResultList moves={props.game.moves}/>
            </div>
        );
    }
};

NumberGameContainer.propTypes = {
    game: React.PropTypes.shape({
        id: React.PropTypes.string.isRequired,
        type: React.PropTypes.string.isRequired,
        status: React.PropTypes.string.isRequired,
        moves: React.PropTypes.array.isRequired,
        inFlight: React.PropTypes.string.isRequired
    }).isRequired,
    numberGuess: React.PropTypes.func.isRequired,
};

export default NumberGameContainer;
