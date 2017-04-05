import React from 'react';
import NumberGameContainer from '../containters/NumberGameContainer';
import WordGameContainer from '../containters/WordGameContainer';
import bindIndexToActionCreators from '../reducers/bindIndexToActionCreators';
import {NUMBER_GUESS_SUBMITTED, WORD_GUESS_SUBMITTED} from '../actions/index';
import {bindActionCreators} from 'redux'


const gameDispatchProperties =
    index =>
        dispatch => bindActionCreators(
            bindIndexToActionCreators({WORD_GUESS_SUBMITTED, NUMBER_GUESS_SUBMITTED}, index),
            dispatch)


const Games = (props) => {
    console.log(props);
    const resultElements = props.games.map((game, index) => {
        if (game.name === 'number') {
            return (
                <NumberGameContainer id={game.id} game={game} key={game.id}  {...gameDispatchProperties(index)(props.dispatch)}/>);
        } else if (game.name === 'word') {
            return (<WordGameContainer id={game.id} game={game} key={game.id}  {...gameDispatchProperties(index)(props.dispatch)}/>);
        }
    });
    return (
        <div>
            <h2>Games</h2>
            <div className='flexbox-container result-list'>{resultElements}</div>
        </div>
    );
};

// Games.propTypes = {
//     games: React.PropTypes.arrayOf(React.PropTypes.shape({
//         id: React.PropTypes.number,
//         name: React.PropTypes.string,
//     })).isRequired
// };

export default Games;
