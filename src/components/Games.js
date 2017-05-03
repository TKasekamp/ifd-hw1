import React from 'react';
import Buttons from './Buttons';
import GameContainer from '../containers/GameContainer';
import Game from './Game';
import PropTypes from 'prop-types';
const Games = (props) => {
    if (!props.connected) {
        return <div></div>;
    }
    const resultElements = props.games.map((game, index) => {
        if (game.type === 'guess_number') {
            return (
                <Game game={game} key={index} makeGuess={props.numberGuess}/>);
        } else if (game.type === 'guess_word') {
            return (<Game game={game} key={index} makeGuess={props.wordGuess}/>);
        }
    });
    return (
        <div>
            <Buttons newWordGame={props.newWordGame} newNumberGame={props.newNumberGame}/>
            <h2>Games</h2>
            <div className='flexbox-container result-list'>{resultElements}</div>
        </div>
    );
};

Games.propTypes = {
    games: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        status:PropTypes.string.isRequired,
        moves: PropTypes.array.isRequired,
        inFlight: PropTypes.string.isRequired,
    })).isRequired,
    connected: PropTypes.bool.isRequired,
    newNumberGame: PropTypes.func.isRequired,
    newWordGame: PropTypes.func.isRequired,
    numberGuess: PropTypes.func.isRequired,
    wordGuess: PropTypes.func.isRequired
};

export default Games;
