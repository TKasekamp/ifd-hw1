import React from 'react';
import NumberResult from './NumberResult';
import PropTypes from 'prop-types';
const NumberResultList = (props) => {
    const resultElements = props.moves.map((move) => {
        return (
            <NumberResult move={move} key={move.id}>
            </NumberResult>
        );
    });
    return (
        <div>
            <h3>Previous guesses:</h3>
            <div className='flexbox-container result-list'>{resultElements}</div>
        </div>
    );
};

NumberResultList.propTypes = {
    moves: PropTypes.arrayOf(PropTypes.shape({
        guess: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        comparedToAnswer: PropTypes.string.isRequired,
        inFlight: PropTypes.string.isRequired,
    })).isRequired
};

export default NumberResultList;
