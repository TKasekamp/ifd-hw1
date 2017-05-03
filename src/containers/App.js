import React, {Component} from 'react';
import {ConnectedRouter} from 'connected-react-router';
import {Route} from 'react-router-dom';
import CreateGameContainer from './CreateGameContainer';
import PlayersContainer from './PlayersContainer';
import GameListContainer from './GameListContainer';
import GameContainer from './GameContainer';
import NavBar from '../components/NavBar';

const GamesNotFinished = () => (
    <div>
        <GameListContainer showFinished={false}/>
    </div>
);

const GamesFinished = () => (
    <div>
        <GameListContainer showFinished={true}/>
    </div>
);

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ConnectedRouter history={this.props.history}>
                <div className='app'>
                    <NavBar/>
                    <h1>Game lobby</h1>
                    <Route path="/createGame" component={CreateGameContainer}/>
                    <Route path="/players" component={PlayersContainer}/>
                    <Route path="/ongoingGames" component={GamesNotFinished}/>
                    <Route path="/finishedGames" component={GamesFinished}/>
                    <Route path="/games/:gameId" component={GameContainer}/>
                </div>
            </ConnectedRouter>
        );
    }
}

App.propTypes = {
    history: React.PropTypes.object.isRequired
};

export default App;
