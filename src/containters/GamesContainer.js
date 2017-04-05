import Games from '../components/Games';
import {connect} from 'react-redux';
import bindIndexToActionCreators from '../reducers/bindIndexToActionCreators';
import {NUMBER_GUESS_SUBMITTED, WORD_GUESS_SUBMITTED} from '../actions/index';


const mapStateToProps = (state) => ({
    games: state.gameReducer
});

// If there are no props to create from state, `mapStateToProps` can be
// omitted.
export default connect(mapStateToProps, undefined)(Games);
