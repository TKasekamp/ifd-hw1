import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';

import gameServerMiddleware from './middlewares/GameServerMiddleware';
import webSocketMiddleware from './middlewares/WebSocketMiddleware';
import App from './containers/App';
import reducer from './reducers';
import {createBrowserHistory} from 'history';
import {connectRouter, routerMiddleware} from 'connected-react-router';

const composeStoreEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create a abstraction over DOM history API which will be passed both to React
// Router and Redux.
const history = createBrowserHistory();

let store = createStore(
    connectRouter(history)(reducer),
    composeStoreEnhancers(
        applyMiddleware(
            routerMiddleware(history), // Integrate history actions with history API
            thunk,
            gameServerMiddleware,
            webSocketMiddleware
        )
    )
);

ReactDOM.render(
    <Provider store={store}>
        <App history={history}/>
    </Provider>,
    document.getElementById('root')
);
