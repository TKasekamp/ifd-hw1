import {connect} from 'react-redux';
import {newNumberGameCreated, newWordGameCreated} from '../actions';
import Buttons from '../components/Buttons';

const mapDispatchToProps = (dispatch) => ({
    newNumberGame: () => dispatch(newNumberGameCreated()),
    newWordGame: () => dispatch(newWordGameCreated()),
});

export default connect(undefined, mapDispatchToProps)(Buttons);
