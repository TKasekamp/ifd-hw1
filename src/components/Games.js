import React from 'react';
import Buttons from './Buttons';
import GameContainer from '../containers/GameContainer';
import Game from './Game';

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
    games: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.string.isRequired,
        type: React.PropTypes.string.isRequired,
        status: React.PropTypes.string.isRequired,
        moves: React.PropTypes.array.isRequired,
        inFlight: React.PropTypes.string.isRequired,
    })).isRequired,
    connected: React.PropTypes.bool.isRequired,
    newNumberGame: React.PropTypes.func.isRequired,
    newWordGame: React.PropTypes.func.isRequired,
    numberGuess: React.PropTypes.func.isRequired,
    wordGuess: React.PropTypes.func.isRequired
};

export default Games;
