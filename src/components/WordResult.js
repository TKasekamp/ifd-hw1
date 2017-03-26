import React from 'react';
/*
 Result knows how to display itself.
 */
const WordResult = (props) => {
    let text = [];
    for (let i = 0, len = props.result.length; i < len; i++) {
        text.push(<a className={(props.result[i] ? 'win' : 'fail')}>{props.guess[i]}</a>);
    }

    return (
        <div>
            {text}
        </div>
    );
};
WordResult.propTypes = {
    guess: React.PropTypes.string.isRequired,
    result: React.PropTypes.arrayOf(React.PropTypes.bool).isRequired
};

export default WordResult;
