import React from 'react';
import WordResult from './WordResult';

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
    moves: React.PropTypes.arrayOf(React.PropTypes.shape({
        guess: React.PropTypes.string.isRequired,
        id: React.PropTypes.number.isRequired,
        letterMatches: React.PropTypes.arrayOf(React.PropTypes.bool).isRequired,
        inFlight: React.PropTypes.string.isRequired,
        correct: React.PropTypes.bool.isRequired
    })).isRequired
};

export default WordResultList;
