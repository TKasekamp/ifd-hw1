import React, {Component} from 'react';
import NumberGuessFormContainer from './NumberGuessFormContainer';
import NumberListContainer from './NumberListContainer';

class NumberGameContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='app'>
                <h3>Number game</h3>
                <NumberGuessFormContainer id={this.props.game.id} gameOver={this.props.game.gameOver}/>
                <NumberListContainer results={this.props.game.results}/>
            </div>
        );
    }
}

NumberGameContainer.propTypes = {
    game: React.PropTypes.shape({
        id: React.PropTypes.number,
        name: React.PropTypes.string,
        gameOver: React.PropTypes.bool,
        results: React.PropTypes.array,
        targetNumber: React.PropTypes.number
    }).isRequired
};

export default NumberGameContainer;
