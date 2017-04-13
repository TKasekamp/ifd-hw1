import Games from '../components/Games';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
    games: state.gameReducer.games
});

export default connect(mapStateToProps, undefined)(Games);
