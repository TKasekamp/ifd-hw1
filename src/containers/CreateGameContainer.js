/**
 * Created by Tonis on 03.05.2017.
 */
import React from 'react';
import Buttons from '../components/Buttons';
import {connect} from 'react-redux';
import {newGameRequested} from '../actions/index';

const CreateGame = ({newNumberGame, newWordGame}) => {
    return (<div>
        <h1>Create game page</h1>
        <Buttons newNumberGame={newNumberGame} newWordGame={newWordGame}/>
    </div>)
};
CreateGame.propTypes = {
    newNumberGame: React.PropTypes.func.isRequired,
    newWordGame: React.PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
    newNumberGame: () => dispatch(newGameRequested('guess_number')),
    newWordGame: () => dispatch(newGameRequested('guess_word')),
});

export default connect(undefined, mapDispatchToProps)(CreateGame);
