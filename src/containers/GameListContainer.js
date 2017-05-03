import {connect} from 'react-redux';
import {filterGames} from '../reducers/Games';
import GameList from '../components/gamelist/GameList';
import {push} from 'connected-react-router';

const mapStateToProps = (state, ownProps) => ({
    games: filterGames({
        games: state.games.games,
        showFinished: ownProps.showFinished
    }),
});

const mapDispatchToProps = (dispatch) => ({
    play: ({id}) => {dispatch(push('/games/' + id))},
});

export default connect(mapStateToProps, mapDispatchToProps)(GameList);
