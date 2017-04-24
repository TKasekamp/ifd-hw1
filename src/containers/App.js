import React, {Component} from 'react';
import GamesContainer from './GamesContainer';
import ConnectFormContainer from './ConnectFormContainer';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='app'>
                <h1>Game lobby</h1>
                <ConnectFormContainer/>
                <GamesContainer />
            </div>
        );
    }
}

export default App;
