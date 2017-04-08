import {connect} from 'react-redux';
import {numberGuessSubmitted} from '../actions/index';
import NumberGuessForm from '../components/NumberGuessForm';

const mapDispatchToProps = (dispatch) => ({
    onSubmit: ({guess, id}) => dispatch(numberGuessSubmitted({guess, id}))
});

export default connect(undefined, mapDispatchToProps)(NumberGuessForm);
