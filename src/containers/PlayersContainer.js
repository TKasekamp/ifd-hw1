import {connect} from 'react-redux';
import OnlinePlayerList from '../components/header/OnlinePlayerList';
import * as React from 'react';
import PropTypes from 'prop-types';

const PlayersContainer = ({playerId, onlinePlayers}) => {
    return (<div>
        <OnlinePlayerList playerId={playerId} onlinePlayers={onlinePlayers}/>
    </div>);
};
PlayersContainer.propTypes = {
    playerId: PropTypes.string.isRequired,
    onlinePlayers: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    }).isRequired).isRequired
};

const mapStateToProps = (state) => ({
    onlinePlayers: state.players.onlinePlayers,
    playerId: state.players.playerId,
});

export default connect(mapStateToProps)(PlayersContainer);
