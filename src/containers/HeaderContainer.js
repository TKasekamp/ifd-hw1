import {connect} from 'react-redux';
import {connectRequested, disconnectRequested} from '../actions/PlayerActions';
import Header from '../components/Header';

const mapDispatchToProps = (dispatch) => ({
    onConnect: ({playerName}) => dispatch(connectRequested({playerName})),
    onDisconnect: () => dispatch(disconnectRequested()),
});

const mapStateToProps = (state) => ({
    connected: state.players.connected,
    playerId: state.players.playerId,
    onlinePlayers: state.players.onlinePlayers,
    message: state.players.message
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
