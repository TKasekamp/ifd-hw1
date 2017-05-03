/**
 * Created by Tonis on 03.05.2017.
 */
import React from 'react';
import {connect} from 'react-redux';
import {numberGuessSubmitted, wordGuessSubmitted} from '../actions/index';
import Game from '../components/Game';

const GameOrNotFound = (props) => {
    if (props.game) {
        if (props.game.type === 'guess_number') {
            return (
                <Game game={props.game} makeGuess={props.numberGuess}/>);
        } else if (props.game.type === 'guess_word') {
            return (<Game game={props.game} makeGuess={props.wordGuess}/>);
        }
    } else {
        return <p>Game {props.gameId} not found</p>;
    }
};
GameOrNotFound.propTypes = {
    game: React.PropTypes.object,
    gameId: React.PropTypes.string.isRequired,
    wordGuess: React.PropTypes.func.isRequired,
    numberGuess: React.PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
    const gameId = ownProps.match.params.gameId;
    const game = state.games.games.find((game) => game.id === gameId);
    return {game, gameId: gameId};
};

const mapDispatchToProps = (dispatch) => ({
    numberGuess: ({guess, id}) => dispatch(numberGuessSubmitted({guess, id})),
    wordGuess: ({guess, id}) => dispatch(wordGuessSubmitted({guess, id}))
});

export default connect(mapStateToProps, mapDispatchToProps)(GameOrNotFound);
