import WordGuessForm from '../components/WordGuessForm';
import {connect} from 'react-redux';
import {wordGuessSubmitted} from '../actions';

const mapDispatchToProps = (dispatch) => ({
    onSubmit: ({guess, id}) => dispatch(wordGuessSubmitted({guess, id}))
});

export default connect(undefined, mapDispatchToProps)(WordGuessForm);
