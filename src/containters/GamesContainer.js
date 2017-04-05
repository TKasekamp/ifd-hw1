import Games from '../components/Games';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
    games: state.gameReducer
});

export default connect(mapStateToProps, undefined)(Games);
