import React, {Component} from 'react';
import ButtonContainer from './ButtonContainer';
import GamesContainer from './GamesContainer';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='app'>
                <h1>Game lobby</h1>
                <ButtonContainer />
                <GamesContainer />
            </div>
        );
    }
}

export default App;
