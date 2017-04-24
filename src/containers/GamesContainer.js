import Games from '../components/Games';
import {connect} from 'react-redux';
import {newGameRequested} from '../actions/index';

const mapStateToProps = (state) => ({
    games: state.games.games,
    connected: state.players.connected
});

const mapDispatchToProps = (dispatch) => ({
    newNumberGame: () => dispatch(newGameRequested('guess_number')),
    newWordGame: () => dispatch(newGameRequested('guess_word')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Games);
