import React from 'react';
import PropTypes from 'prop-types';
/*
 Result knows how to display itself.
 */
const NumberResult = (props) => {
    let text = null;
    if (props.move.inFlight === 'inFlight') {
        text = <div>Submitting guess {props.move.guess}</div>;
    } else if (props.move.inFlight === 'failed') {
        text = <div className="fail">Failed to submit guess {props.move.guess}. Server error :(</div>;
    } else if (props.move.comparedToAnswer === 'GT') {
        text = <div className="fail">{props.move.guess}: is greater than target</div>;
    } else if (props.move.comparedToAnswer === 'LT') {
        text = <div className="fail">{props.move.guess}: is lesser than target</div>;
    } else if (props.move.comparedToAnswer === 'EQ') {
        text = <div className="win">{props.move.guess}: was correct</div>;
    }

    return (
        <div>
            {text}
        </div>
    );
};
NumberResult.propTypes = {
    move: PropTypes.shape({
        guess: PropTypes.number.isRequired,
        comparedToAnswer: PropTypes.string.isRequired,
        inFlight: PropTypes.string.isRequired
    }).isRequired
};

export default NumberResult;
