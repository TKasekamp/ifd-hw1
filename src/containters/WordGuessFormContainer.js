import WordGuessForm from '../components/WordGuessForm';
import {connect} from 'react-redux';
import {wordGuessSubmitted} from '../actions';

const mapDispatchToProps = (dispatch) => ({
    onSubmit: ({guess, index}) => dispatch(wordGuessSubmitted({guess, index}))
});

const mapStateToProps = (state) => ({
    gameOver: state.gameReducer.games[id].gameOver
});

// If there are no props to create from state, `mapStateToProps` can be
// omitted.
export default connect(mapStateToProps, mapDispatchToProps)(WordGuessForm);
