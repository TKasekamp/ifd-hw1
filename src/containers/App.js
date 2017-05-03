import React, {Component} from 'react';
import {ConnectedRouter} from 'connected-react-router';
import {Route} from 'react-router-dom';
import CreateGameContainer from './CreateGameContainer';
import PlayersContainer from './PlayersContainer';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ConnectedRouter history={this.props.history}>
                <div className='app'>
                    <h1>Game lobby</h1>
                    <Route path="/createGame" component={CreateGameContainer}/>
                    <Route path="/players" component={PlayersContainer}/>
                </div>
            </ConnectedRouter>
        );
    }
}

App.propTypes = {
    history: React.PropTypes.object.isRequired
};

export default App;
