import React from 'react';
/*
 Result knows how to display itself.
 */
const WordResult = (props) => {
    let text = [];
    if (props.move.inFlight === 'inFlight') {
        text = <p>Submitting guess {props.move.guess}</p>;
    } else if (props.move.inFlight === 'failed') {
        text = <p className="fail">Failed to submit guess {props.move.guess}. Server error :(</p>;
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
    move: React.PropTypes.shape({
        guess: React.PropTypes.string.isRequired,
        letterMatches: React.PropTypes.arrayOf(React.PropTypes.bool).isRequired,
        inFlight: React.PropTypes.string.isRequired
    }).isRequired
};

export default WordResult;
