import React, {Component} from 'react';
import NumberGuessFormContainer from './NumberGuessFormContainer';
import NumberResultList from '../components/NumberResultList';

class NumberGameContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='app'>
                <h3>Number game</h3>
                <NumberGuessFormContainer id={this.props.game.id} status={this.props.game.status}/>
                <NumberResultList moves={this.props.game.moves}/>
            </div>
        );
    }
}

NumberGameContainer.propTypes = {
    game: React.PropTypes.shape({
        id: React.PropTypes.number,
        name: React.PropTypes.string,
        status: React.PropTypes.string,
        moves: React.PropTypes.array,
        targetNumber: React.PropTypes.number
    }).isRequired
};

export default NumberGameContainer;
