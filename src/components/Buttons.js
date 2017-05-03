import React from 'react';
import PropTypes from 'prop-types';

const Buttons = (props) => {
    return (
        <div className='buttons'>
            <button id='create-number' onClick={props.newNumberGame}>
                Create number game
            </button>
            <button id='create-word' onClick={props.newWordGame}>
                Create word game
            </button>
        </div>
    );
};

Buttons.propTypes = {
    newNumberGame: PropTypes.func.isRequired,
    newWordGame: PropTypes.func.isRequired,
};

export default Buttons;
