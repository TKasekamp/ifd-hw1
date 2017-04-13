import React from 'react';
/*
 Result knows how to display itself.
 */
const WordResult = (props) => {
    let text = [];
    for (let i = 0, len = props.letterMatches.length; i < len; i++) {
        text.push(<a key={i} className={(props.letterMatches[i] ? 'win' : 'fail')}>{props.guess[i]}</a>);
    }

    return (
        <div>
            {text}
        </div>
    );
};
WordResult.propTypes = {
    guess: React.PropTypes.string.isRequired,
    letterMatches: React.PropTypes.arrayOf(React.PropTypes.bool).isRequired
};

export default WordResult;
