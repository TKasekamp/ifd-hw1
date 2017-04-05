import React, {Component} from 'react';
import Games from '../components/Games';
import ButtonContainer from './ButtonContainer';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastGameId: 0,
            games: []
        };
    }

    newGame(name) {
        const newGameId = this.state.lastGameId + 1;
        this.setState({
            games: this.state.games.concat({name: name, id: newGameId}),
            lastGameId: newGameId
        });
    }

    render() {
        return (
            <div className='app'>
                <h1>Game lobby</h1>
                <ButtonContainer />

                <Games games={this.state.games}/>
            </div>
        );
    }
}

export default App;
