import {connect} from 'react-redux';
import {filterGames} from '../reducers/Games';
import GameList from '../components/gamelist/GameList';

const mapStateToProps = (state, ownProps) => ({
    games: filterGames({
        games: state.games.games,
        showFinished: ownProps.showFinished
    }),
});

export default connect(mapStateToProps)(GameList);
