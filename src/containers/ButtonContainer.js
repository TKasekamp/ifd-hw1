import {connect} from 'react-redux';
import Buttons from '../components/Buttons';
import {newGameRequested} from '../actions/index';

const mapDispatchToProps = (dispatch) => ({
    newNumberGame: () => dispatch(newGameRequested('guess_number')),
    newWordGame: () => dispatch(newGameRequested('guess_word')),
});

export default connect(undefined, mapDispatchToProps)(Buttons);
