import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

// import the Router component
import history from "./history";
import { Router } from "react-router-dom";

// import the App component
import App from "./App";

import initial from './data/initial';
import reducer from './data/reducer';

// create some dummy articles
// store them in an object
// so that we can easily reference each one by its id

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, 
              initial,
              composeEnhancers(applyMiddleware(thunk)));

// wrap the app in Router
// pass our articles through to App using props
ReactDOM.render(
    <Provider store={store}>
        <Router history={ history }>
            <App articles={ store.getState().articles } />
        </Router>
    </Provider>,
    document.getElementById("root"),
);
