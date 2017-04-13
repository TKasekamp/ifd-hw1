import React from 'react';
import NumberResult from './NumberResult';

const NumberResultList = (props) => {
    const resultElements = props.moves.map((move) => {
        return (
            <NumberResult guess={move.guess} comparedToAnswer={move.comparedToAnswer} key={move.id}>
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
    moves: React.PropTypes.arrayOf(React.PropTypes.shape({
        guess: React.PropTypes.number.isRequired,
        id: React.PropTypes.number.isRequired,
        comparedToAnswer: React.PropTypes.string.isRequired
    })).isRequired
};

export default NumberResultList;
