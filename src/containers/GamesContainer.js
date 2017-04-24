import Games from '../components/Games';
import {connect} from 'react-redux';
import {newGameRequested, numberGuessSubmitted, wordGuessSubmitted} from '../actions/index';

const mapStateToProps = (state) => ({
    games: state.games.games,
    connected: state.players.connected
});

const mapDispatchToProps = (dispatch) => ({
    newNumberGame: () => dispatch(newGameRequested('guess_number')),
    newWordGame: () => dispatch(newGameRequested('guess_word')),
    numberGuess: ({guess, id}) => dispatch(numberGuessSubmitted({guess, id})),
    wordGuess: ({guess, id}) => dispatch(wordGuessSubmitted({guess, id}))
});

export default connect(mapStateToProps, mapDispatchToProps)(Games);
