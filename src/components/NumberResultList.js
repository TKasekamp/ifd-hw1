import React from 'react';
import NumberResult from './NumberResult';

const NumberResultList = (props) => {
    const resultElements = props.results.map((result) => {
        return (
            <NumberResult guess={result.guess} result={result.result} key={result.id}>
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
    results: React.PropTypes.arrayOf(React.PropTypes.shape({
        guess: React.PropTypes.number,
        id: React.PropTypes.number,
        result: React.PropTypes.string
    })).isRequired
};

export default NumberResultList;
