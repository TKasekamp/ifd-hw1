import React from 'react';
/*
 Result knows how to display itself.
 */
const NumberResult = (props) => {
    let text = null;
    if (props.move.inFlight === 'inFlight') {
        text = <span>Submitting guess...</span>;
    }
    else if (props.move.inFlight === 'failed') {
        text = <span className="fail">Failed to submit guess. Server error :(</span>;
    }
    else if (props.move.comparedToAnswer === 'GT') {
        text = <p className="fail">{props.move.guess}: is greater than target</p>;
    } else if (props.move.comparedToAnswer === 'LT') {
        text = <p className="fail">{props.move.guess}: is lesser than target</p>;
    } else if (props.move.comparedToAnswer === 'EQ') {
        text = <p className="win">{props.move.guess}: was correct</p>;
    }

    return (
        <div>
            {text}
        </div>
    );
};
NumberResult.propTypes = {
    move: React.PropTypes.shape({
        guess: React.PropTypes.number.isRequired,
        comparedToAnswer: React.PropTypes.string.isRequired,
        inFlight: React.PropTypes.string.isRequired
    }).isRequired
};

export default NumberResult;
