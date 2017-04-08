import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './containers/App';
import reducer from './reducers';

let store = createStore(
    reducer,
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
