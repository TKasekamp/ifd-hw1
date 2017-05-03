import {connect} from 'react-redux';
import OnlinePlayerList from '../components/header/OnlinePlayerList';
import * as React from 'react';


const PlayersContainer = ({playerId, onlinePlayers}) => {
    return (<div>
        <OnlinePlayerList playerId={playerId} onlinePlayers={onlinePlayers}/>
    </div>)
};
PlayersContainer.propTypes = {
    playerId: React.PropTypes.string.isRequired,
    onlinePlayers: React.PropTypes.arrayOf(React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        id: React.PropTypes.string.isRequired,
    }).isRequired).isRequired
};

const mapStateToProps = (state) => ({
    onlinePlayers: state.players.onlinePlayers,
    playerId: state.players.playerId,
});

export default connect(mapStateToProps)(PlayersContainer);
