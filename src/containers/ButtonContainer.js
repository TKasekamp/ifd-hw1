import {connect} from 'react-redux';
import {newWordGameCreated} from '../actions';
import Buttons from '../components/Buttons';
import {newNumberGameRequested} from '../actions/index';

const mapDispatchToProps = (dispatch) => ({
    newNumberGame: () => dispatch(newNumberGameRequested()),
    newWordGame: () => dispatch(newWordGameCreated()),
});

export default connect(undefined, mapDispatchToProps)(Buttons);
