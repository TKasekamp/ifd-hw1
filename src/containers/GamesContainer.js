import Games from '../components/Games';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
    games: state.games.games
});

export default connect(mapStateToProps, undefined)(Games);
