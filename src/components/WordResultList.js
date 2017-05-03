import React from 'react';
import WordResult from './WordResult';
import PropTypes from 'prop-types';
const WordResultList = (props) => {
    const resultElements = props.moves.map((move) => {
        return (
            <WordResult move={move} key={move.id}>
            </WordResult>
        );
    });
    return (
        <div>
            <h3>Previous guesses:</h3>
            <div className='flexbox-container result-list'>{resultElements}</div>
        </div>
    );
};

WordResultList.propTypes = {
    moves: PropTypes.arrayOf(PropTypes.shape({
        guess: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        letterMatches: PropTypes.arrayOf(PropTypes.bool).isRequired,
        inFlight: PropTypes.string.isRequired,
        correct: PropTypes.bool.isRequired
    })).isRequired
};

export default WordResultList;
