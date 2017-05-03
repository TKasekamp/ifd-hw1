import React, {Component} from 'react';
import GamesContainer from './GamesContainer';
import HeaderContainer from './HeaderContainer';
import {ConnectedRouter} from 'connected-react-router';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ConnectedRouter history={this.props.history}>
            <div className='app'>
                <h1>Game lobby</h1>
                <HeaderContainer/>
                <GamesContainer />
            </div>
            </ConnectedRouter>
        );
    }
}

App.propTypes = {
    history: React.PropTypes.object.isRequired
};

export default App;
