import Games from '../components/Games';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
    games: state.games.games,
    connected: state.players.connected
});

export default connect(mapStateToProps, undefined)(Games);
