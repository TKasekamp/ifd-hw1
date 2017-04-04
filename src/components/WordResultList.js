import React from 'react';
import WordResult from './WordResult';

const WordResultList = (props) => {
    console.log(props);
    const resultElements = props.results.map((result) => {
        return (
            <WordResult guess={result.guess} result={result.result} key={result.id}>
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
    results: React.PropTypes.arrayOf(React.PropTypes.shape({
        guess: React.PropTypes.string,
        id: React.PropTypes.number,
        result: React.PropTypes.arrayOf(React.PropTypes.bool)
    })).isRequired
};

export default WordResultList;
