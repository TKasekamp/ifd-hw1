import Games from '../components/Games';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
    games: state.gameReducer.games
});

// If there are no props to create from state, `mapStateToProps` can be
// omitted.
export default connect(mapStateToProps, undefined)(Games);
