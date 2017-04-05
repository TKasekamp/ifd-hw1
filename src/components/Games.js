import React from 'react';
import NumberGameContainer from '../containters/NumberGameContainer';
import WordGameContainer from '../containters/WordGameContainer';


const Games = (props) => {
    console.log(props);
    const resultElements = props.games.map((game, index) => {
        if (game.name === 'number') {
            return (
                <NumberGameContainer game={game} key={index}/>);
        } else if (game.name === 'word') {
            return (<WordGameContainer game={game} key={index}/>);
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
