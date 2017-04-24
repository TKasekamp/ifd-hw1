import React, {Component} from 'react';
import GamesContainer from './GamesContainer';
import HeaderContainer from './HeaderContainer';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='app'>
                <h1>Game lobby</h1>
                <HeaderContainer/>
                <GamesContainer />
            </div>
        );
    }
}

export default App;
