import {connect} from 'react-redux';
import ConnectForm from '../components/ConnectForm';
import {connectRequested, disconnectRequested} from '../actions/PlayerActions';

const mapDispatchToProps = (dispatch) => ({
    onConnect: ({playerName}) => dispatch(connectRequested({playerName})),
    onDisconnect: () => dispatch(disconnectRequested()),
});

const mapStateToProps = (state) => ({
    connected: state.players.connected
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectForm);
