import {connect} from 'react-redux';
import ConnectForm from '../components/ConnectForm';
import {connectRequested, disconnectRequested} from '../actions/PlayerActions';
import Header from '../components/Header';

const mapDispatchToProps = (dispatch) => ({
    onConnect: ({playerName}) => dispatch(connectRequested({playerName})),
    onDisconnect: () => dispatch(disconnectRequested()),
});

const mapStateToProps = (state) => ({
    connected: state.players.connected,
    playerId: state.players.playerId,
    onlinePlayers : state.players.onlinePlayers
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
