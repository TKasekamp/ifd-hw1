import React from 'react';
/*
 Result knows how to display itself.
 */
const NumberResult = (props) => {
    let text = null;
    if (props.result == 'greater') {
        text = <p className="fail">{props.guess}: is greater than target</p>;
    } else if (props.result == 'lesser') {
        text = <p className="fail">{props.guess}: is lesser than target</p>;
    } else if (props.result == 'equal') {
        text = <p className="win">{props.guess}: was correct</p>;
    }

    return (
        <div>
            {text}
        </div>
    );
};
NumberResult.propTypes = {
    guess: React.PropTypes.number.isRequired,
    result: React.PropTypes.string.isRequired
};

export default NumberResult;
