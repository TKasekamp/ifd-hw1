
import {connect} from 'react-redux';
import {newNumberGameCreated} from '../actions';
import Buttons from '../components/Buttons';
import {newWordGameCreated} from '../actions/index';

const mapDispatchToProps = (dispatch) => ({
    newNumberGame: () => dispatch(newNumberGameCreated()),
    newWordGame: () => dispatch(newWordGameCreated()),
});

export default connect(undefined, mapDispatchToProps)(Buttons);
