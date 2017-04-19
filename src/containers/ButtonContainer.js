import {connect} from 'react-redux';
import Buttons from '../components/Buttons';
import {newNumberGameRequested, newWordGameRequested} from '../actions/index';

const mapDispatchToProps = (dispatch) => ({
    newNumberGame: () => dispatch(newNumberGameRequested()),
    newWordGame: () => dispatch(newWordGameRequested()),
});

export default connect(undefined, mapDispatchToProps)(Buttons);
