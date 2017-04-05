import React, {Component} from 'react';
import {NumberGame} from '../NumberGame';
import NumberGuessForm from '../components/NumberGuessForm';
import NumberResultList from '../components/NumberResultList';
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

export default NumberGameContainer;
