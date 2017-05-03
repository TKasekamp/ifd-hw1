/**
 * Created by Tonis on 03.05.2017.
 */
import React from 'react';
import Buttons from '../components/Buttons';
import {connect} from 'react-redux';
import {newGameRequested} from '../actions/index';
import {push} from 'connected-react-router';
import PropTypes from 'prop-types';

const CreateGame = ({newNumberGame, newWordGame}) => {
    return (<div>
        <h1>Create game page</h1>
        <Buttons newNumberGame={newNumberGame} newWordGame={newWordGame}/>
    </div>)
};
CreateGame.propTypes = {
    newNumberGame: PropTypes.func.isRequired,
    newWordGame: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
    newNumberGame: () => {
        dispatch(newGameRequested('guess_number'));
        dispatch(push('/ongoingGames'));
    },

    newWordGame: () => {
        dispatch(newGameRequested('guess_word'));
        dispatch(push('/ongoingGames'));
    },
});

export default connect(undefined, mapDispatchToProps)(CreateGame);
