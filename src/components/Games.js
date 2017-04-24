import React from 'react';
import NumberGameContainer from '../containers/NumberGameContainer';
import WordGameContainer from '../containers/WordGameContainer';
import ButtonContainer from '../containers/ButtonContainer';


const Games = (props) => {
    if (!props.connected) {
        return <div></div>;
    }
    const resultElements = props.games.map((game, index) => {
        if (game.type === 'guess_number') {
            return (
                <NumberGameContainer game={game} key={index}/>);
        } else if (game.type === 'guess_word') {
            return (<WordGameContainer game={game} key={index}/>);
        }
    });
    return (
        <div>
            <ButtonContainer />
            <h2>Games</h2>
            <div className='flexbox-container result-list'>{resultElements}</div>
        </div>
    );
};

Games.propTypes = {
    games: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.string.isRequired,
        type: React.PropTypes.string.isRequired,
        status: React.PropTypes.string.isRequired,
        moves: React.PropTypes.array.isRequired,
        inFlight: React.PropTypes.string.isRequired,
    })).isRequired,
    connected: React.PropTypes.bool.isRequired
};

export default Games;
