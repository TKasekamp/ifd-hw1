import React from 'react';

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
    newNumberGame: React.PropTypes.func.isRequired,
    newWordGame: React.PropTypes.func.isRequired,
};

export default Buttons;
