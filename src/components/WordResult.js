import React from 'react';
import PropTypes from 'prop-types';
/*
 Result knows how to display itself.
 */
const WordResult = (props) => {
    let text = [];
    if (props.move.inFlight === 'inFlight') {
        text = <div>Submitting guess {props.move.guess}</div>;
    } else if (props.move.inFlight === 'failed') {
        text = <div className="fail">Failed to submit guess {props.move.guess}. Server error :(</div>;
    } else if (props.move.inFlight === 'created') {
        for (let i = 0, len = props.move.letterMatches.length; i < len; i++) {
            text.push(<a key={i} className={(props.move.letterMatches[i] ? 'win' : 'fail')}>{props.move.guess[i]}</a>);
        }
    }

    return (
        <div>
            {text}
        </div>
    );
};
WordResult.propTypes = {
    move: PropTypes.shape({
        guess: PropTypes.string.isRequired,
        letterMatches: PropTypes.arrayOf(PropTypes.bool).isRequired,
        inFlight: PropTypes.string.isRequired
    }).isRequired
};

export default WordResult;
